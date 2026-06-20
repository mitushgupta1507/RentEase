const {
  notFound,
  errorHandler
} = require("./middleware/errorMiddleware");
const rentalHistoryRoutes = require("./routes/rentalHistoryRoutes");
const orderRoutes = require("./routes/orderRoutes");
const cartRoutes = require("./routes/cartRoutes");
const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

const connectDB = require("./config/db");

dotenv.config();

connectDB();

const app = express();

app.use(cors());

app.use(express.json());

app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/products", require("./routes/productRoutes"));
app.use("/api/cart", cartRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/history", rentalHistoryRoutes);
app.use("/api/admin", require("./routes/adminRoutes"));
app.use(notFound);
app.use(errorHandler);

app.get("/", (req, res) => {
    res.send("RentEase API Running...");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});