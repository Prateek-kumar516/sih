import React, { useState } from "react";
import {
  User,
  Home,
  FileText,
  Calendar,
  CreditCard,
  Book,
} from "lucide-react";

const StudentDashboard = () => {
  const [activeSection, setActiveSection] = useState("Profile");

  const sections = [
    { name: "Profile", icon: <User size={20} /> },
    { name: "Hostel Occupancy Tracking", icon: <Home size={20} /> },
    { name: "Hostel Form", icon: <FileText size={20} /> },
    { name: "Semester Registration Form", icon: <Calendar size={20} /> },
    { name: "Exam Registration", icon: <Calendar size={20} /> },
    { name: "Library Records", icon: <Book size={20} /> },
    { name: "Fee Payment", icon: <CreditCard size={20} /> },
    { name: "Result", icon: <FileText size={20} /> },
    { name: "Academic Overview", icon: <FileText size={20} /> },
    
  
  ];


  const instituteName = " Institute Name";

  const handleLogout = () => {
    alert("Logged out!");
    // Add actual logout logic here
  };

  return (
    <div style={styles.container}>
      {/* Top Navbar */}
      <div style={styles.topNav}>
        <div>
          <h2 style={{ margin: 0, color: "#003366" }}>Student Dashboard</h2>
          <span style={{ fontSize: "14px", color: "#336699" }}>
            {instituteName}
          </span>
        </div>
        <div style={styles.topNavRight}>
          <span style={styles.icon}>🔔</span>
          <span style={styles.icon}>👤</span>
          <button style={styles.logoutButton} onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div style={styles.main}>
        {/* Sidebar */}
        <div style={styles.sidebar}>
          {sections.map((section) => (
            <div
              key={section.name}
              style={{
                ...styles.sidebarItem,
                backgroundColor:
                  activeSection === section.name ? "#cce6ff" : "transparent",
              }}
              onClick={() => setActiveSection(section.name)}
            >
              <span style={{ marginRight: "10px" }}>{section.icon}</span>
              {section.name}
            </div>
          ))}
        </div>

        {/* Content */}
        <div style={styles.content}>
          <h3>{activeSection}</h3>
          <p>
            This is the <b>{activeSection}</b> section. Display relevant data
            here.
          </p>
        </div>
      </div>
    </div>
  );
};

// ===== Inline CSS =====
const styles = {
  container: { fontFamily: "Arial, sans-serif" },
  topNav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#cce6ff",
    padding: "10px 20px",
    color: "#003366",
    borderBottom: "1px solid #99ccff",
  },
  topNavRight: { display: "flex", gap: "15px", alignItems: "center" },
  icon: { cursor: "pointer", fontSize: "20px" },
  logoutButton: {
    marginLeft: "10px",
    padding: "5px 12px",
    backgroundColor: "#f87171",
    border: "none",
    borderRadius: "5px",
    color: "#fff",
    cursor: "pointer",
  },
  main: { display: "flex", minHeight: "90vh" },
  sidebar: {
    width: "250px",
    backgroundColor: "#fff",
    borderRight: "1px solid #ddd",
    padding: "10px 0",
  },
  sidebarItem: {
    display: "flex",
    alignItems: "center",
    padding: "12px 20px",
    cursor: "pointer",
    transition: "0.3s",
    borderRadius: "5px",
    margin: "3px 10px",
  },
  content: { flex: 1, padding: "20px", backgroundColor: "#f9fbff" },
};

export default StudentDashboard;

// import React, { useState } from "react";
// import { FaBell, FaUserCircle, FaSignOutAlt, FaUserShield } from "react-icons/fa";

// const AdminDashboard = () => {
//   const [activeSection, setActiveSection] = useState("Admission Record Page");

//   const sections = [
//     "Profile",
//     "Admission Record Page",
//     "Hostel Record",
//     "Fee Record",
//     "Result Record",
//     "Staff Details",
//   ];

//   const instituteName = "Institute Name";

//   const handleLogout = () => {
//     alert("Logged out!");
//     // 🔹 Add your real logout logic here
//   };

//   return (
//     <div className="font-sans">
//       {/* Top Navbar */}
//       <div className="flex justify-between items-center bg-blue-100 px-5 py-3 border-b border-blue-300 text-blue-900">
//         <div className="flex items-center gap-3">
//           {/* 🔹 Admin Icon + Text on Left */}
//           <FaUserShield className="h-7 w-7 text-blue-900" />
//           <div>
//             <h2 className="text-lg font-bold text-blue-900 m-0">
//               Admin
//             </h2>
//             <span className="text-sm text-blue-700">{instituteName}</span>
//           </div>
//         </div>

//         {/* Right side icons + logout */}
//         <div className="flex items-center gap-4">
//           <FaBell className="h-6 w-6 cursor-pointer text-gray-700 hover:text-blue-600" />
//           <FaUserCircle className="h-7 w-7 cursor-pointer text-gray-700 hover:text-blue-600" />
//           <button
//             onClick={handleLogout}
//             className="flex items-center gap-1 px-3 py-1.5 bg-red-400 text-white font-semibold rounded-md hover:bg-red-500 transition"
//           >
//             <FaSignOutAlt /> Logout
//           </button>
//         </div>
//       </div>

//       {/* Main Content */}
//       <div className="flex min-h-[90vh]">
//         {/* Sidebar */}
//         <div className="w-64 bg-white border-r border-gray-300 py-3">
//           {sections.map((section) => (
//             <div
//               key={section}
//               className={`px-5 py-3 cursor-pointer rounded-md mx-2 mb-1 transition ${
//                 activeSection === section
//                   ? "bg-blue-100 text-blue-900 font-semibold"
//                   : "hover:bg-gray-100 text-gray-700"
//               }`}
//               onClick={() => setActiveSection(section)}
//             >
//               {section}
//             </div>
//           ))}
//         </div>

//         {/* Content */}
//         <div className="flex-1 p-6 bg-blue-50">
//           <h3 className="text-xl font-bold text-gray-800">{activeSection}</h3>
//           <p className="mt-2 text-gray-600">
//             Display <b>{activeSection}</b> data and actions here.
//           </p>

//           {/* Example: Admission Record Table */}
//           {activeSection === "Admission Record Page" && (
//             <div className="overflow-x-auto mt-5">
//               <table className="w-full border border-gray-300 bg-white">
//                 <thead className="bg-gray-100">
//                   <tr>
//                     <th className="border px-4 py-2 text-left">Student ID</th>
//                     <th className="border px-4 py-2 text-left">Name</th>
//                     <th className="border px-4 py-2 text-left">Course</th>
//                     <th className="border px-4 py-2 text-left">Status</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   <tr className="hover:bg-gray-50">
//                     <td className="border px-4 py-2">STD101</td>
//                     <td className="border px-4 py-2">Amit Kumar</td>
//                     <td className="border px-4 py-2">B.Tech</td>
//                     <td className="border px-4 py-2 text-green-600">Approved</td>
//                   </tr>
//                   <tr className="hover:bg-gray-50">
//                     <td className="border px-4 py-2">STD102</td>
//                     <td className="border px-4 py-2">Sara</td>
//                     <td className="border px-4 py-2">B.Sc</td>
//                     <td className="border px-4 py-2 text-yellow-600">Pending</td>
//                   </tr>
//                 </tbody>
//               </table>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AdminDashboard;

// import React, { useState } from "react";
// import {
//   FaBell,
//   FaUserCircle,
//   FaSignOutAlt,
//   FaUserTie,
//   FaBook,
//   FaHome,
//   FaFileAlt,
//   FaClipboardCheck,
//   FaMoneyBill,
//   FaCalendarAlt,
// } from "react-icons/fa";

// const StaffDashboard = () => {
//   const [activeSection, setActiveSection] = useState("Profile");

//   const sections = [
//     { name: "Profile", icon: <FaUserTie className="mr-2" /> },
//     { name: "Admission Records", icon: <FaBook className="mr-2" /> },
//     { name: "Admission Approval", icon: <FaClipboardCheck className="mr-2" /> },
//     { name: "Live Hostel Occupancy", icon: <FaHome className="mr-2" /> },
//     { name: "Hostel Application Approval", icon: <FaClipboardCheck className="mr-2" /> },
//     { name: "Fee Details", icon: <FaMoneyBill className="mr-2" /> },
//     { name: "Semester Registration Referred", icon: <FaCalendarAlt className="mr-2" /> },
//     { name: "Exam Registration", icon: <FaFileAlt className="mr-2" /> },
//   ];

//   const instituteName = "Institute Name";

//   const handleLogout = () => {
//     alert("Logged out!");
//     // 🔹 Implement actual logout logic here
//   };

//   return (
//     <div className="font-sans">
//       {/* Top Navbar */}
//       <div className="flex justify-between items-center bg-blue-100 px-5 py-3 border-b border-blue-300 text-blue-900">
//         {/* 🔹 Staff icon + text on left */}
//         <div className="flex items-center gap-3">
//           <FaUserTie className="h-7 w-7 text-blue-900" />
//           <div>
//             <h2 className="text-lg font-bold text-blue-900 m-0">Staff</h2>
//             <span className="text-sm text-blue-700">{instituteName}</span>
//           </div>
//         </div>

//         {/* Right side icons + logout */}
//         <div className="flex items-center gap-4">
//           <FaBell className="h-6 w-6 cursor-pointer text-gray-700 hover:text-blue-600" />
//           <FaUserCircle className="h-7 w-7 cursor-pointer text-gray-700 hover:text-blue-600" />
//           <button
//             onClick={handleLogout}
//             className="flex items-center gap-1 px-3 py-1.5 bg-red-400 text-white font-semibold rounded-md hover:bg-red-500 transition"
//           >
//             <FaSignOutAlt /> Logout
//           </button>
//         </div>
//       </div>

//       {/* Main Content */}
//       <div className="flex min-h-[90vh]">
//         {/* Sidebar */}
//         <div className="w-56 bg-white border-r border-gray-300 py-3">
//           {sections.map((section) => (
//             <div
//               key={section.name}
//               className={`flex items-center px-5 py-3 cursor-pointer rounded-md mx-2 mb-1 transition ${
//                 activeSection === section.name
//                   ? "bg-blue-100 text-blue-900 font-semibold"
//                   : "hover:bg-gray-100 text-gray-700"
//               }`}
//               onClick={() => setActiveSection(section.name)}
//             >
//               {section.icon}
//               {section.name}
//             </div>
//           ))}
//         </div>

//         {/* Content */}
//         <div className="flex-1 p-6 bg-blue-50">
//           <h3 className="text-xl font-bold text-gray-800">{activeSection}</h3>
//           <p className="mt-2 text-gray-600">
//             This is the <b>{activeSection}</b> section. Display relevant data here.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default StaffDashboard;


// Dashboard.jsx
// import React, { useState } from "react";
// import { FaEye, FaTrash } from "react-icons/fa";

// const Dashboard = () => {
//   const [activeItem, setActiveItem] = useState("Admission Records");

//   const cards = [
//     { title: "Total Applications", value: "1250" },
//     { title: "Pending", value: "350" },
//     { title: "Approved", value: "700" },
//     { title: "Rejected", value: "200" },
//     { title: "Seats Filled", value: "700/1000" },
//   ];

//   const applications = [
//     { id: "1023457", name: "Aarav Sharma", course: "CSE(BTECH)", status: "Approved", color: "green" },
//     { id: "1023489", name: "Ananya Mehta", course: "CSE(BTECH)", status: "Rejected", color: "red" },
//     { id: "1023526", name: "Rohan Kapoor", course: "CSE(BTECH)", status: "Pending", color: "purple" },
//     { id: "1023562", name: "Priya Nair", course: "CSE(BTECH)", status: "Approved", color: "green" },
//     { id: "1023598", name: "Kavya Iyer", course: "CSE(BTECH)", status: "Pending", color: "purple" },
//   ];

//   const getStatusClass = (color) => {
//     const map = {
//       green: "bg-green-100 text-green-700",
//       red: "bg-red-100 text-red-700",
//       purple: "bg-purple-100 text-purple-700",
//       yellow: "bg-yellow-100 text-yellow-700",
//       cyan: "bg-cyan-100 text-cyan-700",
//     };
//     return map[color] || "bg-gray-100 text-gray-700";
//   };

//   return (
//     <div className="flex flex-col min-h-screen font-sans p-6 bg-gray-50">
//       {/* Page Heading */}
//       <div className="mb-6">
//         <h1 className="text-2xl font-bold text-gray-800">{activeItem}</h1>
//       </div>

//       {/* Cards */}
//       <div className="flex flex-wrap gap-4 mb-6">
//         {cards.map((card) => (
//           <div key={card.title} className="bg-white p-4 rounded-lg shadow-md flex-1 min-w-[150px]">
//             <div className="text-gray-500 text-sm">{card.title}</div>
//             <div className="text-gray-800 font-bold text-xl">{card.value}</div>
//           </div>
//         ))}
//       </div>

//       {/* Applications Table */}
//       <div className="bg-white p-4 rounded-lg shadow-md overflow-x-auto">
//         <table className="w-full table-fixed border-collapse">
//           <thead>
//             <tr className="bg-gray-100 text-gray-600 text-sm">
//               <th className="p-2 text-left w-1/5">Admission ID</th>
//               <th className="p-2 text-left w-1/5">Name</th>
//               <th className="p-2 text-left w-1/5">Course</th>
//               <th className="p-2 text-left w-1/5">Status</th>
//               <th className="p-2 text-left w-1/5">Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {applications.map((app) => (
//               <tr key={app.id} className="hover:bg-gray-50">
//                 <td className="p-2">{app.id}</td>
//                 <td className="p-2">{app.name}</td>
//                 <td className="p-2">{app.course}</td>
//                 <td className="p-2">
//                   <span className={`px-1 py-1 rounded-full text-xs font-medium ${getStatusClass(app.color)}`}>
//                     {app.status}
//                   </span>
//                 </td>
//                 <td className="p-2">
//                   <div className="inline-flex gap-3">
//                     <button className="flex items-center gap-1 px-2 py-1 bg-blue-100 text-blue-700 rounded hover:bg-blue-200">
//                       <FaEye /> View
//                     </button>
//                     <button className="flex items-center gap-1 px-2 py-1 bg-red-100 text-red-700 rounded hover:bg-red-200">
//                       <FaTrash /> Delete
//                     </button>
//                   </div>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>

//         {/* Pagination */}
//         <div className="flex justify-between items-center mt-4 text-gray-500 text-sm">
//           <span>Showing 1 to 5 of 1250 results</span>
//           <div className="flex gap-2">
//             <button className="px-2 py-1 border rounded hover:bg-gray-100">Previous</button>
//             <button className="px-2 py-1 border rounded hover:bg-gray-100">Next</button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;


// import React from "react";
// import { FaEye, FaTrash } from "react-icons/fa";

// const FeeRecords = () => {
//   const records = [
//     {
//       id: "112415001",
//       name: "Sophia Clark",
//       totalFee: "₹1,00,000",
//       status: "Partial",
//       statusColor: "yellow",
//       credited: "₹0",
//       debited: "₹70,000",
//     },
//     {
//       id: "112415002",
//       name: "Liam Harris",
//       totalFee: "₹1,00,000",
//       status: "Paid",
//       statusColor: "green",
//       credited: "₹1,00,000",
//       debited: "₹0",
//     },
//     {
//       id: "112415003",
//       name: "Olivia Turner",
//       totalFee: "₹1,00,000",
//       status: "Partial",
//       statusColor: "yellow",
//       credited: "₹0",
//       debited: "₹65,000",
//     },
//     {
//       id: "112415004",
//       name: "Isabella Reed",
//       totalFee: "₹1,00,000",
//       status: "Pending",
//       statusColor: "red",
//       credited: "₹0",
//       debited: "₹1,00,000",
//     },
//   ];

//   const getStatusClass = (color) => {
//     const map = {
//       green: "bg-green-100 text-green-700",
//       yellow: "bg-yellow-100 text-yellow-700",
//       red: "bg-red-100 text-red-700",
//     };
//     return map[color] || "bg-gray-100 text-gray-700";
//   };

//   return (
//     <div className="flex min-h-screen w-full bg-gray-50">
      
//       {/* Main Content */}
//       <main className="flex-1 p-6">
//         <h1 className="text-2xl font-bold mb-6">Fee Records</h1>

//         {/* Summary Cards */}
//         <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-6">
//           <div className="bg-white border rounded-lg p-4 shadow">
//             <p className="text-sm font-medium text-gray-600">Total Fees Collected</p>
//             <p className="text-2xl font-bold mt-2">₹2,65,000</p>
//           </div>
//           <div className="bg-white border rounded-lg p-4 shadow">
//             <p className="text-sm font-medium text-gray-600">Credited Amount</p>
//             <p className="text-2xl font-bold mt-2 text-green-600">₹1,00,000</p>
//           </div>
//           <div className="bg-white border rounded-lg p-4 shadow">
//             <p className="text-sm font-medium text-gray-600">Debited Amount</p>
//             <p className="text-2xl font-bold mt-2 text-red-600">₹2,35,000</p>
//           </div>
//         </div>

//         {/* Filters */}
//         <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
//           <div>
//             <label className="block text-sm font-medium mb-1">Degree</label>
//             <select className="w-full border rounded p-2">
//               <option>B.Tech</option>
//               <option>M.Tech</option>
//               <option>PhD</option>
//             </select>
//           </div>
//           <div>
//             <label className="block text-sm font-medium mb-1">Semester</label>
//             <select className="w-full border rounded p-2">
//               <option>1</option>
//               <option>2</option>
//               <option>3</option>
//               <option>4</option>
//               <option>5</option>
//               <option>6</option>
//               <option>7</option>
//               <option>8</option>
//             </select>
//           </div>
//           <div>
//             <label className="block text-sm font-medium mb-1">Branch</label>
//             <select className="w-full border rounded p-2">
//               <option>CSE</option>
//               <option>ECE</option>
//             </select>
//           </div>
//         </div>

//         {/* Fee Table */}
//         <div className="overflow-x-auto bg-white shadow rounded">
//           <table className="min-w-full border border-gray-300">
//             <thead className="bg-gray-100">
//               <tr>
//                 <th className="border px-4 py-2 text-left">MIS</th>
//                 <th className="border px-4 py-2 text-left">Student Name</th>
//                 <th className="border px-4 py-2 text-left">Total Fee</th>
//                 <th className="border px-4 py-2 text-left">Status</th>
//                 <th className="border px-4 py-2 text-left">Credited Amount</th>
//                 <th className="border px-4 py-2 text-left">Debited Amount</th>
//                 <th className="border px-4 py-2 text-left">Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {records.map((r) => (
//                 <tr key={r.id}>
//                   <td className="border px-4 py-2">{r.id}</td>
//                   <td className="border px-4 py-2 font-semibold">{r.name}</td>
//                   <td className="border px-4 py-2">{r.totalFee}</td>
//                   <td className="border px-4 py-2">
//                     <span
//                       className={`px-2 py-1 rounded text-xs font-medium ${
//                         getStatusClass(r.statusColor)
//                       }`}
//                     >
//                       {r.status}
//                     </span>
//                   </td>
//                   <td className="border px-4 py-2">{r.credited}</td>
//                   <td className="border px-4 py-2">{r.debited}</td>
//                   <td className="border px-4 py-2">
//                     <div className="inline-flex gap-2">
//                       <button className="flex items-center gap-1 px-2 py-1 bg-blue-100 text-blue-700 rounded hover:bg-blue-200">
//                         <FaEye /> View
//                       </button>
//                       <button className="flex items-center gap-1 px-2 py-1 bg-red-100 text-red-700 rounded hover:bg-red-200">
//                         <FaTrash /> Delete
//                       </button>
//                     </div>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>

//         {/* Totals */}
//         {/* <div className="mt-6 flex justify-end gap-10 text-lg font-semibold">
//           <p>
//             Total Credit: <span className="text-green-600">₹23,25,000</span>
//           </p>
//           <p>
//             Total Debit: <span className="text-red-600">₹5,18,000</span>
//           </p>
//         </div> */}

//         {/* Pagination */}
//         <div className="flex justify-end items-center gap-2 mt-4">
//           <button className="px-3 py-1 border rounded">Previous</button>
//           <button className="px-3 py-1 border rounded">Next</button>
//         </div>
//       </main>
//     </div>
//   );
// };

// export default FeeRecords;
