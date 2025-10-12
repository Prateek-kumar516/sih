import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./index.css";

import StudentDashboard from "./components/StudentDashboard";
import StudentProfile from "./pages/StudentProfile";
import HostelOccupancyTracking from "./pages/HostelOccupancyTracking";
import HostelRegistrationForm from "./pages/HostelRegistrationForm";
import SemesterRegistration from "./pages/SemesterRegistration";
import ExamRegistration from "./pages/ExamRegistration";
import FeesPayment from "./pages/FeesPayment";
import LibraryRecord from "./pages/LibraryRecord";
import Result from "./pages/Result";
// import AcademicOverview from "./pages/AcademicOverview";
import Settings from "./pages/Settings";
import Logout from "./pages/Logout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Redirect root to student profile */}
        <Route path="/" element={<Navigate to="/student/profile" replace />} />

        {/* Student routes (Nested) */}
        <Route path="/student" element={<StudentDashboard />}>
          <Route path="profile" element={<StudentProfile />} />
          <Route path="hostellive" element={<HostelOccupancyTracking />} />
          <Route path="hostelform" element={<HostelRegistrationForm />} />
          <Route path="semesterregistration" element={<SemesterRegistration />} />
          <Route path="examregistration" element={<ExamRegistration />} />
          <Route path="feepayment" element={<FeesPayment />} />
          <Route path="libraryrecord" element={<LibraryRecord />} />
          <Route path="result" element={<Result />} />
          {/* <Route path="academicoverview" element={<AcademicOverview />} /> */}
          <Route path="settings" element={<Settings />} />
          <Route path="logout" element={<Logout />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
