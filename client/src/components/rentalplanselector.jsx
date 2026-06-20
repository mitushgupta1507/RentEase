function RentalPlanSelector() {
  const plans = ["3 Months", "6 Months", "12 Months"];

  return (
    <div className="bg-white rounded-3xl shadow p-8">

      <h2 className="text-2xl font-bold mb-6">
        Choose Rental Plan
      </h2>

      <div className="flex flex-wrap gap-4">

        {plans.map((plan) => (
          <button
            key={plan}
            className="px-6 py-3 rounded-xl border hover:bg-indigo-600 hover:text-white transition"
          >
            {plan}
          </button>
        ))}

      </div>

    </div>
  );
}

export default RentalPlanSelector;