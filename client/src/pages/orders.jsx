import { useEffect, useState } from "react";
import axios from "../api/axios";

function Orders() {

  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {

      const user = JSON.parse(localStorage.getItem("user"));

      const res = await axios.get(`/orders/${user._id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`
        }
      });

      setOrders(res.data.orders);

    } catch (error) {

      console.log(error);

    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">

      <div className="max-w-7xl mx-auto">

        <h1 className="text-4xl font-bold mb-8">
          Orders
        </h1>

        <div className="bg-white rounded-2xl shadow overflow-x-auto">

          <table className="w-full">

            <thead className="bg-gray-50">

              <tr>
                <th className="p-5 text-left">
                  Order ID
                </th>

                <th className="p-5 text-left">
                  Customer
                </th>

                <th className="p-5 text-left">
                  Amount
                </th>

                <th className="p-5 text-left">
                  Status
                </th>
              </tr>

            </thead>

            <tbody>

              {orders.map((order) => (
                <tr
                  key={order._id}
                  className="border-t"
                >

                  <td className="p-5">
                    #{order._id.slice(-6)}
                  </td>

                  <td className="p-5">
                    {order.user?.name}
                  </td>

                  <td className="p-5">
                    ₹{order.totalAmount}
                  </td>

                  <td className="p-5">

                    <span
                      className={`px-4 py-2 rounded-full text-sm font-medium ${
                        order.status === "Delivered"
                          ? "bg-green-100 text-green-700"
                          : "bg-yellow-100 text-yellow-700"
                      }`}
                    >
                      {order.status}
                    </span>

                  </td>

                </tr>
              ))}

            </tbody>

          </table>

        </div>

      </div>

    </div>
  );
}

export default Orders;