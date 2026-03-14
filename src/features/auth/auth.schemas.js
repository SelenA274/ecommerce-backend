import Joi from "joi"

export const registerSchema = Joi.object({
  name: Joi.string().min(2).max(50).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(8).required(),
}).options({ stripUnknown: true })

export const loginSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
}).options({ stripUnknown: true })

export const forgotPasswordSchema = Joi.object({
  email: Joi.string().email().required(),
}).options({ stripUnknown: true })

export const resetPasswordSchema = Joi.object({
  password: Joi.string().min(8).required(),
}).options({ stripUnknown: true })

export const adminLoginSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
}).options({ stripUnknown: true })

export const verify2faSchema = Joi.object({
  email: Joi.string().email().required(),
  code: Joi.string().length(6).required(),
}).options({ stripUnknown: true })