import { BrowserRouter, Routes, Route } from "react-router-dom";

import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import StudentDashboard from "./pages/StudentDashboard";
import RecruiterDashboard from "./pages/RecruiterDashboard";
import AdminDashboard from "./pages/AdminDashboard";
import JobList from "./pages/JobList";
import MyApplications from "./pages/MyApplications";
import PostJob from "./pages/PostJob";
import MyJobs from "./pages/MyJobs";
import ApplicantList from "./pages/ApplicantList";
import AdminJobs from "./pages/AdminJobs";
import ProtectedRoute from "./routes/ProtectedRoute";
import AdminStudents from "./pages/AdminStudents";
import AdminRecruiters from "./pages/AdminRecruiters";
import EditJob from "./pages/EditJob";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<LandingPage />} />

        <Route path="/login" element={<Login />} />

        <Route
          path="/student-dashboard"
          element={
            <ProtectedRoute allowedRole="STUDENT">
              <StudentDashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/recruiter-dashboard"
          element={
            <ProtectedRoute allowedRole="RECRUITER">
              <RecruiterDashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin-dashboard"
          element={
            <ProtectedRoute allowedRole="ADMIN">
              <AdminDashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/job-list"
          element={
            <ProtectedRoute allowedRole="STUDENT">
              <JobList />
            </ProtectedRoute>
          }
        />

        <Route
          path="/my-applications"
          element={
            <ProtectedRoute allowedRole="STUDENT">
              <MyApplications />
            </ProtectedRoute>
          }
        />

        <Route
  path="/post-job"
  element={
    <ProtectedRoute allowedRole="RECRUITER">
      <PostJob />
    </ProtectedRoute>
  }
/>

<Route
  path="/my-jobs"
  element={
    <ProtectedRoute allowedRole="RECRUITER">
      <MyJobs />
    </ProtectedRoute>
  }
/>

<Route
  path="/applicants/:jobId"
  element={
    <ProtectedRoute allowedRole="RECRUITER">
      <ApplicantList />
    </ProtectedRoute>
  }
/>

<Route
  path="/admin-jobs"
  element={
    <ProtectedRoute allowedRole="ADMIN">
      <AdminJobs />
    </ProtectedRoute>
  }
/>

<Route
  path="/admin-students"
  element={
    <ProtectedRoute allowedRole="ADMIN">
      <AdminStudents />
    </ProtectedRoute>
  }
/>

<Route
  path="/admin-recruiters"
  element={
    <ProtectedRoute allowedRole="ADMIN">
      <AdminRecruiters />
    </ProtectedRoute>
  }
/>

<Route
  path="/edit-job/:id"
  element={
    <ProtectedRoute allowedRole="RECRUITER">
      <EditJob />
    </ProtectedRoute>
  }
/>

      </Routes>
    </BrowserRouter>
  );
}

export default App;