function AuditLogs() {
  const logs = [
    {
      id: 1,
      action: "Product Added",
      user: "Admin",
      time: "2 hours ago",
    },
    {
      id: 2,
      action: "Refund Approved",
      user: "Manager",
      time: "Yesterday",
    },
    {
      id: 3,
      action: "User Blocked",
      user: "Super Admin",
      time: "3 days ago",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-8">

      <div className="max-w-7xl mx-auto">

        <h1 className="text-4xl font-bold mb-10">
          Audit Logs
        </h1>

        <div className="bg-white rounded-3xl shadow overflow-hidden">

          <table className="w-full">

            <thead className="bg-gray-50">

              <tr>
                <th className="p-5 text-left">
                  Action
                </th>

                <th className="p-5 text-left">
                  Performed By
                </th>

                <th className="p-5 text-left">
                  Time
                </th>
              </tr>

            </thead>

            <tbody>

              {logs.map((log) => (
                <tr key={log.id} className="border-t">

                  <td className="p-5">
                    {log.action}
                  </td>

                  <td className="p-5">
                    {log.user}
                  </td>

                  <td className="p-5 text-gray-500">
                    {log.time}
                  </td>

                </tr>
              ))}

            </tbody>

          </table>

        </div>

      </div>

    </div>
  );
}

export default AuditLogs;