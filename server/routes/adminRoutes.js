const express = require("express");

const router = express.Router();

const protect = require("../middleware/authMiddleware");
const adminOnly = require("../middleware/adminMiddleware");

const {
  getTotalUsers,
  getTotalProducts,
  getTotalOrders,
  getRevenue
} = require("../controllers/adminController");

router.get(
  "/users/count",
  protect,
  adminOnly,
  getTotalUsers
);

router.get(
  "/products/count",
  protect,
  adminOnly,
  getTotalProducts
);

router.get(
  "/orders/count",
  protect,
  adminOnly,
  getTotalOrders
);

router.get(
  "/revenue",
  protect,
  adminOnly,
  getRevenue
);

module.exports = router;