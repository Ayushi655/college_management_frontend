// src/pages/RegistrationPage.jsx
import { useState, useContext } from "react";
import { Container, Row, Col, Card, Form, Button, Alert } from "react-bootstrap";
import AuthContext from "../context/AuthContext";
import logo from "../assets/logo.png";
import { registerUser } from "../services/authService";
import { Link } from "react-router-dom";

const RegistrationPage = () => {
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("student");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const data = await registerUser(email, password, role);
      setMessage(data.message);
      setError("");
      await login(email, password);
    } catch (err) {
      setError(err.response?.data?.message || err.message);
      setMessage("");
    }
  };

  return (
    <Container fluid className="vh-100 d-flex align-items-center justify-content-center bg-light">
      

      <Row className="w-100 justify-content-center">
        <Col md={4}>
          <Card className="shadow-sm">
            <div className=" text-center p-3">
        <img src={logo} alt="Logo" style={{ width: "120px" }} />
      </div>
            <Card.Body>
              <h3 className="mb-4 text-center">Register</h3>

              {message && <Alert variant="success">{message}</Alert>}
              {error && <Alert variant="danger">{error}</Alert>}

              <Form onSubmit={handleRegister}>
                <Form.Group className="mb-3">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-4">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-4">
                  <Form.Label>Role</Form.Label>
                  <Form.Select value={role} onChange={(e) => setRole(e.target.value)}>
                    <option value="student">Student</option>
                    <option value="teacher">Teacher</option>
                  </Form.Select>
                </Form.Group>

                <Button variant="success" type="submit" className="w-100">
                  Sign Up
                </Button>
              </Form>
              <div className="d-flex justify-content-end mt-2">
                <Form.Text className="text-muted">
                  Already have an account <Link to="/login">Login</Link>
                </Form.Text>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default RegistrationPage;