import axios from "axios";

const BASE_URL = "http://localhost:8080";

export const getAllJobs = async () => {
  const response = await axios.get(
    `${BASE_URL}/jobs`
  );

  return response.data;
};

export const getRecruiterJobs = async (recruiterId) => {
  const response = await axios.get(
    `${BASE_URL}/jobs/recruiter/${recruiterId}`
  );

  return response.data;
};

export const createJob = async (jobData) => {
  const response = await axios.post(
    `${BASE_URL}/jobs`,
    jobData
  );

  return response.data;
};

export const getJobById = async (id) => {
  const response = await axios.get(
    `${BASE_URL}/jobs/${id}`
  );

  return response.data;
};

export const deleteJob = async (jobId) => {
  const response = await axios.delete(
    `${BASE_URL}/jobs/${jobId}`
  );

  return response.data;
};