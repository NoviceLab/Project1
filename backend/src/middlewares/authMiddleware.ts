import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { UserModel } from "../models/model";

interface jwtPayload {
  id: string;
}

export const protect = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET!) as jwtPayload;
      const user = await UserModel.findById(decoded.id).select("-password");
      if (!user) {
        res.status(404).json({ error: "User not found" });
      }
      //passing the user info from here to next
      (req as any).user = user;

      next();
    } catch (error) {
      console.log(error);
      res.status(401).json({ error: "Not authorized, token failed" });
    }
  }
  if (!token) {
    res.status(401).json({ error: "Not authorized, no token" });
  }
};
