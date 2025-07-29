import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  const handleManageClick = (path) => {
    navigate(path);
  };

  return (
    <Container className="py-5">
      <h2 className="text-center fw-bold mb-5">🧑‍🏫 Teacher Dashboard</h2>

      <Row className="mb-5 gy-4 justify-content-center">
        <Col md={4}>
          <Card className="h-100 shadow-sm border-0 hover-card text-center">
            <Card.Body>
              <Card.Title className="fs-4 text-primary">
                👨‍🎓 My Students
              </Card.Title>
              <Card.Text className="text-muted">
                Track progress & performance
              </Card.Text>
              <Button
                variant="outline-primary"
                onClick={() => handleManageClick("/teacher/manage-students")}
              >
                Manage Students
              </Button>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card className="h-100 shadow-sm border-0 hover-card text-center">
            <Card.Body>
              <Card.Title className="fs-4 text-success">
                📘 My Courses
              </Card.Title>
              <Card.Text className="text-muted">
                Edit syllabus & materials
              </Card.Text>
              <Button
                variant="outline-success"
                onClick={() => handleManageClick("/teacher/manage-courses")}
              >
                Manage Courses
              </Button>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card className="h-100 shadow-sm border-0 hover-card text-center">
            <Card.Body>
              <Card.Title className="fs-4 text-warning">
                🗓️ My Schedule
              </Card.Title>
              <Card.Text className="text-muted">
                View weekly timetable
              </Card.Text>
              <Button
                variant="outline-warning"
                onClick={() => handleManageClick("/teacher/schedule")}
              >
                View Schedule
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <h4 className="fw-semibold mb-4 text-center">
        📈 Teaching Analytics (Coming Soon)
      </h4>
      <Row className="gy-4">
        <Col md={6}>
          <Card className="shadow-sm h-100 border-0">
            <Card.Body>
              <Card.Title className="fs-5">📝 Grade Trends</Card.Title>
              <Card.Text className="text-muted">
                Analyze student scores, assessments & progress
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
              <Card.Title className="fs-5">📊 Attendance Overview</Card.Title>
              <Card.Text className="text-muted">
                Monitor patterns & flag absentees
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
