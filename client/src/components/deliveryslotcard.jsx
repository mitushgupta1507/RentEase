function DeliverySlotCard() {

  const slots = [
    "Morning (9AM - 12PM)",
    "Afternoon (1PM - 4PM)",
    "Evening (5PM - 8PM)",
  ];

  return (
    <div className="bg-white rounded-3xl shadow p-8">

      <h2 className="text-2xl font-bold mb-6">
        Select Delivery Slot
      </h2>

      <div className="space-y-4">

        {slots.map((slot) => (
          <button
            key={slot}
            className="w-full border rounded-xl p-4 hover:bg-indigo-600 hover:text-white transition"
          >
            {slot}
          </button>
        ))}

      </div>

    </div>
  );
}

export default DeliverySlotCard;