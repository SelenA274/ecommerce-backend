import express from "express"
import { authMiddleware } from "../../shared/middleware/authMIddleware.js"
import { checkPermissions } from "../../shared/middleware/checkPermissions.js"
import { isAdmin } from "../../shared/middleware/isAdmin.js"
import { validateRequest } from "../../shared/middleware/validateRequest.js"
import {
  updateProfileSchema,
  changePasswordSchema,
  addressSchema,
} from "./user.schemas.js"
import {
  getProfile,
  updateProfile,
  addAddress,
  updateAddress,
  deleteAddress,
  getAllUsers,
  updateUserRole,
  deleteUser,
} from "./user.controller.js"

const router = express.Router()

router.get("/profile", authMiddleware, getProfile)
router.put("/profile/:id", authMiddleware, checkPermissions, validateRequest(updateProfileSchema, "body"), updateProfile)
router.post("/addresses/:id", authMiddleware, checkPermissions, validateRequest(addressSchema, "body"), addAddress)
router.put("/addresses/:addrId", authMiddleware, validateRequest(addressSchema, "body"), updateAddress)
router.delete("/addresses/:addrId", authMiddleware, deleteAddress)
router.get("/", authMiddleware, isAdmin, getAllUsers)
router.put("/:id/role", authMiddleware, isAdmin, updateUserRole)
router.delete("/:id", authMiddleware, isAdmin, deleteUser)

export default router