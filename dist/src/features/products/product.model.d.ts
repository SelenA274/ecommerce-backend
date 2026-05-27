import mongoose from "mongoose";
import { IProduct } from "../../types/product.types.js";
export declare const Product: mongoose.Model<IProduct, {}, {}, {}, mongoose.Document<unknown, {}, IProduct, {}, mongoose.DefaultSchemaOptions> & IProduct & Required<{
    _id: mongoose.Types.ObjectId;
}> & {
    __v: number;
} & {
    id: string;
}, any, IProduct>;
export default Product;
//# sourceMappingURL=product.model.d.ts.map