import { authMiddleware } from "../../shared/middleware/authMIddleware.js"
import express, { Router } from "express"
import { authLimiter } from "../../config/rateLimiter.js"
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

import { validateRequest } from "../../shared/middleware/validateRequest.js"
import {
  registerSchema,
  loginSchema,
  forgotPasswordSchema,
  resetPasswordSchema,
  adminLoginSchema,
  verify2faSchema,
  } from "./auth.schemas.js"

const router: Router = express.Router()

router.post("/register", authLimiter, validateRequest(registerSchema, "body"), register)
router.post("/login", authLimiter, validateRequest(loginSchema, "body"), login)
router.post("/forgot-password", authLimiter, validateRequest(forgotPasswordSchema, "body"), forgotPassword)
router.post("/admin/login", authLimiter, validateRequest(adminLoginSchema, "body"), adminLogin)
router.get("/verify-email/:token", verifyEmail)
router.post("/reset-password/:token", validateRequest(resetPasswordSchema, "body"), resetPassword)
router.post("/admin/verify-2fa", validateRequest(verify2faSchema, "body"), adminVerify2fa)
router.post("/logout", authMiddleware, logout)
router.get("/me", authMiddleware, me)

export default router