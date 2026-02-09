import { Container, Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import ShopCategories from "../components/shop/shopCategories";
import ProductCard from "../components/layout/ProductCard";
import productList from "../data/productList.json";
import Footer  from "../components/layout/Footer";
export default function Shop() {
  const { category } = useParams();

  const filteredProducts = category
    ? productList.filter(
        (p) =>
          p.category.toLowerCase().replace(/ /g, "-") === category
      )
    : productList;

  return (
    <Container fluid className="py-4 bg-light">
      <Row>
        <Col lg={3} md={4} className="mb-4">
          <ShopCategories />
        </Col>

        <Col lg={9} md={8}>
          <h6 className="mb-3 fw-bold">Products List</h6>

          <Row className="g-3">
            {filteredProducts.length === 0 ? (
              <p>No products found</p>
            ) : (
              filteredProducts.map((item) => (
                <Col key={item.id} className="product-col">
                  <ProductCard product={item} />
                </Col>
              ))
            )}
          </Row>
        </Col>
      </Row>
      <Footer/>
    </Container>
  );
}
