import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Form,
  Button,
  Table,
  FloatingLabel,
  Modal,
  ListGroup,
  Alert,
} from "react-bootstrap";

const TeacherCoursePage = () => {
  const [courses, setCourses] = useState([
    { id: "WT101", title: "Web Technologies", semester: "V", students: 60 },
    { id: "DBMS203", title: "Database Systems", semester: "V", students: 55 },
    { id: "ST307", title: "Software Testing", semester: "VI", students: 50 },
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [showAddModal, setShowAddModal] = useState(false);
  const [newCourse, setNewCourse] = useState({
    id: "",
    title: "",
    semester: "",
    students: "",
    syllabusItem: "",
    syllabus: [],
  });
  const [statusMessage, setStatusMessage] = useState("");

  // Handlers
  const handleSearchChange = (e) => setSearchTerm(e.target.value);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewCourse((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddSyllabusItem = () => {
    if (newCourse.syllabusItem.trim() !== "") {
      setNewCourse((prev) => ({
        ...prev,
        syllabus: [...prev.syllabus, prev.syllabusItem],
        syllabusItem: "",
      }));
    }
  };

  const handleAddCourse = (e) => {
    e.preventDefault();
    if (newCourse.id && newCourse.title) {
      setCourses((prev) => [...prev, newCourse]);
      setStatusMessage(`✅ Added course: ${newCourse.title}`);
      setTimeout(() => setStatusMessage(""), 3000);
      setShowAddModal(false);
      setNewCourse({
        id: "",
        title: "",
        semester: "",
        students: "",
        syllabusItem: "",
        syllabus: [],
      });
    }
  };

  const filteredCourses = courses.filter(
    (c) =>
      c.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      c.id.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Container className="py-5">
      <h2 className="text-center fw-bold mb-4 text-success">
        📘 My Teaching Courses
      </h2>

      {statusMessage && (
        <Alert variant="success" className="text-center">
          {statusMessage}
        </Alert>
      )}

      <Card className="p-4 shadow-sm mb-4 border-0">
        <Row className="align-items-center gy-2">
          <Col md={9}>
            <FloatingLabel label="Search by course title or code">
              <Form.Control
                type="text"
                placeholder="Search"
                value={searchTerm}
                onChange={handleSearchChange}
              />
            </FloatingLabel>
          </Col>
          <Col md={3} className="text-end">
            <Button variant="success" onClick={() => setShowAddModal(true)}>
              ➕ Add New Course
            </Button>
          </Col>
        </Row>
      </Card>

      <Card className="shadow-sm border-0">
        <Card.Body>
          {filteredCourses.length > 0 ? (
            <Table responsive bordered hover className="align-middle">
              <thead className="table-success text-center">
                <tr>
                  <th>#</th>
                  <th>Course Title</th>
                  <th>Code</th>
                  <th>Semester</th>
                  <th>Students</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody className="text-center">
                {filteredCourses.map((course, idx) => (
                  <tr key={course.id}>
                    <td>{idx + 1}</td>
                    <td>{course.title}</td>
                    <td>{course.id}</td>
                    <td>{course.semester}</td>
                    <td>{course.students}</td>
                    <td>
                      <Button
                        variant="outline-primary"
                        size="sm"
                        className="me-2"
                      >
                        ✏️ Edit
                      </Button>
                      <Button variant="outline-danger" size="sm">
                        🗑️ Delete
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          ) : (
            <p className="text-muted text-center py-4">
              No matching courses found.
            </p>
          )}
        </Card.Body>
      </Card>

      {/* Add Course Modal */}
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
              <Col md={6}>
                <FloatingLabel label="Course Code">
                  <Form.Control
                    type="text"
                    name="id"
                    value={newCourse.id}
                    onChange={handleChange}
                    required
                  />
                </FloatingLabel>
              </Col>
              <Col md={6}>
                <FloatingLabel label="Course Title">
                  <Form.Control
                    type="text"
                    name="title"
                    value={newCourse.title}
                    onChange={handleChange}
                    required
                  />
                </FloatingLabel>
              </Col>
              <Col md={4}>
                <FloatingLabel label="Semester">
                  <Form.Control
                    type="text"
                    name="semester"
                    value={newCourse.semester}
                    onChange={handleChange}
                  />
                </FloatingLabel>
              </Col>
              <Col md={4}>
                <FloatingLabel label="Students Enrolled">
                  <Form.Control
                    type="number"
                    name="students"
                    value={newCourse.students}
                    onChange={handleChange}
                  />
                </FloatingLabel>
              </Col>
              <Col md={12}>
                <Form.Label>Syllabus Items</Form.Label>
                <div className="d-flex mb-2">
                  <Form.Control
                    name="syllabusItem"
                    value={newCourse.syllabusItem}
                    onChange={handleChange}
                    placeholder="e.g. React Hooks"
                  />
                  <Button
                    variant="outline-secondary"
                    onClick={handleAddSyllabusItem}
                    className="ms-2"
                  >
                    Add
                  </Button>
                </div>
                {newCourse.syllabus.length > 0 && (
                  <ListGroup className="mb-3">
                    {newCourse.syllabus.map((item, i) => (
                      <ListGroup.Item key={i}>{item}</ListGroup.Item>
                    ))}
                  </ListGroup>
                )}
              </Col>
              <Col md={12} className="text-end">
                <Button type="submit" variant="success">
                  ✅ Save Course
                </Button>
              </Col>
            </Row>
          </Form>
        </Modal.Body>
      </Modal>
    </Container>
  );
};

export default TeacherCoursePage;
