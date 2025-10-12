import React from 'react';
import { User, FileText, Home, DollarSign, BarChart3, Users, Settings, LogOut, ArrowLeft } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

const Sidebar = ({ sidebarOpen, setSidebarOpen }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const sections = [
    { name: 'Profile', path: '/admin-profile', icon: User },
    { name: 'Admission Record Page', path: '/admission-record', icon: FileText },
    { name: 'Hostel Record', path: '/hostel-allocation', icon: Home },
    { name: 'Fee Record', path: '/fee-records', icon: DollarSign },
    { name: 'Result Record', path: '/results', icon: BarChart3 },
    { name: 'Staff Details', path: '/staff', icon: Users },
  ];

  const bottomItems = [
    { name: 'Settings', path: '/settings', icon: Settings },
    { name: 'Back to Main App', action: 'backToMain', icon: ArrowLeft },
    { name: 'Logout', path: '/logout', icon: LogOut },
  ];

  const handleItemClick = (item) => {
    if (item.path) {
      navigate(item.path);
      setSidebarOpen(false);
    } else if (item.action === 'backToMain') {
      const isDevelopment = window.location.hostname === 'localhost';
      const mainUrl = isDevelopment ? 'http://localhost:5173' : '/';
      window.location.href = mainUrl;
    }
  };

  return (
    <>
      <aside
        className={`
          w-56 bg-blue-600 text-white flex flex-col justify-between py-3 fixed left-0 top-[60px] bottom-0 z-20 transition-transform duration-300
          ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
          md:translate-x-0
        `}
      >
        <div className="overflow-y-auto flex-1">
          <ul>
            {sections.map((item) => {
              const Icon = item.icon;
              return (
                <li
                  key={item.name}
                  className={`px-6 py-3 mb-1 cursor-pointer flex items-center gap-3 rounded transition ${
                    location.pathname === item.path
                      ? 'bg-blue-500 font-semibold'
                      : 'hover:bg-blue-400'
                  }`}
                  onClick={() => handleItemClick(item)}
                >
                  <Icon className="h-5 w-5" />
                  {item.name}
                </li>
              );
            })}
          </ul>
        </div>
        <ul>
          {bottomItems.map((item) => {
            const Icon = item.icon;
            return (
              <li
                key={item.name}
                className="px-6 py-3 cursor-pointer flex items-center gap-3 rounded hover:bg-blue-400 transition"
                onClick={() => handleItemClick(item)}
              >
                <Icon className="h-5 w-5" />
                {item.name}
              </li>
            );
          })}
        </ul>
      </aside>

      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-10 md:hidden top-[60px]"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}
    </>
  );
};

export default Sidebar;
