import { Container, Row, Col, Form, Button } from "react-bootstrap";
import {
    Envelope,
    GeoAlt,
    Telephone,
    Youtube,
    Twitter,
    Instagram,
    Facebook,
} from "react-bootstrap-icons";
import logo from "/images/logo/Footer-logo.svg";

export default function Footer() {
    return (
        <footer className="footer">
            <Container>
                <Row className="footer-row">
                    <Col lg={4} md={6} className="footer-newsletter">
                        <img src={logo} className="footer-logo-top" />

                        <p className="newsletter-title">Subscribe to our Newsletter</p>

                        <Form className="newsletter-form">
                            <Form.Control
                                type="email"
                                placeholder="Enter your email"
                            />
                            <Button>Subscribe</Button>
                        </Form>
                    </Col>

                    <Col lg={4} md={6} className="footer-links">
                        <ul>
                            <li>Home</li>
                            <li>Shop</li>
                            <li>Categories</li>
                            <li>Blog</li>
                            <li>Contact Us</li>
                        </ul>
                    </Col>

                    <Col lg={4} md={12} className="footer-contact">
                        <ul className="contact-list">
                            <li><Envelope /> hello@website.com</li>
                            <li><GeoAlt /> 18A Little Road, Lagos, Nigeria</li>
                            <li><Telephone /> +02 5421234560</li>
                        </ul>

                        <div className="social-icons">
                            <span><Youtube /></span>
                            <span><Twitter /></span>
                            <span><Instagram /></span>
                            <span><Facebook /></span>
                        </div>
                    </Col>

                    <Col xs={12} className="footer-logo-mobile">
                        <img src={logo} alt="Grobite" />
                    </Col>

                </Row>
            </Container>
        </footer>
    );
}
