import { 
  createOrderService,
  getMyOrdersService,
  getOrderByIdService,
  getAllOrdersService,
  updateOrderStatusService,
  cancelOrderService
} from "./order.service.js"

export const createOrder = async (req, res) => {
  const {
    items,
    shippingAddress,
    paymentMethod,
    notes,
    shippingCost
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
    console.log("shippingAddress:", shippingAddress)
    return res.status(400).json({
      status: 400,
      message: "Missing shipping address fields",
      data: null
    })
  }

  try {
    const order = await createOrderService({ 
      userId: req.user.id, 
      items, shippingAddress, 
      paymentMethod, 
      notes, 
      shippingCost 
    })

    return res.status(201).json({
      status: 201,
      message: "Order created successfully",
      data: order
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
      const data = await getMyOrdersService({ userId: req.user.id })

        if (!data) {
            return res.status(200).json({ 
                status: 200, 
                message: "0 items", 
                data: {} 
            })
        }
        return res.status(201).json({
            status: 201,
            data: data
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
    const order = await getOrderByIdService({ id: req.params.id })
     res.status(200).json({
     status: 200,
     message: "order fetched successfully",
     data: order,
   })
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
    const orders = await getAllOrdersService()
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
    const order = await updateOrderStatusService({ 
      id: req.params.id, 
      orderStatus: req.body.orderStatus, 
      trackingNumber: req.body.trackingNumber })

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
    await cancelOrderService({ id: req.params.id })
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