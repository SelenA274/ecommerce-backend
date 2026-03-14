import Joi from "joi"

export const updateProfileSchema = Joi.object({
  name: Joi.string().min(2).max(50).trim(),
  email: Joi.string().email(),
}).options({ stripUnknown: true })

export const changePasswordSchema = Joi.object({
  currentPassword: Joi.string().required(),
  newPassword: Joi.string().min(8).required(),
}).options({ stripUnknown: true })

export const addressSchema = Joi.object({
  street: Joi.string().required(),
  city: Joi.string().required(),
  zipCode: Joi.string().required(),
  country: Joi.string().required(),
}).options({ stripUnknown: true })