import { Document, Types } from "mongoose";
import {
  Department,
  ProductSubcategory,
  VariantKind,
} from "../features/products/product.constants.js";

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

export interface IColorVariant {
  _id?: Types.ObjectId;
  colorName: string;
  colorCode: string;
  stock: number;
  sku?: string;
}

export interface ISizeVariant {
  _id?: Types.ObjectId;
  sizeLabel: string;
  stock: number;
  sku?: string;
  price?: number;
}

export interface IProduct extends Document {
  _id: Types.ObjectId;
  name: string;
  brand: string;
  description: string;
  price: number;
  department: Department;
  subcategory: ProductSubcategory;
  mainImage: string;
  images: string[];
  imagePublicId?: string | null;
  variantKind: VariantKind;
  variants: IColorVariant[] | ISizeVariant[];
  sold: number;
  isActive: boolean;
  ratings: Types.DocumentArray<IRatingDocument>;
  averageRating: number;
  totalStock: number;
  calculateAverageRating(): void;
  createdAt: Date;
  updatedAt: Date;
}

export type ProductSeedInput = Omit<
  IProduct,
  | keyof Document
  | "_id"
  | "ratings"
  | "averageRating"
  | "sold"
  | "isActive"
  | "totalStock"
  | "calculateAverageRating"
  | "createdAt"
  | "updatedAt"
  | "imagePublicId"
> & {
  sold?: number;
  isActive?: boolean;
};
