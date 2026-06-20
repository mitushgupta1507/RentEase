import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "../api/axios";

function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axios.get(`/products/${id}`);
        setProduct(res.data.product);
      } catch (error) {
        console.log(error);
      }
    };

    fetchProduct();
  }, [id]);

  const handleAddToCart = async () => {
    try {
      const user = JSON.parse(localStorage.getItem("user"));

      await axios.post(
        "/cart",
        {
          user: user._id,
          product: product._id,
          quantity: 1,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      alert("Product added to cart successfully");
      navigate("/cart");
    } catch (error) {
      console.log(error);
      alert("Failed to add item to cart");
    }
  };

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-6 py-20 text-center">
        <h1 className="text-3xl font-bold text-indigo-600">
          Loading...
        </h1>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-14">

      <div className="grid lg:grid-cols-2 gap-12 bg-white rounded-2xl shadow-lg p-8">

        {/* Image */}
        <div>
          <img
            src={product.image}
            alt={product.name}
            className="w-full rounded-xl object-cover h-[500px]"
          />
        </div>

        {/* Details */}
        <div className="flex flex-col justify-center">

          <p className="text-indigo-600 font-semibold text-lg">
            {product.category}
          </p>

          <h1 className="text-4xl font-bold mt-2">
            {product.name}
          </h1>

          <p className="text-gray-500 mt-6 leading-7">
            {product.description}
          </p>

          <div className="mt-8">

            <h2 className="text-3xl font-bold text-indigo-700">
              ₹{product.rentPrice}/month
            </h2>

            <p className="text-gray-500 mt-2">
              Flexible rental plans available
            </p>

          </div>

          <div className="mt-10 flex gap-4">

            <button
              onClick={handleAddToCart}
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-lg font-semibold transition"
            >
              Add To Cart
            </button>

            <button className="border border-indigo-600 text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-indigo-50 transition">
              Rent Now
            </button>

          </div>

          {/* Features */}
          <div className="mt-12 grid grid-cols-2 gap-5">

            <div className="bg-gray-100 rounded-xl p-4">
              <h3 className="font-semibold">
                Free Delivery
              </h3>
            </div>

            <div className="bg-gray-100 rounded-xl p-4">
              <h3 className="font-semibold">
                Easy Returns
              </h3>
            </div>

            <div className="bg-gray-100 rounded-xl p-4">
              <h3 className="font-semibold">
                Quality Checked
              </h3>
            </div>

            <div className="bg-gray-100 rounded-xl p-4">
              <h3 className="font-semibold">
                Monthly Plans
              </h3>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default ProductDetails;