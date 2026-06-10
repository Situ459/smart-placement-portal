import { useEffect, useState } from "react";
import {
  getAllStudents,
  deleteStudent,
  registerStudent,
} from "../services/studentService";

function AdminStudents() {
  const [students, setStudents] = useState([]);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    rollNo: "",
    branch: "",
    cgpa: "",
  });

  useEffect(() => {
    loadStudents();
  }, []);

  const loadStudents = async () => {
    try {
      const data = await getAllStudents();

      setStudents(data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteStudent(id);

      loadStudents();
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleCreateStudent = async (e) => {
    e.preventDefault();

    try {
      await registerStudent(formData);

      setFormData({
        fullName: "",
        email: "",
        password: "",
        rollNo: "",
        branch: "",
        cgpa: "",
      });

      loadStudents();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div style={{ padding: "30px" }}>
      <h1>Manage Students</h1>

      <form
        onSubmit={handleCreateStudent}
        style={{
          border: "1px solid #ddd",
          padding: "20px",
          borderRadius: "10px",
          marginBottom: "30px",
        }}
      >
        <h2>Create Student</h2>

        <input
          type="text"
          name="fullName"
          placeholder="Full Name"
          value={formData.fullName}
          onChange={handleChange}
        />

        <br />
        <br />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />

        <br />
        <br />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
        />

        <br />
        <br />

        <input
          type="text"
          name="rollNo"
          placeholder="Roll Number"
          value={formData.rollNo}
          onChange={handleChange}
        />

        <br />
        <br />

        <input
          type="text"
          name="branch"
          placeholder="Branch"
          value={formData.branch}
          onChange={handleChange}
        />

        <br />
        <br />

        <input
          type="number"
          step="0.01"
          name="cgpa"
          placeholder="CGPA"
          value={formData.cgpa}
          onChange={handleChange}
        />

        <br />
        <br />

        <button type="submit">
          Create Student
        </button>
      </form>

      {students.map((student) => (
        <div
          key={student.id}
          style={{
            border: "1px solid #ddd",
            padding: "20px",
            marginBottom: "20px",
            borderRadius: "10px",
          }}
        >
          <h2>
            {student.user?.fullName}
          </h2>

          <p>
            <strong>Email:</strong>{" "}
            {student.user?.email}
          </p>

          <p>
            <strong>Roll No:</strong>{" "}
            {student.rollNo}
          </p>

          <p>
            <strong>Branch:</strong>{" "}
            {student.branch}
          </p>

          <p>
            <strong>CGPA:</strong>{" "}
            {student.cgpa}
          </p>

          <button
            onClick={() =>
              handleDelete(student.id)
            }
          >
            Delete Student
          </button>
        </div>
      ))}
    </div>
  );
}

export default AdminStudents;