import mongoose, { Document, Schema, Types } from "mongoose";

// Review Schema
interface ReviewInterface extends Document {
    user: Types.ObjectId;
    space: Types.ObjectId;
    rating: number;
    comment?: string;
    createdAt?: Date;
}

const reviewSchema: Schema = new Schema<ReviewInterface>({
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    space: { type: Schema.Types.ObjectId, ref: 'Space', required: true },
    rating: { type: Number, min: 1, max: 5, required: true },
    comment: { type: String },
    createdAt: { type: Date, default: Date.now }
});

export const ReviewModel = mongoose.model<ReviewInterface>('Review', reviewSchema);
