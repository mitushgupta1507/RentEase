import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Orders from "./pages/orders";
import RentalHistory from "./pages/RentalHistory";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Products from "./pages/Products";

function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/history" element={<RentalHistory />} />

        <Route path="/" element={<Home />} />

        <Route
          path="/products"
          element={<Products />}
        />

      </Routes>

      <Footer />

    </BrowserRouter>
  );
}

export default App;