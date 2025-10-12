import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('authToken', '12345');
    sessionStorage.setItem('user', 'admin');
    navigate('/admin-profile');
  };

  return (
    <div className="bg-gray-300 font-sans min-h-screen flex flex-col">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-gray-200"></div>
      <div className="relative z-10 flex flex-col h-full grow">
        <header className="flex bg-blue-100 items-center justify-between whitespace-nowrap px-10 py-5">
          <div className="flex items-center gap-3 text-slate-800">
            <div className="h-8 w-8 rounded-full bg-gray-400 flex items-center justify-center">
              <span className="text-white font-bold text-sm">IN</span>
            </div>
            <h1 className="text-xl font-bold tracking-tight">Institute Name</h1>
          </div>
        </header>

        <main className="flex flex-1 items-center justify-center py-10">
          <div className="w-full max-w-md mx-auto p-1 rounded-2xl bg-gradient-to-br from-blue-400 to-blue-600 shadow-2xl shadow-slate-300">
            <div className="bg-white/90 backdrop-blur-xl rounded-xl p-10 min-h-[600px] flex flex-col justify-center">
              <div className="text-center mb-8">
                <h2 className="text-4xl font-bold text-slate-800 tracking-tight">
                  Welcome
                </h2>
                <p className="text-slate-600 mt-2">
                  Login to access your ERP portal
                </p>
              </div>

              <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label
                    className="block text-sm font-medium text-slate-700 mb-1"
                    htmlFor="email_id"
                  >
                    Email ID
                  </label>
                  <input
                    type="email"
                    id="email_id"
                    name="email_id"
                    autoComplete="email"
                    placeholder="you@example.com"
                    required
                    className="block w-full rounded-lg border-slate-300 bg-slate-50 h-14 px-5 text-slate-800 placeholder:text-slate-400 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                <div>
                  <label
                    className="block text-sm font-medium text-slate-700 mb-1"
                    htmlFor="password"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    autoComplete="current-password"
                    placeholder="••••••••"
                    required
                    className="block w-full rounded-lg border-slate-300 bg-slate-50 h-14 px-5 text-slate-800 placeholder:text-slate-400 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <input
                      id="remember-me"
                      name="remember-me"
                      type="checkbox"
                      className="h-4 w-4 text-blue-500 focus:ring-blue-500 border-slate-300 rounded"
                    />
                    <label
                      htmlFor="remember-me"
                      className="ml-2 block text-sm text-slate-900"
                    >
                      Remember Me
                    </label>
                  </div>
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    className="w-full flex justify-center py-4 px-4 border border-transparent rounded-lg shadow-sm text-base font-bold text-white bg-blue-500 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-300"
                  >
                    Sign In
                  </button>
                </div>
              </form>

              <div className="text-center mt-6 space-y-4">
                <div>
                  <button
                    type="button"
                    onClick={() => {
                      const isDevelopment = window.location.hostname === 'localhost';
                      const mainUrl = isDevelopment ? 'http://localhost:5173' : '/';
                      window.location.href = mainUrl;
                    }}
                    className="text-blue-700 hover:text-blue-800 font-medium text-sm underline"
                  >
                    ← Go Back to Main App
                  </button>
                </div>
                <p className="text-xl text-slate-600">
                  Don&apos;t have an account?{' '}
                  <a
                    href="#"
                    className="font-medium text-blue-700 hover:text-blue-800"
                  >
                    Sign Up
                  </a>
                </p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
