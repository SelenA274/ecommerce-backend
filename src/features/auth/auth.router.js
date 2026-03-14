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

import { validateRequest } from "../../shared/middleware/validateRequest.js"
import {
  registerSchema,
  loginSchema,
  forgotPasswordSchema,
  resetPasswordSchema,
  adminLoginSchema,
  verify2faSchema,
} from "./auth.schemas.js"

const router = express.Router()

router.post("/register", validateRequest(registerSchema, "body"), register)
router.post("/login", validateRequest(loginSchema, "body"), login)
router.get("/verify-email/:token", verifyEmail)//i  need to add : if i want to send another verifyEmail
router.post("/forgot-password", validateRequest(forgotPasswordSchema, "body"), forgotPassword)
router.post("/reset-password/:token", validateRequest(resetPasswordSchema, "body"), resetPassword)
router.post("/admin/login", validateRequest(adminLoginSchema, "body"), adminLogin)
router.post("/admin/verify-2fa", validateRequest(verify2faSchema, "body"), adminVerify2fa)
router.post("/logout", authMiddleware, logout)
router.get("/me", authMiddleware, me)






export default router