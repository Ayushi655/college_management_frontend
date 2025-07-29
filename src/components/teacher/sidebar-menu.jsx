import { Nav } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import {
  FaTachometerAlt,
  FaBookOpen,
  FaUserTie,
  FaCalendarAlt,
  FaChartLine,
  FaCog,
} from "react-icons/fa";

function TeacherSidebar() {
  const location = useLocation();

  const navItems = [
    {
      path: "/teacher-dashboard/dashboard",
      label: "Dashboard",
      icon: <FaTachometerAlt />,
    },
    {
      path: "/teacher-dashboard/courses",
      label: "My Courses",
      icon: <FaBookOpen />,
    },
    {
      path: "/teacher-dashboard/profile",
      label: "Profile",
      icon: <FaUserTie />,
    },
    {
      path: "/teacher-dashboard/schedule",
      label: "Schedule",
      icon: <FaCalendarAlt />,
    },
    {
      path: "/teacher-dashboard/analytics",
      label: "Analytics",
      icon: <FaChartLine />,
    },
    {
      path: "/teacher-dashboard/settings",
      label: "Settings",
      icon: <FaCog />,
    },
  ];

  return (
    <div
      style={{
        width: "220px",
        height: "100vh",
        backgroundColor: "#1f2a36",
        color: "white",
        paddingTop: "1rem",
        position: "fixed",
        boxShadow: "0 0 15px rgba(0,0,0,0.2)",
        zIndex: 1000,
      }}
    >
      <h4 className="text-center mb-4">🧑‍🏫 Teacher Panel</h4>
      <Nav className="flex-column px-3">
        {navItems.map(({ path, label, icon }) => {
          const isActive = location.pathname === path;
          return (
            <Nav.Link
              key={path}
              as={Link}
              to={path}
              style={{
                color: isActive ? "#fff" : "#ccc",
                backgroundColor: isActive ? "#198754" : "transparent",
                fontWeight: isActive ? "600" : "normal",
                padding: "12px",
                marginBottom: "5px",
                borderRadius: "6px",
                transition: "all 0.3s",
              }}
            >
              <span className="me-2">{icon}</span> {label}
            </Nav.Link>
          );
        })}
      </Nav>
    </div>
  );
}

export default TeacherSidebar;
