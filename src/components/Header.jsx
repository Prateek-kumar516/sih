import React, { useState } from "react";
import {
  FaSchool,
  FaUserCircle,
  FaBars,
  FaUser,
  FaHome,
  FaBook,
  FaFileAlt,
  FaGraduationCap,
  FaRegListAlt,
  FaMoneyBill,
  FaChartBar,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa";
import { IoNotificationsOutline } from "react-icons/io5";
import { useNavigate, useLocation } from "react-router-dom";

const Header = ({ sidebarOpen, setSidebarOpen }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const sidebarItems = [
    { name: "Profile", path: "/", icon: <FaUser /> },
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
    <header className="w-full fixed bg-blue-200 shadow-md px-6 h-15 flex justify-between items-center">
      <div className="flex items-center gap-2">
        <button
          className="md:hidden text-gray-600 hover:text-blue-500"
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          <FaBars className="h-6 w-6" />
        </button>
        <FaSchool className="h-6 w-6 text-black-600" />
        <h2 className="text-lg font-bold text-gray-800">College</h2>
      </div>

      <div className="flex items-center gap-4">
        <IoNotificationsOutline className="h-6 w-6 cursor-pointer text-gray-600 hover:text-blue-500" />
        <FaUserCircle className="h-7 w-7 cursor-pointer text-gray-600 hover:text-blue-500" />
      </div>
    </header>
  );
};

export default Header;

