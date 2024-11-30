import React, { useState } from "react";

function UserManagement() {
  const [users, setUsers] = useState([
    { id: 1, name: "John Doe", role: "Admin", status: "Active" },
    { id: 2, name: "Jane Smith", role: "Editor", status: "Inactive" },
  ]);

  const handleStatusToggle = (id) => {
    setUsers((prevUsers) =>
      prevUsers.map((user) =>
        user.id === id ? { ...user, status: user.status === "Active" ? "Inactive" : "Active" } : user
      )
    );
  };

  return (
    <div className="user-management p-4 border rounded shadow bg-gray-100 dark:bg-gray-800">
      <h2 className="text-xl font-semibold mb-4">User Management</h2>
      <table className="w-full border-collapse border border-gray-300 dark:border-gray-600">
        <thead>
          <tr>
            <th className="border border-gray-300 p-2">Name</th>
            <th className="border border-gray-300 p-2">Role</th>
            <th className="border border-gray-300 p-2">Status</th>
            <th className="border border-gray-300 p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td className="border border-gray-300 p-2">{user.name}</td>
              <td className="border border-gray-300 p-2">{user.role}</td>
              <td className="border border-gray-300 p-2">{user.status}</td>
              <td className="border border-gray-300 p-2">
                <button
                  className="bg-green-500 text-white px-2 py-1 rounded mr-2"
                  onClick={() => handleStatusToggle(user.id)}
                >
                  Toggle Status
                </button>
                <button className="bg-red-500 text-white px-2 py-1 rounded">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserManagement;
