import axios from "axios";

const BASE_URL = "http://localhost:8080";

export const getAllRecruiters = async () => {
  const response = await axios.get(
    `${BASE_URL}/recruiters`
  );

  return response.data;
};

export const deleteRecruiter = async (id) => {
  const response = await axios.delete(
    `${BASE_URL}/recruiters/${id}`
  );

  return response.data;
};

export const registerRecruiter = async (recruiterData) => {
  const response = await axios.post(
    `${BASE_URL}/recruiters/register`,
    recruiterData
  );

  return response.data;
};