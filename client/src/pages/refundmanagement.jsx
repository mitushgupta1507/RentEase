function RefundRequests() {
  const refunds = [
    {
      id: "REF101",
      customer: "John Doe",
      amount: "₹999",
      status: "Pending",
    },
    {
      id: "REF102",
      customer: "Sarah Smith",
      amount: "₹1499",
      status: "Approved",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-8">

      <div className="max-w-7xl mx-auto">

        <h1 className="text-4xl font-bold mb-10">
          Refund Requests
        </h1>

        <div className="bg-white rounded-3xl shadow overflow-x-auto">

          <table className="w-full">

            <thead className="bg-gray-50">

              <tr>
                <th className="p-5 text-left">Refund ID</th>
                <th className="p-5 text-left">Customer</th>
                <th className="p-5 text-left">Amount</th>
                <th className="p-5 text-left">Status</th>
                <th className="p-5 text-left">Action</th>
              </tr>

            </thead>

            <tbody>

              {refunds.map((refund) => (
                <tr key={refund.id} className="border-t">

                  <td className="p-5">{refund.id}</td>

                  <td className="p-5">{refund.customer}</td>

                  <td className="p-5">{refund.amount}</td>

                  <td className="p-5">{refund.status}</td>

                  <td className="p-5 flex gap-3">

                    <button className="bg-green-600 text-white px-4 py-2 rounded-lg">
                      Approve
                    </button>

                    <button className="bg-red-500 text-white px-4 py-2 rounded-lg">
                      Reject
                    </button>

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

export default RefundRequests;