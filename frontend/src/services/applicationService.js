import axios from "axios";

const BASE_URL = "http://localhost:8080";

export const applyJob = async (jobId) => {

  const studentId =
    localStorage.getItem("studentId");

  const response = await axios.post(
    `${BASE_URL}/applications`,
    {
      student: {
        id: studentId
      },
      job: {
        id: jobId
      },
      status: "APPLIED",
      remarks: "Applied through portal"
    }
  );

  return response.data;
};

export const getStudentApplications = async (studentId) => {
  const response = await axios.get(
    `${BASE_URL}/applications/student/${studentId}`
  );

  return response.data;
};

export const getApplicationsByJob = async (jobId) => {
  const response = await axios.get(
    `${BASE_URL}/applications/job/${jobId}`
  );

  return response.data;
};

export const updateApplicationStatus = async (
  applicationId,
  status
) => {
  const response = await axios.put(
    `${BASE_URL}/applications/${applicationId}/status?status=${status}`
  );

  return response.data;
};