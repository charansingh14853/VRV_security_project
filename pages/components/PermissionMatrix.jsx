import React, { useState } from "react";

function PermissionMatrix() {
  const [roles, setRoles] = useState([
    { name: "Admin", permissions: ["Read", "Write", "Delete"] },
    { name: "Editor", permissions: ["Read", "Write"] },
    { name: "Viewer", permissions: ["Read"] },
  ]);

  const permissions = ["Read", "Write", "Delete"];

  const handlePermissionToggle = (roleName, permission) => {
    setRoles((prevRoles) =>
      prevRoles.map((role) =>
        role.name === roleName
          ? {
              ...role,
              permissions: role.permissions.includes(permission)
                ? role.permissions.filter((perm) => perm !== permission)
                : [...role.permissions, permission],
            }
          : role
      )
    );
  };

  return (
    <div className="permission-matrix p-4 border rounded shadow bg-gray-100 dark:bg-gray-800">
      <h2 className="text-xl font-semibold mb-4">Permission Matrix</h2>
      <table className="w-full border-collapse border border-gray-300 dark:border-gray-600">
        <thead>
          <tr>
            <th className="border border-gray-300 p-2">Role</th>
            {permissions.map((perm) => (
              <th key={perm} className="border border-gray-300 p-2">
                {perm}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {roles.map((role) => (
            <tr key={role.name}>
              <td className="border border-gray-300 p-2">{role.name}</td>
              {permissions.map((perm) => (
                <td key={perm} className="border border-gray-300 p-2 text-center">
                  <input
                    type="checkbox"
                    checked={role.permissions.includes(perm)}
                    onChange={() => handlePermissionToggle(role.name, perm)}
                  />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default PermissionMatrix;
