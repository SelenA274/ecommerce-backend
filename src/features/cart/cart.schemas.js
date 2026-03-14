import Joi from "joi"

export const addToCartSchema = Joi.object({
  productId: Joi.string().length(24).hex().required(),
  quantity: Joi.number().integer().min(1).required(),
}).options({ stripUnknown: true })

export const updateCartQtySchema = Joi.object({
  quantity: Joi.number().integer().min(1).required(),
}).options({ stripUnknown: true })

export const syncCartSchema = Joi.object({
  items: Joi.array()
    .items(
      Joi.object({
        productId: Joi.string().length(24).hex().required(),
        quantity: Joi.number().integer().min(1).required(),
      })
    )
    .required(),
}).options({ stripUnknown: true })