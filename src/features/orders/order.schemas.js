import Joi from "joi"

export const createOrderSchema = Joi.object({
  items: Joi.array()
    .items(
      Joi.object({
        product: Joi.string().length(24).hex().required(),
        quantity: Joi.number().integer().min(1).required(),
      })
    )
    .min(1)
    .required(),
    shippingAddress: Joi.object({
      fullName: Joi.string().required(),
      phone: Joi.string().required(),
      street: Joi.string().required(),
      city: Joi.string().required(),
      zipCode: Joi.string().required(),
      country: Joi.string().required(),
  }).required(),
  paymentMethod: Joi.string()
    .valid("credit", "paypal", "simulated")
    .required(),
  notes: Joi.string().max(500),
}).options({ stripUnknown: true })

export const updateOrderStatusSchema = Joi.object({
  orderStatus: Joi.string()
    .valid("pending", "processing", "shipped", "delivered", "cancelled")
    .required(),
  trackingNumber: Joi.string(),
}).options({ stripUnknown: true })