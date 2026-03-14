import express from "express"
import { authMiddleware } from "../../shared/middleware/authMIddleware.js"
import { isAdmin } from "../../shared/middleware/isAdmin.js"
import { validateRequest } from "../../shared/middleware/validateRequest.js"
import { objectIdSchema } from "../../shared/schemas/objectId.schema.js"

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
router.get("/:id", authMiddleware, validateRequest(objectIdSchema, "params"), getOrderById)
router.put("/:id/status", authMiddleware, isAdmin, validateRequest(objectIdSchema, "params"), validateRequest(updateOrderStatusSchema, "body"), updateOrderStatus)
router.put("/:id/cancel", authMiddleware, validateRequest(objectIdSchema, "params"), cancelOrder)

export default router