
// src/components/Navbar.jsx
import React from 'react';
import { useAuth } from '../context/Authcontext';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const { user, logout } = useAuth();

  return (
    <nav className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-blue-600 font-bold text-xl">SIH</Link>
        <div className="flex space-x-4">
          {user ? (
            <>
              <Link to="/profile" className="text-gray-700 hover:text-blue-600">Profile</Link>
              <button
                onClick={logout}
                className="text-red-600 hover:text-red-800 font-medium"
              >
                Logout
              </button>
            </>
          ) : (
           <Link to="/student/profile" className="text-gray-700 hover:text-blue-600">Profile</Link>

             
          
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;