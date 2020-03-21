import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const InventorySchema = new Schema({
     AssetNumber: {
        type: Number,
        required: true
    },
    SerialNumber: {
        type: String,
        required: true
    },
    Type: {
        type: String,
        required: true
    },
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
    PurchaseDate: {
        type: Date,
        required: true
    }
});