import Joi from "joi"

const validate = (schema) => (req, res, next) => {
  const { error, value } = schema.validate(req.body, {
    abortEarly: false,
    stripUnknown: true,
  })

  if (error) {
    const errors = error.details.map((e) => ({
      field: e.path[0],
      message: e.message,
    }))
    return res.status(422).json({
      status: 422,
      message: "Validation failed",
      errors,
    })
  }

  req.body = value
  next()
}

export const registerSchema = Joi.object({
  name: Joi.string().min(2).max(50).trim().required(),
  email: Joi.string().email({ tlds: false }).lowercase().required(),
  password: Joi.string()
    .min(8)
    .max(128)
    .pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])/)
    .required(),
})

export const loginSchema = Joi.object({
  email: Joi.string().email({ tlds: false }).lowercase().required(),
  password: Joi.string().required(),
})

export const forgotPasswordSchema = Joi.object({
  email: Joi.string().email({ tlds: false }).lowercase().required(),
})

export const resetPasswordSchema = Joi.object({
  password: Joi.string()
    .min(8)
    .max(128)
    .pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])/)
    .required(),
})

export const adminLoginSchema = Joi.object({
  email: Joi.string().email({ tlds: false }).lowercase().required(),
  password: Joi.string().required(),
})

export const verify2faSchema = Joi.object({
  email: Joi.string().email({ tlds: false }).lowercase().required(),
  code: Joi.string().length(6).required(),
})

export default validate