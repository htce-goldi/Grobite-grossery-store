import {Container,Row,Col,Button,Card, Table,} from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useState, useRef } from "react";
import { addToCart } from "../redux/slices/cartSlice";
import productList from "../data/productList.json";
import ProductCard from "../components/layout/ProductCard";
import {ChevronLeft,ChevronRight,} from "react-bootstrap-icons";
import Footer from "../components/layout/Footer"

export default function ProductDetails() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const sliderRef = useRef(null);

  const product = productList.find(
    (p) => p.id === Number(id)
  );

  const relatedProducts = productList.filter(
    (p) =>
      p.category === product?.category &&
      p.id !== product?.id
  );

  const [qty, setQty] = useState(1);
  const [activeImg, setActiveImg] = useState(product?.image);

  if (!product) {
    return (
      <h4 className="text-center mt-5">
        Product not found
      </h4>
    );
  }

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
    <Container className="py-4">

<Row className="mb-3 align-items-center">
  <Col>
    <small className="text-muted d-flex align-items-center gap-1">
      <span>Home</span>
      <ChevronRight size={14} />
      <span>Shop</span>
      <ChevronRight size={14} />
      <span>{product.category}</span>
      <ChevronRight size={14} />
      <span className="text-dark fw-semibold">
        {product.title}
      </span>
    </small>
  </Col>

  <Col className="text-end">
    <Button
      variant="danger"
      size="sm"
      onClick={() =>
        dispatch(addToCart({ ...product, qty }))
      }
    >
      Add to Cart
    </Button>
  </Col>
</Row>

      <Row className="mb-4">
        <Col>
          <Card className="p-3">
            <Row className="g-3">
              <Col lg={6}>
                <img
                  src={activeImg}
                  alt={product.title}
                  className="img-fluid rounded"
                  style={{
                    height: "380px",
                    objectFit: "contain",
                  }}
                />
              </Col>

              <Col lg={6}>
                <Row className="g-2">
                  {[1, 2, 3].map((_, i) => (
                    <Col xs={6} key={i}>
                      <img
                        src={product.image}
                        alt=""
                        onClick={() =>
                          setActiveImg(product.image)
                        }
                        style={{
                          width: "100%",
                          height: "180px",
                          objectFit: "contain",
                          border: "1px solid #ddd",
                          padding: "10px",
                          cursor: "pointer",
                          borderRadius: "6px",
                        }}
                      />
                    </Col>
                  ))}
                </Row>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>

      <Row className="g-4">
     
        <Col lg={7}>
          <Card className="p-4">
            <div className="d-flex justify-content-between">
              <h4 className="fw-bold">
                {product.title}
              </h4>

            </div>

            <p className="text-muted mt-1">
              {product.category}
            </p>

            <div className="mb-3">
              {product.oldPrice && (
                <del className="text-danger me-2">
                  ₹{product.oldPrice}
                </del>
              )}
              <span className="fs-4 fw-bold">
                ₹{product.price}
              </span>
            </div>

            <p className="text-muted">
              Our fresh products are locally sourced and
              perfect for everyday cooking.
            </p>

            <p className="mb-1">
              <strong>Unit:</strong> Kg
            </p>

            <p className="mb-3">
              <strong>Price:</strong> ₹
              {product.price} / kg
            </p>

            <div className="d-flex align-items-center gap-3 mb-4">
              <span className="fw-semibold">
                Quantity
              </span>
              <div className="d-flex align-items-center border rounded">
                <Button
                  variant="light"
                  onClick={() =>
                    qty > 1 && setQty(qty - 1)
                  }
                >
                  −
                </Button>
                <span className="px-3 fw-bold">
                  {qty}
                </span>
                <Button
                  variant="light"
                  onClick={() =>
                    setQty(qty + 1)
                  }
                >
                  +
                </Button>
              </div>
            </div>

            <Button
              variant="danger"
              className="w-100 py-2"
              onClick={() =>
                dispatch(
                  addToCart({ ...product, qty })
                )
              }
            >
              Add to Cart
            </Button>
          </Card>
        </Col>
        <Col lg={5}>
          <Card className="p-4 bg-light">
            <h6 className="fw-bold mb-3">
              Nutritional Information (Per 100g)
            </h6>

            <Table borderless size="sm">
              <tbody>
                <tr><td>Calories</td><td>77 kcal</td></tr>
                <tr><td>Carbohydrates</td><td>17.5 g</td></tr>
                <tr><td>Protein</td><td>2 g</td></tr>
                <tr><td>Fiber</td><td>2.2 g</td></tr>
                <tr><td>Fat</td><td>0.1 g</td></tr>
                <tr><td>Potassium</td><td>429 mg</td></tr>
              </tbody>
            </Table>
          </Card>
        </Col>
      </Row>

      <div className="mt-5">
        <div className="d-flex justify-content-between mb-3">
          <h5 className="fw-bold">
            You may also like
          </h5>

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
        >
          {relatedProducts.map((item) => (
            <div
              key={item.id}
              style={{ minWidth: "180px" }}
            >
              <ProductCard product={item} />
            </div>
          ))}
        </div>
      </div>
      <Footer/>
    </Container>
  );
}
