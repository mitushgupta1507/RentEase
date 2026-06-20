function AddressCard({
  title = "Home",
  address = "123 Main Street, Delhi, India"
}) {
  return (
    <div className="bg-white rounded-3xl shadow p-6">

      <div className="flex justify-between items-center">

        <div>

          <h3 className="text-xl font-bold">
            {title}
          </h3>

          <p className="text-gray-500 mt-2">
            {address}
          </p>

        </div>

        <button className="bg-indigo-600 text-white px-5 py-2 rounded-xl">
          Select
        </button>

      </div>

    </div>
  );
}

export default AddressCard;