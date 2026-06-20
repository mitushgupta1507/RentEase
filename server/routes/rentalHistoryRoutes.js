const express = require("express");

const router = express.Router();
const protect = require("../middleware/authMiddleware");

const {
    createRentalHistory,
    getRentalHistory,
    returnProduct
} = require("../controllers/rentalHistoryController");

router.post("/", protect, createRentalHistory);

router.get("/:userId", protect, getRentalHistory);

router.put("/return/:id", protect, returnProduct);
module.exports = router;