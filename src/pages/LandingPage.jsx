import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();
  const [selectedRole, setSelectedRole] = useState(null);
  const cardRefs = useRef([]);

  const roles = [
    { name: "Student", key: "student" },
    { name: "Staff", key: "staff" },
    { name: "Admin", key: "admin" },
  ];

  const handleContinue = () => {
    if (!selectedRole) return;
    if (selectedRole === "student") navigate("/login");
    else if (selectedRole === "admin") navigate("/admin-login");
    // Add staff/admin later if needed
  };

  const handleKeyNavigation = (e, index) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setSelectedRole(roles[index].key);
    }
    if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
      e.preventDefault();
      const prevIndex = (index - 1 + roles.length) % roles.length;
      cardRefs.current[prevIndex].focus();
    }
    if (e.key === "ArrowRight" || e.key === "ArrowDown") {
      e.preventDefault();
      const nextIndex = (index + 1) % roles.length;
      cardRefs.current[nextIndex].focus();
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#f1f5ff]">
      <h1 className="text-4xl font-bold mb-8">University Portal</h1>
      <div className="grid gap-6 sm:grid-cols-3 mb-8">
        {roles.map((role, index) => (
          <div
            key={role.key}
            ref={(el) => (cardRefs.current[index] = el)}
            tabIndex={0}
            role="button"
            aria-pressed={selectedRole === role.key}
            onClick={() => setSelectedRole(role.key)}
            onKeyDown={(e) => handleKeyNavigation(e, index)}
            className={`p-6 rounded-xl text-center cursor-pointer border ${
              selectedRole === role.key
                ? "border-blue-700 shadow-lg"
                : "border-gray-300 hover:shadow-md"
            }`}
          >
            <h2 className="text-2xl font-bold">{role.name}</h2>
          </div>
        ))}
      </div>

      <button
        onClick={handleContinue}
        disabled={!selectedRole}
        className="px-6 py-3 bg-blue-700 text-white rounded disabled:opacity-50"
      >
        Continue
      </button>
    </div>
  );
};

export default LandingPage;
