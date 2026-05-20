import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

export const authMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer")) {
    res.status(401).json({ status: 401, message: "No token provided", data: null });
    return;
  }

  const token = authHeader.split(" ")[1];
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as {
      userId: string;
      role: string;
    };
    req.user = { id: decoded.userId };
    next();
  } catch (error) {
    const err = error as { name: string };
    const message = err.name === "TokenExpiredError" ? "Token expired" : "Token is invalid";
    res.status(401).json({ status: 401, message, data: null });
  }
};