import Joi from "joi"

export const createProductSchema = Joi.object({
  name: Joi.string().min(2).max(200).required(),
  description: Joi.string().min(10).max(2000).required(),
  price: Joi.number().positive().required(),
  category: Joi.string()
    .valid("electronics", "clothing", "food", "books", "other")
    .required(),
  stock: Joi.number().integer().min(0).required(),
}).options({ stripUnknown: true })

export const updateProductSchema = Joi.object({
  name: Joi.string().min(2).max(200),
  description: Joi.string().min(10).max(2000),
  price: Joi.number().positive(),
  category: Joi.string().valid("electronics", "clothing", "food", "books", "other"),
  stock: Joi.number().integer().min(0),
  isActive: Joi.boolean(),
}).options({ stripUnknown: true })

export const ratingSchema = Joi.object({
  rating: Joi.number().min(1).max(5).required(),
  comment: Joi.string().max(500),
}).options({ stripUnknown: true })