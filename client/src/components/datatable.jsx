function DataTable({ columns = [], data = [] }) {
  return (
    <div className="bg-white rounded-3xl shadow overflow-x-auto">
      <table className="w-full">

        <thead className="bg-gray-50">
          <tr>
            {columns.map((column) => (
              <th
                key={column}
                className="text-left p-5"
              >
                {column}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>

          {data.map((row, index) => (
            <tr key={index} className="border-t">

              {Object.values(row).map((value, i) => (
                <td key={i} className="p-5">
                  {value}
                </td>
              ))}

            </tr>
          ))}

        </tbody>

      </table>
    </div>
  );
}

export default DataTable;