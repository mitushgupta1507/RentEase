function SupportTicketCard({
  issue = "Water Leakage",
  status = "Pending",
  date = "20 June 2026",
}) {
  return (
    <div className="bg-white rounded-3xl shadow p-6">

      <div className="flex justify-between items-center">

        <div>

          <h2 className="text-xl font-semibold">
            {issue}
          </h2>

          <p className="text-gray-500 mt-2">
            {date}
          </p>

        </div>

        <span
          className={`px-4 py-2 rounded-full text-sm font-medium ${
            status === "Resolved"
              ? "bg-green-100 text-green-700"
              : "bg-yellow-100 text-yellow-700"
          }`}
        >
          {status}
        </span>

      </div>

    </div>
  );
}

export default SupportTicketCard;