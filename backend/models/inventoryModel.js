import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const InventorySchema = new Schema({
    Manufacturer: {
        type: String,
        required: true
    },
    Model: {
        type: String,
        required: true
    },
    PurchaseCost: {
        type: Number,
        required: true
    },
    SerialNumber: {
        type: String,
        required: true
    },
});