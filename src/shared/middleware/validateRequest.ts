import { Request, Response, NextFunction } from "express";
import { ObjectSchema } from "joi";

type Property = "body" | "query" | "params";

export function validateRequest(schema: ObjectSchema, property: Property) {
  return async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const validated = await schema.validateAsync(req[property], {
        abortEarly: false,
        stripUnknown: true,
      });
      req[property] = validated;
      next();
    } catch (error) {
      const err = error as { details?: Array<{ path: string[]; message: string }> };
      if (err.details && Array.isArray(err.details)) {
        res.status(400).json({
          success: false,
          message: "Validation error",
          errors: err.details.map((detail) => ({
            field: detail.path.join("."),
            message: detail.message,
          })),
        });
        return;
      }
      next(error);
    }
  };
}