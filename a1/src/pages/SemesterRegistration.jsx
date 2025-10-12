import React, { useState } from "react";

const SemesterRegistration = () => {
  const initialFormData = {
    scholarNumber: "",
    studentName: "",
    fatherName: "",
    contactNumber: "",
    email: "",
    program: "",
    department: "",
    semester: "",
    academicYear: "",
    academicSession: "",
    residentialStatus: "",
    hostelName: "",
    roomNumber: "",
    homeAddress: "",
    paymentMode: "",
    amount: "",
    icollectNumber: "",
    utrNumber: "",
    paymentDate: "",
  };

  const [formData, setFormData] = useState(initialFormData);
  const [formErrors, setFormErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setFormErrors((prev) => ({ ...prev, [name]: false }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const requiredFields = [
      "scholarNumber",
      "studentName",
      "fatherName",
      "contactNumber",
      "email",
      "program",
      "semester",
      "academicYear",
      "academicSession",
      "residentialStatus",
      "paymentMode",
      "amount",
      "paymentDate",
    ];

    if (formData.residentialStatus === "Hostel") {
      requiredFields.push("hostelName", "roomNumber");
    } else if (formData.residentialStatus === "Day Scholar") {
      requiredFields.push("homeAddress");
    }

    if (formData.paymentMode === "icollect") requiredFields.push("icollectNumber");
    if (formData.paymentMode === "utr") requiredFields.push("utrNumber");

    const errors = {};
    requiredFields.forEach((field) => {
      if (!formData[field] || formData[field].trim() === "") {
        errors[field] = true;
      }
    });

    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      alert("Semester Registration Form Submitted Successfully!\n\n" + JSON.stringify(formData, null, 2));
    }
  };

  const inputClass =
    "p-2 border rounded-md text-sm bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:outline-none";
  const errorClass = "border-red-500";

  return (
    <div className="min-h-screen text-gray-800 bg-white  flex justify-center ">
      <main className="w-full max-w-4xl">
        <div className="bg-blue-50 shadow-md rounded-lg p-8">
          <h1 className="text-3xl font-bold text-center mb-2">Semester Registration</h1>
          <p className="text-center text-gray-500 mb-6">
            Please complete all required fields to register for your semester.
          </p>

          <form className="space-y-8" onSubmit={handleSubmit}>
            {/* Student Details */}
            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-4 border-b pb-2">
                Student Details
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { label: "Scholar Number", name: "scholarNumber", type: "text", placeholder: "Enter Scholar No" },
                  { label: "Student Name", name: "studentName", type: "text", placeholder: "Enter Full Name" },
                  { label: "Father’s Name", name: "fatherName", type: "text", placeholder: "Enter Father's Name" },
                  { label: "Contact Number", name: "contactNumber", type: "text", placeholder: "+91 ..." },
                  { label: "Email ID", name: "email", type: "email", placeholder: "yourname@gmail.com" },
                  { label: "Program / Degree", name: "program", type: "select", options: ["B.Tech", "M.Tech", "Ph.D."] },
                  { label: "Branch / Department", name: "department", type: "text", placeholder: "Enter Department" },
                  { label: "Semester", name: "semester", type: "select", options: ["1st","2nd","3rd","4th","5th","6th","7th","8th"] },
                  { label: "Academic Year", name: "academicYear", type: "text", placeholder: "2025-26" },
                  { label: "Academic Session", name: "academicSession", type: "select", options: ["Odd", "Even"] },
                ].map((field) => (
                  <label key={field.name} className="flex flex-col text-sm font-semibold">
                    {field.label}
                    {field.type === "select" ? (
                      <select
                        name={field.name}
                        value={formData[field.name]}
                        onChange={handleChange}
                        className={`${inputClass} ${formErrors[field.name] ? errorClass : ""}`}
                      >
                        <option value="">Select {field.label}</option>
                        {field.options?.map((opt) => (
                          <option key={opt} value={opt}>{opt}</option>
                        ))}
                      </select>
                    ) : (
                      <input
                        type={field.type}
                        name={field.name}
                        value={formData[field.name]}
                        onChange={handleChange}
                        placeholder={field.placeholder}
                        className={`${inputClass} ${formErrors[field.name] ? errorClass : ""}`}
                      />
                    )}
                    {formErrors[field.name] && (
                      <span className="text-red-500 text-xs mt-1">This field is required</span>
                    )}
                  </label>
                ))}
              </div>
            </section>

            {/* Residential Details */}
            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-4 border-b pb-2">
                Residential Details
              </h2>
              <label className="flex flex-col text-sm font-semibold mb-4">
                Residential Status
                <select
                  name="residentialStatus"
                  value={formData.residentialStatus}
                  onChange={handleChange}
                  className={`${inputClass} ${formErrors.residentialStatus ? errorClass : ""}`}
                >
                  <option value="">Select</option>
                  <option value="Hostel">Hostel</option>
                  <option value="Day Scholar">Day Scholar</option>
                </select>
                {formErrors.residentialStatus && (
                  <span className="text-red-500 text-xs mt-1">This field is required</span>
                )}
              </label>

              {formData.residentialStatus === "Hostel" && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <label className="flex flex-col text-sm font-semibold">
                    Hostel Name
                    <input
                      type="text"
                      name="hostelName"
                      value={formData.hostelName}
                      onChange={handleChange}
                      className={`${inputClass} ${formErrors.hostelName ? errorClass : ""}`}
                      placeholder="Enter Hostel Name"
                    />
                    {formErrors.hostelName && (
                      <span className="text-red-500 text-xs mt-1">This field is required</span>
                    )}
                  </label>
                  <label className="flex flex-col text-sm font-semibold">
                    Room Number
                    <input
                      type="text"
                      name="roomNumber"
                      value={formData.roomNumber}
                      onChange={handleChange}
                      className={`${inputClass} ${formErrors.roomNumber ? errorClass : ""}`}
                      placeholder="Enter Room No"
                    />
                    {formErrors.roomNumber && (
                      <span className="text-red-500 text-xs mt-1">This field is required</span>
                    )}
                  </label>
                </div>
              )}

              {formData.residentialStatus === "Day Scholar" && (
                <label className="flex flex-col text-sm font-semibold">
                  Home Address
                  <textarea
                    name="homeAddress"
                    value={formData.homeAddress}
                    onChange={handleChange}
                    className={`${inputClass} ${formErrors.homeAddress ? errorClass : ""}`}
                    placeholder="Enter your full address"
                  ></textarea>
                  {formErrors.homeAddress && (
                    <span className="text-red-500 text-xs mt-1">This field is required</span>
                  )}
                </label>
              )}
            </section>

            {/* Payment Details */}
            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-4 border-b pb-2">
                Payment Details
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <label className="flex flex-col text-sm font-semibold">
                  Payment Mode
                  <select
                    name="paymentMode"
                    value={formData.paymentMode}
                    onChange={handleChange}
                    className={`${inputClass} ${formErrors.paymentMode ? errorClass : ""}`}
                  >
                    <option value="">Select</option>
                    <option value="icollect">I-Collect</option>
                    <option value="utr">UTR</option>
                  </select>
                  {formErrors.paymentMode && (
                    <span className="text-red-500 text-xs mt-1">This field is required</span>
                  )}
                </label>
                <label className="flex flex-col text-sm font-semibold">
                  Amount
                  <input
                    type="number"
                    name="amount"
                    value={formData.amount}
                    onChange={handleChange}
                    placeholder="Enter Amount"
                    className={`${inputClass} ${formErrors.amount ? errorClass : ""}`}
                  />
                  {formErrors.amount && (
                    <span className="text-red-500 text-xs mt-1">This field is required</span>
                  )}
                </label>

                {formData.paymentMode === "icollect" && (
                  <label className="flex flex-col text-sm font-semibold col-span-2">
                    I-Collect Number
                    <input
                      type="text"
                      name="icollectNumber"
                      value={formData.icollectNumber}
                      onChange={handleChange}
                      placeholder="Enter I-Collect No"
                      className={`${inputClass} ${formErrors.icollectNumber ? errorClass : ""}`}
                    />
                    {formErrors.icollectNumber && (
                      <span className="text-red-500 text-xs mt-1">This field is required</span>
                    )}
                  </label>
                )}

                {formData.paymentMode === "utr" && (
                  <label className="flex flex-col text-sm font-semibold col-span-2">
                    UTR Number
                    <input
                      type="text"
                      name="utrNumber"
                      value={formData.utrNumber}
                      onChange={handleChange}
                      placeholder="Enter UTR No"
                      className={`${inputClass} ${formErrors.utrNumber ? errorClass : ""}`}
                    />
                    {formErrors.utrNumber && (
                      <span className="text-red-500 text-xs mt-1">This field is required</span>
                    )}
                  </label>
                )}

                <label className="flex flex-col text-sm font-semibold col-span-2 md:col-span-1">
                  Payment Date
                  <input
                    type="date"
                    name="paymentDate"
                    value={formData.paymentDate}
                    onChange={handleChange}
                    className={`${inputClass} ${formErrors.paymentDate ? errorClass : ""}`}
                  />
                  {formErrors.paymentDate && (
                    <span className="text-red-500 text-xs mt-1">This field is required</span>
                  )}
                </label>
              </div>
            </section>

            {/* Buttons */}
            <div className="flex gap-4 mt-4 justify-end">
              <button
                type="button"
                className="px-4 py-2 rounded-md bg-gray-100 text-gray-800 font-semibold hover:bg-gray-200"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 rounded-md bg-blue-600 text-white font-semibold hover:bg-blue-700"
              >
                Submit Registration
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
};

export default SemesterRegistration;
