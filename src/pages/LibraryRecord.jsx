import React from "react";

const libraryData = [
  { title: "The Great Adventure", author: "Alex Turner", issueDate: "Jul 15, 2024", dueDate: "Aug 15, 2024", penalty: 5 },
  { title: "Science Explorations", author: "Dr. Emily Carter", issueDate: "Jul 20, 2024", dueDate: "Aug 20, 2024", penalty: 0 },
  { title: "History of the World", author: "Prof. David Lee", issueDate: "Jul 25, 2024", dueDate: "Aug 25, 2024", penalty: 0 },
];

const LibraryRecord = () => {
  return (
        <div className="flex min-h-screen flex-col justify-center p-6 sm:p-8  bg-blue-50 text-gray-800">
          <main className="flex-grow container mx-auto  px-4 sm:px-6 py-8">
            {/* Page Heading */}
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-6">
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">My Borrowed Books</h1>
              <p className="text-sm sm:text-base text-gray-500 mt-2 sm:mt-0">
                View your borrowed books, due dates, and penalties.
              </p>
            </div>

            {/* Table Header (Desktop) */}
            <div className="hidden sm:grid grid-cols-5 gap-4 bg-slate-300 text-slate-600 text-xs font-semibold uppercase px-4 py-2 rounded-t-lg">
              <div>Book Title</div>
              <div>Author</div>
              <div>Issue Date</div>
              <div>Due Date</div>
              <div>Penalty (₹)</div>
            </div>

            {/* Book Cards */}
            <div className="space-y-2">
              {libraryData.map((book, idx) => (
                <div
                  key={idx}
                  className="flex flex-col sm:grid sm:grid-cols-5 items-start sm:items-center justify-between bg-white p-4 rounded-lg shadow-sm"
                >
                  <div className="sm:px-2 font-medium text-gray-900">{book.title}</div>
                  <div className="sm:px-2 text-gray-700">{book.author}</div>
                  <div className="sm:px-2 text-gray-700">{book.issueDate}</div>
                  <div className="sm:px-2">
                    <span
                      className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                        new Date(book.dueDate) < new Date() ? "bg-red-100 text-red-800" : "bg-green-100 text-green-800"
                      }`}
                    >
                      {book.dueDate}
                    </span>
                  </div>
                  <div className="sm:px-2 font-semibold text-gray-800">{book.penalty > 0 ? `₹${book.penalty}` : "₹0.00"}</div>
                </div>
              ))}
            </div>
          </main>
        </div>
  );
};

export default LibraryRecord;
