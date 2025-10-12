import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
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
} from "react-icons/fa";

const Sidebar = ({ sidebarOpen, setSidebarOpen }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const sidebarItems = [
    { name: "Profile", path: "/studentprofile", icon: <FaUser /> },
    { name: "Hostel Occupancy", path: "/hostellive", icon: <FaHome /> },
    { name: "Hostel Form", path: "/hostelform", icon: <FaFileAlt /> },
    { name: "Semester Registration", path: "/semesterregistration", icon: <FaRegListAlt /> },
    { name: "Exam Registration", path: "/examregistration", icon: <FaGraduationCap /> },
    { name: "Fee Payment", path: "/feepayment", icon: <FaMoneyBill /> },
    { name: "Library Record", path: "/libraryrecord", icon: <FaBook /> },
    { name: "Result", path: "/result", icon: <FaChartBar /> },
  ];

  const bottomItems = [
    { name: "Settings", path: "/settings", icon: <FaCog /> },
    { name: "Logout", path: "/logout", icon: <FaSignOutAlt /> },
  ];

  const handleItemClick = (item) => {
    if (item.path) {
      navigate(item.path);
      setSidebarOpen(false); // close on mobile
    }
  };

  return (
    <aside
      className={`
        w-60 bg-blue-600 text-white top-15 left-0 flex flex-col justify-between fixed h-full z-20 transition-transform duration-300
        ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
        md:translate-x-0
      `}
    >
      {/* Main container */}
      <div className="flex flex-col h-full justify-between">
        {/* Top items */}
        <ul className="flex-1 overflow-y-auto">
          {sidebarItems.map((item) => (
            <li
              key={item.name}
              className={`w-full px-6 py-3 mb-1 cursor-pointer flex items-center gap-3 rounded transition ${
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

        {/* Bottom items */}
        <ul className="w-full">
          {bottomItems.map((item) => (
            <li
              key={item.name}
              className={`w-full px-6 py-3 cursor-pointer flex items-center gap-3 rounded transition ${
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
    </aside>
  );
};

export default Sidebar;
