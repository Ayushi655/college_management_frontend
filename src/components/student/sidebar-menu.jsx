import { Nav } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import { FaTachometerAlt, FaBook, FaUserCircle, FaCog } from "react-icons/fa";

function Sidebar() {
  const location = useLocation();

  const navItems = [
    {
      path: "/student-dashboard/dashboard",
      label: "Dashboard",
      icon: <FaTachometerAlt />,
    },
    { path: "/student-dashboard/course", label: "Course", icon: <FaBook /> },
    {
      path: "/student-dashboard/profile",
      label: "Profile",
      icon: <FaUserCircle />,
    },
    { path: "/student-dashboard/settings", label: "Settings", icon: <FaCog /> },
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
      <h4 className="text-center mb-4">📘 Student Panel</h4>
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
                backgroundColor: isActive ? "#0d6efd" : "transparent",
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

export default Sidebar;
