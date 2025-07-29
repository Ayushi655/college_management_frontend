import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

const Dashboard = () => {
  return (
    <Container className="py-5">
      <h2 className="text-center fw-bold mb-4">🎯 College Dashboard</h2>

      <Row className="gy-4 text-center">
        <Col md={4}>
          <Card className="shadow-sm border-0">
            <Card.Body>
              <Card.Title>👨‍🎓 Students</Card.Title>
              <Card.Text>1,250 enrolled</Card.Text>
              <Button variant="outline-primary">Manage Students</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="shadow-sm border-0">
            <Card.Body>
              <Card.Title>📚 Courses</Card.Title>
              <Card.Text>75 active</Card.Text>
              <Button variant="outline-success">Manage Courses</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="shadow-sm border-0">
            <Card.Body>
              <Card.Title>🏛️ Faculty</Card.Title>
              <Card.Text>32 instructors</Card.Text>
              <Button variant="outline-warning">Manage Faculty</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <h4 className="text-center mt-5 fw-semibold">
        📈 Analytics (Coming Soon)
      </h4>
      <Row className="gy-4 mt-3">
        <Col md={6}>
          <Card className="shadow-sm border-0">
            <Card.Body>
              <Card.Title>📊 Admissions Overview</Card.Title>
              <Card.Text className="text-muted">
                Placeholder for future charts showing trends and demographics.
              </Card.Text>
              <div className="bg-light text-muted p-3 text-center rounded">
                [Chart Area]
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card className="shadow-sm border-0">
            <Card.Body>
              <Card.Title>🗓️ Attendance Report</Card.Title>
              <Card.Text className="text-muted">
                Analyze attendance data across departments and timelines.
              </Card.Text>
              <div className="bg-light text-muted p-3 text-center rounded">
                [Chart Area]
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
