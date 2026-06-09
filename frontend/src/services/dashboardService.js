import axios from "axios";

const BASE_URL = "http://localhost:8080";

// Student Dashboard
export const getStudentDashboard = async (studentId) => {
  const response = await axios.get(
    `${BASE_URL}/dashboard/student/${studentId}`
  );

  return response.data;
};

// Recruiter Dashboard
export const getRecruiterDashboard = async (recruiterId) => {
  const response = await axios.get(
    `${BASE_URL}/dashboard/recruiter/${recruiterId}`
  );

  return response.data;
};

// Admin Dashboard
export const getAdminDashboard = async () => {
  const response = await axios.get(
    `${BASE_URL}/dashboard/admin`
  );

  return response.data;
};