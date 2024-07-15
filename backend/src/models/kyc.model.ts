import mongoose, { Document, Schema, Types } from "mongoose";

interface kycinterface extends Document{
    user: String;
    firstname: String;
    lastname: String;
    phone: String;
    address: String;
    pancard: String;
    aadhar: String;
    companyname: String;
}

const kycSchema:Schema = new Schema<kycinterface>({
    user: { type: String, required: true },
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    phone: { type: String, required: true },
    address: { type: String, required: true },
    pancard: { type: String, required: true },
    aadhar: { type: String, required: true },
    companyname: { type: String, required: true }
});

export const kycmodel = mongoose.model<kycinterface>("kyc",kycSchema);