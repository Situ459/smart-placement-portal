import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getRecruiterDashboard } from "../services/dashboardService";
import LogoutButton from "../components/LogoutButton";

function RecruiterDashboard() {
  const [dashboardData, setDashboardData] = useState(null);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    loadDashboard();
  }, []);

  const loadDashboard = async () => {
    try {
      const data = await getRecruiterDashboard(1);

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
      <h1>Recruiter Dashboard</h1>

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
            minWidth: "220px",
          }}
        >
          <h3>Jobs Posted</h3>

          <h2>{dashboardData.jobsPosted}</h2>
        </div>

        <div
          style={{
            padding: "20px",
            border: "1px solid #ddd",
            borderRadius: "10px",
            minWidth: "220px",
          }}
        >
          <h3>Applications Received</h3>

          <h2>{dashboardData.applicationsReceived}</h2>
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
          onClick={() => navigate("/post-job")}
          style={{
            padding: "10px 20px",
            cursor: "pointer",
          }}
        >
          Post New Job
        </button>

        <button
          onClick={() => navigate("/my-jobs")}
          style={{
            padding: "10px 20px",
            cursor: "pointer",
          }}
        >
          View My Jobs
        </button>
      </div>
    </div>
  );
}

export default RecruiterDashboard;