import Order from "./order.model.js"
import Product from "../products/product.model.js"
import {io} from "../../../server.js"

export const createOrder = async (req, res) => {
  const userId = req.user.id

  const {
    items,
    shippingAddress,
    paymentMethod,
    notes,
    shippingCost = 0
  } = req.body

  if (!Array.isArray(items) || items.length === 0) {
    return res.status(400).json({
      status: 400,
      message: "items is required",
      data: null
    })
  }

  if (!paymentMethod) {
    return res.status(400).json({
      status: 400,
      message: "paymentMethod is required",
      data: null
    })
  }

  if (!shippingAddress.fullName || !shippingAddress.phone || !shippingAddress.country || !shippingAddress.city) {
    return res.status(400).json({
      status: 400,
      message: "Missing shipping address fields",
      data: null
    })
  }

  try {
    let totalItemsPrice = 0
    const orderItems = []

    for (let i = 0; i < items.length; i++) {
      const item = items[i]

      if (!item.product || !item.quantity || item.quantity < 1) {
        return res.status(400).json({
          status: 400,
          message: "Invalid item",
          data: null
        })
      }

      const product = await Product.findById(item.product)
      if (!product) {
        return res.status(404).json({
          status: 404,
          message: "Product not found",
          data: null
        })
      }

      if (product.stock < item.quantity) {
        return res.status(400).json({
          status: 400,
          message: "Not enough stock",
          data: null
        })
      }

      orderItems.push({
        product: product._id,
        name: product.name,
        price: product.price,
        quantity: item.quantity
      })

      totalItemsPrice += product.price * item.quantity

      product.stock -= item.quantity
      await product.save()
    }

    const totalPrice = totalItemsPrice + Number(shippingCost || 0)

    const createdOrder = await Order.create({
      userId,
      items: orderItems,
      shippingAddress,
      totalPrice,
      shippingCost,
      paymentMethod,
      paymentStatus: "pending",
      orderStatus: "pending",
      notes: notes || ""
    })


    // إشعار للمنهل عن طلب جديد
io.emit("order-created", { orderId: createdOrder._id })

// تحديث المخزون لكل المشتركين
for (const item of orderItems) {
  const updatedProduct = await Product.findById(item.product)
  io.to(String(item.product)).emit("stock-updated", {
    productId: item.product,
    newStock: updatedProduct.stock
  })
  if (updatedProduct.stock === 0) {
    io.to(String(item.product)).emit("product-out-of-stock", {
      productId: item.product
    })
  }
}


    return res.status(201).json({
      status: 201,
      message: "Order created successfully",
      data: createdOrder
    })
  } catch (error) {
    console.log("the error issss : ", error)
    return res.status(500).json({
      status: 500,
      message: "Failed to create order",
      data: null
    })
  }
}

export const getMyOrders = async (req, res) => {
    try {
        const userId = req.user.id;
        const orders = await Order.find({ userId }).sort({ createdAt: -1 }).lean();

        if (orders.length === 0) {
            return res.status(200).json({ 
                status: 200, 
                message: "0 items", 
                data: {} 
            });
        }

        const commonInfo = {
            shippingAddress: orders[0].shippingAddress,
            paymentMethod: orders[0].paymentMethod,
            paymentStatus: orders[0].paymentStatus
        };
        let totalItemsCount = 0
        let grandTotal = 0
        let allItems = []

        orders.forEach(order => {
          order.items.forEach(item => {
            totalItemsCount += item.quantity
          })
            grandTotal += order.totalPrice
            allItems = allItems.concat(order.items)
        })

        return res.status(200).json({
            status: 200,
            data: {
                summary: commonInfo,
                items: allItems,
                totalProducts : allItems.length, 
                totalItemsCount :totalItemsCount,
                grandTotal: Number(grandTotal.toFixed(2))
            }
        })

    } catch (error) {
        return res.status(500).json({
            status: 500,
            message: "Failed to fetch orders",
            data: null
          })
    }
}


export const getOrderById = async (req, res) => {
  try {
    const { id } = req.params
    const order = await Order.findById(id)
     res.status(200).json({
     status: 200,
     message: "order fetched successfully",
     data: order,
   });
 } catch (error) {
  //  console.log("error : ",error)
   res.status(500).json({
     status: 500,
     message: "Error fetching order",
     data: null,
   })
 }
}

export const getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find({})
      .populate("userId", "name email") 
      .sort({ createdAt: -1 })
    res.status(200).json({
      status: 200,
      message: "All orders fetched successfully",
      count: orders.length,
      data: orders
    })
  } catch (error) {
    res.status(500).json({
      status: 500,
      message: "Error fetching all orders",
      error: error.message
    })
  }
}


export const updateOrderStatus = async (req, res) => {
  try {
    const { id } = req.params
    const { orderStatus, trackingNumber } = req.body
    const order = await Order.findByIdAndUpdate(
      id,
      { orderStatus, trackingNumber },
      { new: true, runValidators: true }
    )

    if (!order) {
      return res.status(404).json({ status: 404, message: "Order not found" });
    }

    res.status(200).json({
      status: 200,
      message: "Order status updated",
      data: order
    })
  } catch (error) {
    res.status(500).json({
      status: 500,
      message: "Error updating orders",
    })
  }
}
export const cancelOrder = async (req, res) => {
  try {
    const { id } = req.params
    const order = await Order.findById(id)
    if (!order) {
      return res.status(404).json({ 
        status: 404, 
        message: "Order not found" 
      });
    }
    for (const item of order.items) {
      await Product.findByIdAndUpdate(item.product, { 
        $inc: { stock: item.quantity } 
      })
    }
    await Order.findByIdAndDelete(id)

    res.status(200).json({ 
      status: 200, 
      message: "Order deleted permanently and stock restored" 
    })

  } catch (error) {
    res.status(500).json({
      status: 500,
      message: "Error cancel order",
    })
  }
}