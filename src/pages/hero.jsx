import { Container, Row, Col, Button, Form } from "react-bootstrap";
import heroImg from "/images/banners/hero image.svg";
import heroBg from "/images/banners/hero-bg.svg";
import { Search, ArrowRight } from "react-bootstrap-icons";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Hero() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (!search.trim()) return;
    navigate(`/shop?search=${search}`);
  };

  return (
    <section
      className="hero-section"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      <div className="hero-overlay"></div>

      <Container fluid className="hero-container">
        <Row>
      
          <Col lg={6} >
          <h1 className="hero-title">
  Fresh Savings Every Week! Enjoy Up to 30% Off on Select Produce.
</h1>

            <p className="hero-text">
              Fresh fruits and vegetables, packaged goods, snacks, beverages,
              household essentials.
            </p>

            <Form className="hero-search d-flex" onSubmit={handleSearch}>
              <Form.Control
                type="text"
                placeholder="Search for items..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <Button type="submit" className="search-btn">
                <Search size={18} />
                
              </Button>
            </Form>

            <Button href="/shop" className="hero-btn mt-3">
              Shop Now <ArrowRight className="ms-2" />
            </Button>
          </Col>
        </Row>
      </Container>
      <img src={heroImg} alt="Hero" className="hero-img" />
    </section>
  );
}
