function ProductSpecifications() {
  return (
    <div className="bg-white rounded-3xl shadow p-8">

      <h2 className="text-2xl font-bold mb-6">
        Specifications
      </h2>

      <div className="space-y-5">

        <div className="flex justify-between">
          <span>Category</span>
          <span className="font-semibold">Furniture</span>
        </div>

        <div className="flex justify-between">
          <span>Monthly Rent</span>
          <span className="font-semibold text-indigo-600">
            ₹999
          </span>
        </div>

        <div className="flex justify-between">
          <span>Security Deposit</span>
          <span className="font-semibold">
            ₹5000
          </span>
        </div>

        <div className="flex justify-between">
          <span>Tenure</span>
          <span className="font-semibold">
            3 / 6 / 12 Months
          </span>
        </div>

      </div>

    </div>
  );
}

export default ProductSpecifications;