const mongoose = require("mongoose");

const rentalHistorySchema = new mongoose.Schema(
{
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },

    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
        required: true
    },

    rentDate: {
        type: Date,
        default: Date.now
    },

    returnDate: {
        type: Date
    },

    status: {
        type: String,
        default: "Active"
    }
},
{
    timestamps: true
}
);

module.exports = mongoose.model("RentalHistory", rentalHistorySchema);