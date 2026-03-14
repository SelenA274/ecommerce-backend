import { authMiddleware } from "../../shared/middleware/authMIddleware.js"
import express from "express"
import { validateRequest } from "../../shared/middleware/validateRequest.js"
import {
  addToCartSchema,
  updateCartQtySchema,
  syncCartSchema,
} from "./cart.schemas.js"
import {
  addProductToCart,
  clearCart,
  deleteProduct,
  getCart,
  syncCart,
  updateProductQty,
} from "./cart.controller.js"

const router = express.Router()

router.get("/", authMiddleware, getCart)
router.post("/", authMiddleware, validateRequest(addToCartSchema, "body"), addProductToCart)
router.put("/:productId", authMiddleware, validateRequest(updateCartQtySchema, "body"), updateProductQty)
router.delete("/:productId", authMiddleware, deleteProduct)
router.delete("/", authMiddleware, clearCart)
router.post("/sync", authMiddleware, validateRequest(syncCartSchema, "body"), syncCart)

export default router