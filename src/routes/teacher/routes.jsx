import { Route, Routes } from "react-router-dom";
import TeacherProfileForm from "../../components/teacher/profile";
import TeacherDashboard from "../../pages/TeacherDashboard";
import ChangePassword from "../../components/teacher/settings";
import TeacherAnalytics from "../../components/teacher/analytics";
import TeacherSchedule from "../../components/teacher/schedule";
import Dashboard from "../../pages/Dashboard";
import TeacherCoursePage from "../../components/teacher/course";

const TeacherRoutes = () => {
  return (
    <Routes>
      <Route
        path="profile"
        element={<TeacherProfileForm></TeacherProfileForm>}
      />
      <Route path="courses" element={<TeacherCoursePage></TeacherCoursePage>} />
      <Route path="Analytics" element={<TeacherAnalytics></TeacherAnalytics>} />
      <Route path="schedule" element={<TeacherSchedule></TeacherSchedule>} />
      <Route path="dashboard" element={<Dashboard></Dashboard>} />
      <Route path="settings" element={<ChangePassword></ChangePassword>} />
      <Route
        path="teacherDashboard"
        element={<TeacherDashboard></TeacherDashboard>}
      />
    </Routes>
  );
};

export default TeacherRoutes;
