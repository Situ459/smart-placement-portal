import axios from "axios";

const BASE_URL = "http://localhost:8080";

export const getAllStudents = async () => {
  const response = await axios.get(
    `${BASE_URL}/students`
  );

  return response.data;
};

export const deleteStudent = async (id) => {
  const response = await axios.delete(
    `${BASE_URL}/students/${id}`
  );

  return response.data;
};

export const registerStudent = async (studentData) => {
  const response = await axios.post(
    `${BASE_URL}/students/register`,
    studentData
  );

  return response.data;
};