import Order from "./order.model.js"
import Product from "../products/product.model.js"
import { sendOrderConfirmationEmail } from "../../shared/utils/sendOrderConfirmationEmail.js"
import { sendOrderStatusUpdateEmail } from "../../shared/utils/sendOrderStatusUpdateEmail.js"
import User from "../users/user.model.js"

import {
    deductProductStock,
    getTotalStock,
    restoreProductStock,
} from "../products/product.utils.js"
import { io } from "../../config/socket.js"

type OrderItem = {
    product: string
    quantity: number
}
type ShippingAddress = {
    fullName: string
    phone: string
    country: string
    city: string
    street?: string
}
type PaymentMethod = "credit" | "paypal" | "simulated"
type OrderStatus = "pending" | "processing" | "shipped" | "delivered" | "cancelled"

export const createOrderService = async ({ userId, items, shippingAddress, paymentMethod, paymentResult, notes, shippingCost = 0 }: { userId: string; items: OrderItem[]; shippingAddress: ShippingAddress; paymentMethod: PaymentMethod; paymentResult?: "success" | "failure"; notes?: string; shippingCost?: number; }) => {
    if (paymentMethod === "simulated" && paymentResult === "failure") {
        throw {
            status: 402,
            message: "Payment failed. Order was not created.",
        }
    }

    const paymentStatus = paymentMethod === "simulated" ? "paid" : "pending"
    const orderStatus = paymentMethod === "simulated" ? "processing" : "pending"

    let totalItemsPrice = 0
    const orderItems = []

    for (const item of items) {
        if (!item.product || !item.quantity || item.quantity < 1)
            throw {
                status: 400,
                message: "Invalid item"
            }


        const product = await Product.findById(item.product)
        if (!product) throw {
            status: 404,
            message: "Product not found"
        }
        if (getTotalStock(product) < item.quantity) throw {
            status: 400,
            message: "Not enough stock"
        }

        orderItems.push({
            product: product._id,
            name: product.name,
            price: product.price,
            quantity: item.quantity,
            image: product.mainImage,
        })

        totalItemsPrice += (product.price * item.quantity)
        deductProductStock(product, item.quantity)
        await product.save()
    }

    const totalPrice = totalItemsPrice + Number(shippingCost || 0)

    const createdOrder = await Order.create({
        userId, items: orderItems, shippingAddress,
        totalPrice, shippingCost, paymentMethod,
        paymentStatus, orderStatus,
        notes: notes || ""
    })
    const user = await User.findById(userId).select("email")
    if (user?.email) {
        sendOrderConfirmationEmail(
            user.email,
            String(createdOrder._id),
            orderItems,
            shippingAddress,
            totalPrice
        ).catch(console.error)
    }

    io.emit("order-created", { orderId: createdOrder._id })
    for (const item of orderItems) {
        const updatedProduct = await Product.findById(item.product)
        if (!updatedProduct) continue
        io.to(String(item.product)).emit("stock-updated", { productId: item.product, newStock: getTotalStock(updatedProduct) })
        if (getTotalStock(updatedProduct) === 0)
            io.to(String(item.product)).emit("product-out-of-stock", { productId: item.product })
    }
    return createdOrder
}

export const getMyOrdersService = async ({ userId }: { userId: string }) => {
    const orders = await Order.find({ userId }).sort({ createdAt: -1 }).lean()
    if (orders.length === 0) return null
    return orders
}


export const getOrderByIdService = async ({ id }: { id: string }) => {
    const order = await Order.findById(id)
    if (!order) throw {
        status: 404,
        message: "Order not found"
    }
    return order
}

export const getAllOrdersService = async () => {
    return await Order.find({})
        .populate("userId", "name email")
        .sort({ createdAt: -1 })
}

export const updateOrderStatusService = async ({ id, orderStatus, trackingNumber }: { id: string; orderStatus: OrderStatus; trackingNumber?: string; }) => {
    const order = await Order.findByIdAndUpdate(
        id,
        { orderStatus, trackingNumber },
        { new: true, runValidators: true }
    )
    if (!order) throw {
        status: 404,
        message: "Order not found"
    }

    const user = await User.findById(order.userId).select("email")
    if (user?.email) {
        sendOrderStatusUpdateEmail(
            user.email,
            String(order._id),
            orderStatus,
            trackingNumber
        ).catch(console.error)
    }

    return order
}

export const cancelOrderService = async ({ id }: { id: string }) => {
    const order = await Order.findById(id)

    if (!order) throw {
        status: 404,
        message: "Order not found"
    }
    if (order.orderStatus !== "pending") throw {
        status: 400,
        message: "Only pending orders can be cancelled"
    }
    for (const item of order.items) {
        const product = await Product.findById(item.product)
        if (!product) continue
        restoreProductStock(product, item.quantity)
        await product.save()
    }
    await Order.findByIdAndDelete(id)
    return true
}