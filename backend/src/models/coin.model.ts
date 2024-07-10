import mongoose, { Document, Schema, Types } from "mongoose";

// Coin Purchase Schema
interface CoinPurchaseInterface extends Document {
    user: Types.ObjectId;
    amount: number;
    paymentMethod: 'credit_card' | 'paypal' | 'bank_transfer';
    status: 'pending' | 'completed' | 'failed';
    createdAt?: Date;
}

const coinPurchaseSchema: Schema = new Schema<CoinPurchaseInterface>({
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    amount: { type: Number, required: true },
    paymentMethod: { type: String, enum: ['credit_card', 'paypal', 'bank_transfer'], required: true },
    status: { type: String, enum: ['pending', 'completed', 'failed'], default: 'pending' },
    createdAt: { type: Date, default: Date.now }
});

export const CoinPurchaseModel = mongoose.model<CoinPurchaseInterface>('CoinPurchase', coinPurchaseSchema);
