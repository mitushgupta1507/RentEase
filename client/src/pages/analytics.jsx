function Analytics() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">

      <div className="max-w-7xl mx-auto">

        <h1 className="text-4xl font-bold mb-10">
          Analytics
        </h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

          <div className="bg-white rounded-3xl shadow p-8">
            <h3 className="text-gray-500">
              Monthly Revenue
            </h3>

            <h1 className="text-4xl font-bold text-indigo-600 mt-4">
              ₹4.2L
            </h1>
          </div>

          <div className="bg-white rounded-3xl shadow p-8">
            <h3 className="text-gray-500">
              New Users
            </h3>

            <h1 className="text-4xl font-bold text-indigo-600 mt-4">
              256
            </h1>
          </div>

          <div className="bg-white rounded-3xl shadow p-8">
            <h3 className="text-gray-500">
              Rentals
            </h3>

            <h1 className="text-4xl font-bold text-indigo-600 mt-4">
              189
            </h1>
          </div>

          <div className="bg-white rounded-3xl shadow p-8">
            <h3 className="text-gray-500">
              Conversion Rate
            </h3>

            <h1 className="text-4xl font-bold text-green-600 mt-4">
              12%
            </h1>
          </div>

        </div>

        <div className="bg-white rounded-3xl shadow p-10 mt-10 h-80 flex items-center justify-center">
          <p className="text-gray-500 text-lg">
            Charts and graphs will be connected later.
          </p>
        </div>

      </div>

    </div>
  );
}

export default Analytics;