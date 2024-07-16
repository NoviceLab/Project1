import { Request, Response } from "express";
import { UserModel } from "../models/user.model";
import { loginInputs } from "../zodTypes/types";
import jwt from "jsonwebtoken";

export const login = async (req: Request, res: Response) => {
  const body = await req.body;
  const validate = await loginInputs.safeParse(body); // validating user inputs
  try {
    if (!validate.success) {
      // if inputs are invalid
      res.json({
        msg: "Invalid Inputs",
      });
    } else {
      const user = await UserModel.findOne({ email: body.email }).exec(); // checking for user
      if (!user) {
        return res.json({
          msg: "User not found with this email",
        });
      }
      if (body.password == user.password) {
        const token = jwt.sign({ name: user.name }, "jwtsecret"); //sending jwt make it store in localstorage in frontend
        res.status(200).json({
          msg: "user signed in",
          jwt: token,
          user: user.name
        });
      } else {
        return res.json({
          msg: "Invalid password",
        });
      }
    }
  } catch (e) {
    res.json({
      msg: e,
    });
  }
};

export const adminlogin = async (req: Request, res: Response) => {
  const body = await req.body;
  const validate = await loginInputs.safeParse(body); // validating user inputs
  try {
    if (!validate.success) {
      // if inputs are invalid
      res.json({
        msg: "Invalid Inputs",
      });
    } else {
      const user = await UserModel.findOne({ email: body.email }).exec(); // checking for user
      if (!user || user.role != "admin"){
        return res.json({
          msg: "No such admin account",
        });
      }
      if (body.password == user.password) {
        const token = jwt.sign({ name: user.name }, "jwtsecret"); //sending jwt make it store in localstorage in frontend
        res.status(200).json({
          msg: "signed in",
          jwt: token,
          user: user.name
        });
      } else {
        return res.json({
          msg: "Invalid password",
        });
      }
    }
  } catch (e) {
    res.json({
      msg: e,
    });
  }
};