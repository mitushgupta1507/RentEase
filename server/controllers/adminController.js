const User = require("../models/User");
const Product = require("../models/Product");
const Order = require("../models/Order");

// Total Users
const getTotalUsers = async (req, res) => {
  try {
    const totalUsers = await User.countDocuments();

    res.status(200).json({
      success: true,
      totalUsers
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

// Total Products
const getTotalProducts = async (req, res) => {
  try {
    const totalProducts = await Product.countDocuments();

    res.status(200).json({
      success: true,
      totalProducts
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

// Total Orders
const getTotalOrders = async (req, res) => {
  try {
    const totalOrders = await Order.countDocuments();

    res.status(200).json({
      success: true,
      totalOrders
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

// Revenue
const getRevenue = async (req, res) => {
  try {

    const orders = await Order.find();

    const revenue = orders.reduce(
      (sum, order) => sum + order.totalAmount,
      0
    );

    res.status(200).json({
      success: true,
      revenue
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message
    });

  }
};

module.exports = {
  getTotalUsers,
  getTotalProducts,
  getTotalOrders,
  getRevenue
};