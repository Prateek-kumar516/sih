import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "./context/Authcontext.jsx";
import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import StudentDashboard from "./components/StudentDashboard";
import StudentHome from "./pages/StudentHome";
import StudentProfile from "./pages/StudentProfile";
import HostelOccupancyTracking from "./pages/HostelOccupancyTracking";
import HostelRegistrationForm from "./pages/HostelRegistrationForm";
import SemesterRegistration from "./pages/SemesterRegistration";
import ExamRegistration from "./pages/ExamRegistration";
import FeesPayment from "./pages/FeesPayment";
import LibraryRecord from "./pages/LibraryRecord";
import Result from "./pages/Result";
import Settings from "./pages/Settings";
import Logout from "./pages/Logout";
import PrivateRoute from "./components/PrivateRoute";
import AdminLogin from "./pages/admin-login";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin-login" element={<AdminLogin />} />

          {/* Protected student pages */}
          <Route
            path="/student"
            element={
              <PrivateRoute>
                <StudentDashboard />
              </PrivateRoute>
            }
          >
            <Route index element={<StudentHome />} />
            <Route path="profile" element={<StudentProfile />} />
            <Route path="hostellive" element={<HostelOccupancyTracking />} />
            <Route path="hostelform" element={<HostelRegistrationForm />} />
            <Route path="semesterregistration" element={<SemesterRegistration />} />
            <Route path="examregistration" element={<ExamRegistration />} />
            <Route path="feepayment" element={<FeesPayment />} />
            <Route path="libraryrecord" element={<LibraryRecord />} />
            <Route path="result" element={<Result />} />
            <Route path="settings" element={<Settings />} />
            <Route path="logout" element={<Logout />} />
          </Route>

          {/* Catch all */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
