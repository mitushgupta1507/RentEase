function ReturnRequestCard() {
  return (
    <div className="bg-white rounded-3xl shadow p-8">

      <h2 className="text-2xl font-bold mb-6">
        Return Product
      </h2>

      <textarea
        rows="4"
        placeholder="Reason for return"
        className="w-full border rounded-xl p-4"
      ></textarea>

      <button className="w-full mt-6 bg-red-500 hover:bg-red-600 text-white py-3 rounded-xl">

        Submit Return Request

      </button>

    </div>
  );
}

export default ReturnRequestCard;