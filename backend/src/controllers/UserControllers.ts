import { Request,Response } from "express";
import { UserModel } from "../models/user.model";
import { SpaceModel } from "../models/space.model";
import { createuserInputs } from "../zodTypes/types";
import { kycmodel } from "../models/kyc.model";
import jwt from "jsonwebtoken";


// creates a user
export const createuser = async(req:Request,res:Response) =>{
    const body = await req.body;
    const validate = await createuserInputs.safeParse(body);
    try{
        if(!validate.success){
            return res.json({
                msg: "Invalid Inputs",
            })
        }else{
            const Unalready = await UserModel.findOne({name: body.name});
            if(Unalready){
                return res.json({
                    msg: "Username exsists"
                })
            }
            const Ealready = await UserModel.findOne({email: body.email});
            if(Ealready){
                return res.json({
                    msg: "Email Exsists"
                })
            }
            const data = await UserModel.create({
                name: body.name,
                email: body.email,
                password: body.password,
                phone: body.phone,
                role: "user",
                kyc: "false",
                coins: 0,
                createdAt: Date.now(),
            })
            const token = await jwt.sign({name: data.name},"jwtsecret");
            return res.json({
                msg: "user created",
                jwt: token,
                user: body.name
            })
        }
    }catch(e){
        res.json({
            msg: e,
        })
    }
}

// to get all users
export const getusers = async(req:Request,res:Response) =>{
    try {
        const data = await UserModel.find({ role: "user" });
        res.json({
            msg: data 
        });
    } catch (err) {
        res.status(500).json({ msg: err });
    }
}

// get info of a user
export const userbyid = async(req:Request,res:Response)=>{
    const id = await req.params.id;
    try{
        const data = await UserModel.findOne({name: id});
        if(!data){
            return res.json({
                msg: "No such user"
            })
        }
        return res.json({
            msg: data
        })
    }catch(e){
        res.json({
            msg: e
        })
    }
}


export const deleteuser = async(req:Request,res:Response)=>{
    const id = await req.params.id;
    try{
        const data = await UserModel.findOne({name: id});
        if(!data){
            return res.json({
                msg: "No such user"
            })
        }
        await UserModel.deleteOne({name: id});
        return res.json({
            msg: "user deleted"
        })
    }catch(e){
        res.json({
            msg: e
        })
    }
}

// to update user info
export const updateuser = async(req:Request,res:Response)=>{
    const id = await req.params.id;
    const body = await req.body;
    try {
        await UserModel.findOneAndUpdate({name: id},{
            name: body.name,
            email: body.email,
            password: body.password,
            role: body.role,
            phone: body.phone,
            coins: parseInt(body.coins),
        })
        res.json({
            msg: "User updated",
        })
    } catch (error) {
    res.json({
        msg: error
    })  
    }
}

export const noofuser = async(req:Request,res:Response)=>{
    try {
        const totalusers = await UserModel.countDocuments({role: "user"});
        const totalverifiedusers =  await UserModel.countDocuments({role: "user",kyc: "true"});
        const pendingkycrequest = await UserModel.countDocuments({role: "user",kyc: "pending"});
        const totalworkspace = await SpaceModel.countDocuments();
        const users = await UserModel.find().sort({createdAt: 1}).limit(5);
        return res.json({
            msg: "details",
            totalusers: totalusers,
            verifiedusers: totalverifiedusers,
            pendingkyc: pendingkycrequest,
            totalworkspaces: totalworkspace,
            users: users
        });
    } catch (error) {
        res.json({
            msg: error
        });
    }
}

export const dokyc = async (req:Request,res:Response) => {
    const body = await req.body
    try{
        await kycmodel.create({
            user: body.user,
            firstname: body.firstname,
            lastname: body.lastname,
            phone: body.phone,
            address: body.address,
            pancard: body.pancard,
            aadhar: body.aadhar,
            companyname: body.companyname
        });
        await UserModel.findOneAndUpdate({name: body.user},{
            kyc: "true"
        })
        res.json({
            msg: "kyc Completed"
        })
    }catch(e){
        res.json({
            msg: e
        });
    }
}

// export const userkyc = async(req:Request,res:Response)=>{
//    const body = req.body;
//    try{

//    }
// }