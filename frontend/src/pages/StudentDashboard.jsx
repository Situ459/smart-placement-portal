import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getStudentDashboard } from "../services/dashboardService";
import LogoutButton from "../components/LogoutButton";

function StudentDashboard() {
  const [dashboardData, setDashboardData] = useState(null);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    loadDashboard();
  }, []);

  const loadDashboard = async () => {
    try {
      const data = await getStudentDashboard(2);

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
      <h1>Student Dashboard</h1>

      <LogoutButton />

      <div
        style={{
          display: "flex",
          gap: "20px",
          marginTop: "20px",
        }}
      >
        <div
          style={{
            padding: "20px",
            border: "1px solid #ddd",
            borderRadius: "10px",
            minWidth: "200px",
          }}
        >
          <h3>Applications</h3>

          <h2>{dashboardData.applications}</h2>
        </div>

        <div
          style={{
            padding: "20px",
            border: "1px solid #ddd",
            borderRadius: "10px",
            minWidth: "200px",
          }}
        >
          <h3>Resumes</h3>

          <h2>{dashboardData.resumes}</h2>
        </div>
      </div>

      <div
        style={{
          marginTop: "30px",
          display: "flex",
          gap: "15px",
        }}
      >
        <button
          onClick={() => navigate("/job-list")}
          style={{
            padding: "10px 20px",
            cursor: "pointer",
          }}
        >
          View Jobs
        </button>

        <button
          onClick={() => navigate("/my-applications")}
          style={{
            padding: "10px 20px",
            cursor: "pointer",
          }}
        >
          My Applications
        </button>

        <button
          onClick={() => navigate("/upload-resume")}
          style={{
            padding: "10px 20px",
            cursor: "pointer",
          }}
        >
          Upload Resume
        </button>
      </div>
    </div>
  );
}

export default StudentDashboard;