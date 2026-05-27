import mongoose from "mongoose";
import {
  ALL_SUBCATEGORIES,
  DEPARTMENTS,
  isSubcategoryValid,
  VARIANT_KINDS,
} from "./product.constants.js";
import { IColorVariant, IProduct, IRating, ISizeVariant } from "../../types/product.types.js";

const RatingSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    rating: {
      type: Number,
      required: true,
      min: 1,
      max: 5,
    },
    comment: {
      type: String,
    },
  },
  { timestamps: true }
);

const ColorVariantSchema = new mongoose.Schema<IColorVariant>(
  {
    colorName: { type: String, required: true, trim: true },
    colorCode: { type: String, required: true, trim: true },
    stock: { type: Number, required: true, min: 0, default: 0 },
    sku: { type: String, trim: true },
  },
  { _id: true }
);

const SizeVariantSchema = new mongoose.Schema<ISizeVariant>(
  {
    sizeLabel: { type: String, required: true, trim: true },
    stock: { type: Number, required: true, min: 0, default: 0 },
    sku: { type: String, trim: true },
    price: { type: Number, min: 0 },
  },
  { _id: true }
);

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    brand: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    price: {
      type: Number,
      required: true,
      min: 0,
    },
    department: {
      type: String,
      required: true,
      enum: { values: DEPARTMENTS },
    },
    subcategory: {
      type: String,
      required: true,
      enum: { values: ALL_SUBCATEGORIES },
    },
    mainImage: {
      type: String,
      required: true,
    },
    images: {
      type: [String],
      required: true,
      default: [],
    },
    imagePublicId: {
      type: String,
      default: null,
    },
    variantKind: {
      type: String,
      required: true,
      enum: { values: VARIANT_KINDS },
    },
    variants: {
      type: [mongoose.Schema.Types.Mixed],
      required: true,
      validate: {
        validator(value: unknown[]) {
          return Array.isArray(value) && value.length > 0;
        },
        message: "At least one variant is required",
      },
    },
    sold: {
      type: Number,
      default: 0,
      min: 0,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
    ratings: {
      type: [RatingSchema],
      default: [],
    },
    averageRating: {
      type: Number,
      default: 0,
      min: 0,
      max: 5,
    },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

productSchema.virtual("totalStock").get(function (this: IProduct) {
  return this.variants.reduce(
    (sum, variant) => sum + (variant.stock ?? 0),
    0
  );
});

productSchema.methods.calculateAverageRating = function (this: IProduct) {
  if (this.ratings.length === 0) {
    this.averageRating = 0;
    return;
  }
  const sum = this.ratings.reduce(
    (acc: number, item: IRating) => acc + item.rating,
    0
  );
  this.averageRating = Number((sum / this.ratings.length).toFixed(2));
};

productSchema.pre("validate", function (this: IProduct) {
  if (!isSubcategoryValid(this.department, this.subcategory)) {
    this.invalidate(
      "subcategory",
      `Subcategory "${this.subcategory}" is not valid for department "${this.department}"`
    );
    return;
  }

  if (!Array.isArray(this.variants) || this.variants.length === 0) {
    return;
  }

  if (this.variantKind === "color") {
    const colorVariants = this.variants as IColorVariant[];
    const invalid = colorVariants.some(
      (v) => !v.colorName || !v.colorCode || v.stock == null
    );
    if (invalid) {
      this.invalidate(
        "variants",
        "Color variants require colorName, colorCode, and stock"
      );
    }
    return;
  }

  const sizeVariants = this.variants as ISizeVariant[];
  const invalid = sizeVariants.some((v) => !v.sizeLabel || v.stock == null);
  if (invalid) {
    this.invalidate(
      "variants",
      "Size variants require sizeLabel and stock"
    );
  }
});

productSchema.pre("save", function (this: IProduct) {
  if (!this.images?.length && this.mainImage) {
    this.images = [this.mainImage];
  } else if (this.mainImage && !this.images.includes(this.mainImage)) {
    this.images = [this.mainImage, ...this.images];
  }
  this.calculateAverageRating();
});

export const Product = mongoose.model<IProduct>("Product", productSchema);

export default Product;
