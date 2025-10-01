import React from 'react'

const StudentProfile = () => {
  return (
    <div className="bg-slate-50 font-sans min-h-screen flex flex-col">
      {/* Header */}
      {/* <header className="sticky top-0 z-10 flex h-16 items-center justify-between bg-white px-6 shadow-md">
        <div className="flex items-center gap-4">
          <img
            alt="College Logo"
            className="h-10 w-10"
            src="https://lh3.googleusercontent.com/a/ACg8ocL0X-r-aLqG53wG8Nwf60F5F_3A4W7D3E8gC9v1gB6d4Q=s288-c-no"
          />
          <h1 className="text-xl font-bold text-slate-800">College Portal</h1>
        </div>
        <div className="flex items-center gap-4">
          <button className="relative rounded-full p-2 text-slate-600 hover:bg-slate-100">
            <span className="material-symbols-outlined">notifications</span>
            <span className="absolute right-1 top-1 h-2 w-2 rounded-full bg-red-500"></span>
          </button>
          <div
            className="h-10 w-10 rounded-full bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDDluCt8zjowBS67ekr_v5ntTzLl-Xb6jzpOXrrxXwyD2yhXevzJd0R3HvPmyczdIJkIUuNZ3CiZj3C76LWaJQNC4w4-EVAy3tmvIc5UXfu_scuFlsL79y6ruNZfEnuErkI5H-yXXnHzNdazCJc9of-s1FG5EVXFq40_VLN3P4rRQlUn0Rp3ZNVxj0StMn782kf4tsVYwIdNX5k2IjOPb_NWcH_MSYHGoD7_EdOdAVrrr5IC3yFMVrSnfUnHHhuRc7ZLx4PnIEbOtk')",
            }}
          ></div>
        </div>
      </header> */}

      {/* Layout */}
      <div className="flex flex-1">
        {/* Sidebar */}
        <aside className="w-64 flex-shrink-0 bg-white shadow-lg">
          <nav className="flex flex-col space-y-2 p-4 pt-6">
            <a className="flex items-center gap-3 rounded-md bg-blue-100 px-3 py-2 font-semibold text-blue-700" href="#">
              <span className="material-symbols-outlined">person</span>
              <span className="text-sm font-medium">Student Profile</span>
            </a>
            <a className="flex items-center gap-3 rounded-md px-3 py-2 text-slate-600 hover:bg-slate-100" href="#">
              <span className="material-symbols-outlined">night_shelter</span>
              <span className="text-sm font-medium">Hostel Allocation</span>
            </a>
            <a className="flex items-center gap-3 rounded-md px-3 py-2 text-slate-600 hover:bg-slate-100" href="#">
              <span className="material-symbols-outlined">app_registration</span>
              <span className="text-sm font-medium">Semester Registration</span>
            </a>
            <a className="flex items-center gap-3 rounded-md px-3 py-2 text-slate-600 hover:bg-slate-100" href="#">
              <span className="material-symbols-outlined">library_books</span>
              <span className="text-sm font-medium">Library</span>
            </a>
            <a className="flex items-center gap-3 rounded-md px-3 py-2 text-slate-600 hover:bg-slate-100" href="#">
              <span className="material-symbols-outlined">assessment</span>
              <span className="text-sm font-medium">Results</span>
            </a>
            <a className="flex items-center gap-3 rounded-md px-3 py-2 text-slate-600 hover:bg-slate-100" href="#">
              <span className="material-symbols-outlined">history_edu</span>
              <span className="text-sm font-medium">Re-examination</span>
            </a>
            <a className="flex items-center gap-3 rounded-md px-3 py-2 text-slate-600 hover:bg-slate-100" href="#">
              <span className="material-symbols-outlined">settings</span>
              <span className="text-sm font-medium">Settings</span>
            </a>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-8">
          <header className="mb-8">
            <h1 className="text-3xl font-bold text-slate-900">My Profile</h1>
          </header>

          {/* Profile Section */}
          <div className="space-y-8">
            <div className="rounded-lg bg-white p-6 shadow-sm">
              <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center">
                <div
                  className="h-32 w-32 flex-shrink-0 rounded-full bg-cover bg-center bg-no-repeat"
                  style={{
                    backgroundImage:
                      "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAtJ7D1vxMy-Y3KXeVCS4kScpjqk_I6U6GMzoXG7yFHyC25V5xCdSukXBfhCKMvhfVFgXAarPZ91sD3EEB5gitypZ2epNq6yYxkz2mPrHvF8yYblinZlcpBClNW-GwTq04GFosTRYlXTAcY27-cz8SrsmGGmMUOir0MmTAFzVGFIbpa0trSFsXms4wEp22U95Y_2nZ_betFWJx6VQ6W236z1LyCgA8zaERhNE7QBiwpuEs-SntHZB5hdpSvEa6MPHmDZclzNRZkbRQ')",
                  }}
                ></div>
                <div>
                  <h2 className="text-2xl font-bold text-slate-800">Sarah Miller</h2>
                  <p className="text-base text-slate-500">Student ID: 2023001</p>
                </div>
              </div>
            </div>

            {/* Personal Info + Contact Info + Academic */}
            {/* Keep the rest of your code here (unchanged structure, just JSX syntax) */}
          </div>
        </main>
      </div>
    </div>
  )
}

export default StudentProfile
