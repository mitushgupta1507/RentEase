const Cart = require("../models/Cart");

// Add to Cart
const addToCart = async (req, res) => {
  try {
    const cartItem = await Cart.create(req.body);

    res.status(201).json({
      success: true,
      message: "Added to cart",
      cartItem
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

// Get User Cart
const getCart = async (req, res) => {
  try {
    console.log("User ID:", req.params.userId);

    const cartItems = await Cart.find({
      user: req.params.userId
    }).populate("product");

    console.log(cartItems);

    res.status(200).json({
      success: true,
      count: cartItems.length,
      cartItems
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

// Remove From Cart
const removeFromCart = async (req, res) => {
  try {
    await Cart.findByIdAndDelete(req.params.id);

    res.status(200).json({
      success: true,
      message: "Item removed from cart"
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

module.exports = {
  addToCart,
  getCart,
  removeFromCart
};