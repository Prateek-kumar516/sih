import React from "react";
import { Routes, Route } from "react-router-dom";
import StudentLayout from "./StudentLayout";
import StudentHome from "./StudentHome";
import StudentProfile from "./StudentProfile";
import HostelOccupancyTracking from "./HostelOccupancyTracking";
import HostelRegistrationForm from "./HostelRegistrationForm";
import SemesterRegistration from "./SemesterRegistration";
import ExamRegistration from "./ExamRegistration";
import FeesPayment from "./FeesPayment";
import LibraryRecord from "./LibraryRecord";
import Result from "./Result";
import Settings from "./Settings";
import Logout from "./Logout";


const StudentRoutes = () => (
  <Routes>
    <Route path="/" element={<StudentLayout />}>
      <Route index element={<StudentHome />} />
      <Route path="profile" element={<StudentProfile />} />
      {/* Add other student pages here */}

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
  </Routes>
);

export default StudentRoutes;
