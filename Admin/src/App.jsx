import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Login from './pages/Login';
import AdminProfile from './pages/AdminProfile';
import AdmissionRecord from './pages/AdmissionRecord';
import HostelAllocation from './pages/HostelAllocation';
import FeeRecord from './pages/FeeRecord';
import Results from './pages/Results';
import StaffDetails from './pages/StaffDetails';
import Settings from './pages/Settings';

function App() {
  const handleLogout = () => {
    localStorage.removeItem('authToken');
    sessionStorage.removeItem('user');
  };

  return (
    <BrowserRouter basename={window.location.hostname === 'localhost' ? '' : '/admin'}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to="/admin-profile" replace />} />
          <Route path="admin-profile" element={<AdminProfile />} />
          <Route path="admission-record" element={<AdmissionRecord />} />
          <Route path="hostel-allocation" element={<HostelAllocation />} />
          <Route path="fee-records" element={<FeeRecord />} />
          <Route path="results" element={<Results />} />
          <Route path="staff" element={<StaffDetails />} />
          <Route path="settings" element={<Settings />} />
          <Route
            path="logout"
            element={
              <Login onLogout={handleLogout} />
            }
          />
        </Route>
        <Route path="login" element={<Login />} />
        <Route path="admin-login" element={<Login />} />
        <Route path="*" element={<Navigate to="/admin-profile" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
