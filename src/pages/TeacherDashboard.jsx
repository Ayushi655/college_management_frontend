import { Col, Container, Row } from "react-bootstrap";
import TeacherSidebar from "../components/teacher/sidebar-menu";
import TeacherTopNavbar from "../components/teacher/top-navbar";
import TeacherRoutes from "../routes/teacher/routes";

const TeacherDashboard = () => {
  return (
    <>
      <TeacherTopNavbar />

      <Container fluid>
        <Row>
          {/* Sidebar */}
          <Col
            xs={12}
            md={3}
            lg={2}
            className="bg-dark text-white min-vh-100 p-0"
          >
            <TeacherSidebar />
          </Col>

          {/* Main content */}
          <Col
            xs={12}
            md={9}
            lg={10}
            className="p-4 bg-light"
            style={{ minHeight: "100vh" }}
          >
            <TeacherRoutes />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default TeacherDashboard;
