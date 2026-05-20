import { ICart, ICartItem } from "../../types/cart.types.js";
import mongoose, { Schema, Model } from "mongoose";

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

export const Cart: Model<ICart> = mongoose.model<ICart>("Cart", cartSchema);
