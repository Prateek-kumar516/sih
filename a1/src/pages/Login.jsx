import React from "react";

export default function Login() {
  const handleSubmit = (e) => {
    e.preventDefault();

    // Example: set a fake auth token
    localStorage.setItem("authToken", "12345");
    sessionStorage.setItem("user", "student");

    // Redirect manually OR let React Router handle route protection
    window.location.href = "/dashboard"; // change this to your main page route
  };

  return (
    <div className="bg-white font-['Manrope',_sans-serif] min-h-screen flex flex-col">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-radial"></div>

      <div className="relative z-10 flex flex-col h-full grow">
        {/* Header */}
        <header className="flex items-center justify-between whitespace-nowrap px-10 py-5">
          <div className="flex items-center gap-3 text-slate-800">
            <div className="h-8 w-8 rounded-full bg-gray-400 flex items-center justify-center">
              {/* Placeholder for Logo */}
              <span className="text-white font-bold text-sm">IN</span>
            </div>
            <h1 className="text-xl font-bold tracking-tight">Institute Name</h1>
          </div>
        </header>

        {/* Main */}
        <main className="flex flex-1 items-center justify-center py-10">
          <div className="w-full max-w-md mx-auto p-1 rounded-2xl form-container-gradient shadow-2xl shadow-slate-300">
            <div className="bg-white/90 backdrop-blur-xl rounded-xl p-10 min-h-[600px] flex flex-col justify-center">
              {/* Welcome */}
              <div className="text-center mb-8">
                <h2 className="text-4xl font-bold text-slate-800 tracking-tight">
                  Welcome
                </h2>
                <p className="text-slate-600 mt-2">
                  Login to access your ERP portal
                </p>
              </div>

              {/* Form */}
              <form className="space-y-6" onSubmit={handleSubmit}>
                {/* Email */}
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
                    className="form-input block w-full rounded-lg border-slate-300 bg-slate-50 h-14 px-5 text-slate-800 placeholder:text-slate-400 focus:ring-[var(--secondary-color)] focus:border-[var(--secondary-color)]"
                  />
                </div>

                {/* Password */}
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
                    className="form-input block w-full rounded-lg border-slate-300 bg-slate-50 h-14 px-5 text-slate-800 placeholder:text-slate-400 focus:ring-[var(--secondary-color)] focus:border-[var(--secondary-color)]"
                  />
                </div>

                {/* Remember Me */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <input
                      id="remember-me"
                      name="remember-me"
                      type="checkbox"
                      className="h-4 w-4 text-[var(--secondary-color)] focus:ring-[var(--secondary-color)] border-slate-300 rounded"
                    />
                    <label
                      htmlFor="remember-me"
                      className="ml-2 block text-sm text-slate-900"
                    >
                      Remember Me
                    </label>
                  </div>
                </div>

                {/* Button */}
                <div className="pt-4">
                  <button
                    type="submit"
                    className="w-full flex justify-center py-4 px-4 border border-transparent rounded-lg shadow-sm text-base font-bold text-white bg-[var(--secondary-color)] hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-300"
                  >
                    Sign In
                  </button>
                </div>
              </form>

              {/* Sign up link */}
              <div className="text-center mt-6">
                <p className="text-sm text-slate-600">
                  Don&apos;t have an account?{" "}
                  <a
                    href="#"
                    className="font-medium text-[var(--secondary-color)] hover:text-blue-700"
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
