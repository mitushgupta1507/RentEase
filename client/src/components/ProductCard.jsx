import { Link } from "react-router-dom";

function ProductCard({ product }) {
  return (
    <div className="bg-white rounded-xl shadow hover:shadow-xl transition overflow-hidden">

      <img
        src={product.image}
        alt={product.name}
        className="h-56 w-full object-cover"
      />

      <div className="p-4">

        <h2 className="text-xl font-semibold">
          {product.name}
        </h2>

        <p className="text-gray-500">
          {product.category}
        </p>

        <p className="text-indigo-600 text-lg font-bold mt-2">
          ₹{product.rentPrice}/month
        </p>

        <Link
          to={`/products/${product._id}`}
          className="mt-4 inline-block bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition"
        >
          View Details
        </Link>

      </div>

    </div>
  );
}

export default ProductCard;