import axios from "axios";

const BASE_URL = "http://localhost:8080";

export const uploadResume = async (studentId, file) => {
  const formData = new FormData();

  formData.append("studentId", studentId);
  formData.append("file", file);

  const response = await axios.post(
    `${BASE_URL}/resumes/upload`,
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );

  return response.data;
};

export const getStudentResumes = async (studentId) => {
  const response = await axios.get(
    `${BASE_URL}/resumes/student/${studentId}`
  );

  return response.data;
};

export const getLatestResume = async (studentId) => {
  const response = await axios.get(
    `${BASE_URL}/resumes/student/${studentId}/latest`
  );

  return response.data;
};