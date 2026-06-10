import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  getJobById,
  updateJob,
} from "../services/jobService";

function EditJob() {
  const { id } = useParams();

  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [salaryPackage, setSalaryPackage] =
    useState("");
  const [requiredSkills, setRequiredSkills] =
    useState("");

  useEffect(() => {
    loadJob();
  }, []);

  const loadJob = async () => {
    try {
      const job = await getJobById(id);

      setTitle(job.title);
      setLocation(job.location);
      setSalaryPackage(job.salaryPackage);
      setRequiredSkills(
        job.requiredSkills
      );
    } catch (error) {
      console.error(error);
    }
  };

  const handleUpdate = async () => {
    try {
      const existingJob =
        await getJobById(id);

      await updateJob(id, {
        ...existingJob,
        title,
        description: title,
        location,
        salaryPackage,
        requiredSkills,
      });

      alert("Job Updated Successfully");

      navigate("/my-jobs");
    } catch (error) {
      console.error(error);

      alert("Failed to update job");
    }
  };

  return (
    <div style={{ padding: "30px" }}>
      <h1>Edit Job</h1>

      <input
        type="text"
        placeholder="Job Title"
        value={title}
        onChange={(e) =>
          setTitle(e.target.value)
        }
      />

      <br />
      <br />

      <input
        type="text"
        placeholder="Location"
        value={location}
        onChange={(e) =>
          setLocation(e.target.value)
        }
      />

      <br />
      <br />

      <input
        type="number"
        placeholder="Salary"
        value={salaryPackage}
        onChange={(e) =>
          setSalaryPackage(
            e.target.value
          )
        }
      />

      <br />
      <br />

      <input
        type="text"
        placeholder="Required Skills"
        value={requiredSkills}
        onChange={(e) =>
          setRequiredSkills(
            e.target.value
          )
        }
      />

      <br />
      <br />

      <button
        onClick={handleUpdate}
      >
        Update Job
      </button>
    </div>
  );
}

export default EditJob;