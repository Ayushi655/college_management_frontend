import { Col, Container, Row } from "react-bootstrap";
import Sidebar from "../components/student/sidebar-menu";
import TopNavbar from "../components/student/top-navbar";
import StudentRoutes from "../routes/student/routes";

const StudentDashboard =( ) => {
    return (
    <>
      <TopNavbar />

      <Container fluid>
        <Row>
          {/* Sidebar */}
          <Col xs={12} md={3} lg={2} className="bg-dark text-white min-vh-100 p-0">
            <Sidebar />
          </Col>

          {/* Main content */}
          <Col xs={12} md={9} lg={10} className="p-4 bg-light" style={{ minHeight: '100vh' }}>
            <StudentRoutes />
          </Col>
        </Row>
      </Container>
    </>
  );

}

export default StudentDashboard;