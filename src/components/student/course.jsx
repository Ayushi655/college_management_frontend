import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  Card,
  ListGroup,
  Modal,
  Alert,
} from "react-bootstrap";

const Courses = () => {
  const [courses, setCourses] = useState([]);
  const [newCourse, setNewCourse] = useState({
    id: "",
    name: "",
    fees: "",
    duration: "",
    certificate: "Available",
    syllabusInput: "",
    syllabus: [],
    instructor: "",
  });

  const [selectedCourse, setSelectedCourse] = useState(null);
  const [showSyllabusModal, setShowSyllabusModal] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewCourse({ ...newCourse, [name]: value });
  };

  const addSyllabusItem = () => {
    if (newCourse.syllabusInput.trim() !== "") {
      setNewCourse((prev) => ({
        ...prev,
        syllabus: [...prev.syllabus, prev.syllabusInput],
        syllabusInput: "",
      }));
    }
  };

  const handleAddCourse = (e) => {
    e.preventDefault();
    if (newCourse.id && newCourse.name) {
      setCourses([...courses, newCourse]);
      setNewCourse({
        id: "",
        name: "",
        fees: "",
        duration: "",
        certificate: "Available",
        syllabusInput: "",
        syllabus: [],
        instructor: "",
      });
      setShowAddModal(false);
      setStatusMessage("✅ Course added successfully!");
      setTimeout(() => setStatusMessage(""), 3000);
    }
  };

  const handleViewSyllabus = (course) => {
    setSelectedCourse(course);
    setShowSyllabusModal(true);
  };

  const handleCloseSyllabusModal = () => {
    setSelectedCourse(null);
    setShowSyllabusModal(false);
  };

  const handleShowInstructor = (course) => {
    alert(`👩‍🏫 Instructor for ${course.name}: ${course.instructor || "TBD"}`);
  };

  const handleEnrolled = (course) => {
    alert(`🎓 You are enrolled in ${course.name}`);
  };

  return (
    <Container className="py-5">
      <h2 className="text-center mb-4">📘 Manage Courses</h2>

      {statusMessage && <Alert variant="success">{statusMessage}</Alert>}

      <div className="text-end mb-4">
        <Button variant="primary" onClick={() => setShowAddModal(true)}>
          ➕ Add New Course
        </Button>
      </div>

      <Row xs={1} md={2} className="g-4">
        {courses.map((course, idx) => (
          <Col key={idx}>
            <Card className="h-100 shadow-sm">
              <Card.Body>
                <Card.Title>{course.name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  ID: {course.id}
                </Card.Subtitle>
                <Card.Text>
                  <strong>Fees:</strong> {course.fees}
                  <br />
                  <strong>Duration:</strong> {course.duration}
                  <br />
                  <strong>Certificate:</strong> {course.certificate}
                </Card.Text>
                <strong>Instructor:</strong> {course.instructor || "TBD"}
                <div className="mt-3 d-grid gap-2">
                  <Button
                    variant="outline-success"
                    onClick={() => handleEnrolled(course)}
                  >
                    ✅ Enrolled
                  </Button>
                  <Button
                    variant="outline-primary"
                    onClick={() => handleViewSyllabus(course)}
                  >
                    📚 View Syllabus
                  </Button>
                  <Button
                    variant="outline-warning"
                    onClick={() => handleShowInstructor(course)}
                  >
                    🧑 Show Instructor
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Modal: Add New Course */}
      <Modal
        show={showAddModal}
        onHide={() => setShowAddModal(false)}
        centered
        size="lg"
      >
        <Modal.Header closeButton>
          <Modal.Title>➕ Add New Course</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleAddCourse}>
            <Row className="gy-3">
              {[
                ["id", "Course ID"],
                ["name", "Course Name"],
                ["fees", "Course Fees"],
                ["duration", "Course Duration"],
                ["instructor", "Instructor (e.g. Prof. Sharma)"],
              ].map(([key, label]) => (
                <Col md={6} key={key}>
                  <Form.Group>
                    <Form.Label>{label}</Form.Label>
                    <Form.Control
                      name={key}
                      value={newCourse[key]}
                      onChange={handleChange}
                      required={key === "id" || key === "name"}
                    />
                  </Form.Group>
                </Col>
              ))}

              <Col md={6}>
                <Form.Group>
                  <Form.Label>Certificate</Form.Label>
                  <Form.Select
                    name="certificate"
                    value={newCourse.certificate}
                    onChange={handleChange}
                  >
                    <option>Available</option>
                    <option>Not Available</option>
                  </Form.Select>
                </Form.Group>
              </Col>

              <Col md={12}>
                <Form.Group>
                  <Form.Label>Syllabus Items</Form.Label>
                  <div className="d-flex">
                    <Form.Control
                      name="syllabusInput"
                      value={newCourse.syllabusInput}
                      onChange={handleChange}
                      placeholder="e.g. React Hooks"
                    />
                    <Button
                      variant="outline-secondary"
                      onClick={addSyllabusItem}
                      className="ms-2"
                    >
                      Add
                    </Button>
                  </div>
                  {newCourse.syllabus.length > 0 && (
                    <ListGroup className="mt-2">
                      {newCourse.syllabus.map((item, i) => (
                        <ListGroup.Item key={i}>{item}</ListGroup.Item>
                      ))}
                    </ListGroup>
                  )}
                </Form.Group>
              </Col>

              <Col md={12}>
                <div className="text-end mt-4">
                  <Button type="submit" variant="success">
                    ✅ Save Course
                  </Button>
                </div>
              </Col>
            </Row>
          </Form>
        </Modal.Body>
      </Modal>

      {/* Modal: View Syllabus */}
      <Modal
        centered
        show={showSyllabusModal}
        onHide={handleCloseSyllabusModal}
      >
        <Modal.Header closeButton>
          <Modal.Title>📘 Syllabus for {selectedCourse?.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ListGroup>
            {selectedCourse?.syllabus.map((topic, i) => (
              <ListGroup.Item key={i}>{topic}</ListGroup.Item>
            ))}
          </ListGroup>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseSyllabusModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default Courses;
