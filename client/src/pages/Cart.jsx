import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../api/axios";

function Cart() {
  const navigate = useNavigate();

  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    fetchCart();
  }, []);

  const fetchCart = async () => {
    try {
      const user = JSON.parse(localStorage.getItem("user"));

      const res = await axios.get(`/cart/${user._id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      setCartItems(res.data.cartItems);
    } catch (error) {
      console.log(error);
    }
  };

  const removeItem = async (id) => {
    try {
      await axios.delete(`/cart/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      fetchCart();

      alert("Item removed successfully");
    } catch (error) {
      console.log(error);
      alert("Failed to remove item");
    }
  };

  const total = cartItems.reduce(
    (sum, item) => sum + item.product.rentPrice * item.quantity,
    0
  );

  return (
    <div className="bg-gray-100 min-h-screen py-10 px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-8">

        {/* Cart Items */}

        <div className="lg:col-span-2 space-y-6">

          <h1 className="text-3xl font-bold text-gray-800">
            My Cart
          </h1>

          {cartItems.map((item) => (
            <div
              key={item._id}
              className="bg-white rounded-2xl shadow-md p-5 flex flex-col md:flex-row gap-6"
            >
              <img
                src={item.product.image}
                alt={item.product.name}
                className="w-full md:w-52 h-44 object-cover rounded-xl"
              />

              <div className="flex-1">

                <h2 className="text-2xl font-semibold text-gray-800">
                  {item.product.name}
                </h2>

                <p className="text-indigo-600 font-bold mt-3 text-lg">
                  ₹{item.product.rentPrice}/month
                </p>

                {/* Duration */}

                <div className="mt-5">
                  <label className="font-medium text-gray-700">
                    Rental Duration
                  </label>

                  <select className="w-full md:w-52 border rounded-lg mt-2 p-2">
                    <option>1 Month</option>
                    <option>3 Months</option>
                    <option>6 Months</option>
                    <option>12 Months</option>
                  </select>
                </div>

                {/* Quantity */}

                <div className="flex items-center gap-4 mt-5">

                  <button className="bg-gray-200 px-4 py-2 rounded-lg">
                    -
                  </button>

                  <span className="font-semibold">
                    {item.quantity}
                  </span>

                  <button className="bg-gray-200 px-4 py-2 rounded-lg">
                    +
                  </button>

                </div>

                <button
                  onClick={() => removeItem(item._id)}
                  className="mt-6 text-red-500 font-medium hover:text-red-700"
                >
                  Remove Item
                </button>

              </div>
            </div>
          ))}
        </div>

        {/* Order Summary */}

        <div className="bg-white rounded-2xl shadow-md p-6 h-fit">

          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Order Summary
          </h2>

          <div className="flex justify-between mb-4">
            <span>Items</span>
            <span>{cartItems.length}</span>
          </div>

          <div className="flex justify-between mb-4">
            <span>Delivery</span>
            <span className="text-green-600">
              Free
            </span>
          </div>

          <hr />

          <div className="flex justify-between mt-6 mb-8">

            <span className="text-xl font-bold">
              Total
            </span>

            <span className="text-2xl font-bold text-indigo-600">
              ₹{total}
            </span>

          </div>

          <button
            onClick={() => navigate("/checkout")}
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-xl font-semibold transition"
          >
            Proceed to Checkout
          </button>

        </div>

      </div>
    </div>
  );
}

export default Cart;