import React, { useState } from "react";

export default function FeePayment() {
  const [step, setStep] = useState(1);
  const [mis, setMis] = useState("");
  const [selectedFees, setSelectedFees] = useState({});

  const fees = [
    { id: "tuition-fee", label: "Tuition Fee", value: 1000 },
    { id: "hostel-fee", label: "Hostel Fee", value: 1200 },
    { id: "exam-fee", label: "Examination Fee", value: 800 },
    { id: "library-fee", label: "Library Fee", value: 500 },
  ];

  const totalAmount = fees.reduce(
    (sum, fee) => sum + (selectedFees[fee.id] ? fee.value : 0),
    0
  );

  const handleVerification = (e) => {
    e.preventDefault();
    if (mis.trim() !== "") setStep(2);
    else alert("Please enter your MIS number");
  };

  const handleFeeChange = (id) => {
    setSelectedFees((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const handleNextFromStep2 = () => {
    if (totalAmount > 0) setStep(3);
    else alert("Please select at least one fee to proceed.");
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  return (
    <div className="flex flex-col min-h-screen bg-blue-50 text-gray-900">
      <main className="flex-grow p-6 sm:p-12 w-full max-w-4xl mx-auto">
        {/* Step indicators */}
        <div className="mb-6">
          <div className="flex flex-wrap justify-between items-center mb-2">
            {[1, 2, 3, 4].map((num) => (
              <div key={num} className="flex-1 min-w-[60px] flex flex-col items-center relative mb-4 sm:mb-0">
                <div
                  className={`flex items-center justify-center rounded-full h-8 w-8 z-10 ${
                    step >= num ? "bg-blue-600 text-white" : "bg-gray-300 text-gray-500"
                  }`}
                >
                  <span className="text-sm font-bold">{num === 1 && step === 1 ? "✔" : num}</span>
                </div>
                <p
                  className={`mt-2 text-center text-xs sm:text-sm font-medium ${
                    step >= num ? "text-blue-600" : "text-gray-500"
                  }`}
                >
                  {num === 1
                    ? "Verification"
                    : num === 2
                    ? "Select Fee Type"
                    : num === 3
                    ? "Payment"
                    : "Fee Receipt"}
                </p>
                {num < 4 && (
                  <div
                    className={`absolute top-4 left-1/2 w-full h-1 transform -translate-x-1/2 ${
                      step > num ? "bg-blue-600" : "bg-gray-300"
                    } -z-10`}
                  ></div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Back button */}
        {step > 1 && (
          <button
            onClick={handleBack}
            className="mb-6 text-blue-600 hover:text-blue-800 font-medium transition-colors"
          >
            &larr; Back
          </button>
        )}

        {/* Step content */}
        {step === 1 && (
          <div className="text-center space-y-6">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900">Student ID Verification</h2>
            <p className="mt-2 text-sm sm:text-base text-gray-600">Please enter your MIS to verify your identity.</p>
            <form
              onSubmit={handleVerification}
              className="bg-white p-6 sm:p-8 shadow-lg rounded-xl space-y-6 max-w-md mx-auto"
            >
              <div>
                <label
                  className="block text-sm sm:text-base font-medium text-gray-700"
                  htmlFor="student-mis"
                >
                  Student MIS Number
                </label>
                <input
                  className="mt-1 block w-full rounded-md border-gray-300 pl-3 pr-3 h-12 focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                  id="student-mis"
                  placeholder="Enter your MIS number"
                  type="text"
                  value={mis}
                  onChange={(e) => setMis(e.target.value)}
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-md bg-blue-600 py-3 text-white font-semibold hover:bg-blue-700 transition"
              >
                Verify
              </button>
            </form>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-6">
            <div className="text-center">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900">Select Fee Type</h2>
              <p className="mt-2 text-sm sm:text-base text-gray-600">
                Please select the fees you want to pay.
              </p>
            </div>
            <div className="bg-white p-6 sm:p-8 shadow-lg rounded-xl space-y-4">
              {fees.map((fee) => (
                <div
                  key={fee.id}
                  className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50"
                >
                  <div className="flex items-center space-x-4">
                    <input
                      className="h-5 w-5 text-blue-600 rounded focus:ring-blue-500"
                      id={fee.id}
                      type="checkbox"
                      checked={!!selectedFees[fee.id]}
                      onChange={() => handleFeeChange(fee.id)}
                    />
                    <label className="text-sm sm:text-base font-medium text-gray-700" htmlFor={fee.id}>
                      {fee.label}
                    </label>
                  </div>
                  <span className="text-sm sm:text-base font-medium text-gray-800">${fee.value}</span>
                </div>
              ))}

              <div className="border-t pt-4 space-y-4">
                <div>
                  <label
                    className="block text-sm sm:text-base font-medium text-gray-700"
                    htmlFor="total-amount"
                  >
                    Total Amount
                  </label>
                  <input
                    className="block w-full rounded-md border-gray-300 pl-3 pr-3 bg-gray-100 text-gray-700 sm:text-sm"
                    id="total-amount"
                    readOnly
                    type="text"
                    value={`$${totalAmount}`}
                  />
                </div>
                <button
                  onClick={handleNextFromStep2}
                  className="w-full rounded-md bg-blue-600 py-3 text-white font-semibold hover:bg-blue-700 transition"
                >
                  Proceed to Payment
                </button>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
