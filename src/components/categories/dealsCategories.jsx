import { Nav, Form } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";

const categories = [
  "Vegetables",
  "Fruits",
  "Dairy & Eggs",
  "Bakery",
  "Beverages",
  "Snacks",
];

export default function ShopCategories() {
  const navigate = useNavigate();
  const { category } = useParams();

  return (
    <div className="filter-box">
      <h6 className="fw-bold mb-3">Categories</h6>

      <Nav className="flex-column gap-2 mb-4">
        {categories.map((cat) => {
          const slug = cat.toLowerCase().replace(/ /g, "-");
          return (
            <Nav.Link
              key={cat}
              className={`p-0 ${
                category === slug ? "active-cat" : "text-dark"
              }`}
              onClick={() => navigate(`/shop/${slug}`)}
            >
              {cat}
            </Nav.Link>
          );
        })}
      </Nav>

      <h6 className="fw-bold mb-2">Availability</h6>
      <Form.Check label="In Stock" className="mb-2" />
      <Form.Check label="Out of Stock" className="mb-4" />

      <h6 className="fw-bold mb-2">Diet Type</h6>
      <Form.Check label="Vegan" className="mb-2" />
      <Form.Check label="Non-Vegan" />
    </div>
  );
}
