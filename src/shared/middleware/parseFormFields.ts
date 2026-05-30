import { Request, Response, NextFunction } from "express"

const PLACEHOLDER_IMAGE_URL = "https://placeholder.com"

const hasUploadedFiles = (req: Request): boolean => {
  if (req.file) return true

  const files = req.files
  if (!files) return false

  if (Array.isArray(files)) return files.length > 0

  const fieldFiles = files as Record<string, Express.Multer.File[]>
  return Boolean(fieldFiles.image?.length || fieldFiles.images?.length)
}

export const parseFormFields = (req: Request, _res: Response, next: NextFunction) => {
  if (req.body.variants && typeof req.body.variants === "string") {
    req.body.variants = JSON.parse(req.body.variants)
  }

  if (req.body.images && typeof req.body.images === "string") {
    req.body.images = JSON.parse(req.body.images)
  }

  if (hasUploadedFiles(req) && !req.body.mainImage) {
    req.body.mainImage = PLACEHOLDER_IMAGE_URL
  }

  next()
}