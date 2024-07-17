import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { UserModel } from "../models/user.model";

export const protect = async (req:Request,res:Response,next:NextFunction) => {
  try {
    const token = await req.headers.authorization || "";
    const verify  = jwt.verify(token,"jwtsecret");
    if(verify){
      next()
    }else{
      return res.status(401).json({
        msg: "Unauthorised"
      })
    }
  } catch (error) {
    return res.json({
      msg: error
    })
  }
}