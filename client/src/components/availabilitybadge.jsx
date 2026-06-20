function AvailabilityBadge({
  status = "Available",
}) {

  const colors = {
    Available: "bg-green-100 text-green-700",
    "Limited Stock": "bg-yellow-100 text-yellow-700",
    "Out of Stock": "bg-red-100 text-red-700",
  };

  return (
    <span
      className={`px-4 py-2 rounded-full text-sm font-medium ${colors[status]}`}
    >
      {status}
    </span>
  );
}

export default AvailabilityBadge;