import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getApplicationsByJob } from "../services/applicationService";

function ApplicantList() {
  const { jobId } = useParams();

  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadApplicants();
  }, []);

  const loadApplicants = async () => {
    try {
      const data = await getApplicationsByJob(jobId);

      setApplications(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <h2>Loading Applicants...</h2>;
  }

  return (
    <div style={{ padding: "30px" }}>
      <h1>Applicants</h1>

      {applications.length === 0 ? (
        <h3>No Applications Yet</h3>
      ) : (
        applications.map((application) => (
          <div
            key={application.id}
            style={{
              border: "1px solid #ddd",
              padding: "20px",
              marginBottom: "20px",
              borderRadius: "10px",
            }}
          >
            <h2>
              {application.student.user.fullName}
            </h2>

            <p>
              <strong>Email:</strong>{" "}
              {application.student.user.email}
            </p>

            <p>
              <strong>Branch:</strong>{" "}
              {application.student.branch}
            </p>

            <p>
              <strong>CGPA:</strong>{" "}
              {application.student.cgpa}
            </p>

            <p>
              <strong>Status:</strong>{" "}
              {application.status}
            </p>
          </div>
        ))
      )}
    </div>
  );
}

export default ApplicantList;