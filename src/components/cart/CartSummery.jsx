import { Card, ListGroup } from "react-bootstrap";

export default function DealCategories() {
  return (
    <Card>
      <Card.Body>
        <Card.Title>Categories</Card.Title>
        <ListGroup variant="flush">
          <ListGroup.Item action>Vegetables</ListGroup.Item>
          <ListGroup.Item action>Fruits</ListGroup.Item>
          <ListGroup.Item action>Meat</ListGroup.Item>
          <ListGroup.Item action>Dairy</ListGroup.Item>
          <ListGroup.Item action>Beverages</ListGroup.Item>
        </ListGroup>
      </Card.Body>
    </Card>
  );
}