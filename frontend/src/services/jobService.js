import axios from "axios";

const BASE_URL = "http://localhost:8080";

export const getAllJobs = async () => {
  const response = await axios.get(
    `${BASE_URL}/jobs`
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