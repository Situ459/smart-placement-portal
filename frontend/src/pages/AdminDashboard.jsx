import { useEffect, useState } from "react";
import { getAdminDashboard } from "../services/dashboardService";
import LogoutButton from "../components/LogoutButton";

function AdminDashboard() {
  const [dashboardData, setDashboardData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadDashboard();
  }, []);

  const loadDashboard = async () => {
    try {
      const data = await getAdminDashboard();
      setDashboardData(data);
    } catch (error) {
      console.error("Error fetching dashboard:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <h2>Loading Dashboard...</h2>;
  }

  return (
    <div style={{ padding: "30px" }}>
      <h1>Admin Dashboard</h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 250px)",
          gap: "20px",
          marginTop: "20px",
        }}
      >
        <div style={cardStyle}>
          <h3>Total Users</h3>
          <h2>{dashboardData.totalUsers}</h2>
        </div>

        <div style={cardStyle}>
          <h3>Total Students</h3>
          <h2>{dashboardData.totalStudents}</h2>
        </div>

        <h1>Admin Dashboard</h1>

<LogoutButton />

        <div style={cardStyle}>
          <h3>Total Recruiters</h3>
          <h2>{dashboardData.totalRecruiters}</h2>
        </div>

        <div style={cardStyle}>
          <h3>Total Jobs</h3>
          <h2>{dashboardData.totalJobs}</h2>
        </div>

        <div style={cardStyle}>
          <h3>Total Applications</h3>
          <h2>{dashboardData.totalApplications}</h2>
        </div>

        <div style={cardStyle}>
          <h3>Total Resumes</h3>
          <h2>{dashboardData.totalResumes}</h2>
        </div>
      </div>
    </div>
  );
}

const cardStyle = {
  padding: "20px",
  border: "1px solid #ddd",
  borderRadius: "10px",
  textAlign: "center",
};

export default AdminDashboard;