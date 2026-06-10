import { useEffect, useState } from "react";
import { getAllJobs } from "../services/jobService";
import {
  applyJob,
  getStudentApplications,
} from "../services/applicationService";

function JobList() {
  const [jobs, setJobs] = useState([]);
  const [appliedJobs, setAppliedJobs] = useState([]);

  useEffect(() => {
    loadJobs();
    loadApplications();
  }, []);

  const loadJobs = async () => {
    try {
      const data = await getAllJobs();
      setJobs(data);
    } catch (error) {
      console.error(error);
    }
  };

  const loadApplications = async () => {
    try {

      const studentId =
        localStorage.getItem("studentId");

      const data =
        await getStudentApplications(studentId);

      const jobIds = data.map(
        (application) => application.job.id
      );

      setAppliedJobs(jobIds);

    } catch (error) {
      console.error(error);
    }
  };

  const handleApply = async (jobId) => {
    try {

      await applyJob(jobId);

      alert("Application Submitted Successfully");

      loadApplications();

    } catch (error) {

      console.error(error);

      alert("You may have already applied for this job");
    }
  };

  return (
    <div style={{ padding: "30px" }}>
      <h1>Available Jobs</h1>

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
            <strong>Job Type:</strong> {job.jobType}
          </p>

          <p>
            <strong>Skills:</strong> {job.requiredSkills}
          </p>

          <p>
            <strong>Minimum CGPA:</strong> {job.minimumCgpa}
          </p>

          <p>
            <strong>Deadline:</strong> {job.deadline}
          </p>

          {appliedJobs.includes(job.id) ? (
            <button disabled>
              Applied
            </button>
          ) : (
            <button
              onClick={() => handleApply(job.id)}
            >
              Apply
            </button>
          )}
        </div>
      ))}
    </div>
  );
}

export default JobList;