function DeliveryDatePicker() {
  return (
    <div className="bg-white rounded-3xl shadow p-8">

      <h2 className="text-2xl font-bold mb-6">
        Select Delivery Date
      </h2>

      <input
        type="date"
        className="w-full border rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-indigo-600"
      />

    </div>
  );
}

export default DeliveryDatePicker;