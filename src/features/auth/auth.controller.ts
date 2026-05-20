import { Request, Response } from "express";
import dotenv from "dotenv";
import {
  registerService,
  loginService,
  forgotPasswordService,
  resetPasswordService,
  adminLoginService,
  adminVerify2faService,
  verifyEmailService,
  meService,
} from "./auth.service.js";

dotenv.config();

export const register = async (req: Request, res: Response): Promise<void> => {
  try {
    const { name, email, password } = req.body;
    const user = await registerService({ name, email, password });
    res.status(201).json({
      status: 201,
      message: "Verification code sent",
      data: { name: user.name, email: user.email },
    });
  } catch (error) {
    const err = error as { code?: number; keyValue?: { email?: string } };
    if (String(err.code) === "11000" && err.keyValue?.email) {
      res.status(409).json({
        status: 409, 
        message: "Email already in use", 
        data: null 
      });
      return;
    }
    res.status(500).json({ status: 500, message: "Failed register a new user", data: null });
  }
};

export const verifyEmail = async (req: Request, res: Response): Promise<void> => {
  try {
    const token = req.params.token as string;
    await verifyEmailService({ token });
    res.status(200).json({ 
    message: "Email verified successfully" 
    });
  } catch (error) {
    res.status(500).json({ 
      error: "Something went wrong" 
    });
  }
};

export const login = async (req: Request, res: Response): Promise<void> => {
  try {
    const { email, password } = req.body;
    const token = await loginService({ email, password });
    res.status(200).json({ 
      status: 200, 
      message: "Login successfully", 
      data: token 
    });
  } catch (error) {
    res.status(500).json({ 
      status: 500, 
      message: "Failed to login", 
      data: null 
    });
  }
};

export const forgotPassword = async (req: Request, res: Response): Promise<void> => {
  try {
    const { email } = req.body;
    await forgotPasswordService({ email });
    res.status(200).json({ 
      status: 200, 
      message: "Reset password email sent", 
      data: null 
    });
  } catch (error) {
    res.status(500).json({ 
      status: 500, 
      message: "Failed to send reset password email", 
      data: null 
    });
  }
};

export const resetPassword = async (req: Request, res: Response): Promise<void> => {
  try {
    const token = req.params.token as string;
    const { password } = req.body;
    await resetPasswordService({ token, password });
    res.status(200).json({ 
      status: 200, 
      message: "Password reset successfully", 
      data: null 
    });
  } catch (error) {
    res.status(500).json({ 
      status: 500, 
      message: "Failed to reset password", 
      data: null 
    });
  }
};

export const adminLogin = async (req: Request, res: Response): Promise<void> => {
  try {
    const { email, password } = req.body;
    await adminLoginService({ email, password });
    res.status(200).json({ 
      status: 200, 
      message: "2FA code sent", 
      data: null 
    });
  } catch (error) {
    res.status(500).json({ 
      status: 500, 
      message: "Failed admin login", 
      data: null 
    });
  }
};

export const adminVerify2fa = async (req: Request, res: Response): Promise<void> => {
  try {
    const { email, code } = req.body;
    const token = await adminVerify2faService({ email, code });
    res.status(200).json({ 
      status: 200, 
      message: "Admin login successfully", 
      data: { token } 
    });
  } catch (error) {
    res.status(500).json({ 
      status: 500, 
      message: "Failed verify 2FA", 
      data: null 
    });
  }
};

export const logout = async (req: Request, res: Response): Promise<void> => {
  try {
    res.status(200).json({ 
      status: 200, 
      message: "Logout successfully", 
      data: null 
    });
  } catch (error) {
    res.status(500).json({ 
      status: 500, 
      message: "Failed logout", 
      data: null 
    });
  }
};

export const me = async (req: Request, res: Response): Promise<void> => {
  try {
    const user = await meService({ userId: req.user!.id });
    res.status(200).json({ 
      status: 200, 
      message: "User fetched successfully", 
      data: user 
    });
  } catch (error) {
    res.status(500).json({ 
      status: 500, 
      message: "Failed to fetch user", 
      data: null 
    });
  }
};