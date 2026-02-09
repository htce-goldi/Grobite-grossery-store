import { Nav, Form } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";

const categories = [
  "Fresh Produce",
  "Vegetables",
  "Fruits",
  "Dairy & Eggs",
  "Meat & Poultry",
  "Bakery",
  "Beverages",
  "Snacks",
  "Frozen Foods",
  "Personal Care",
];

export default function ShopCategories() {
  const navigate = useNavigate();
  const { category } = useParams();

  const RightRadio = ({ label, name }) => (
    <div className="d-flex justify-content-between align-items-center mb-3">
      <span className="text-dark">{label}</span>
      <Form.Check type="radio" name={name} />
    </div>
  );

  return (
    <div className="bg-white p-3 border rounded shop-sidebar">
      {/* ================= CATEGORIES ================= */}
      <h6 className="mb-3 fw-bold">Categories</h6>

      <Nav className="flex-column gap-2 mb-4">
        {categories.map((cat) => {
          const slug = cat.toLowerCase().replace(/ /g, "-");
          return (
            <Nav.Link
              key={cat}
              onClick={() => navigate(`/shop/${slug}`)}
              className={`p-0 text-dark ${
                category === slug ? "fw-bold" : ""
              }`}
              style={{ cursor: "pointer" }}
            >
              {cat}
            </Nav.Link>
          );
        })}
      </Nav>

      {/* ================= AVAILABILITY ================= */}
      <h6 className="mb-2 fw-bold">Availability</h6>
      <div className="mb-4">
        <RightRadio label="In-stock" name="availability" />
        <RightRadio label="Out-of-stock" name="availability" />
      </div>

      {/* ================= PRICES ================= */}
      <h6 className="mb-2 fw-bold">Prices</h6>
      <div className="mb-4">
        <RightRadio label="Sales" name="price" />
        <RightRadio label="Discounted" name="price" />
      </div>

      {/* ================= DIET TYPE ================= */}
      <h6 className="mb-2 fw-bold">Diet Type</h6>
      <div className="mb-2">
        <RightRadio label="Vegan" name="diet" />
        <RightRadio label="Non-vegan" name="diet" />
      </div>
    </div>
  );
}
