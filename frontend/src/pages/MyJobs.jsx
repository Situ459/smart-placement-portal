import { useEffect, useState } from "react";
import { getRecruiterJobs } from "../services/jobService";
import { useNavigate } from "react-router-dom";

function MyJobs() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    loadJobs();
  }, []);

  const loadJobs = async () => {
    try {
      const data = await getRecruiterJobs(1);

      setJobs(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <h2>Loading Jobs...</h2>;
  }

  return (
    <div style={{ padding: "30px" }}>
      <h1>My Posted Jobs</h1>

      {jobs.map((job) => (
        <div
          key={job.id}
          style={{
            border: "1px solid #ddd",
            padding: "20px",
            marginBottom: "20px",
            borderRadius: "10px",
          }}
        >
          <h2>{job.title}</h2>

          <p>
            <strong>Location:</strong> {job.location}
          </p>

          <p>
            <strong>Salary:</strong> {job.salaryPackage}
          </p>

          <p>
            <strong>Status:</strong> {job.status}
          </p>

          <button
            onClick={() =>
              navigate(`/applicants/${job.id}`)
            }
          >
            View Applicants
          </button>
        </div>
      ))}
    </div>
  );
}

export default MyJobs;