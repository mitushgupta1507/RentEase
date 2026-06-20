const RentalHistory = require("../models/RentalHistory");

// Create Rental Record
const createRentalHistory = async (req, res) => {
    try {
        const history = await RentalHistory.create(req.body);

        res.status(201).json({
            success: true,
            message: "Rental history created",
            history
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

// Get User History
const getRentalHistory = async (req, res) => {
    try {

        const history = await RentalHistory.find({
            user: req.params.userId
        }).populate("product");

        res.status(200).json({
            success: true,
            count: history.length,
            history
        });

    }
    catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }
};

// Return Product
const returnProduct = async (req, res) => {

    try {

        const history = await RentalHistory.findByIdAndUpdate(
            req.params.id,
            {
                status: "Returned",
                returnDate: Date.now()
            },
            {
                new: true
            }
        );

        res.status(200).json({
            success: true,
            message: "Product returned successfully",
            history
        });

    }
    catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};

module.exports = {
    createRentalHistory,
    getRentalHistory,
    returnProduct
};