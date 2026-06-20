function MaintenanceRequestCard() {
  return (
    <div className="bg-white rounded-3xl shadow p-8">

      <h2 className="text-2xl font-bold mb-6">
        Maintenance Request
      </h2>

      <input
        type="text"
        placeholder="Issue Title"
        className="w-full border rounded-xl p-4 mb-5"
      />

      <textarea
        rows="5"
        placeholder="Describe the issue"
        className="w-full border rounded-xl p-4"
      ></textarea>

      <button className="w-full mt-6 bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-xl">

        Submit Request

      </button>

    </div>
  );
}

export default MaintenanceRequestCard;