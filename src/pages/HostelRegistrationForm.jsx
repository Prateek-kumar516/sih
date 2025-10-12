import React, { useState } from "react";

const HostelApplicationForm = () => {
  const initialFormData = {
    fullName: "",
    dob: "",
    gender: "",
    nationality: "",
    religion: "",
    category: "",
    bloodGroup: "",
    mobile: "",
    email: "",
    course: "",
    year: "",
    regNo: "",
    rollNo: "",
    permanentAddress: "",
    localAddress: "",
    allergies: "",
    chronicIllnesses: "",
    medications: "",
    dietaryRestrictions: "",
    additionalMedicalInfo: "",
    declaration: false,
  };

  const [formData, setFormData] = useState(initialFormData);
  const [formErrors, setFormErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
    setFormErrors((prev) => ({ ...prev, [name]: false }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const requiredFields = [
      "fullName", "dob", "gender", "nationality", "religion",
      "category", "bloodGroup", "mobile", "email",
      "course", "year", "regNo", "rollNo",
      "permanentAddress", "localAddress", "declaration"
    ];

    const errors = {};
    requiredFields.forEach((field) => {
      if (typeof formData[field] === "boolean") {
        if (!formData[field]) errors[field] = true;
      } else if (formData[field].trim() === "") {
        errors[field] = true;
      }
    });

    setFormErrors(errors);
    if (Object.keys(errors).length > 0) return;

    alert("Form Submitted Successfully!\n\n" + JSON.stringify(formData, null, 2));
  };

  const inputClass =
    "p-2 border rounded-md text-sm text-gray-700 bg-white focus:ring-2 focus:ring-blue-500 focus:outline-none";

  const errorClass = "border-red-500";

  return (
        <main className="flex-1 justify-center bg-gray-50 text-gray-800">
          <div className="flex justify-center ">
            <form
              onSubmit={handleSubmit}
              className="bg-blue-50 shadow-md rounded-lg p-10 w-full max-w-3xl"
            >
              <h1 className="text-2xl font-bold text-center mb-2">
                Hostel Application Form
              </h1>
              <p className="text-center text-gray-500 mb-6">
                Please fill in the form below to apply for hostel accommodation.
              </p>

              {/* Personal & Academic Details */}
              <section className="space-y-6">
                <h2 className="text-lg font-semibold border-b pb-2 text-gray-700">
                  Personal & Academic Details
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    { label: "Full Name", name: "fullName", type: "text" },
                    { label: "Date of Birth", name: "dob", type: "date" },
                    { label: "Gender", name: "gender", type: "select", options: ["Male", "Female", "Other"] },
                    { label: "Nationality", name: "nationality", type: "text" },
                    { label: "Religion", name: "religion", type: "text" },
                    { label: "Category", name: "category", type: "text" },
                    { label: "Blood Group", name: "bloodGroup", type: "text" },
                    { label: "Mobile Number", name: "mobile", type: "tel" },
                    { label: "Email ID", name: "email", type: "email" },
                    { label: "Course", name: "course", type: "text" },
                    { label: "Year", name: "year", type: "text" },
                    { label: "Registration Number", name: "regNo", type: "text" },
                    { label: "Roll Number", name: "rollNo", type: "text" },
                    { label: "Permanent Address", name: "permanentAddress", type: "text" },
                    { label: "Local Address", name: "localAddress", type: "text" },
                  ].map((field) => (
                    <label key={field.name} className="text-sm font-semibold flex flex-col gap-1">
                      {field.label}
                      {field.type === "select" ? (
                        <select
                          name={field.name}
                          value={formData[field.name]}
                          onChange={handleChange}
                          className={`${inputClass} ${formErrors[field.name] ? errorClass : ""}`}
                        >
                          <option value="">Select {field.label}</option>
                          {field.options.map((opt) => (
                            <option key={opt} value={opt}>{opt}</option>
                          ))}
                        </select>
                      ) : (
                        <input
                          type={field.type}
                          name={field.name}
                          value={formData[field.name]}
                          onChange={handleChange}
                          placeholder={`Enter your ${field.label.toLowerCase()}`}
                          className={`${inputClass} ${formErrors[field.name] ? errorClass : ""}`}
                        />
                      )}
                      {formErrors[field.name] && (
                        <span className="text-red-500 text-xs mt-1">
                          This field is required
                        </span>
                      )}
                    </label>
                  ))}
                </div>
              </section>

              {/* Medical Background */}
              <section className="mt-8 space-y-4">
                <h2 className="text-lg font-semibold border-b pb-2 text-gray-700">
                  Medical Background
                </h2>

                {[
                  { label: "Allergies", name: "allergies", type: "radio", options: ["Yes", "No"] },
                  { label: "Chronic Illnesses", name: "chronicIllnesses", type: "radio", options: ["Yes", "No"] },
                  { label: "Medications", name: "medications", type: "radio", options: ["Yes", "No"] },
                  { label: "Dietary Restrictions", name: "dietaryRestrictions", type: "radio", options: ["Yes", "No"] },
                ].map((field) => (
                  <div key={field.name}>
                    <p className="text-sm font-medium text-gray-700 mb-1">{field.label}</p>
                    <div className="flex gap-4">
                      {field.options.map((opt) => (
                        <label key={opt} className="flex items-center gap-2 text-sm">
                          <input
                            type="radio"
                            name={field.name}
                            value={opt}
                            checked={formData[field.name] === opt}
                            onChange={handleChange}
                            className="h-4 w-4 border-gray-300 text-blue-600 focus:ring-blue-500"
                          />
                          {opt}
                        </label>
                      ))}
                    </div>
                  </div>
                ))}

                <label className="flex flex-col">
                  <p className="pb-2 text-sm font-medium text-gray-700">Additional Medical Information</p>
                  <textarea
                    name="additionalMedicalInfo"
                    rows="4"
                    value={formData.additionalMedicalInfo}
                    onChange={handleChange}
                    placeholder="Enter any additional medical information"
                    className={inputClass}
                  ></textarea>
                </label>
              </section>

              {/* Declaration */}
              <section className="mt-8">
                <h2 className="text-lg font-semibold border-b pb-2 text-gray-700">
                  Declaration
                </h2>
                <label className="flex items-start gap-3 mt-4 text-sm font-medium text-gray-700">
                  <input
                    type="checkbox"
                    name="declaration"
                    checked={formData.declaration}
                    onChange={handleChange}
                    className={`h-5 w-5 rounded border-gray-300 focus:ring-blue-500 ${formErrors.declaration ? "border-red-500" : ""}`}
                  />
                  <span>
                    I hereby declare that the information provided above is true and correct.
                  </span>
                </label>
                {formErrors.declaration && (
                  <span className="text-red-500 text-xs mt-1 block">
                    You must accept the declaration
                  </span>
                )}
              </section>

              {/* Submit Button */}
              <div className="flex justify-end mt-8">
                <button
                  type="submit"
                  className="px-4 py-2 rounded-md bg-blue-600 text-white font-semibold hover:bg-blue-700"
                >
                  Submit Application
                </button>
              </div>
            </form>
          </div>
        </main>
  );
};

export default HostelApplicationForm;
