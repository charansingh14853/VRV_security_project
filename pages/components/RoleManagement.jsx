import React, { useState } from "react";

function RoleManagement() {
  const [roles, setRoles] = useState([
    { id: 1, name: "Admin", permissions: ["Read", "Write", "Delete"] },
    { id: 2, name: "Editor", permissions: ["Read", "Write"] },
    { id: 3, name: "Viewer", permissions: ["Read"] },
  ]);

  const [newRole, setNewRole] = useState("");

  const handleAddRole = () => {
    if (newRole.trim()) {
      setRoles((prevRoles) => [
        ...prevRoles,
        { id: prevRoles.length + 1, name: newRole, permissions: [] },
      ]);
      setNewRole("");
    }
  };

  const handleDeleteRole = (id) => {
    setRoles((prevRoles) => prevRoles.filter((role) => role.id !== id));
  };

  return (
    <div className="role-management p-4 border rounded shadow bg-gray-100 dark:bg-gray-800">
      <h2 className="text-xl font-semibold mb-4">Role Management</h2>
      <div className="mb-4">
        <input
          type="text"
          value={newRole}
          onChange={(e) => setNewRole(e.target.value)}
          placeholder="New Role Name"
          className="border p-2 rounded mr-2"
        />
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={handleAddRole}
        >
          Add Role
        </button>
      </div>
      <ul>
        {roles.map((role) => (
          <li
            key={role.id}
            className="flex justify-between items-center border-b p-2"
          >
            <span>{role.name}</span>
            <button
              className="bg-red-500 text-white px-2 py-1 rounded"
              onClick={() => handleDeleteRole(role.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RoleManagement;
