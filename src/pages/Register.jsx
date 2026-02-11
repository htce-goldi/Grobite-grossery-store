import { Container, Row, Col, Card, Form, Button, Toast } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signupUser } from "../assets/services/authHandlers";

export default function Signup() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading } = useSelector((state) => state.auth);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errorMsg, setErrorMsg] = useState("");
  const [showToast, setShowToast] = useState(false);
  const [toastMsg, setToastMsg] = useState("");
  const [toastType, setToastType] = useState("success");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrorMsg("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setErrorMsg("Passwords do not match");
      return;
    }

    const response = await dispatch(signupUser(formData));

    if (response?.success) {
      setToastType("success");
      setToastMsg("Signup successful! Please login.");
      setShowToast(true);

      setFormData({
        fullName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });

      setTimeout(() => {
        navigate("/login");
      }, 1500);
    } else {
      setToastType("danger");
      setToastMsg(response?.message || "Signup failed");
      setShowToast(true);
    }
  };

  return (
    <Container className="my-5">
      <Row className="justify-content-center">
        <Col md={5}>
          <Card className="border-0 shadow-sm">
            <Card.Body className="p-4">
              <h4 className="text-center mb-2">Create Account</h4>

              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                  <Form.Label>Full Name</Form.Label>
                  <Form.Control
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Confirm Password</Form.Label>
                  <Form.Control
                    type="password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>

                {errorMsg && (
                  <div className="text-danger mb-2">{errorMsg}</div>
                )}

                <Button className="w-100" type="submit" disabled={loading}>
                  {loading ? "Creating..." : "Sign Up"}
                </Button>
              </Form>

              <p className="text-center mt-3">
                Already have an account? <Link to="/login">Login</Link>
              </p>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Toast
        show={showToast}
        onClose={() => setShowToast(false)}
        bg={toastType}
        delay={2000}
        autohide
        style={{ position: "fixed", top: 20, right: 20, color: "#fff" }}
      >
        <Toast.Body>{toastMsg}</Toast.Body>
      </Toast>
    </Container>
  );
}
