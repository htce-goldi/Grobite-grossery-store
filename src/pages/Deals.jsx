import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import { ChevronRight, Cart } from "react-bootstrap-icons";
import DealsSection from "../components/home/DealSection";
import Footer from "../components/layout/Footer";

const deals = Array.from({ length: 9 });

export default function Deals() {
  const [time, setTime] = useState(2 * 3600 + 28 * 60 + 26);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const hours = String(Math.floor(time / 3600)).padStart(2, "0");
  const minutes = String(Math.floor((time % 3600) / 60)).padStart(2, "0");
  const seconds = String(time % 60).padStart(2, "0");

  return (
    <>
      <Container className="py-4">

        <div className="gd-breadcrumb mb-3">
          <span>Home</span>
          <ChevronRight size={14} />
          <span className="gd-breadcrumb-active">Deals</span>
        </div>

        <Row className="align-items-center mb-4">
          <Col md={4}>
            <h3 className="fw-bold">Grobite Deals!!!</h3>
          </Col>
          <Col md={8}>
            <Form className="d-flex">
              <Form.Control placeholder="Find what you need..." />
              <Button className="gd-search-btn ms-2">Search</Button>
            </Form>
          </Col>
        </Row>

        <div className="gd-wrapper p-4 rounded">
          <div className="gd-header mb-4 d-flex justify-content-between align-items-center">
            <div>
              <h4 className="fw-bold">Deals of the Day</h4>
              <small>Refreshes daily</small>
            </div>

            <div className="gd-countdown">
              <div className="gd-time">
                <span>{hours}</span>
                <span className="gd-colon">:</span>
                <span>{minutes}</span>
                <span className="gd-colon">:</span>
                <span>{seconds}</span>
              </div>
              <div className="gd-labels">
                <span>HOURS</span>
                <span>MINS</span>
                <span>SECS</span>
              </div>
            </div>
          </div>
          <Row>
            {deals.map((_, i) => (
              <Col lg={4} md={6} key={i} className="mb-4">
                <div className="gd-card d-flex align-items-center">

                  <span className="gd-discount">27% Discount</span>

                  <img
                    src="/images/product-images/Broccoli.png"
                    alt="Broccoli"
                    className="gd-img"
                  />

                  <div className="gd-content">
                    <small className="text-muted">Vegetables</small>
                    <h6>Broccoli 1kg</h6>

                    <p className="gd-price">
                      ₹540 <span>₹740</span>
                    </p>

                    <Button className="gd-add-btn w-100">
                      <Cart size={12} className="me-2" />
                      Add to Cart
                    </Button>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </div>
        <DealsSection />

      </Container>
      <Footer />
    </>
  );
}
