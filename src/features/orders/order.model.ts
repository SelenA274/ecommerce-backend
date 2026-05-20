import mongoose from "mongoose"

export const addressSchema = new mongoose.Schema(
    {
      fullName: {
        type: String,
        required: true
    },
      phone: { 
        type: String, 
        required: true 
    },
      country: { 
        type: String, 
        required: true 
    },
      city: { 
        type: String, 
        required: true 
    },
      street: { 
        type: String
    }
    },
    { _id: false })


export const orderItemSchema = new mongoose.Schema(
    {
      product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
        required: true
    },
      name: {
        type: String,
        required: true
    },
      price: {
        type: Number,
        required: true,
        min: 0
    },
      quantity: {
        type: Number,
        required: true,
        min: 1 
    },
    image: {
      type: String
    }
    },
    { _id: false }
  )
 
const orderSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    items: {
        type: [orderItemSchema],
        required: true
    },
    shippingAddress: {
        type: addressSchema,
        required: true
    },
      totalPrice:{
        type: Number,
        required: true
    },
    shippingCost:{
        type: Number,
        default: 0
    },
    paymentMethod:{
        type: String,
        required: true,
        enum: ["credit","paypal","simulated"]
    },
    paymentStatus:{
        type: String,
        enum: ["pending","paid","failed"],
        default: "pending"
    },
    orderStatus:{
        type: String,
        enum: ["pending","processing","shipped","delivered","cancelled"]
    },
    trackingNumber:{
        type: String
    },
    notes: {
        type: String
    }
}, { timestamps: true
 })
 

 export const Order = mongoose.model("Order", orderSchema)

export default Order
 