// import React from 'react'

// const SemesterRegistration = () => {
//   return (
//     <div>
//       <h1>SemesterRegistration</h1>
//     </div>
//   )
// }

// export default SemesterRegistration
import { useState } from "react";

export default function SemesterRegistration() {
  const [paymentMode, setPaymentMode] = useState("");
  const [residentialStatus, setResidentialStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Your form has been submitted!");
    setPaymentMode("");
    setResidentialStatus("");
    e.target.reset();
  };

  return (
    <div className="bg-gray-50 font-[Manrope] text-gray-800 min-h-screen">
      {/* Top Navbar */}
      <header className="fixed top-0 left-0 right-0 bg-white shadow-md h-16 flex items-center justify-between px-6 z-50">
        <div className="flex items-center gap-3">
          <span className="material-symbols-outlined text-sky-600">school</span>
          <h1 className="text-lg font-bold text-gray-800">IIIT College ERP</h1>
        </div>
        <div className="flex items-center gap-6">
          <button className="relative">
            <span className="material-symbols-outlined text-gray-600 hover:text-sky-600">
              notifications
            </span>
            <span className="absolute -top-1 -right-1 inline-flex items-center justify-center px-1.5 py-0.5 text-xs font-bold leading-none text-white bg-red-600 rounded-full">
              3
            </span>
          </button>
          <img
            src="https://via.placeholder.com/32"
            alt="Profile"
            className="w-9 h-9 rounded-full border-2 border-gray-300 cursor-pointer"
          />
        </div>
      </header>

      {/* Sidebar + Main */}
      <div className="flex pt-16">
        {/* Sidebar */}
        <aside className="fixed left-0 top-16 h-[calc(100vh-4rem)] w-64 bg-white shadow-lg hidden lg:flex flex-col p-4">
          <nav className="space-y-2">
            <a
              href="#"
              className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100 text-gray-600"
            >
              <span className="material-symbols-outlined">dashboard</span>
              <span className="text-sm font-medium">Dashboard</span>
            </a>
            <a
              href="#"
              className="flex items-center gap-3 px-3 py-2 rounded-lg bg-sky-50 text-sky-700"
            >
              <span className="material-symbols-outlined">assignment</span>
              <span className="text-sm font-medium">Semester Registration</span>
            </a>
            <a
              href="#"
              className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100 text-gray-600"
            >
              <span className="material-symbols-outlined">check_circle</span>
              <span className="text-sm font-medium">Attendance</span>
            </a>
            <a
              href="#"
              className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100 text-gray-600"
            >
              <span className="material-symbols-outlined">book</span>
              <span className="text-sm font-medium">Subjects</span>
            </a>
            <a
              href="#"
              className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100 text-gray-600"
            >
              <span className="material-symbols-outlined">payments</span>
              <span className="text-sm font-medium">Payments</span>
            </a>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 lg:ml-64 p-6 sm:p-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-6">
            Semester Registration
          </h2>

          <form
            id="registrationForm"
            className="space-y-8"
            onSubmit={handleSubmit}
          >
            {/* Student Details */}
            <section className="rounded-lg border border-gray-200 bg-white shadow-sm">
              <div className="border-b border-gray-200 p-6">
                <h2 className="text-xl font-semibold text-gray-800">
                  Student Details
                </h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 p-6">
                <label className="flex flex-col">
                  <span className="text-sm font-medium text-gray-700">
                    Scholar No
                  </span>
                  <input
                    type="text"
                    required
                    className="form-input rounded-lg border-gray-300"
                    placeholder="Enter Scholar Number"
                  />
                </label>
                <label className="flex flex-col">
                  <span className="text-sm font-medium text-gray-700">
                    Student Name
                  </span>
                  <input
                    type="text"
                    required
                    className="form-input rounded-lg border-gray-300"
                    placeholder="Enter Full Name"
                  />
                </label>
                <label className="flex flex-col">
                  <span className="text-sm font-medium text-gray-700">
                    Father Name
                  </span>
                  <input
                    type="text"
                    required
                    className="form-input rounded-lg border-gray-300"
                    placeholder="Enter Father's Name"
                  />
                </label>
                <label className="flex flex-col">
                  <span className="text-sm font-medium text-gray-700">
                    Category
                  </span>
                  <input
                    type="text"
                    className="form-input rounded-lg border-gray-300"
                    placeholder="Enter your Category"
                  />
                </label>
                <label className="flex flex-col">
                  <span className="text-sm font-medium text-gray-700">
                    Contact No
                  </span>
                  <input
                    type="text"
                    required
                    className="form-input rounded-lg border-gray-300"
                    placeholder="+91 ..."
                  />
                </label>
                <label className="flex flex-col">
                  <span className="text-sm font-medium text-gray-700">
                    Email ID
                  </span>
                  <input
                    type="email"
                    required
                    className="form-input rounded-lg border-gray-300"
                    placeholder="......@gmail.com"
                  />
                </label>
                <label className="flex flex-col">
                  <span className="text-sm font-medium text-gray-700">
                    Program / Degree
                  </span>
                  <select
                    required
                    className="form-select rounded-lg border-gray-300"
                  >
                    <option value="">Select Program</option>
                    <option value="B.Tech">B.Tech</option>
                    <option value="M.Tech">M.Tech</option>
                    <option value="Ph.D.">Ph.D</option>
                  </select>
                </label>
                <label className="flex flex-col">
                  <span className="text-sm font-medium text-gray-700">
                    Branch / Department
                  </span>
                  <input
                    type="text"
                    className="form-input rounded-lg border-gray-300"
                    placeholder="Enter Branch / Department"
                  />
                </label>
                <label className="flex flex-col">
                  <span className="text-sm font-medium text-gray-700">
                    Semester
                  </span>
                  <select
                    required
                    className="form-select rounded-lg border-gray-300"
                  >
                    <option value="">Select Semester</option>
                    <option value="1">1st</option>
                    <option value="2">2nd</option>
                    <option value="3">3rd</option>
                    <option value="4">4th</option>
                    <option value="5">5th</option>
                    <option value="6">6th</option>
                    <option value="7">7th</option>
                    <option value="8">8th</option>
                  </select>
                </label>
                <label className="flex flex-col">
                  <span className="text-sm font-medium text-gray-700">
                    Academic Year
                  </span>
                  <input
                    type="text"
                    required
                    className="form-input rounded-lg border-gray-300"
                    placeholder="2025-20**"
                  />
                </label>
                <label className="flex flex-col">
                  <span className="text-sm font-medium text-gray-700">
                    Academic Session
                  </span>
                  <select
                    required
                    className="form-select rounded-lg border-gray-300"
                  >
                    <option value="">Select</option>
                    <option value="Odd">Odd</option>
                    <option value="Even">Even</option>
                  </select>
                </label>
              </div>
            </section>

            {/* Residential Details */}
            <section className="rounded-lg border border-gray-200 bg-white shadow-sm">
              <div className="border-b border-gray-200 p-6">
                <h2 className="text-xl font-semibold text-gray-800">
                  Residential Details
                </h2>
              </div>
              <div className="p-6 space-y-6">
                <label className="flex flex-col">
                  <span className="text-sm font-medium text-gray-700">
                    Residential Status
                  </span>
                  <select
                    value={residentialStatus}
                    onChange={(e) => setResidentialStatus(e.target.value)}
                    required
                    className="form-select rounded-lg border-gray-300"
                  >
                    <option value="">Select</option>
                    <option value="Hostel">Hostel</option>
                    <option value="Day Scholar">Day Scholar</option>
                  </select>
                </label>

                {residentialStatus === "Hostel" && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <label className="flex flex-col">
                      <span className="text-sm font-medium text-gray-700">
                        Hostel Name
                      </span>
                      <input
                        type="text"
                        className="form-input rounded-lg border-gray-300"
                        placeholder="Enter Hostel Name"
                      />
                    </label>
                    <label className="flex flex-col">
                      <span className="text-sm font-medium text-gray-700">
                        Hostel Room
                      </span>
                      <input
                        type="text"
                        className="form-input rounded-lg border-gray-300"
                        placeholder="Enter Room Number"
                      />
                    </label>
                  </div>
                )}

                {residentialStatus === "Day Scholar" && (
                  <div>
                    <label className="flex flex-col">
                      <span className="text-sm font-medium text-gray-700">
                        House Address
                      </span>
                      <textarea
                        className="form-textarea rounded-lg border-gray-300"
                        placeholder="Enter your full address"
                      ></textarea>
                    </label>
                  </div>
                )}
              </div>
            </section>

            {/* Payment Details */}
            <section className="rounded-lg border border-gray-200 bg-white shadow-sm">
              <div className="border-b border-gray-200 p-6">
                <h2 className="text-xl font-semibold text-gray-800">
                  Payment Details
                </h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 p-6">
                <label className="flex flex-col">
                  <span className="text-sm font-medium text-gray-700">
                    Payment Mode
                  </span>
                  <select
                    value={paymentMode}
                    onChange={(e) => setPaymentMode(e.target.value)}
                    required
                    className="form-select rounded-lg border-gray-300"
                  >
                    <option value="">Select</option>
                    <option value="icollect">I-Collect</option>
                    <option value="utr">UTR</option>
                  </select>
                </label>
                <label className="flex flex-col">
                  <span className="text-sm font-medium text-gray-700">
                    Amount
                  </span>
                  <input
                    type="number"
                    required
                    className="form-input rounded-lg border-gray-300"
                    placeholder="Enter Amount"
                  />
                </label>

                {paymentMode === "icollect" && (
                  <div className="flex flex-col col-span-1">
                    <span className="text-sm font-medium text-gray-700">
                      I-Collect No
                    </span>
                    <input
                      type="text"
                      className="form-input rounded-lg border-gray-300"
                      placeholder="Enter I-Collect Number"
                    />
                  </div>
                )}

                {paymentMode === "utr" && (
                  <div className="flex flex-col col-span-1">
                    <span className="text-sm font-medium text-gray-700">
                      UTR No
                    </span>
                    <input
                      type="text"
                      className="form-input rounded-lg border-gray-300"
                      placeholder="Enter UTR Number"
                    />
                  </div>
                )}

                <label className="flex flex-col col-span-1">
                  <span className="text-sm font-medium text-gray-700">
                    Payment Date
                  </span>
                  <input
                    type="date"
                    required
                    className="form-input rounded-lg border-gray-300"
                  />
                </label>
              </div>
            </section>

            {/* Buttons */}
            <div className="flex justify-end space-x-4 mt-4">
              <button
                type="reset"
                className="px-6 py-3 rounded-lg bg-red-500 text-white font-semibold hover:bg-red-600"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-6 py-3 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700"
              >
                Submit
              </button>
            </div>
          </form>
        </main>
      </div>
    </div>
  );
}
