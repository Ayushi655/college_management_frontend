import React, { useState } from "react";
import {
  Form,
  Button,
  Container,
  Row,
  Col,
  Card,
  FloatingLabel,
  Image,
  Spinner,
} from "react-bootstrap";

const TeacherProfileForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    department: "",
    designation: "",
    qualifications: "",
    subjects: "",
    joinedDate: "",
    profilePic: null,
  });

  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData((prev) => ({ ...prev, profilePic: file }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);

    setTimeout(() => {
      console.log("Submitted Teacher Profile:", formData);
      alert("✅ Profile saved successfully!");
      setSubmitting(false);
    }, 1200);
  };

  return (
    <Container className="py-5">
      <h2 className="text-center fw-bold mb-4 text-primary">
        📝 Teacher Profile Form
      </h2>

      <Card className="p-4 shadow-lg border-0">
        <Form onSubmit={handleSubmit}>
          <Row className="gy-4">
            {/* Profile Picture Section */}
            <Col md={12} className="text-center">
              {formData.profilePic ? (
                <div className="d-flex justify-content-center mb-3">
                  <Image
                    src={URL.createObjectURL(formData.profilePic)}
                    alt="Profile Preview"
                    roundedCircle
                    width="140"
                    height="140"
                    style={{
                      border: "4px solid #0d6efd",
                      boxShadow: "0 0 10px rgba(0,0,0,0.1)",
                      objectFit: "cover",
                    }}
                  />
                </div>
              ) : (
                <div className="text-muted mb-3">
                  👤 No profile photo uploaded
                </div>
              )}
              <Form.Group controlId="formProfilePic">
                <Form.Label className="fw-semibold">Profile Picture</Form.Label>
                <Form.Control
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                />
              </Form.Group>
            </Col>

            {/* Contact Info */}
            {[
              ["name", "Full Name", "text"],
              ["email", "Email", "email"],
              ["phone", "Phone", "tel"],
              ["department", "Department", "text"],
              ["designation", "Designation", "text"],
              ["qualifications", "Qualifications", "text"],
              ["subjects", "Subjects (comma-separated)", "text"],
              ["joinedDate", "Joining Date", "date"],
            ].map(([key, label, type], index) => (
              <Col md={index === 6 ? 8 : index === 7 ? 4 : 4} key={key}>
                <FloatingLabel label={label}>
                  <Form.Control
                    type={type}
                    name={key}
                    value={formData[key]}
                    onChange={handleChange}
                    placeholder={label}
                    required={
                      key === "name" || key === "email" || key === "phone"
                    }
                  />
                </FloatingLabel>
              </Col>
            ))}

            {/* Submit Button */}
            <Col md={12}>
              <div className="d-flex justify-content-end mt-4">
                <Button
                  type="submit"
                  variant="primary"
                  disabled={submitting}
                  className="px-4"
                >
                  {submitting ? (
                    <>
                      <Spinner
                        as="span"
                        animation="border"
                        size="sm"
                        role="status"
                        aria-hidden="true"
                        className="me-2"
                      />
                      Saving...
                    </>
                  ) : (
                    "💾 Save Profile"
                  )}
                </Button>
              </div>
            </Col>
          </Row>
        </Form>
      </Card>
    </Container>
  );
};

export default TeacherProfileForm;
