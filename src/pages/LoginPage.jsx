import { useContext, useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Form,
  Button,
  Alert,
} from "react-bootstrap";
import AuthContext from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png"; // Replace with your actual
const LoginPage = () => {
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const Navigate = useNavigate("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await login(email, password);
      if (data.message) {
        setError(data.message);
      } else {
        setError("");
      }
      setTimeout(() => {
        setError("Redirect to Dashboard");
        Navigate("/");
      }, 1500);
    } catch (err) {
      setError("Invalid email or password");
    }
  };
  return (
    <Container
      fluid
      className="vh-100 d-flex align-items-center justify-content-center bg-light"
    >
      <Row className="w-100 justify-content-center">
        <Col md={4}>
          <Card className="shadow-sm">
            <Card.Body>
              <div className="text-center p-3">
                <img src={logo} alt="Logo" style={{ width: "120px" }} />
              </div>
              <h3 className="mb-4 text-center">Login</h3>

              {error && <Alert variant="info">{error}</Alert>}
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-4" controlId="formPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </Form.Group>

                <Button variant="primary" type="submit" className="w-100">
                  Login
                </Button>
              </Form>

              <div className="d-flex justify-content-end mt-2">
                <Form.Text className="text-muted">
                  Don’t have an account?{" "}
                  <Link to="/register">Register here</Link>
                </Form.Text>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};
export default LoginPage;
