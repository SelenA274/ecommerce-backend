import { Document, Types } from "mongoose";

export interface IAddress {
  city: string;
  street: string;
  zipCode: string;
  country: string;
}

export interface IAddressDocument extends IAddress {
  _id: Types.ObjectId;
  id: string;
}

export interface ICartItem {
  product: Types.ObjectId;
  quantity: number;
}

export interface IUser extends Document {
  _id: Types.ObjectId;
  name: string;
  email: string;
  password: string;
  role: "customer" | "admin";
  isVerified: boolean;
  verificationToken?: string | null;
  verificationTokenExpiry?: Date | null;
  resetPasswordToken?: string | null;
  resetPasswordExpiry?: Date | null;
  twoFactorCode?: string | null;
  twoFactorExpiry?: Date | null;
  addresses: Types.DocumentArray<IAddressDocument>;
  cart: ICartItem[];
  createdAt: Date;
  updatedAt: Date;
}