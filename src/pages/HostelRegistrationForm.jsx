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
    setFormErrors((prev) => ({ ...prev, [name]: false })); // clear error on change
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const requiredFields = [
      "fullName","dob","gender","nationality","religion",
      "category","bloodGroup","mobile","email",
      "course","year","regNo","rollNo",
      "permanentAddress","localAddress","declaration"
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

    if (Object.keys(errors).length > 0) return; // stop if any error

    alert("Form Submitted Successfully!\n\n" + JSON.stringify(formData, null, 2));
  };

  const inputClass =
    "form-input w-full rounded-lg border-gray-300 bg-white text-gray-800 shadow-sm focus:ring-primary-500 focus:border-primary-500";

  const errorClass = "border-red-500";

  return (
    <main className="flex-1 lg:ml-64">
      <form onSubmit={handleSubmit}>
        <div className="p-6 sm:p-8 md:p-10">
          <div className="mx-auto max-w-4xl space-y-10">
            {/* Personal Details */}
            <section className="rounded-lg border border-gray-200 bg-white shadow-sm">
              <div className="border-b border-gray-200 p-6">
                <h2 className="text-xl font-semibold text-gray-800">Personal Details</h2>
              </div>
              <div className="grid grid-cols-1 gap-6 p-6 sm:grid-cols-2">
                {[
                  { label: "Full Name", name: "fullName", type: "text" },
                  { label: "Date of Birth", name: "dob", type: "date" },
                  { label: "Gender", name: "gender", type: "select", options: ["Male","Female","Other"] },
                  { label: "Nationality", name: "nationality", type: "text" },
                  { label: "Religion", name: "religion", type: "text" },
                  { label: "Category", name: "category", type: "text" },
                  { label: "Blood Group", name: "bloodGroup", type: "text" },
                  { label: "Mobile Number", name: "mobile", type: "tel" },
                  { label: "Email ID", name: "email", type: "email" }
                ].map((field) => (
                  <label key={field.name} className="col-span-1 flex flex-col">
                    <p className="pb-2 text-sm font-medium text-gray-700">{field.label}</p>
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
                        name={field.name}
                        type={field.type}
                        value={formData[field.name]}
                        onChange={handleChange}
                        className={`${inputClass} ${formErrors[field.name] ? errorClass : ""}`}
                        placeholder={`Enter your ${field.label.toLowerCase()}`}
                      />
                    )}
                    {formErrors[field.name] && (
                      <span className="text-red-500 text-xs mt-1">This field is required</span>
                    )}
                  </label>
                ))}
              </div>
            </section>

            {/* Declaration */}
            <section className="rounded-lg border border-gray-200 bg-white shadow-sm">
              <div className="border-b border-gray-200 p-6">
                <h2 className="text-xl font-semibold text-gray-800">Declaration</h2>
              </div>
              <div className="p-6">
                <label className="flex items-start gap-x-3">
                  <input
                    type="checkbox"
                    name="declaration"
                    checked={formData.declaration}
                    onChange={handleChange}
                    className={`h-5 w-5 rounded border-gray-300 bg-white text-primary-600 focus:ring-primary-500 ${formErrors.declaration ? "border-red-500" : ""}`}
                  />
                  <p className="text-sm text-gray-700 flex items-center gap-2">
                    I hereby declare that the information provided above is true and correct
                  </p>
                </label>
                {formErrors.declaration && (
                  <span className="text-red-500 text-xs mt-1">You must accept the declaration</span>
                )}
              </div>
            </section>

            {/* Submit Button */}
            <div className="flex justify-end pt-4">
              <button
                type="submit"
                className="flex items-center justify-center rounded-lg bg-blue-600 px-6 py-3 text-sm font-bold text-white shadow-sm transition-colors hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
              >
                Submit Application
              </button>
            </div>
          </div>
        </div>
      </form>
    </main>
  );
};

export default HostelApplicationForm;
