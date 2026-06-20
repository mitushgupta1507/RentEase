import { useEffect, useState } from "react";
import axios from "../api/axios";

function RentalHistory() {

  const [rentals, setRentals] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchHistory();
  }, []);

  const fetchHistory = async () => {
    try {

      const user = JSON.parse(localStorage.getItem("user"));

      const res = await axios.get(`/history/${user._id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`
        }
      });

      setRentals(res.data.history);

    } catch (error) {

      console.log(error);

    }
  };

  const returnProduct = async (id) => {
    try {

      await axios.put(
        `/history/return/${id}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
          }
        }
      );

      fetchHistory();

      alert("Product returned successfully");

    } catch (error) {

      console.log(error);

      alert("Failed to return product");

    }
  };

  const filteredRentals = rentals.filter((item) =>
    item.product?.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-6">

      <div className="max-w-7xl mx-auto">

        {/* Heading */}

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8">

          <h1 className="text-4xl font-bold text-gray-800">
            Rental History
          </h1>

          <input
            type="text"
            placeholder="Search rentals..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border rounded-xl px-4 py-3 w-full md:w-80 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />

        </div>

        {/* Cards */}

        <div className="space-y-6">

          {filteredRentals.map((item) => (
            <div
              key={item._id}
              className="bg-white rounded-2xl shadow-md p-6 flex flex-col lg:flex-row gap-6"
            >

              {/* Image */}

              <img
                src={item.product?.image}
                alt={item.product?.name}
                className="w-full lg:w-60 h-44 object-cover rounded-xl"
              />

              {/* Details */}

              <div className="flex-1">

                <div className="flex flex-col md:flex-row justify-between gap-4">

                  <div>

                    <h2 className="text-2xl font-bold text-gray-800">
                      {item.product?.name}
                    </h2>

                    <p className="text-gray-500 mt-2">
                      Rental Duration: {item.duration} Months
                    </p>

                    <p className="text-gray-500 mt-1">
                      Start Date:{" "}
                      {new Date(item.startDate).toLocaleDateString()}
                    </p>

                    <p className="text-gray-500 mt-1">
                      End Date:{" "}
                      {new Date(item.endDate).toLocaleDateString()}
                    </p>

                  </div>

                  {/* Status */}

                  <div>

                    <span
                      className={`px-4 py-2 rounded-full font-medium ${
                        item.status === "Active"
                          ? "bg-green-100 text-green-700"
                          : "bg-gray-200 text-gray-700"
                      }`}
                    >
                      {item.status}
                    </span>

                  </div>

                </div>

                {/* Buttons */}

                <div className="flex flex-wrap gap-4 mt-8">

                  <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-xl font-semibold transition">
                    Renew Rental
                  </button>

                  {item.status === "Active" && (
                    <button
                      onClick={() => returnProduct(item._id)}
                      className="border border-red-500 text-red-500 hover:bg-red-50 px-6 py-3 rounded-xl font-semibold transition"
                    >
                      Return Item
                    </button>
                  )}

                </div>

              </div>

            </div>
          ))}

        </div>

      </div>

    </div>
  );
}

export default RentalHistory;