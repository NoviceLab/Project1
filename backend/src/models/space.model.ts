import mongoose, { Document, Schema, Types } from "mongoose";

// Space Schema
interface SpaceInterface extends Document {
    name: string;
    location: string;
    description?: string;
    amenities?: string[];
    capacity: number;
    hourly_coinRate: number;
    daily_coinRate: number;
    createdAt?: Date;
}

const spaceSchema: Schema = new Schema<SpaceInterface>({
    name: { type: String, required: true },
    location: { type: String, required: true },
    description: { type: String },
    amenities: { type: [String] },
    capacity: { type: Number, required: true },
    hourly_coinRate: { type: Number, required: true },
    daily_coinRate: { type: Number, required: true },
    createdAt: { type: Date, default: Date.now }
});

export const SpaceModel = mongoose.model<SpaceInterface>('Space', spaceSchema);
