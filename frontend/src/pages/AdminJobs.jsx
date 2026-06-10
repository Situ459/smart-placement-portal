import { useEffect, useState } from "react";
import {
  getAllJobs,
  deleteJob,
} from "../services/jobService";

function AdminJobs() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadJobs();
  }, []);

  const loadJobs = async () => {
    try {
      const data = await getAllJobs();

      setJobs(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (jobId) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this job?"
    );

    if (!confirmDelete) {
      return;
    }

    try {
      await deleteJob(jobId);

      alert("Job deleted successfully");

      loadJobs();
    } catch (error) {
      console.error(error);

      alert("Failed to delete job");
    }
  };

  if (loading) {
    return <h2>Loading Jobs...</h2>;
  }

  return (
    <div style={{ padding: "30px" }}>
      <h1>Manage Jobs</h1>

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
            <strong>Company:</strong>{" "}
            {job.recruiter.companyName}
          </p>

          <p>
            <strong>Location:</strong>{" "}
            {job.location}
          </p>

          <p>
            <strong>Salary:</strong>{" "}
            {job.salaryPackage}
          </p>

          <p>
            <strong>Status:</strong>{" "}
            {job.status}
          </p>

          <button
            onClick={() =>
              handleDelete(job.id)
            }
            style={{
              backgroundColor: "red",
              color: "white",
              border: "none",
              padding: "10px 15px",
              cursor: "pointer",
              borderRadius: "5px",
            }}
          >
            Delete Job
          </button>
        </div>
      ))}
    </div>
  );
}

export default AdminJobs;