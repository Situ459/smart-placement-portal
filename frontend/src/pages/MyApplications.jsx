import { useEffect, useState } from "react";
import { getStudentApplications } from "../services/applicationService";

function MyApplications() {
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadApplications();
  }, []);

  const loadApplications = async () => {
    try {
      const data = await getStudentApplications(2);

      setApplications(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <h2>Loading Applications...</h2>;
  }

  return (
    <div style={{ padding: "30px" }}>
      <h1>My Applications</h1>

      {applications.map((application) => (
        <div
          key={application.id}
          style={{
            border: "1px solid #ddd",
            padding: "20px",
            marginBottom: "20px",
            borderRadius: "10px",
          }}
        >
          <h2>{application.job.title}</h2>

          <p>
            <strong>Status:</strong>{" "}
            {application.status}
          </p>

          <p>
            <strong>Location:</strong>{" "}
            {application.job.location}
          </p>

          <p>
            <strong>Salary:</strong>{" "}
            {application.job.salaryPackage}
          </p>

          <p>
            <strong>Remarks:</strong>{" "}
            {application.remarks}
          </p>
        </div>
      ))}
    </div>
  );
}

export default MyApplications;