import mongoose, { Document, Schema, Types } from "mongoose";

// Coins Transaction Schema
interface CoinsTransactionInterface extends Document {
    user: Types.ObjectId;
    type: 'purchase' | 'booking' | 'refund';
    amount: number;
    balanceBefore: number;
    balanceAfter: number;
    createdAt?: Date;
}

const coinsTransactionSchema: Schema = new Schema<CoinsTransactionInterface>({
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    type: { type: String, enum: ['purchase', 'booking', 'refund'], required: true },
    amount: { type: Number, required: true },
    balanceBefore: { type: Number, required: true },
    balanceAfter: { type: Number, required: true },
    createdAt: { type: Date, default: Date.now }
});

export const CoinsTransactionModel = mongoose.model<CoinsTransactionInterface>('CoinsTransaction', coinsTransactionSchema);
