import { useEffect, useState } from "react";
import {
  getAllRecruiters,
  deleteRecruiter,
  registerRecruiter,
} from "../services/recruiterService";

function AdminRecruiters() {
  const [recruiters, setRecruiters] = useState([]);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    companyName: "",
    designation: "",
    phone: "",
  });

  useEffect(() => {
    loadRecruiters();
  }, []);

  const loadRecruiters = async () => {
    try {
      const data = await getAllRecruiters();

      setRecruiters(data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteRecruiter(id);

      loadRecruiters();
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

  const handleCreateRecruiter = async (e) => {
    e.preventDefault();

    try {
      await registerRecruiter(formData);

      setFormData({
        fullName: "",
        email: "",
        password: "",
        companyName: "",
        designation: "",
        phone: "",
      });

      loadRecruiters();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div style={{ padding: "30px" }}>
      <h1>Manage Recruiters</h1>

      <form
        onSubmit={handleCreateRecruiter}
        style={{
          border: "1px solid #ddd",
          padding: "20px",
          borderRadius: "10px",
          marginBottom: "30px",
        }}
      >
        <h2>Create Recruiter</h2>

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
          name="companyName"
          placeholder="Company Name"
          value={formData.companyName}
          onChange={handleChange}
        />

        <br />
        <br />

        <input
          type="text"
          name="designation"
          placeholder="Designation"
          value={formData.designation}
          onChange={handleChange}
        />

        <br />
        <br />

        <input
          type="text"
          name="phone"
          placeholder="Phone"
          value={formData.phone}
          onChange={handleChange}
        />

        <br />
        <br />

        <button type="submit">
          Create Recruiter
        </button>
      </form>

      {recruiters.map((recruiter) => (
        <div
          key={recruiter.id}
          style={{
            border: "1px solid #ddd",
            padding: "20px",
            marginBottom: "20px",
            borderRadius: "10px",
          }}
        >
          <h2>{recruiter.companyName}</h2>

          <p>
            <strong>Name:</strong>{" "}
            {recruiter.user?.fullName}
          </p>

          <p>
            <strong>Email:</strong>{" "}
            {recruiter.user?.email}
          </p>

          <p>
            <strong>Designation:</strong>{" "}
            {recruiter.designation}
          </p>

          <p>
            <strong>Phone:</strong>{" "}
            {recruiter.phone}
          </p>

          <button
            onClick={() =>
              handleDelete(recruiter.id)
            }
          >
            Delete Recruiter
          </button>
        </div>
      ))}
    </div>
  );
}

export default AdminRecruiters;