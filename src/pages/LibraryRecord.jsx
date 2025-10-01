import React from "react";

const LibraryRecord = () => {
  return (
    <div className="flex min-h-screen bg-[var(--background-color)] text-gray-800">
        {/* Main Section */}
        <main className="flex-grow container mx-auto px-4 sm:px-6 py-8">
          {/* Responsive heading layout */}
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">
              My Borrowed Books
            </h2>
          </div>

          {/* Responsive Table */}
          <div className="bg-white rounded-lg shadow-md overflow-x-auto">
            {/* Table for desktop/tablet */}
            <table className="w-full text-sm text-left text-gray-500 hidden sm:table">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                <tr>
                  <th className="px-6 py-3 min-w-[200px]">Book Title</th>
                  <th className="px-6 py-3 min-w-[150px]">Author</th>
                  <th className="px-6 py-3">Issue Date</th>
                  <th className="px-6 py-3">Due Date</th>
                  <th className="px-6 py-3">Penalty(₹)</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white border-b hover:bg-gray-50">
                  <th className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                    The Great Adventure
                  </th>
                  <td className="px-6 py-4">Alex Turner</td>
                  <td className="px-6 py-4">Jul 15, 2024</td>
                  <td className="px-6 py-4">
                    <span className="bg-red-100 text-red-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                      Aug 15, 2024
                    </span>
                  </td>
                  <td className="px-6 py-4 font-semibold text-red-600">₹5.00</td>
                </tr>
                <tr className="bg-white border-b hover:bg-gray-50">
                  <th className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                    Science Explorations
                  </th>
                  <td className="px-6 py-4">Dr. Emily Carter</td>
                  <td className="px-6 py-4">Jul 20, 2024</td>
                  <td className="px-6 py-4">
                    <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                      Aug 20, 2024
                    </span>
                  </td>
                  <td className="px-6 py-4">₹0.00</td>
                </tr>
                <tr className="bg-white hover:bg-gray-50">
                  <th className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                    History of the World
                  </th>
                  <td className="px-6 py-4">Prof. David Lee</td>
                  <td className="px-6 py-4">Jul 25, 2024</td>
                  <td className="px-6 py-4">
                    <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                      Aug 25, 2024
                    </span>
                  </td>
                  <td className="px-6 py-4">₹0.00</td>
                </tr>
              </tbody>
            </table>

            {/* Mobile Card View */}
            <div className="sm:hidden divide-y divide-gray-200">
              {/** Tailwind sm:hidden → only visible on mobile (<640px) */}
              <div className="p-4">
                <h3 className="font-semibold text-gray-900">The Great Adventure</h3>
                <p className="text-sm text-gray-600">Author: Alex Turner</p>
                <p className="text-sm">Issued: Jul 15, 2024</p>
                <p className="text-sm">
                  Due:{" "}
                  <span className="bg-red-100 text-red-800 text-xs font-medium px-2 py-0.5 rounded-full">
                    Aug 15, 2024
                  </span>
                </p>
                <p className="text-sm font-semibold text-red-600">Penalty: ₹5.00</p>
              </div>

              <div className="p-4">
                <h3 className="font-semibold text-gray-900">Science Explorations</h3>
                <p className="text-sm text-gray-600">Author: Dr. Emily Carter</p>
                <p className="text-sm">Issued: Jul 20, 2024</p>
                <p className="text-sm">
                  Due:{" "}
                  <span className="bg-green-100 text-green-800 text-xs font-medium px-2 py-0.5 rounded-full">
                    Aug 20, 2024
                  </span>
                </p>
                <p className="text-sm">Penalty: ₹0.00</p>
              </div>

              <div className="p-4">
                <h3 className="font-semibold text-gray-900">History of the World</h3>
                <p className="text-sm text-gray-600">Author: Prof. David Lee</p>
                <p className="text-sm">Issued: Jul 25, 2024</p>
                <p className="text-sm">
                  Due:{" "}
                  <span className="bg-green-100 text-green-800 text-xs font-medium px-2 py-0.5 rounded-full">
                    Aug 25, 2024
                  </span>
                </p>
                <p className="text-sm">Penalty: ₹0.00</p>
              </div>
            </div>
          </div>
        </main>

      </div>
  );
};

export default LibraryRecord;
