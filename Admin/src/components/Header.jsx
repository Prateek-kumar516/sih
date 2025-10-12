import React from 'react';
import { Bell, CircleUser as UserCircle, Menu, School } from 'lucide-react';

const Header = ({ onMenuClick }) => {
  return (
    <header className="w-full bg-blue-200 shadow-md px-6 h-[60px] flex justify-between items-center fixed top-0 left-0 right-0 z-30">
      <div className="flex items-center gap-2">
        <button
          className="md:hidden text-gray-600 hover:text-blue-500"
          onClick={onMenuClick}
        >
          <Menu className="h-6 w-6" />
        </button>
        <School className="h-6 w-6 text-black" />
        <h2 className="text-lg font-bold text-gray-800">Admin</h2>
      </div>

      <div className="flex items-center gap-4">
        <Bell className="h-6 w-6 cursor-pointer text-gray-600 hover:text-blue-500" />
        <UserCircle className="h-7 w-7 cursor-pointer text-gray-600 hover:text-blue-500" />
      </div>
    </header>
  );
};

export default Header;
