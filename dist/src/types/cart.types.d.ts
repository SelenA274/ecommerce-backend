import { Document, Types } from "mongoose";
export interface ICartItem {
    product: Types.ObjectId & {
        name?: string;
        price?: number;
        images?: string[];
        stock?: number;
        isActive?: boolean;
    };
    quantity: number;
}
export interface ICart extends Document {
    _id: Types.ObjectId;
    userId: Types.ObjectId;
    items: Types.DocumentArray<ICartItem & Document>;
}
//# sourceMappingURL=cart.types.d.ts.map