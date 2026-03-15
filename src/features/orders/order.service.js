import Order from "./order.model.js"
import Product from "../products/product.model.js"
import {io} from "../../../server.js"

export const createOrderService  = async ({ userId, items, shippingAddress, paymentMethod, notes, shippingCost = 0 }) => {
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
    if (product.stock < item.quantity) throw { 
        status: 400, 
        message: "Not enough stock" 
    }

    orderItems.push({
        product: product._id,
        name: product.name,
        price: product.price,
        quantity: item.quantity
    })

    totalItemsPrice += (product.price * item.quantity).toFixed(2)
    product.stock -= item.quantity
    await product.save()
    }

    const totalPrice = totalItemsPrice + Number(shippingCost || 0)

    const createdOrder = await Order.create({
        userId, items: orderItems, shippingAddress,
        totalPrice, shippingCost, paymentMethod,
        paymentStatus: "pending", orderStatus: "pending",
        notes: notes || ""
    })

// Socket.IO events
    io.emit("order-created", { orderId: createdOrder._id })
    for (const item of orderItems) {
        const updatedProduct = await Product.findById(item.product)
        io.to(String(item.product)).emit("stock-updated", { productId: item.product, newStock: updatedProduct.stock })
        if (updatedProduct.stock === 0)
            io.to(String(item.product)).emit("product-out-of-stock", { productId: item.product })
    }
return createdOrder
}

export const getMyOrdersService  = async ({ userId }) => {
        const orders = await Order.find({ userId }).sort({ createdAt: -1 }).lean();

        if (orders.length === 0) 
            return null

        const commonInfo = {
            shippingAddress: orders[0].shippingAddress,
            paymentMethod: orders[0].paymentMethod,
            paymentStatus: orders[0].paymentStatus
        }

        let totalItemsCount = 0
        let grandTotal = 0
        let allItems = []

        orders.forEach(order => {
          order.items.forEach(item => {
            totalItemsCount += item.quantity})
            grandTotal += order.totalPrice
            allItems = allItems.concat(order.items)
        })

        return {
            summary: commonInfo,
            items: allItems,
            totalProducts: allItems.length,
            totalItemsCount,
            grandTotal: Number(grandTotal.toFixed(2))
        }
}


export const getOrderByIdService  = async ({ id }) => {
    const order = await Order.findById(id)
    if (!order) throw { 
        status: 404, 
        message: "Order not found" 
    }
    return order
}

export const getAllOrdersService  = async () => {
    return await Order.find({})
      .populate("userId", "name email") 
      .sort({ createdAt: -1 })
}

export const updateOrderStatusService = async ({ id, orderStatus, trackingNumber }) => {
    const order = await Order.findByIdAndUpdate(
        id, 
        { orderStatus, trackingNumber },
        { new: true, runValidators: true }
    )
    if (!order) throw { 
        status: 404, 
        message: "Order not found" 
    }
    return order
}

export const cancelOrderService = async ({ id }) => {
    const order = await Order.findById(id)

    if (!order) throw {
        status: 404, 
        message: "Order not found" 
    }
    for (const item of order.items) {
      await Product.findByIdAndUpdate(item.product, { 
        $inc: { stock: item.quantity } 
      })
    }

    if (order.orderStatus !== "pending") throw {
        status: 400,
        message: "Only pending orders can be cancelled"
    }
    await Order.findByIdAndDelete(id)
    return true
}