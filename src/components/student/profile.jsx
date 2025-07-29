import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  Card,
  Alert,
  FloatingLabel,
} from "react-bootstrap";

const StudentProfile = () => {
  const [profile, setProfile] = useState({
    name: "",
    fatherName: "",
    motherName: "",
    gender: "",
    aadhar: "",
    mobile: "",
    email: "",
    bloodGroup: "",
    abcId: "",
    religion: "",
    category: "",
    country: "India",
    state: "",
    pinCode: "",
    city: "",
    address: "",
    photo: null,
    previewUrl: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const validTypes = ["image/jpeg", "image/jpg"];
    const maxSizeMB = 2;

    if (!validTypes.includes(file.type)) {
      setError("Only JPG/JPEG formats are allowed.");
      return;
    }

    if (file.size / 1024 / 1024 > maxSizeMB) {
      setError("File size must be under 2MB.");
      return;
    }

    setError("");
    setProfile((prev) => ({
      ...prev,
      photo: file,
      previewUrl: URL.createObjectURL(file),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccess("✅ Profile Updated Successfully!");
    setTimeout(() => setSuccess(""), 3000);
    console.log(profile);
  };

  const handleGenerateId = () => {
    const randomId = "ABC" + Math.floor(Math.random() * 1000000);
    setProfile((prev) => ({ ...prev, abcId: randomId }));
  };

  return (
    <Container className="py-5">
      <Card className="p-4 shadow-sm border-0">
        <h2 className="text-center mb-4 fw-bold">🧑‍🎓 Student Profile Form</h2>

        {/* Feedback Alerts */}
        {error && (
          <Alert variant="danger" className="text-center">
            {error}
          </Alert>
        )}
        {success && (
          <Alert variant="success" className="text-center">
            {success}
          </Alert>
        )}

        {/* Profile Photo Preview */}
        {profile.previewUrl && (
          <div className="text-center mb-4">
            <img
              src={profile.previewUrl}
              alt="Profile"
              style={{
                width: "120px",
                height: "120px",
                objectFit: "cover",
                borderRadius: "50%",
                border: "3px solid #0d6efd",
                transition: "transform 0.3s",
              }}
            />
          </div>
        )}

        <Form onSubmit={handleSubmit}>
          <Row>
            <Col md={6}>
              <Card className="p-3 mb-4 border-0 bg-light">
                <h5 className="fw-semibold mb-3">🧍 Personal Details</h5>

                <FloatingLabel label="Student Name" className="mb-3">
                  <Form.Control
                    name="name"
                    value={profile.name}
                    onChange={handleChange}
                    required
                  />
                </FloatingLabel>

                <FloatingLabel label="Father's Name" className="mb-3">
                  <Form.Control
                    name="fatherName"
                    value={profile.fatherName}
                    onChange={handleChange}
                  />
                </FloatingLabel>

                <FloatingLabel label="Mother's Name" className="mb-3">
                  <Form.Control
                    name="motherName"
                    value={profile.motherName}
                    onChange={handleChange}
                  />
                </FloatingLabel>

                <Form.Group className="mb-3">
                  <Form.Label>Gender</Form.Label>
                  <Form.Select
                    name="gender"
                    value={profile.gender}
                    onChange={handleChange}
                  >
                    <option value="">Select</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Profile Photo (JPG/JPEG, Max 2MB)</Form.Label>
                  <Form.Control
                    type="file"
                    accept=".jpg,.jpeg"
                    onChange={handleFileChange}
                  />
                </Form.Group>
              </Card>
            </Col>

            <Col md={6}>
              <Card className="p-3 mb-4 border-0 bg-light">
                <h5 className="fw-semibold mb-3">📞 Contact & Identity</h5>

                <FloatingLabel label="Aadhar Number" className="mb-3">
                  <Form.Control
                    name="aadhar"
                    value={profile.aadhar}
                    onChange={handleChange}
                  />
                </FloatingLabel>

                <FloatingLabel label="Mobile Number" className="mb-3">
                  <Form.Control
                    name="mobile"
                    value={profile.mobile}
                    onChange={handleChange}
                  />
                </FloatingLabel>

                <FloatingLabel label="Email Address" className="mb-3">
                  <Form.Control
                    name="email"
                    type="email"
                    value={profile.email}
                    onChange={handleChange}
                  />
                </FloatingLabel>

                <FloatingLabel label="Blood Group" className="mb-3">
                  <Form.Control
                    name="bloodGroup"
                    value={profile.bloodGroup}
                    onChange={handleChange}
                  />
                </FloatingLabel>

                <Form.Group className="mb-3">
                  <Form.Label>ABC ID</Form.Label>
                  <Form.Control name="abcId" value={profile.abcId} readOnly />
                </Form.Group>

                <div className="d-flex justify-content-between mt-2">
                  <Button type="submit" variant="primary">
                    Update Profile
                  </Button>
                  <Button variant="success" onClick={handleGenerateId}>
                    Generate ABC ID
                  </Button>
                </div>
              </Card>
            </Col>
          </Row>

          <Card className="p-3 border-0 bg-light">
            <h5 className="fw-semibold mb-3">🌐 Additional Information</h5>
            <Row className="mb-3">
              <Col md={4}>
                <FloatingLabel label="Religion">
                  <Form.Control
                    name="religion"
                    value={profile.religion}
                    onChange={handleChange}
                  />
                </FloatingLabel>
              </Col>
              <Col md={4}>
                <Form.Group>
                  <Form.Label>Category</Form.Label>
                  <Form.Select
                    name="category"
                    value={profile.category}
                    onChange={handleChange}
                  >
                    <option value="">Select</option>
                    <option value="General">General</option>
                    <option value="SC">SC</option>
                    <option value="ST">ST</option>
                    <option value="OBC">OBC</option>
                  </Form.Select>
                </Form.Group>
              </Col>
              <Col md={4}>
                <FloatingLabel label="Country">
                  <Form.Control
                    name="country"
                    value={profile.country}
                    disabled
                  />
                </FloatingLabel>
              </Col>
            </Row>

            <Row className="mb-3">
              <Col md={4}>
                <FloatingLabel label="State">
                  <Form.Control
                    name="state"
                    value={profile.state}
                    onChange={handleChange}
                  />
                </FloatingLabel>
              </Col>
              <Col md={4}>
                <FloatingLabel label="Pin-code">
                  <Form.Control
                    name="pinCode"
                    value={profile.pinCode}
                    onChange={handleChange}
                  />
                </FloatingLabel>
              </Col>
              <Col md={4}>
                <FloatingLabel label="City">
                  <Form.Control
                    name="city"
                    value={profile.city}
                    onChange={handleChange}
                  />
                </FloatingLabel>
              </Col>
            </Row>

            <Form.Group className="mb-3">
              <Form.Label>Address</Form.Label>
              <Form.Control
                as="textarea"
                rows={2}
                name="address"
                value={profile.address}
                onChange={handleChange}
              />
            </Form.Group>
          </Card>
        </Form>
      </Card>
    </Container>
  );
};

export default StudentProfile;
