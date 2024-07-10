import { Request, Response, NextFunction } from "express";

export const admin = (req: Request, res: Response, next: NextFunction) => {
  if ((req as any).user && (req as any).user.role === "admin") {
    next();
  } else {
    res.status(403).json({ message: "Access denied" });
  }
};
