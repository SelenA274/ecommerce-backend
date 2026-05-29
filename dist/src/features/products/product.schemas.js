import Joi from "joi";
import { ALL_SUBCATEGORIES, DEPARTMENTS, VARIANT_KINDS, } from "./product.constants.js";
const colorVariantSchema = Joi.object({
    colorName: Joi.string().min(1).max(100).required(),
    colorCode: Joi.string().pattern(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/).required(),
    stock: Joi.number().integer().min(0).required(),
    sku: Joi.string().max(50),
});
const sizeVariantSchema = Joi.object({
    sizeLabel: Joi.string().min(1).max(50).required(),
    stock: Joi.number().integer().min(0).required(),
    sku: Joi.string().max(50),
    price: Joi.number().positive(),
});
export const createProductSchema = Joi.object({
    name: Joi.string().min(2).max(200).required(),
    brand: Joi.string().min(1).max(100).required(),
    description: Joi.string().min(10).max(2000).required(),
    price: Joi.number().positive().required(),
    department: Joi.string().valid(...DEPARTMENTS).required(),
    subcategory: Joi.string().valid(...ALL_SUBCATEGORIES).required(),
    mainImage: Joi.string().uri().required(),
    images: Joi.array().items(Joi.string().uri()).min(1),
    variantKind: Joi.string().valid(...VARIANT_KINDS).required(),
    variants: Joi.when("variantKind", {
        is: "color",
        then: Joi.array().items(colorVariantSchema).min(1).required(),
        otherwise: Joi.array().items(sizeVariantSchema).min(1).required(),
    }),
    isActive: Joi.boolean(),
}).options({ stripUnknown: true });
export const updateProductSchema = Joi.object({
    name: Joi.string().min(2).max(200),
    brand: Joi.string().min(1).max(100),
    description: Joi.string().min(10).max(2000),
    price: Joi.number().positive(),
    department: Joi.string().valid(...DEPARTMENTS),
    subcategory: Joi.string().valid(...ALL_SUBCATEGORIES),
    mainImage: Joi.string().uri(),
    images: Joi.array().items(Joi.string().uri()).min(1),
    variantKind: Joi.string().valid(...VARIANT_KINDS),
    variants: Joi.array().min(1),
    isActive: Joi.boolean(),
}).options({ stripUnknown: true });
export const ratingSchema = Joi.object({
    rating: Joi.number().min(1).max(5).required(),
    comment: Joi.string().max(500),
}).options({ stripUnknown: true });
//# sourceMappingURL=product.schemas.js.map