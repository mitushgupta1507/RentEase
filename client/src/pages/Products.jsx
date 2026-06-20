import { useEffect, useState } from "react";
import axios from "../api/axios";
import ProductCard from "../components/ProductCard";

function Products() {

  const [products, setProducts] = useState([]);

  useEffect(() => {

    const fetchProducts = async () => {

      try {

        const res = await axios.get("/products");

        setProducts(res.data.products);

      } catch (error) {

        console.log(error);

      }

    };

    fetchProducts();

  }, []);

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">

      <h1 className="text-4xl font-bold mb-10">
        All Products
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

        {products.map((product) => (
          <ProductCard
            key={product._id}
            product={product}
          />
        ))}

      </div>

    </div>
  );
}

export default Products;