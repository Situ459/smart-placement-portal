import axios from "axios";

const BASE_URL = "http://localhost:8080";

export const applyJob = async (jobId) => {
  const response = await axios.post(
    `${BASE_URL}/applications`,
    {
      student: {
        id: 2
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