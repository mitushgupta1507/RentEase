function RentalCard() {
  return (
    <div className="bg-white rounded-3xl shadow p-8">

      <h2 className="text-2xl font-bold">
        Modern Sofa
      </h2>

      <div className="mt-5 space-y-3">

        <p>
          Start Date : 01 July 2026
        </p>

        <p>
          End Date : 01 January 2027
        </p>

        <p className="text-green-600 font-semibold">
          Active
        </p>

      </div>

      <div className="flex gap-4 mt-8">

        <button className="flex-1 bg-indigo-600 text-white py-3 rounded-xl">
          Renew Rental
        </button>

        <button className="flex-1 bg-red-500 text-white py-3 rounded-xl">
          Return Product
        </button>

      </div>

    </div>
  );
}

export default RentalCard;