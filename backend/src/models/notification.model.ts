import mongoose, { Document, Schema, Types } from "mongoose";

// Notification Schema
interface NotificationInterface extends Document {
    user: Types.ObjectId;
    message: string;
    read: boolean;
    createdAt?: Date;
}

const notificationSchema: Schema = new Schema<NotificationInterface>({
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    message: { type: String, required: true },
    read: { type: Boolean, default: false },
    createdAt: { type: Date, default: Date.now }
});

export const NotificationModel = mongoose.model<NotificationInterface>('Notification', notificationSchema);
