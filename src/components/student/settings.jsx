import React, { useState } from "react";
import {
  Container,
  Card,
  Form,
  Button,
  Row,
  Col,
  Alert,
  FloatingLabel,
} from "react-bootstrap";

const Settings = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    role: "",
    password: "",
    confirmPassword: "",
    notifications: true,
  });

  const [alertMsg, setAlertMsg] = useState("");
  const [alertType, setAlertType] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setUser({
      ...user,
      [name]: type === "checkbox" ? checked : value,
    });

    if (name === "confirmPassword" && value !== user.password) {
      setAlertMsg("❌ Passwords do not match");
      setAlertType("danger");
    } else {
      setAlertMsg("");
      setAlertType("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (user.password !== user.confirmPassword) {
      setAlertMsg("❌ Passwords do not match");
      setAlertType("danger");
    } else {
      setAlertMsg("✅ Settings saved!");
      setAlertType("success");
      // Backend call would go here
    }
  };

  return (
    <Container className="py-5">
      <h2 className="text-center mb-4 fw-bold">⚙️ Account Settings</h2>
      <Card className="p-4 shadow-sm border-0">
        {alertMsg && (
          <Alert variant={alertType} className="text-center">
            {alertMsg}
          </Alert>
        )}

        <Form onSubmit={handleSubmit}>
          <Row className="gy-4">
            <Col md={6}>
              <FloatingLabel label="Full Name">
                <Form.Control
                  type="text"
                  name="name"
                  value={user.name}
                  onChange={handleChange}
                  required
                />
              </FloatingLabel>
            </Col>

            <Col md={6}>
              <FloatingLabel label="Email Address">
                <Form.Control
                  type="email"
                  name="email"
                  value={user.email}
                  onChange={handleChange}
                  required
                />
              </FloatingLabel>
            </Col>

            <Col md={6}>
              <Form.Group>
                <Form.Label>User Role</Form.Label>
                <Form.Select
                  name="role"
                  value={user.role}
                  onChange={handleChange}
                >
                  <option value="">Choose...</option>
                  <option value="Student">Student</option>
                  <option value="Instructor">Teacher</option>
                  <option value="Admin">Admin</option>
                </Form.Select>
              </Form.Group>
            </Col>

            <Col md={6}>
              <FloatingLabel label="New Password">
                <Form.Control
                  type="password"
                  name="password"
                  value={user.password}
                  onChange={handleChange}
                />
              </FloatingLabel>
            </Col>

            <Col md={6}>
              <FloatingLabel label="Confirm Password">
                <Form.Control
                  type="password"
                  name="confirmPassword"
                  value={user.confirmPassword}
                  onChange={handleChange}
                  isInvalid={
                    user.confirmPassword &&
                    user.confirmPassword !== user.password
                  }
                />
              </FloatingLabel>
            </Col>

            <Col md={12}>
              <Form.Check
                type="checkbox"
                label="Send me notifications"
                name="notifications"
                checked={user.notifications}
                onChange={handleChange}
              />
            </Col>

            <Col>
              <Button type="submit" variant="primary" className="w-100 mt-3">
                💾 Save Changes
              </Button>
            </Col>
          </Row>
        </Form>
      </Card>
    </Container>
  );
};

export default Settings;
