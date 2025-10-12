import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';

const StudentLayout = () => {
  const linkClass = ({ isActive }) =>
    `block px-4 py-2 rounded hover:bg-blue-50 ${isActive ? 'bg-blue-100 font-semibold' : ''}`;

  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md p-4">
        <h2 className="text-xl font-semibold mb-6">Student Dashboard</h2>
        <nav className="flex flex-col gap-2">
          <NavLink to="/student" className={linkClass}>Home</NavLink>
          <NavLink to="/student/profile" className={linkClass}>Profile</NavLink>
          <NavLink to="/student/hostellive" className={linkClass}>Hostel Live occupancy</NavLink>
          <NavLink to="/student/hostelform" className={linkClass}>Hostel Form</NavLink>
          <NavLink to="/student/semesterregistration" className={linkClass}>Semester Registration</NavLink>
          <NavLink to="/student/examregistration" className={linkClass}>Exam Registration</NavLink>
          <NavLink to="/student/feepayment" className={linkClass}>Fees Payment</NavLink>
          <NavLink to="/student/libraryrecord" className={linkClass}>Library Record</NavLink>
          <NavLink to="/student/result" className={linkClass}>Result</NavLink>
          <NavLink to="/student/settings" className={linkClass}>Settings</NavLink>
          <NavLink to="/student/logout" className={linkClass}>Logout</NavLink>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        <Outlet />
      </main>
    </div>
  );
};

export default StudentLayout;
