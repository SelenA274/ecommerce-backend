import mongoose, { Schema, Model } from "mongoose";
import bcrypt from "bcrypt";
import { IUser, IAddress, ICartItem } from "../../types/user.types.js";

const addressSchema = new Schema<IAddress>({
  city: { 
    type: String, 
    required: true 
  },
  street: { 
    type: String, 
    required: true 
  },
  zipCode: { 
    type: String, 
    required: true 
  },
  country: { 
    type: String, 
    required: true 
  },
});

const cartItemSchema = new Schema<ICartItem>(
  {
    product: {
      type: Schema.Types.ObjectId,
      ref: "Product",
      required: true,
    },
    quantity: { type: Number, required: true, min: 1 },
  },
  { _id: false }
);

const userSchema = new Schema<IUser>(
  {
    name: { type: String, required: true, trim: true, minlength: 2 },
    email: {
      type: String,
      required: [true, "Email is a required field."],
      unique: true,
      lowercase: true,
    },
    password: {
      type: String, 
      required: true, 
      minlength: 8, 
      select: false 
    },
    role: { 
      type: String, 
      enum: ["customer", "admin"], 
      default: "customer" 
    },
    isVerified: { 
      type: Boolean, 
      default: false, 
      select: false 
    },
    verificationToken: { 
      type: String, 
      default: null, 
      select: false 
    },
    verificationTokenExpiry: { 
      type: Date, 
      default: null, 
      select: false 
    },
    resetPasswordToken: { 
      type: String, 
      default: null, 
      select: false 
    },
    resetPasswordExpiry: { 
      type: Date, 
      default: null, 
      select: false 
    },
    twoFactorCode: { 
      type: String, 
      default: null, 
      select: false 
    },
    twoFactorExpiry: { 
      type: Date, 
      default: null, 
      select: false 
    },
    addresses: { 
      type: [addressSchema], 
      default: [] 
    },
    cart: { 
      type: [cartItemSchema], 
      default: [] 
    },
  },
  { timestamps: true }
);

userSchema.pre("save", async function () {
  if (!this.isModified("password")) return;
  this.password = await bcrypt.hash(this.password, 10);
});

export const User: Model<IUser> = mongoose.model<IUser>("User", userSchema);
export default User;