import React, { useState } from "react";
import {
  Container,
  Form,
  Button,
  Card,
  Row,
  Col,
  FloatingLabel,
} from "react-bootstrap";

const ChangePassword = () => {
  const [formData, setFormData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.newPassword !== formData.confirmPassword) {
      alert("New password and confirmation do not match.");
      return;
    }

    // TODO: Add authentication & update password logic
    console.log("Password change request:", formData);
    alert("Password updated successfully!");
  };

  return (
    <Container className="py-5">
      <h2 className="text-center fw-bold mb-4">🔑 Change Password</h2>
      <Card className="p-4 shadow-sm">
        <Form onSubmit={handleSubmit}>
          <Row className="gy-4">
            <Col md={12}>
              <FloatingLabel label="Current Password">
                <Form.Control
                  type="password"
                  name="currentPassword"
                  value={formData.currentPassword}
                  onChange={handleChange}
                  required
                />
              </FloatingLabel>
            </Col>

            <Col md={6}>
              <FloatingLabel label="New Password">
                <Form.Control
                  type="password"
                  name="newPassword"
                  value={formData.newPassword}
                  onChange={handleChange}
                  required
                />
              </FloatingLabel>
            </Col>

            <Col md={6}>
              <FloatingLabel label="Confirm New Password">
                <Form.Control
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                />
              </FloatingLabel>
            </Col>

            <Col md={12} className="text-end mt-4">
              <Button type="submit" variant="primary">
                🔐 Update Password
              </Button>
            </Col>
          </Row>
        </Form>
      </Card>
    </Container>
  );
};

export default ChangePassword;
