import express from "express"
import { authMiddleware } from "../../shared/middleware/authMIddleware.js"
import { isAdmin } from "../../shared/middleware/isAdmin.js"
import { upload } from "../../config/multer.js"
import { validateRequest } from "../../shared/middleware/validateRequest.js"
import {
  createProductSchema,
  updateProductSchema,
  ratingSchema,
} from "./product.schemas.js"
import {
  getAllProducts,
  getProductById,
  getProductByCategory,
  createNewProduct,
  updateProduct,
  deleteProduct,
  addRating,
} from "./product.controller.js"

const router = express.Router()

router.get("/", getAllProducts)
router.get("/:id", getProductById)
router.get("/category/:category", getProductByCategory)

router.post("/", authMiddleware, isAdmin, upload.single("image"), validateRequest(createProductSchema, "body"), createNewProduct)

router.put("/:id", authMiddleware, isAdmin, validateRequest(updateProductSchema, "body"), updateProduct)

router.delete("/:id", authMiddleware, isAdmin, deleteProduct)

router.post("/:id/rating", authMiddleware, validateRequest(ratingSchema, "body"), addRating)

export default router