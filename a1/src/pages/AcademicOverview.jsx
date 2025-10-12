import React, { useEffect, useRef } from "react";

const Dashboard = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const data = [85, 92, 78, 88, 95, 82];
    const labels = ["Algorithms", "COA", "TOC", "DBMS", "Python", "Probability"];
    const colors = ["#2563eb", "#10b981", "#f59e0b", "#6366f1", "#ef4444", "#14b8a6"];

    const canvasWidth = 600;
    const canvasHeight = 300;
    canvas.width = canvasWidth;
    canvas.height = canvasHeight;

    const barWidth = 50;
    const gap = 30;

    ctx.clearRect(0, 0, canvasWidth, canvasHeight);

    data.forEach((value, i) => {
      const barHeight = (value / 100) * (canvasHeight - 40);
      ctx.fillStyle = colors[i];
      ctx.fillRect(i * (barWidth + gap) + 50, canvasHeight - barHeight - 20, barWidth, barHeight);

      // Labels
      ctx.fillStyle = "#000";
      ctx.font = "14px Arial";
      ctx.fillText(labels[i], i * (barWidth + gap) + 50, canvasHeight - 5);
      ctx.fillText(value + "%", i * (barWidth + gap) + 50, canvasHeight - barHeight - 25);
    });

    // Y-axis
    ctx.beginPath();
    ctx.moveTo(40, 0);
    ctx.lineTo(40, canvasHeight - 20);
    ctx.stroke();

    // X-axis
    ctx.beginPath();
    ctx.moveTo(40, canvasHeight - 20);
    ctx.lineTo(canvasWidth, canvasHeight - 20);
    ctx.stroke();
  }, []);

  const styles = {
    navbar: {
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      height: "60px",
      background: "linear-gradient(90deg,#2563eb,#1e40af)",
      color: "#fff",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "0 16px",
      zIndex: 100,
    },
    sidebar: {
      width: "220px",
      background: "#fff",
      borderRight: "1px solid #e5e7eb",
      minHeight: "100vh",
      padding: "16px",
      boxSizing: "border-box",
      position: "fixed",
      top: "60px",
      left: 0,
    },
    main: {
      marginLeft: "240px",
      padding: "20px",
    },
    section: {
      background: "#fff",
      padding: "20px",
      marginBottom: "20px",
      borderRadius: "10px",
      boxShadow: "0 1px 3px rgba(0,0,0,0.08)",
    },
  };

  return (
    <>
      {/* Navbar */}
      <header style={styles.navbar}>
        <div>
          <span>🏫</span>
          <strong style={{ marginLeft: "8px" }}>IIIT College ERP</strong>
        </div>
        <div>
          <span style={{ marginRight: "16px" }}>🔔 5</span>
          <img src="https://via.placeholder.com/32" alt="Profile" style={{ borderRadius: "50%" }} />
        </div>
      </header>

      {/* Sidebar */}
      <aside style={styles.sidebar}>
        <nav style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <a href="#" style={{ fontWeight: "bold", color: "#2563eb" }}>Dashboard</a>
          <a href="#">Semester Registration</a>
          <a href="#">Attendance</a>
          <a href="#">Subjects</a>
          <a href="#">Payments</a>
        </nav>
      </aside>

      {/* Main */}
      <main style={styles.main}>
        <section style={styles.section}>
          <h3>📊 Attendance Tracker</h3>
          <canvas ref={canvasRef}></canvas>
        </section>

        <section style={styles.section}>
          <h3>📚 Semester III Courses & Faculty</h3>
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr style={{ background: "#f3f6fb" }}>
                <th>S. No.</th>
                <th>Faculty Name</th>
                <th>Course Title</th>
                <th>Hours per week (L-T-P)</th>
                <th>Credits</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Dr. Sharma</td>
                <td>Analysis & Design of Algorithm</td>
                <td style={{ textAlign: "center" }}>3-0-2</td>
                <td style={{ textAlign: "center" }}>4</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Prof. Reddy</td>
                <td>Computer Organization and Architecture</td>
                <td style={{ textAlign: "center" }}>3-0-0</td>
                <td style={{ textAlign: "center" }}>3</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Dr. Gupta</td>
                <td>Theory of Computation</td>
                <td style={{ textAlign: "center" }}>3-0-0</td>
                <td style={{ textAlign: "center" }}>3</td>
              </tr>
              <tr>
                <td>4</td>
                <td>Prof. Khan</td>
                <td>Database Management System</td>
                <td style={{ textAlign: "center" }}>3-0-2</td>
                <td style={{ textAlign: "center" }}>4</td>
              </tr>
              <tr>
                <td>5</td>
                <td>Dr. Mehta</td>
                <td>Python Programming</td>
                <td style={{ textAlign: "center" }}>3-0-2</td>
                <td style={{ textAlign: "center" }}>4</td>
              </tr>
              <tr>
                <td>6</td>
                <td>Prof. Iyer</td>
                <td>Probability and Random Process</td>
                <td style={{ textAlign: "center" }}>3-0-0</td>
                <td style={{ textAlign: "center" }}>3</td>
              </tr>
            </tbody>
            <tfoot style={{ background: "#f3f6fb", fontWeight: "bold" }}>
              <tr>
                <td colSpan="4" style={{ textAlign: "right" }}>Total Credits</td>
                <td style={{ textAlign: "center" }}>21</td>
              </tr>
            </tfoot>
          </table>
        </section>
      </main>
    </>
  );
};

export default Dashboard;
