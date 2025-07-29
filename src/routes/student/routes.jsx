import { Route, Routes } from "react-router-dom";
import StudentProfile from "../../components/student/profile";
import StudentDashboard from "../../pages/StudentDashboard";
import Courses from "../../components/student/course";
import Settings from "../../components/student/settings";
import Dashboard from "../../components/student/dashboard";

const StudentRoutes = () => {
  return (
    <Routes>
      <Route path="profile" element={<StudentProfile></StudentProfile>} />
      <Route path="Course" element={<Courses></Courses>} />
      <Route path="settings" element={<Settings></Settings>} />
      <Route path="dashboard" element={<Dashboard></Dashboard>} />
      <Route
        path="studentDashboard"
        element={<StudentDashboard></StudentDashboard>}
      />
    </Routes>
  );
};

export default StudentRoutes;
