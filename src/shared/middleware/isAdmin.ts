import { Request, Response, NextFunction } from "express";

export const isAdmin = (req: Request, res: Response, next: NextFunction): void => {
  if (req.user?.role !== "admin") {
    res.status(403).json({ status: 403, message: "Admin only", data: null });
    return;
  }
  next();
};