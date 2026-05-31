import { Request, Response, NextFunction } from "express"

export const errorHandler = (err: any, req: Request, res: Response, next: NextFunction) => {
  if (err.name === "ValidationError") {
    return res.status(400).json({
      success: false,
      message: "Validation error",
      errors: Object.values(err.errors).map((e: any) => ({
        field: e.path,
        message: e.message,
      })),
    })
  }

  if (err.name === "CastError") {
    return res.status(404).json({
      success: false,
      message: "Resource not found",
    })
  }

  if (err.code === 11000) {
    const field = Object.keys(err.keyValue)[0]
    return res.status(409).json({
      success: false,
      message: `${field} already exists`,
    })
  }

  if (err.name === "JsonWebTokenError") {
    return res.status(401).json({ success: false, message: "Invalid token" })
  }
  if (err.name === "TokenExpiredError") {
    return res.status(401).json({ success: false, message: "Token expired" })
  }

  if (err.status) {
    return res.status(err.status).json({
      success: false,
      message: err.message,
    })
  }

  const isDev = process.env.NODE_ENV === "development"
  res.status(500).json({
    success: false,
    message: isDev ? err.message : "Internal server error",
    ...(isDev && { stack: err.stack }),
  })
}