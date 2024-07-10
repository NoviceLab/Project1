import mongoose, { Document, Schema, Types } from "mongoose";

// User Schema
interface UsersInterface extends Document {
    name: string;
    email: string;
    password: string;
    phone?: string;
    role: 'admin' | 'user';
    coins?: number;
    createdAt?: Date;
}

const usersSchema: Schema = new Schema<UsersInterface>({
    name: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    phone: { type: String },
    role: { type: String, enum: ['admin', 'user'], default: 'user' },
    coins: { type: Number, default: 0 },
    createdAt: { type: Date, default: Date.now }
});

export const UserModel = mongoose.model<UsersInterface>('User', usersSchema);
