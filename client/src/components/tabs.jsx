function Tabs({ tabs = [] }) {
  return (
    <div className="flex gap-4 border-b pb-4">

      {tabs.map((tab) => (
        <button
          key={tab}
          className="px-5 py-2 rounded-xl hover:bg-indigo-600 hover:text-white"
        >
          {tab}
        </button>
      ))}

    </div>
  );
}

export default Tabs;