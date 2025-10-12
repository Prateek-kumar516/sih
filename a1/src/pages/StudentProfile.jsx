import React from "react";

export default function StudentProfile() {
  return (
        <div
          className="group/design-root bg-blue-50 flex-1  flex flex-col p-8"
          style={{ fontFamily: '"Space Grotesk", "Noto Sans", sans-serif' }}
        >
          <main className="flex-1">
            <div className="flex flex-col gap-10">
              
              {/* Header Card */}
              <div className="glassmorphism flex items-center justify-between rounded-xl p-8 border border-gray-200 shadow-sm bg-gray-300">
                <div className="flex items-center gap-8">
                  <div>
                    <div className="h-36 w-36 rounded-full border-4 border-gray-400 bg-gray-300 flex items-center justify-center text-gray-600 text-lg font-medium">
                      Profile Image
                    </div>
                  </div>
                  <div>
                    <h2 className="text-3xl font-semibold text-gray-800">Ethan Harper</h2>
                    <p className="text-base text-gray-600 mt-1">ID: 2023001234</p>
                    <p className="mt-1 text-base text-gray-500">Computer Science</p>
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-2 rounded-full border border-green-500/30 bg-green-500/20 px-4 py-2 text-sm font-medium text-green-700">
                    ✔ Active Student
                  </div>
                </div>
              </div>

              {/* Personal Information */}
              <div className="glassmorphism rounded-xl p-8 border border-gray-200 shadow-sm bg-white">
                <h3 className="mb-6 text-2xl font-semibold text-gray-800">Personal Information</h3>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {[
                    ["Name", "Ethan Harper"],
                    ["Father Name", "John Harper"],
                    ["Mother Name", "Jane Harper"],
                    ["Date of Birth", "May 15, 2002"],
                    ["Gender", "Male"],
                    ["Category", "General"],
                    ["Aadhar No.", "**** **** 1234"],
                    ["Email", "ethan.harper@email.com"],
                    ["Phone", "+1 (555) 123-4567"],
                    ["Address", "123 University Ave, City, State, 12345"]
                  ].map(([label, value], idx) => (
                    <div
                      key={idx}
                      className={`flex flex-col justify-between border-b border-gray-200 pb-4 ${
                        label === "Address" ? "col-span-1 md:col-span-2 lg:col-span-3" : ""
                      }`}
                    >
                      <p className="text-sm font-medium text-gray-500">{label}</p>
                      <p className="mt-1 text-base text-gray-700">{value}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* College Information */}
              <div className="glassmorphism rounded-xl p-8 border border-gray-200 shadow-sm bg-white">
                <h3 className="mb-6 text-2xl font-semibold text-gray-800">College Information</h3>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {[
                    ["MIS No.", "1123456789"],
                    ["Major", "Computer Science"],
                    ["Department", "School of Engineering"],
                    ["Admission Year", "2023"],
                    ["Enrollment Date", "August 2023"]
                  ].map(([label, value], idx) => (
                    <div key={idx} className="flex flex-col justify-between border-b border-gray-200 pb-4">
                      <p className="text-sm font-medium text-gray-500">{label}</p>
                      <p className="mt-1 text-base text-gray-700">{value}</p>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </main>
        </div>
  );
}
