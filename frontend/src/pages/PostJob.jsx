import { useState } from "react";
import { createJob } from "../services/jobService";

function PostJob() {

  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [salaryPackage, setSalaryPackage] = useState("");
  const [requiredSkills, setRequiredSkills] = useState("");

  const handleSubmit = async () => {

  try {

    const recruiterId =
      localStorage.getItem("recruiterId");

    await createJob({
      recruiter: {
        id: recruiterId
      },
      title,
      description: title,
      location,
      salaryPackage,
      jobType: "FULL_TIME",
      requiredSkills,
      minimumCgpa: 7,
      deadline: "2027-12-31",
      status: "OPEN"
    });

    alert("Job Posted Successfully");

    setTitle("");
    setLocation("");
    setSalaryPackage("");
    setRequiredSkills("");

  } catch (error) {

    console.error(error);

    alert("Failed to post job");
  }
};

  return (
    <div style={{ padding: "30px" }}>

      <h1>Post New Job</h1>

      <input
        type="text"
        placeholder="Job Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <br /><br />

      <input
        type="text"
        placeholder="Location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />

      <br /><br />

      <input
        type="number"
        placeholder="Salary"
        value={salaryPackage}
        onChange={(e) => setSalaryPackage(e.target.value)}
      />

      <br /><br />

      <input
        type="text"
        placeholder="Required Skills"
        value={requiredSkills}
        onChange={(e) => setRequiredSkills(e.target.value)}
      />

      <br /><br />

      <button onClick={handleSubmit}>
        Post Job
      </button>

    </div>
  );
}

export default PostJob;