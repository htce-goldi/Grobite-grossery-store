import { useSearchParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Container, Card, Row, Col } from "react-bootstrap";

export default function Search() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("search");

  const products = useSelector(
    (state) => state.products?.products ?? []
  );

  if (!query) return null; 

  const searchText = query.toLowerCase();

  const filteredProducts = products.filter(
    (item) =>
      item.title.toLowerCase().includes(searchText) ||
      item.category.toLowerCase().includes(searchText)
  );

  if (filteredProducts.length === 0) return null; 

  return (
    <Container className="mt-4">
      <h5 className="mb-3">
        Search results for: <b>{query}</b>
      </h5>

      <Row>
        {filteredProducts.map((item) => (
          <Col md={3} sm={6} xs={12} key={item.id} className="mb-3">
            <Card>
              <Card.Img
                variant="top"
                src={item.thumbnail}
                height="180"
                style={{ objectFit: "contain" }}
              />
              <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>₹ {item.price}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
