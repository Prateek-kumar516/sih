import React from "react";

const ExamRegistration = () => {
  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Main Form */}
      <main className="flex  justify-center ">
        <div className="bg-blue-50  shadow-md rounded-lg p-8 w-full max-w-3xl">
          <h1 className="text-2xl font-bold text-center mb-2">Exam Registration</h1>
          <p className="text-center text-gray-500 mb-6">
            Complete the form below to register for your upcoming exams.
          </p>

          <form className="space-y-6">
            {/* Student Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <label className="text-sm font-semibold flex flex-col gap-1">
                Student Name
                <input
                  type="text"
                  value="Ananya Sharma"
                  disabled
                  className="p-2 border rounded-md text-sm bg-gray-100 text-gray-600"
                />
              </label>
              <label className="text-sm font-semibold flex flex-col gap-1">
                Roll Number
                <input
                  type="text"
                  value="21CS042"
                  disabled
                  className="p-2 border rounded-md text-sm bg-gray-100 text-gray-600"
                />
              </label>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <label className="text-sm font-semibold flex flex-col gap-1">
                Father's Name
                <input
                  type="text"
                  value="Rakesh Sharma"
                  disabled
                  className="p-2 border rounded-md text-sm bg-gray-100 text-gray-600"
                />
              </label>
              <label className="text-sm font-semibold flex flex-col gap-1">
                Degree
                <input
                  type="text"
                  value="B.Tech"
                  disabled
                  className="p-2 border rounded-md text-sm bg-gray-100 text-gray-600"
                />
              </label>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <label className="text-sm font-semibold flex flex-col gap-1">
                Branch
                <input
                  type="text"
                  value="Computer Science"
                  disabled
                  className="p-2 border rounded-md text-sm bg-gray-100 text-gray-600"
                />
              </label>
              <label className="text-sm font-semibold flex flex-col gap-1">
                Semester
                <select className="p-2 border rounded-md text-sm">
                  <option>Select your semester</option>
                  <option>1st Semester</option>
                  <option>2nd Semester</option>
                  <option>3rd Semester</option>
                  <option selected>4th Semester</option>
                  <option>5th Semester</option>
                  <option>6th Semester</option>
                  <option>7th Semester</option>
                  <option>8th Semester</option>
                </select>
              </label>
            </div>

            {/* Exam Type */}
            <fieldset className="border rounded-md p-4 flex gap-6">
              <legend className="font-semibold px-2">Exam Type</legend>
              <label className="flex items-center gap-2 text-sm font-medium">
                <input type="radio" name="exam_type" defaultChecked /> Regular
              </label>
              <label className="flex items-center gap-2 text-sm font-medium">
                <input type="radio" name="exam_type" /> Re-Exam
              </label>
              <label className="flex items-center gap-2 text-sm font-medium">
                <input type="radio" name="exam_type" /> Backlog
              </label>
            </fieldset>

            {/* Subjects */}
            <fieldset className="border rounded-md p-4 flex flex-col gap-2">
              <legend className="font-semibold px-2">Subjects</legend>
              <label className="flex items-center gap-2 text-sm font-medium">
                <input type="checkbox" /> CS201 - Data Structures
              </label>
              <label className="flex items-center gap-2 text-sm font-medium">
                <input type="checkbox" /> CS202 - Object Oriented Programming
              </label>
              <label className="flex items-center gap-2 text-sm font-medium">
                <input type="checkbox" /> MA201 - Probability & Statistics
              </label>
              <label className="flex items-center gap-2 text-sm font-medium">
                <input type="checkbox" /> EC201 - Digital Electronics
              </label>
              <label className="flex items-center gap-2 text-sm font-medium">
                <input type="checkbox" /> HS201 - Communication Skills
              </label>
              <label className="flex items-center gap-2 text-sm font-medium">
                <input type="checkbox" /> CS203 - Database Management Systems
              </label>
            </fieldset>

            {/* Fee and Status */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <label className="text-sm font-semibold flex flex-col gap-1">
                Exam Fee
                <input
                  type="text"
                  value="₹1500.00"
                  disabled
                  className="p-2 border rounded-md text-sm bg-gray-100 text-gray-600"
                />
              </label>
              <label className="text-sm font-semibold flex flex-col gap-1">
                Payment Status
                <span className="inline-block px-3 py-1 rounded-md text-xs font-semibold bg-yellow-100 text-yellow-700 w-fit">
                  Pending
                </span>
              </label>
            </div>

            {/* Buttons */}
            <div className="flex gap-4 mt-4">
              <button
                type="submit"
                className="px-4 py-2 rounded-md bg-blue-600 text-white font-semibold hover:bg-blue-700"
              >
                Submit Registration
              </button>
              <button
                type="button"
                className="px-4 py-2 rounded-md bg-gray-100 text-gray-800 font-semibold hover:bg-gray-200"
              >
                Pay Fee
              </button>
            </div>

            <div className="text-center mt-4">
              <button
                type="button"
                disabled
                className="px-4 py-2 rounded-md text-blue-600 font-semibold opacity-60 cursor-not-allowed"
              >
                Download Admit Card
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
};

export default ExamRegistration;
