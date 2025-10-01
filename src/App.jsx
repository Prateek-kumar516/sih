import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Header from "./components/Header"
import Sidebar from "./components/Sidebar";
import StudentProfile from "./pages/StudentProfile";
import HostelOccupancyTracking from "./pages/HostelOccupancyTracking"
import HostelRegistrationForm from "./pages/HostelRegistrationForm";
import FeesPayment from "./pages/FeesPayment";
import SemesterRegistration from "./pages/SemesterRegistration";
import ExamRegistration from "./pages/ExamRegistration";
import LibraryRecord from "./pages/LibraryRecord";
import Result from "./pages/Result";
// import HostelAllocation from "./pages/HostelAllocation"; // you can create more pages

function App() {
  return (
  
    <div>
      {/* <Header/> */}
      <Sidebar/>
      {/* <HostelOccupancyTracking/> */}
      {/* <HostelRegistrationForm/> */}

      {/* <SemesterRegistration/> */}
      {/* <ExamRegistration/> */}
      {/* <FeesPayment/> */}
      {/* <LibraryRecord/> */}
      {/* <Result/> */}
    </div>
    // <Router>

    //   <div className="flex min-h-screen">
    //     {/* Sidebar fixed left */}
    //     {/* <Header/> */}
        
    //     {/* <nav><Header />
    //     <Sidebar />
    //     </nav> */}

    //     {/* Right side main content */}
    //     {/* <div className="flex-1 flex flex-col">
          

    //       <main className="p-6 overflow-y-auto">
    //         <Routes>
    //           <Route path="/" element={<StudentProfile />} />
              // <Route path="/hostellive" element={<HostelOccupancyTracking />} />
    //           <Route path="/hostelfrom" element={<HostelRegistrationForm />} />
    //         </Routes>
    //       </main>
    //     </div> */}
    //   </div>
    // </Router>
  );
}

export default App;
