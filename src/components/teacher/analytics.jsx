import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

const TeacherAnalytics = () => {
  return (
    <Container className="py-5">
      <h2 className="text-center fw-bold mb-4">📊 Analytics Overview</h2>

      <Row className="gy-4">
        <Col md={6}>
          <Card className="shadow-sm h-100 border-0">
            <Card.Body>
              <Card.Title className="fs-5">📘 Course Performance</Card.Title>
              <Card.Text className="text-muted">
                Track average grades, quiz results, and progress trends across
                subjects.
              </Card.Text>
              <div className="bg-light text-muted text-center p-4 rounded">
                [Performance Chart Placeholder]
              </div>
              <Button variant="outline-primary" className="mt-3">
                View Detailed Report
              </Button>
            </Card.Body>
          </Card>
        </Col>

        <Col md={6}>
          <Card className="shadow-sm h-100 border-0">
            <Card.Body>
              <Card.Title className="fs-5">📅 Attendance Insights</Card.Title>
              <Card.Text className="text-muted">
                Check weekly attendance stats, department-wise breakdown, and
                flagged absences.
              </Card.Text>
              <div className="bg-light text-muted text-center p-4 rounded">
                [Attendance Chart Placeholder]
              </div>
              <Button variant="outline-success" className="mt-3">
                Export as PDF
              </Button>
            </Card.Body>
          </Card>
        </Col>

        <Col md={12}>
          <Card className="shadow-sm h-100 border-0">
            <Card.Body>
              <Card.Title className="fs-5">
                📝 Assignment Submissions
              </Card.Title>
              <Card.Text className="text-muted">
                Monitor completion rates, pending tasks, and grading deadlines.
              </Card.Text>
              <div className="bg-light text-muted text-center p-4 rounded">
                [Submission Chart Placeholder]
              </div>
              <Button variant="outline-warning" className="mt-3">
                Send Reminder Emails
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default TeacherAnalytics;
