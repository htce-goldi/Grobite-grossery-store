import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signupUser } from "../redux/thunks/authThunks";

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

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signupUser(formData));
    setTimeout(() => {
      navigate("/");
    }, 1200);
  };

  const fields = [
    { label: "Full Name", name: "fullName", type: "text", placeholder: "Enter your name" },
    { label: "Email", name: "email", type: "email", placeholder: "Enter email" },
    { label: "Password", name: "password", type: "password", placeholder: "Create password" },
    { label: "Confirm Password", name: "confirmPassword", type: "password", placeholder: "Confirm password" },
  ];

  return (
    <Container className="my-5">
      <Row className="justify-content-center">
        <Col md={5}>
          <Card className="border-0 shadow-sm">
            <Card.Body className="p-4">
              <h4 className="text-center mb-2">Create Account</h4>
              <p className="text-center text-muted mb-4">
                Sign up to start shopping on IndiStore
              </p>

              <Form onSubmit={handleSubmit}>
                {fields.map((field, idx) => (
                  <Form.Group className="mb-3" key={idx}>
                    <Form.Label>{field.label}</Form.Label>
                    <Form.Control
                      type={field.type}
                      name={field.name}
                      placeholder={field.placeholder}
                      value={formData[field.name]}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>
                ))}

                <Button
                  type="submit"
                  className="w-100 mb-3"
                  variant="primary"
                  disabled={loading}
                >
                  {loading ? "Creating..." : "Sign Up"}
                </Button>
              </Form>

              <p className="text-center mb-0">
                Already have an account? <Link to="/login">Login</Link>
              </p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
