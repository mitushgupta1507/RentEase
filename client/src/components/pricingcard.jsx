function PricingCard() {
  return (
    <div className="bg-white rounded-3xl shadow p-8">

      <h2 className="text-2xl font-bold mb-8">
        Pricing
      </h2>

      <div className="space-y-5">

        <div className="flex justify-between">
          <span>Monthly Rent</span>
          <span>₹999</span>
        </div>

        <div className="flex justify-between">
          <span>Security Deposit</span>
          <span>₹5000</span>
        </div>

        <hr />

        <div className="flex justify-between text-xl font-bold text-indigo-600">
          <span>Total Payable</span>
          <span>₹5999</span>
        </div>

      </div>

    </div>
  );
}

export default PricingCard;