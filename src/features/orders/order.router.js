import express from "express"
import { authMiddleware } from "../../shared/middleware/authMIddleware.js"
import { isAdmin } from "../../shared/middleware/isAdmin.js"
import { validateRequest } from "../../shared/middleware/validateRequest.js"
import {
  createOrderSchema,
  updateOrderStatusSchema,
} from "./order.schemas.js"
import {
  createOrder,
  getMyOrders,
  getAllOrders,
  getOrderById,
  updateOrderStatus,
  cancelOrder,
} from "./order.controller.js"

const router = express.Router()

router.post("/", authMiddleware, validateRequest(createOrderSchema, "body"), createOrder)
router.get("/my-orders", authMiddleware, getMyOrders)
router.get("/", authMiddleware, isAdmin, getAllOrders)
router.get("/:id", authMiddleware, getOrderById)
router.put("/:id/status", authMiddleware, isAdmin, validateRequest(updateOrderStatusSchema, "body"), updateOrderStatus)
router.put("/:id/cancel", authMiddleware, cancelOrder)

export default router