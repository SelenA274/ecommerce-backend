import Joi from "joi"

export const objectIdSchema = Joi.object({
  id: Joi.string().length(24).hex().required(),
})