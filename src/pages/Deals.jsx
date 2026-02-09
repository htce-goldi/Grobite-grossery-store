import React, { useRef } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "react-bootstrap-icons";

import dealsCategories from "../components/categories/dealsCategories";
import ProductCard from "../components/layout/ProductCard";
import CartSummary from "../components/cart/CartSummery";
import productList from "../data/productList.json";

export default function Deals() {
  const { category } = useParams();
  const sliderRef = useRef(null);

  const dealProducts = productList.filter(
    (item) => item.discount && item.discount > 0
  );

  const filteredDeals = category
    ? dealProducts.filter(
        (p) =>
          p.category.toLowerCase().replace(/ /g, "-") === category
      )
    : dealProducts;

  const scrollLeft = () => {
    sliderRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    sliderRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <Container fluid className="shop-page bg-light py-4">
      <Row className="gx-3">

        <Col xl={2} lg={3} md={4} className="mb-3">
          <dealsCategories />
        </Col>

        <Col xl={7} lg={6} md={8}>

          <div className="d-flex justify-content-between align-items-center mb-3">
            <h5 className="fw-bold mb-0">Grobite Deals!!!</h5>

            <div className="d-flex gap-2 text-center">
              <div className="deal-timer-box p-2 bg-white shadow rounded">
                02<br /><small>HRS</small>
              </div>
              <div className="deal-timer-box p-2 bg-white shadow rounded">
                28<br /><small>MIN</small>
              </div>
              <div className="deal-timer-box p-2 bg-white shadow rounded">
                26<br /><small>SEC</small>
              </div>
            </div>
          </div>

          <div className="position-relative">

            <Button
              variant="light"
              className="deal-arrow position-absolute top-50 start-0 translate-middle-y shadow-sm"
              onClick={scrollLeft}
              style={{ zIndex: 2 }}
            >
              <ChevronLeft />
            </Button>

            <Button
              variant="light"
              className="deal-arrow position-absolute top-50 end-0 translate-middle-y shadow-sm"
              onClick={scrollRight}
              style={{ zIndex: 2 }}
            >
              <ChevronRight />
            </Button>

            <div
              ref={sliderRef}
              className="d-flex gap-3 overflow-auto pb-2"
              style={{ scrollBehavior: "smooth" }}
            >
              {filteredDeals.length > 0 ? (
                filteredDeals.map((item) => (
                  <div key={item.id} style={{ minWidth: "220px" }}>
                    <ProductCard product={item} />
                  </div>
                ))
              ) : (
                <p>No deals available</p>
              )}
            </div>
          </div>
        </Col>

        <Col xl={3} lg={3} className="d-none d-lg-block">
          <CartSummary />
        </Col>

      </Row>
    </Container>
  );
}
