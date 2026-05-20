import { Document, Types } from "mongoose";
export interface IRating {
    user: Types.ObjectId;
    rating: number;
    comment?: string;
    createdAt: Date;
    updatedAt: Date;
}
export interface IRatingDocument extends IRating {
    _id: Types.ObjectId;
}
export interface IProduct extends Document {
    _id: Types.ObjectId;
    name: string;
    description: string;
    price: number;
    category: "electronics" | "food" | "beauty" | "sports" | "books" | "toys" | "clothing";
    images: string[];
    imagePublicId?: string | null;
    stock: number;
    sold: number;
    isActive: boolean;
    ratings: Types.DocumentArray<IRatingDocument>;
    averageRating: number;
    calculateAverageRating(): void;
    createdAt: Date;
    updatedAt: Date;
}
//# sourceMappingURL=product.types.d.ts.map