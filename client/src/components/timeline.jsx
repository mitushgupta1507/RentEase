function Timeline({ events = [] }) {
  return (
    <div className="space-y-6">

      {events.map((event, index) => (
        <div key={index} className="flex gap-4">

          <div className="w-4 h-4 rounded-full bg-indigo-600 mt-2"></div>

          <div>

            <h3 className="font-semibold">
              {event.title}
            </h3>

            <p className="text-gray-500">
              {event.time}
            </p>

          </div>

        </div>
      ))}

    </div>
  );
}

export default Timeline;