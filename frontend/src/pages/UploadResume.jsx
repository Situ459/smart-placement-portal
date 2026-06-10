import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { uploadResume } from "../services/resumeService";

function UploadResume() {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleUpload = async () => {
    if (!file) {
      alert("Please select a PDF file");
      return;
    }

    try {
  setLoading(true);

  const studentId =
    localStorage.getItem("studentId");

  const response =
    await uploadResume(studentId, file);

  alert(
    `Resume uploaded successfully: ${response.fileName}`
  );

  navigate("/student-dashboard");

} catch (error) {
  console.error(error);

  alert("Resume upload failed");
} finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: "30px" }}>
      <h1>Upload Resume</h1>

      <input
        type="file"
        accept=".pdf"
        onChange={(e) => setFile(e.target.files[0])}
      />

      <br />
      <br />

      <button
        onClick={handleUpload}
        disabled={loading}
        style={{
          padding: "10px 20px",
          cursor: "pointer",
        }}
      >
        {loading ? "Uploading..." : "Upload Resume"}
      </button>

      <button
        onClick={() => navigate("/student-dashboard")}
        style={{
          padding: "10px 20px",
          marginLeft: "10px",
          cursor: "pointer",
        }}
      >
        Back
      </button>
    </div>
  );
}

export default UploadResume;