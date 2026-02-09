import { useRef } from "react";
import { Button } from "react-bootstrap";
import { ChevronLeft, ChevronRight } from "react-bootstrap-icons";
import ProductCard from "../layout/ProductCard";

export default function RelatedProductsSlider({ products }) {
  const sliderRef = useRef(null);

  const scrollLeft = () => {
    sliderRef.current.scrollBy({
      left: -300,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    sliderRef.current.scrollBy({
      left: 300,
      behavior: "smooth",
    });
  };

  return (
    <div className="mt-5 position-relative">

      <div className="d-flex justify-content-between align-items-center mb-3">
        <h5 className="fw-bold mb-0">You may also like</h5>

        <div>
          <Button
            variant="light"
            className="me-2 rounded-circle"
            onClick={scrollLeft}
          >
            <ChevronLeft />
          </Button>

          <Button
            variant="light"
            className="rounded-circle"
            onClick={scrollRight}
          >
            <ChevronRight />
          </Button>
        </div>
      </div>

      <div
        ref={sliderRef}
        className="d-flex gap-3 overflow-hidden"
        style={{
          scrollBehavior: "smooth",
        }}
      >
        {products.map((item) => (
          <div
            key={item.id}
            style={{
              minWidth: "180px",
              maxWidth: "180px",
            }}
          >
            <ProductCard product={item} />
          </div>
        ))}
      </div>
    </div>
  );
}
