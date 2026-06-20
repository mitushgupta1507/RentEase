const express = require("express");

const router = express.Router();

const protect = require("../middleware/authMiddleware");

const {
  createOrder,
  getUserOrders,
  getOrderById
} = require("../controllers/orderController");

// Create Order
router.post("/", protect, createOrder);

// Get All Orders of a User
router.get("/:userId", protect, getUserOrders);

// Get Single Order by ID
router.get("/order/:id", protect, getOrderById);

module.exports = router;