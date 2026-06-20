function SearchFilterBar() {
  return (
    <div className="bg-white rounded-2xl shadow p-5 flex flex-col md:flex-row gap-4">

      <input
        type="text"
        placeholder="Search..."
        className="flex-1 border rounded-xl px-4 py-3"
      />

      <select className="border rounded-xl px-4 py-3">
        <option>Newest</option>
        <option>Oldest</option>
      </select>

    </div>
  );
}

export default SearchFilterBar;