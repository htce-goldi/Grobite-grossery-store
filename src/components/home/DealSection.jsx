import { Container, Row, Col, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "react-bootstrap-icons";


export default function DealsSection() {
  const navigate = useNavigate();

  return (
    <Container className="my-5 deals-section">
      <Row className="g-4 align-items-stretch">

        <Col lg={4} md={6} sm={12}>
          <div className="deal-card left-card">
            <h4 className="fw-bold mb-4">
              Get Your Groceries <br /> Delivered for Free
            </h4>

            <p className="text-muted small mb-3">
              Order now and get free delivery on orders above
              50,000 NGN. Shop from the comfort of your home
              and let us bring your groceries to you.
            </p>

            <Button
              variant="dark"
              className="d-inline-flex align-items-center gap-2 px-3 py-2"
              onClick={() => navigate("/shop")}
            >
              Order Now <ArrowRight />
            </Button>

            <img
              src="/images/banners/biker.png"
              alt="Delivery"
              className="deal-img left-img mx-auto"
            />
          </div>
        </Col>

        <Col lg={4} md={6} sm={12}>
          <div className="deal-card center-card text-center d-flex flex-column justify-content-between">
            <div>
              <span className="badge bg-dark mb-2">BEST DEALS</span>

              <h4 className="fw-bold text-white mb-3">
                Deals of the Day
              </h4>

              <div className="countdown">
                <div>
                  <span>00</span>
                  <small>DAYS</small>
                </div>
                <b>:</b>
                <div>
                  <span>02</span>
                  <small>HOURS</small>
                </div>
                <b>:</b>
                <div>
                  <span>28</span>
                  <small>MINS</small>
                </div>
                <b>:</b>
                <div>
                  <span>26</span>
                  <small>SECS</small>
                </div>
              </div>
            </div>

            <div>
              <img
                src="/images/banners/Flowers.png"
                alt="veg-Basket"
                className="img-fluid my-3 mx-auto"
              />

              <Button
                variant="light"
                className="rounded-pill px-4"
                onClick={() => navigate("/shop")}
              >
                Shop Now
              </Button>
            </div>
          </div>
        </Col>
        <Col lg={4} md={12} sm={12}>
          <div className="deal-card right-card text-white">
            <h4 className="fw-bold">Weekend Deals</h4>

            <h6 className="off-text">10% OFF</h6>

            <Button
              variant="light"
              className="rounded-pill fw-semibold px-4"
              onClick={() => navigate("/shop")}
            >
              Shop Now
            </Button>

            <img
              src="/images/banners/Weakend-shop.png"
              alt="Weekend"
              className="deal-img right-img mx-auto"
            />
          </div>
        </Col>

      </Row>
    </Container>
  );
}
