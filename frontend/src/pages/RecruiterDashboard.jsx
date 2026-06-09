import { useEffect, useState } from "react";
import { getRecruiterDashboard } from "../services/dashboardService";
import LogoutButton from "../components/LogoutButton";
import { useNavigate } from "react-router-dom";

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

        <h1>Recruiter Dashboard</h1>
        <button
  onClick={() => navigate("/post-job")}
>
  Post New Job
</button>

<LogoutButton />

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
    </div>
  );
}

export default RecruiterDashboard;