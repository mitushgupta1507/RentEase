function RentalExtensionCard() {
  return (
    <div className="bg-white rounded-3xl shadow p-8">

      <h2 className="text-2xl font-bold mb-6">
        Extend Rental
      </h2>

      <select className="w-full border rounded-xl p-4">

        <option>Extend by 1 Month</option>

        <option>Extend by 3 Months</option>

        <option>Extend by 6 Months</option>

      </select>

      <button className="w-full mt-6 bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-xl">

        Confirm Extension

      </button>

    </div>
  );
}

export default RentalExtensionCard;