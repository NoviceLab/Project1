import mongoose, { Document, Schema, Types } from "mongoose";

// Booking Schema
interface BookingInterface extends Document {
    user: Types.ObjectId;
    space: Types.ObjectId;
    startTime: Date;
    endTime: Date;
    status: 'pending' | 'confirmed' | 'cancelled';
    paymentMethod: 'coins' | 'credit_card' | 'paypal';
    createdAt?: Date;
}

const bookingSchema: Schema = new Schema<BookingInterface>({
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    space: { type: Schema.Types.ObjectId, ref: 'Space', required: true },
    startTime: { type: Date, required: true },
    endTime: { type: Date, required: true },
    status: { type: String, enum: ['pending', 'confirmed', 'cancelled'], default: 'pending' },
    paymentMethod: { type: String, enum: ['coins', 'credit_card', 'paypal'], required: true },
    createdAt: { type: Date, default: Date.now }
});

export const BookingModel = mongoose.model<BookingInterface>('Booking', bookingSchema);
