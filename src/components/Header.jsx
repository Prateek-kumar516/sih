// Dashboard.jsx
import React, { useState } from "react";
import { FaBell, FaUserCircle } from "react-icons/fa";

const Dashboard = () => {
  const [activeItem, setActiveItem] = useState("Profile");
  const [dropdownOpen, setDropdownOpen] = useState(null);

  const sidebarItems = [
    "Profile",
    "Hostel Occupancy",
    "Hostel Form",
    "Semester Registration",
    "Exam Registration",
    "Fee Payment",
    "Library Record",
    "Result",
  ];
  const bottomItems = ["Settings", "Logout"];

  const cards = [
    { title: "Total Applications", value: "1250" },
    { title: "Pending", value: "350" },
    { title: "Approved", value: "700" },
    { title: "Rejected", value: "200" },
    { title: "Seats Filled", value: "700/1000" },
  ];

  const applications = [
    { id: "1023457", name: "Aarav Sharma", course: "CSE(BTECH)", status: "Approved", color: "green" },
    { id: "1023489", name: "Ananya Mehta", course: "CSE(BTECH)", status: "Rejected", color: "red" },
    { id: "1023526", name: "Rohan Kapoor", course: "CSE(BTECH)", status: "Pending", color: "purple" },
    { id: "1023562", name: "Priya Nair", course: "CSE(BTECH)", status: "Approved", color: "green" },
    { id: "1023598", name: "Kavya Iyer", course: "CSE(BTECH)", status: "Pending", color: "purple" },
  ];

  const getStatusClass = (color) => {
    const map = {
      green: "bg-green-100 text-green-700",
      red: "bg-red-100 text-red-700",
      purple: "bg-purple-100 text-purple-700",
      yellow: "bg-yellow-100 text-yellow-700",
      cyan: "bg-cyan-100 text-cyan-700",
    };
    return map[color] || "bg-gray-100 text-gray-700";
  };

  const toggleDropdown = (id) => setDropdownOpen(dropdownOpen === id ? null : id);

  return (
    <div className="flex min-h-screen font-sans">
      {/* Sidebar */}
      <aside className="w-56 bg-blue-600 text-white flex flex-col justify-between py-6">
        <div>
          <div className="text-center text-2xl font-bold mb-6">Dashboard</div>
          <ul>
            {sidebarItems.map((item) => (
              <li
                key={item}
                className={`px-6 py-3 rounded mb-1 cursor-pointer transition ${
                  activeItem === item ? "bg-blue-500 font-semibold" : "hover:bg-blue-400"
                }`}
                onClick={() => setActiveItem(item)}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
        <ul className="px-6">
          {bottomItems.map((item) => (
            <li key={item} className="py-3 cursor-pointer rounded hover:bg-blue-400">
              {item}
            </li>
          ))}
        </ul>
      </aside>

      {/* Main Content */}
      <div className="flex-1 p-6 bg-gray-50">
        {/* Header */}
        <header className="flex justify-between items-center bg-white px-6 py-3 rounded-lg shadow-md mb-4">
          <div>
            <h2 className="text-lg font-bold text-gray-800">Admissions Dashboard</h2>
            <span className="text-sm text-gray-500">Institute Name</span>
          </div>
          <div className="flex items-center gap-4">
            <FaBell className="h-6 w-6 cursor-pointer text-gray-600 hover:text-blue-500" />
            <FaUserCircle className="h-7 w-7 cursor-pointer text-gray-600 hover:text-blue-500" />
          </div>
        </header>

        {/* Page Heading */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-800">{activeItem}</h1>
        </div>

        {/* Cards */}
        <div className="flex flex-wrap gap-4 mb-6">
          {cards.map((card) => (
            <div key={card.title} className="bg-white p-4 rounded-lg shadow-md flex-1 min-w-[150px]">
              <div className="text-gray-500 text-sm">{card.title}</div>
              <div className="text-gray-800 font-bold text-xl">{card.value}</div>
            </div>
          ))}
        </div>

        {/* Applications Table */}
        <div className="bg-white p-4 rounded-lg shadow-md">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-100 text-gray-600 text-sm">
                <th className="p-2 text-left">ID</th>
                <th className="p-2 text-left">Name</th>
                <th className="p-2 text-left">Course</th>
                <th className="p-2 text-left">Status</th>
                <th className="p-2 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {applications.map((app) => (
                <tr key={app.id} className="hover:bg-gray-50">
                  <td className="p-2">{app.id}</td>
                  <td className="p-2">{app.name}</td>
                  <td className="p-2">{app.course}</td>
                  <td className="p-2">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusClass(app.color)}`}>
                      {app.status}
                    </span>
                  </td>
                  <td className="p-2 relative">
                    <button onClick={() => toggleDropdown(app.id)} className="text-lg">⋮</button>
                    {dropdownOpen === app.id && (
                      <div className="absolute right-0 top-full bg-white border rounded shadow-md flex flex-col mt-1 z-10">
                        <button className="p-1 hover:bg-gray-100">👁 View</button>
                        <button className="p-1 hover:bg-gray-100">🗑 Delete</button>
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Pagination */}
          <div className="flex justify-between items-center mt-4 text-gray-500 text-sm">
            <span>Showing 1 to 5 of 1250 results</span>
            <div className="flex gap-2">
              <button className="px-2 py-1 border rounded hover:bg-gray-100">Previous</button>
              <button className="px-2 py-1 border rounded hover:bg-gray-100">Next</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
