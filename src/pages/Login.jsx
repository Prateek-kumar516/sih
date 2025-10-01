import React from 'react'

const Login = () => {
  return (
    <div className="text-[var(--text-primary)]">
      <div className="relative flex size-full min-h-screen flex-col overflow-x-hidden">
        <div className="layout-container flex h-full grow flex-col">
          {/* Header */}
          <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-gray-200/80 px-10 py-5 bg-white/80 backdrop-blur-sm shadow-sm sticky top-0 z-10">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-[var(--primary-color)] rounded-full flex items-center justify-center shadow-inner">
                <svg
                  className="w-7 h-7 text-white"
                  fill="none"
                  viewBox="0 0 48 48"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6 6H42L36 24L42 42H6L12 24L6 6Z"
                    fill="currentColor"
                  ></path>
                </svg>
                
              </div>
              <h2 className="text-[var(--primary-color)] text-2xl font-serif tracking-wide">
                University Portal
              </h2>
            </div>
          </header>

          {/* Main Content */}
          <main className="flex-1 flex items-center justify-center p-8">
            <div className="w-full max-w-lg text-center">
              <div className="bg-white/90 backdrop-blur-lg p-12 rounded-2xl shadow-2xl border border-gray-200/50">
                <h1 className="text-[var(--primary-color)] text-5xl font-serif tracking-tight leading-tight mb-3">
                  Welcome to ERP Portal
                </h1>
                <p className="text-[var(--text-secondary)] text-xl font-light mb-10">
                  Please select your role to access the portal.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Student Login */}
                 <button className="group flex flex-col items-center justify-center p-6 rounded-lg bg-white border border-gray-200 hover:border-[var(--secondary-color)] text-[var(--primary-color)] transition-all duration-300 transform hover:-translate-y-2 shadow-lg hover:shadow-xl hover:bg-[var(--secondary-color)]/5">
                  <span className="text-lg font-medium">Student Login</span>
                </button>


                  {/* Faculty Login */}
                  <button className="group flex flex-col items-center justify-center p-6 rounded-lg bg-white border border-gray-200 hover:border-[var(--secondary-color)] text-[var(--primary-color)] transition-all duration-300 transform hover:-translate-y-2 shadow-lg hover:shadow-xl hover:bg-[var(--secondary-color)]/5">
                    <span className="text-lg font-medium">Faculty Login</span>
                  </button>

                </div>
              </div>

              <p className="mt-10 text-xs text-gray-400 font-light">
                © 2024 University Name. All Rights Reserved.
              </p>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default Login
