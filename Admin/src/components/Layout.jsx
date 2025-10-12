import React, { useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from './Header';
import Sidebar from './Sidebar';

const Layout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();

  const noLayoutRoutes = ['/login', '/logout'];
  const shouldShowLayout = !noLayoutRoutes.includes(location.pathname);

  if (!shouldShowLayout) {
    return <Outlet />;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header onMenuClick={() => setSidebarOpen(!sidebarOpen)} />
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <main className="pt-[60px] md:ml-56">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
