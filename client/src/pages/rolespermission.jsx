function RolesPermissions() {
  const roles = [
    {
      role: "Super Admin",
      permissions: "Full Access",
    },
    {
      role: "Manager",
      permissions: "Products, Orders, Users",
    },
    {
      role: "Support Staff",
      permissions: "Tickets, Reviews",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-8">

      <div className="max-w-6xl mx-auto">

        <h1 className="text-4xl font-bold mb-10">
          Roles & Permissions
        </h1>

        <div className="space-y-6">

          {roles.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl shadow p-8"
            >

              <h2 className="text-2xl font-semibold">
                {item.role}
              </h2>

              <p className="text-gray-500 mt-3">
                {item.permissions}
              </p>

            </div>
          ))}

        </div>

      </div>

    </div>
  );
}

export default RolesPermissions;