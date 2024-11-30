import React, { useState } from "react";
import UserManagement from "../components/UserManagement";
import RoleManagement from "../components/RoleManagement";
import PermissionMatrix from "../components/PermissionMatrix";

function Dashboard() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark bg-gray-900 text-white" : "bg-white text-black"}>
      <header className="p-4 shadow flex justify-between items-center">
        <h1 className="text-2xl font-bold">RBAC Dashboard</h1>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </header>
      <main className="p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
        <UserManagement />
        <RoleManagement />
      </main>
      <section className="p-4">
        <PermissionMatrix />
      </section>
    </div>
  );
}

export default Dashboard;
