import React, { useState } from "react";
import { useNavigate, useLocation, Outlet } from "react-router-dom";
import {
  FaUser,
  FaHome,
  FaFileAlt,
  FaRegListAlt,
  FaGraduationCap,
  FaMoneyBill,
  FaBook,
  FaChartBar,
  FaCog,
  FaSignOutAlt,
  FaBars,
  FaSchool,
  FaUserCircle,
} from "react-icons/fa";
import { IoNotificationsOutline } from "react-icons/io5";

const StudentDashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const sections = [
    { name: "Profile", path: "/student/profile", icon: <FaUser /> },
    { name: "Hostel Occupancy", path: "/student/hostellive", icon: <FaHome /> },
    { name: "Hostel Form", path: "/student/hostelform", icon: <FaFileAlt /> },
    { name: "Semester Registration", path: "/student/semesterregistration", icon: <FaRegListAlt /> },
    { name: "Exam Registration", path: "/student/examregistration", icon: <FaGraduationCap /> },
    { name: "Fee Payment", path: "/student/feepayment", icon: <FaMoneyBill /> },
    { name: "Library Record", path: "/student/libraryrecord", icon: <FaBook /> },
    { name: "Result", path: "/student/result", icon: <FaChartBar /> },
    // { name: "Academic Overview", path: "/student/academicoverview", icon: <FaChartBar/>},
  ];

  const bottomItems = [
    { name: "Settings", path: "/student/settings", icon: <FaCog /> },
    { name: "Logout", path: "/student/logout", icon: <FaSignOutAlt /> },
  ];

  const handleItemClick = (item) => {
    if (item.path) {
      navigate(item.path);
      setSidebarOpen(false);
    }
  };

  return (
    <div className="h-screen flex flex-col">
      {/* Top Navbar */}
      <header className="w-full bg-blue-200 shadow-md px-6 py-3 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <button
            className="md:hidden text-gray-600 hover:text-blue-500"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            <FaBars className="h-6 w-6" />
          </button>
          <FaSchool className="h-6 w-6 text-black-600" />
          <h2 className="text-lg font-bold text-gray-800">Student</h2>
        </div>

        <div className="flex items-center gap-4">
          <IoNotificationsOutline className="h-6 w-6 cursor-pointer text-gray-600 hover:text-blue-500" />
          <FaUserCircle className="h-7 w-7 cursor-pointer text-gray-600 hover:text-blue-500" />
        </div>
      </header>

      {/* Main Content */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <aside
          className={`w-59 bg-blue-600 text-white flex flex-col justify-between py-3 absolute md:relative h-full z-20 transition-transform duration-300
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`}
        >
          <div className="overflow-y-auto flex-1">
            <ul>
              {sections.map((item) => (
                <li
                  key={item.name}
                  className={`px-6 py-3 mb-1 cursor-pointer flex items-center gap-3 rounded transition ${
                    location.pathname === item.path
                      ? "bg-blue-500 font-semibold"
                      : "hover:bg-blue-400"
                  }`}
                  onClick={() => handleItemClick(item)}
                >
                  {item.icon}
                  {item.name}
                </li>
              ))}
            </ul>
          </div>

          <ul className="px-6">
            {bottomItems.map((item) => (
              <li
                key={item.name}
                className="py-3 cursor-pointer flex items-center gap-3 rounded hover:bg-blue-400"
                onClick={() => handleItemClick(item)}
              >
                {item.icon}
                {item.name}
              </li>
            ))}
          </ul>
        </aside>

        {/* Page Content */}
        <main className="flex-1 overflow-auto bg-gray-50">
          <Outlet /> {/* 👈 This is where child routes render */}
        </main>
      </div>

      {/* Overlay for mobile */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-10 md:hidden"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}
    </div>
  );
};

export default StudentDashboard;