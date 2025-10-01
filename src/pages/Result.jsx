import React from "react";

const resultsData = [
  { mis: "11223344", semester: 1, examType: "Regular", resultDate: "2023-01-15", result: "Pass" },
  { mis: "11223344", semester: 2, examType: "Regular", resultDate: "2023-06-20", result: "Pass" },
  { mis: "11223344", semester: 3, examType: "Regular", resultDate: "2024-01-10", result: "Pass" },
  { mis: "11223344", semester: 4, examType: "Regular", resultDate: "2024-06-18", result: "Fail" },
  { mis: "11223344", semester: 5, examType: "Supplementary", resultDate: "2025-01-12", result: "Pass" },
];

const Result = () => {
  return (
    <div className="flex min-h-screen flex-col bg-slate-50 text-gray-800">
      <main className="flex-grow container mx-auto px-4 sm:px-6 py-8">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-6">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Result</h1>
          <p className="text-sm sm:text-base text-gray-500 mt-2 sm:mt-0">
            Access your semester-wise results and download them in PDF format.
          </p>
        </div>

        <div className="hidden sm:grid grid-cols-6 gap-4 bg-slate-300 text-slate-600 text-xs font-semibold uppercase px-4 py-2 rounded-t-lg">
          <div>MIS No.</div>
          <div>Semester</div>
          <div>Exam Type</div>
          <div>Result Date</div>
          <div>Result</div>
          <div className="text-center">Actions</div>
        </div>

        <div className="space-y-2">
          {resultsData.map((res, idx) => (
            <div key={idx} className="flex flex-col sm:grid sm:grid-cols-6 items-start sm:items-center justify-between bg-white p-4 rounded-lg shadow-sm">
              <div className="sm:px-2 font-medium text-gray-900">{res.mis}</div>
              <div className="sm:px-2 text-gray-700">{res.semester}</div>
              <div className="sm:px-2 text-gray-700">{res.examType}</div>
              <div className="sm:px-2 text-gray-700">{res.resultDate}</div>
              <div className="sm:px-2">
                <span
                  className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                    res.result === "Pass" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                  }`}
                >
                  {res.result}
                </span>
              </div>
              <div className="flex flex-col sm:flex-row gap-2 justify-center sm:justify-start mt-2 sm:mt-0">
                <button className="flex items-center justify-center gap-2 w-full sm:w-auto rounded-md border border-slate-300 px-3 py-2 text-xs font-bold text-slate-600 hover:bg-slate-100">
                  VIEW
                </button>
                <button className="flex items-center justify-center gap-2 w-full sm:w-auto rounded-md bg-blue-600 px-3 py-2 text-xs font-bold text-white hover:bg-blue-700">
                  Download PDF
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Result;
