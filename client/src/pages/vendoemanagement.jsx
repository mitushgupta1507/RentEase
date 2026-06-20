function VendorManagement() {
  const vendors = [
    {
      id: "V001",
      name: "Furniture Hub",
      contact: "+91 9876543210",
      status: "Active",
    },
    {
      id: "V002",
      name: "Appliance World",
      contact: "+91 8765432109",
      status: "Inactive",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-8">

      <div className="max-w-7xl mx-auto">

        <div className="flex justify-between items-center mb-10">

          <h1 className="text-4xl font-bold">
            Vendor Management
          </h1>

          <button className="bg-indigo-600 text-white px-6 py-3 rounded-xl hover:bg-indigo-700">
            Add Vendor
          </button>

        </div>

        <div className="bg-white rounded-3xl shadow overflow-x-auto">

          <table className="w-full">

            <thead className="bg-gray-50">
              <tr>
                <th className="p-5 text-left">Vendor ID</th>
                <th className="p-5 text-left">Vendor Name</th>
                <th className="p-5 text-left">Contact</th>
                <th className="p-5 text-left">Status</th>
                <th className="p-5 text-left">Action</th>
              </tr>
            </thead>

            <tbody>

              {vendors.map((vendor) => (
                <tr key={vendor.id} className="border-t">

                  <td className="p-5">
                    {vendor.id}
                  </td>

                  <td className="p-5">
                    {vendor.name}
                  </td>

                  <td className="p-5">
                    {vendor.contact}
                  </td>

                  <td className="p-5">

                    <span
                      className={`px-4 py-2 rounded-full text-sm ${
                        vendor.status === "Active"
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {vendor.status}
                    </span>

                  </td>

                  <td className="p-5">

                    <button className="bg-yellow-500 text-white px-4 py-2 rounded-lg">
                      Edit
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

export default VendorManagement;