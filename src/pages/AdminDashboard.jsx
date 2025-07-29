import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

const AdminDashboard = () => {
  return (
    <Container className="py-5">
      <h2 className="text-center fw-bold mb-5">🛠️ Admin Control Panel</h2>

      {/* Quick Stats Section */}
      <Row className="gy-4 mb-4 text-center">
        <Col md={3}>
          <Card className="shadow-sm border-0">
            <Card.Body>
              <Card.Title className="text-primary">👨‍🎓 Students</Card.Title>
              <Card.Text>1,250 total</Card.Text>
              <Button variant="outline-primary" size="sm">
                Manage
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card className="shadow-sm border-0">
            <Card.Body>
              <Card.Title className="text-success">🏫 Courses</Card.Title>
              <Card.Text>75 active</Card.Text>
              <Button variant="outline-success" size="sm">
                View
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card className="shadow-sm border-0">
            <Card.Body>
              <Card.Title className="text-warning">🧑‍🏫 Faculty</Card.Title>
              <Card.Text>32 instructors</Card.Text>
              <Button variant="outline-warning" size="sm">
                Manage
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card className="shadow-sm border-0">
            <Card.Body>
              <Card.Title className="text-danger">📝 Requests</Card.Title>
              <Card.Text>18 pending approvals</Card.Text>
              <Button variant="outline-danger" size="sm">
                Review
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Reports & Insights */}
      <Row className="gy-4">
        <Col md={6}>
          <Card className="shadow-sm border-0">
            <Card.Body>
              <Card.Title>📊 Monthly Reports</Card.Title>
              <Card.Text>
                View insights on registrations, attendance, and system usage.
              </Card.Text>
              <div className="bg-light p-3 text-muted text-center rounded">
                [Graph Placeholder]
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card className="shadow-sm border-0">
            <Card.Body>
              <Card.Title>📁 Data Backup & Sync</Card.Title>
              <Card.Text>
                Ensure systems are up-to-date and securely backed up.
              </Card.Text>
              <Button variant="outline-dark">Sync Now</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default AdminDashboard;
