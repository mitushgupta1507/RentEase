import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../api/axios";

function Checkout() {

  const navigate = useNavigate();

  const [cartItems, setCartItems] = useState([]);

  const [address, setAddress] = useState({
    fullName: "",
    phone: "",
    city: "",
    state: "",
    pincode: "",
    landmark: "",
    completeAddress: ""
  });

  useEffect(() => {
    fetchCart();
  }, []);

  const fetchCart = async () => {
    try {

      const user = JSON.parse(localStorage.getItem("user"));

      const res = await axios.get(`/cart/${user._id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`
        }
      });

      setCartItems(res.data.cartItems);

    } catch (error) {
      console.log(error);
    }
  };

  const total = cartItems.reduce(
    (sum, item) => sum + item.product.rentPrice * item.quantity,
    0
  );

  const placeOrder = async () => {

    try {

      const user = JSON.parse(localStorage.getItem("user"));

      await axios.post(
        "/orders",
        {
          user: user._id,
          products: cartItems,
          totalAmount: total,
          address
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
          }
        }
      );

      alert("Order placed successfully");

      navigate("/orders");

    } catch (error) {

      console.log(error);

      alert("Failed to place order");

    }

  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-8">

        {/* Left Section */}

        <div className="lg:col-span-2 bg-white rounded-2xl shadow-md p-8">

          <h1 className="text-3xl font-bold text-gray-800 mb-8">
            Checkout
          </h1>

          {/* Delivery Address */}

          <div>

            <h2 className="text-xl font-semibold mb-6">
              Delivery Address
            </h2>

            <div className="grid md:grid-cols-2 gap-5">

              <input
                type="text"
                placeholder="Full Name"
                value={address.fullName}
                onChange={(e) =>
                  setAddress({ ...address, fullName: e.target.value })
                }
                className="border p-3 rounded-lg outline-none focus:ring-2 focus:ring-indigo-500"
              />

              <input
                type="text"
                placeholder="Phone Number"
                value={address.phone}
                onChange={(e) =>
                  setAddress({ ...address, phone: e.target.value })
                }
                className="border p-3 rounded-lg outline-none focus:ring-2 focus:ring-indigo-500"
              />

              <input
                type="text"
                placeholder="City"
                value={address.city}
                onChange={(e) =>
                  setAddress({ ...address, city: e.target.value })
                }
                className="border p-3 rounded-lg outline-none focus:ring-2 focus:ring-indigo-500"
              />

              <input
                type="text"
                placeholder="State"
                value={address.state}
                onChange={(e) =>
                  setAddress({ ...address, state: e.target.value })
                }
                className="border p-3 rounded-lg outline-none focus:ring-2 focus:ring-indigo-500"
              />

              <input
                type="text"
                placeholder="Pincode"
                value={address.pincode}
                onChange={(e) =>
                  setAddress({ ...address, pincode: e.target.value })
                }
                className="border p-3 rounded-lg outline-none focus:ring-2 focus:ring-indigo-500"
              />

              <input
                type="text"
                placeholder="Landmark"
                value={address.landmark}
                onChange={(e) =>
                  setAddress({ ...address, landmark: e.target.value })
                }
                className="border p-3 rounded-lg outline-none focus:ring-2 focus:ring-indigo-500"
              />

            </div>

            <textarea
              rows="4"
              placeholder="Complete Address"
              value={address.completeAddress}
              onChange={(e) =>
                setAddress({
                  ...address,
                  completeAddress: e.target.value
                })
              }
              className="border p-3 rounded-lg outline-none focus:ring-2 focus:ring-indigo-500 w-full mt-5"
            ></textarea>

          </div>

          {/* Payment Method */}

          <div className="mt-12">

            <h2 className="text-xl font-semibold mb-6">
              Payment Method
            </h2>

            <div className="space-y-4">

              <label className="flex items-center gap-3 border p-4 rounded-xl cursor-pointer">
                <input type="radio" name="payment" />
                Credit / Debit Card
              </label>

              <label className="flex items-center gap-3 border p-4 rounded-xl cursor-pointer">
                <input type="radio" name="payment" />
                UPI Payment
              </label>

              <label className="flex items-center gap-3 border p-4 rounded-xl cursor-pointer">
                <input type="radio" name="payment" />
                Cash on Delivery
              </label>

            </div>

          </div>

        </div>

        {/* Order Summary */}

        <div className="bg-white rounded-2xl shadow-md p-6 h-fit">

          <h2 className="text-2xl font-bold mb-6">
            Order Summary
          </h2>

          <div className="space-y-4">

            {cartItems.map((item) => (
              <div
                key={item._id}
                className="flex justify-between"
              >
                <span>{item.product.name}</span>

                <span>
                  ₹{item.product.rentPrice}
                </span>
              </div>
            ))}

            <div className="flex justify-between">
              <span>Delivery</span>

              <span className="text-green-600">
                Free
              </span>
            </div>

          </div>

          <hr className="my-6" />

          <div className="flex justify-between">

            <span className="text-xl font-bold">
              Total
            </span>

            <span className="text-2xl font-bold text-indigo-600">
              ₹{total}
            </span>

          </div>

          <button
            onClick={placeOrder}
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-xl mt-8 font-semibold transition"
          >
            Place Order
          </button>

        </div>

      </div>
    </div>
  );
}

export default Checkout;