import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = async () => {

    try {

      const response = await axios.post(
        "http://localhost:8080/auth/login",
        {
          email,
          password
        }
      );

      localStorage.setItem(
        "token",
        response.data.token
      );

      localStorage.setItem(
        "role",
        response.data.role
      );

      localStorage.setItem(
        "email",
        response.data.email
      );

      localStorage.setItem(
        "userId",
        response.data.userId
      );

      if (response.data.studentId) {
        localStorage.setItem(
          "studentId",
          response.data.studentId
        );
      }

      if (response.data.recruiterId) {
        localStorage.setItem(
          "recruiterId",
          response.data.recruiterId
        );
      }

      alert("Login Successful");

      if (response.data.role === "STUDENT") {
        navigate("/student-dashboard");
      }
      else if (response.data.role === "RECRUITER") {
        navigate("/recruiter-dashboard");
      }
      else if (response.data.role === "ADMIN") {
        navigate("/admin-dashboard");
      }

      console.log(response.data);

    } catch (error) {

      alert("Invalid Credentials");

      console.error(error);

    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>

      <h2>Login</h2>

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <br /><br />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <br /><br />

      <button onClick={handleLogin}>
        Login
      </button>

    </div>
  );
}

export default Login;