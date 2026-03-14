export function validateRequest(schema, property) {
  return async (req, res, next) => {
    try {
      const value = req[property]
      const validated = await schema.validateAsync(value, {
        abortEarly: false,
        stripUnknown: true,
      })
      req[property] = validated
      next()
    } catch (error) {
      if (error.details && Array.isArray(error.details)) {
        const errors = error.details.map((detail) => ({
          field: detail.path.join("."),
          message: detail.message,
        }))
        return res.status(400).json({
          success: false,
          message: "Validation error",
          errors,
        })
      }
      next(error)
    }
  }
}