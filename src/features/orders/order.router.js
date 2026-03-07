import express from "express"
import { checkPermissions } from "../../shared/middleware/checkPermissions.js"
import { authMiddleware } from "../../shared/middleware/authMIddleware.js"
import { isAdmin } from "../../shared/middleware/isAdmin.js"
import {createOrder, getMyOrders,getAllOrders,getOrderById,updateOrderStatus,cancelOrder} from "../orders/order.controller.js"
const router = express.Router()



router.post("/", authMiddleware, createOrder)
router.get("/my-orders", authMiddleware, getMyOrders)
router.get("/", authMiddleware, isAdmin, getAllOrders)
router.get("/:id", authMiddleware, getOrderById)
router.put("/:id/status", authMiddleware, isAdmin, updateOrderStatus)
router.put("/:id/cancel", authMiddleware, cancelOrder)

export default router;