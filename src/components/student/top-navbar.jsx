import { useContext, useState } from "react";
import { Navbar, Nav, Container, Image, Button, Modal } from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";
import AuthContext from "../../context/AuthContext";

function TopNavbar() {
  const { logout, user } = useContext(AuthContext);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const handleConfirmLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <>
      <Navbar
        bg="dark"
        variant="dark"
        expand="lg"
        className="px-3 shadow-sm"
        sticky="top"
      >
        <Container fluid>
          {/* Left: Logo */}
          <Navbar.Brand as={Link} to="/">
            <Image
              src="/src/assets/logo.png"
              width="32"
              height="32"
              rounded
              className="me-2"
            />
            <strong>StudentPortal</strong>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="navbar-toggle" />
          <Navbar.Collapse id="navbar-toggle">
            {/* Center: College Dashboard */}
            <Nav className="mx-auto">
              <Nav.Link
                as={Link}
                to="/student-dashboard/dashboard"
                className="text-light fw-semibold"
              >
                🏫 College Dashboard
              </Nav.Link>
            </Nav>

            {/* Right: Welcome message and Logout */}
            <Nav className="align-items-center gap-3 ms-auto">
              {user && (
                <span className="text-light">
                  Welcome, <strong>{user.name}</strong> ({user.role})
                </span>
              )}
              <Button
                variant="outline-light"
                onClick={() => setShowModal(true)}
              >
                Logout
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Modal centered show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Logout</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to log out?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Cancel
          </Button>
          <Button variant="danger" onClick={handleConfirmLogout}>
            Logout
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default TopNavbar;
