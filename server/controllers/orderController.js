const Order = require("../models/Order");

// Create Order
const createOrder = async (req, res) => {
  try {
    const order = await Order.create(req.body);

    res.status(201).json({
      success: true,
      message: "Order placed successfully",
      order
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

// Get Orders of a User
const getUserOrders = async (req, res) => {
  try {
    const orders = await Order.find({
      user: req.params.userId
    }).populate("products.product");

    res.status(200).json({
      success: true,
      count: orders.length,
      orders
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

// Get Single Order
const getOrderById = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id)
      .populate("products.product");

    if (!order) {
      return res.status(404).json({
        success: false,
        message: "Order not found"
      });
    }

    res.status(200).json({
      success: true,
      order
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

module.exports = {
  createOrder,
  getUserOrders,
  getOrderById
};