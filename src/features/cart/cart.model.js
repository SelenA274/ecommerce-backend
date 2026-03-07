import mongoose from "mongoose"

export const cartSchema = new mongoose.Schema(
    {
        userId : {
            type : mongoose.Schema.Types.ObjectId,
            ref : "User",
            required : true
        },
        items : [
        {
            product : {
                type :mongoose.Schema.Types.ObjectId,
                ref : "Product"
            },
            quantity : {
                type : Number ,
                default : 1
            }
        }
    ]

})

export const Cart = mongoose.model("Cart", cartSchema)