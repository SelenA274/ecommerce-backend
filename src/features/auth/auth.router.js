import { authMiddleware } from "../../shared/middleware/authMIddleware.js"
import { isAdmin } from "../../shared/middleware/isAdmin.js"
import express from "express"
import {
  login,
  register,
  verifyEmail,
  forgotPassword,
  resetPassword,
  adminLogin,
  adminVerify2fa,
  logout,
  me,
} from "./auth.controller.js"

const router = express.Router()

router.post("/register", register)
router.post("/login", login)
router.get("/verify-email/:token", verifyEmail)//i  need to add : if i want to send another verifyEmail

router.post("/forgot-password", forgotPassword)
router.post("/reset-password/:token", resetPassword)

router.post("/admin/login", adminLogin)
router.post("/admin/verify-2fa", adminVerify2fa)

router.post("/logout", authMiddleware, logout)
router.get("/me", authMiddleware, me)

export default router