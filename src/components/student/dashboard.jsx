import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  const handleManageClick = (path) => {
    // Navigate to the management pages (or show alert placeholders)
    navigate(path);
  };

  return (
    <Container className="py-5">
      <h2 className="text-center fw-bold mb-5">
        🎯 College Management Dashboard
      </h2>

      <Row className="mb-5 gy-4 justify-content-center">
        <Col md={4}>
          <Card className="h-100 shadow-sm border-0 hover-card text-center">
            <Card.Body>
              <Card.Title className="fs-4 text-primary">👨‍🎓 Students</Card.Title>
              <Card.Text className="text-muted">1,250 enrolled</Card.Text>
              <Button
                variant="outline-primary"
                onClick={() => handleManageClick("/manage-students")}
              >
                Manage Students
              </Button>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card className="h-100 shadow-sm border-0 hover-card text-center">
            <Card.Body>
              <Card.Title className="fs-4 text-success">📚 Courses</Card.Title>
              <Card.Text className="text-muted">75 active courses</Card.Text>
              <Button
                variant="outline-success"
                onClick={() => handleManageClick("/manage-courses")}
              >
                Manage Courses
              </Button>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card className="h-100 shadow-sm border-0 hover-card text-center">
            <Card.Body>
              <Card.Title className="fs-4 text-warning">🏛️ Faculty</Card.Title>
              <Card.Text className="text-muted">32 instructors</Card.Text>
              <Button
                variant="outline-warning"
                onClick={() => handleManageClick("/manage-faculty")}
              >
                Manage Faculty
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <h4 className="fw-semibold mb-4 text-center">
        📈 Analytics (Coming Soon)
      </h4>
      <Row className="gy-4">
        <Col md={6}>
          <Card className="shadow-sm h-100 border-0">
            <Card.Body>
              <Card.Title className="fs-5">📊 Student Demographics</Card.Title>
              <Card.Text className="text-muted">
                Visualize trends: admissions, gender ratios, regions & more.
              </Card.Text>
              <div className="bg-light p-3 text-center text-muted rounded border">
                [Chart Placeholder]
              </div>
            </Card.Body>
          </Card>
        </Col>

        <Col md={6}>
          <Card className="shadow-sm h-100 border-0">
            <Card.Body>
              <Card.Title className="fs-5">🗓️ Attendance Report</Card.Title>
              <Card.Text className="text-muted">
                Flag absences, monitor trends, analyze by department.
              </Card.Text>
              <div className="bg-light p-3 text-center text-muted rounded border">
                [Chart Placeholder]
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
