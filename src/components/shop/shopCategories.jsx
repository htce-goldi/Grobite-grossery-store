import { Nav, Form } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { ChevronDown } from "react-bootstrap-icons";
import { useState } from "react";

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

  const [open, setOpen] = useState({
    categories: true,
    availability: true,
    prices: true,
    diet: true,
  });

  const RadioRow = ({ label, name, checked }) => (
    <div className="filter-radio">
      <span>{label}</span>
      <Form.Check type="radio" name={name} checked={checked} readOnly />
    </div>
  );

  return (
    <aside className="filter-sidebar">
      <div className="filter-header">
        <span><h6>Filters</h6></span>
      </div>
      <div className={`filter-section ${open.categories ? "open" : "closed"}`}>
        <div
          className="filter-section-title"
          onClick={() =>
            setOpen({ ...open, categories: !open.categories })
          }
        >
          <span>Categories</span>
          <ChevronDown size={14} />
        </div>

        <div className="filter-body">
          {categories.map((cat) => {
            const slug = cat.toLowerCase().replace(/ /g, "-");
            return (
              <div
                key={cat}
                className="filter-radio category-radio"
                onClick={() => navigate(`/shop/${slug}`)}
              >
                <span>{cat}</span>
                <Form.Check
                  type="radio"
                  name="category"
                  checked={category === slug}
                  readOnly
                />
              </div>
            );
          })}
        </div>
      </div>
      <div className={`filter-section ${open.availability ? "open" : "closed"}`}>
        <div
          className="filter-section-title"
          onClick={() =>
            setOpen({ ...open, availability: !open.availability })
          }
        >
          <span>Availability</span>
          <ChevronDown size={14} />
        </div>

        <div className="filter-body">
          <RadioRow label="In-stock" name="availability" />
          <RadioRow label="Out-of-stock" name="availability" />
        </div>
      </div>

      <div className={`filter-section ${open.prices ? "open" : "closed"}`}>
        <div
          className="filter-section-title"
          onClick={() => setOpen({ ...open, prices: !open.prices })}
        >
          <span>Prices</span>
          <ChevronDown size={14} />
        </div>

        <div className="filter-body">
          <RadioRow label="Sales" name="price" />
          <RadioRow label="Discounted" name="price" />
        </div>
      </div>

      <div className={`filter-section ${open.diet ? "open" : "closed"}`}>
        <div
          className="filter-section-title"
          onClick={() => setOpen({ ...open, diet: !open.diet })}
        >
          <span>Diet Type</span>
          <ChevronDown size={14} />
        </div>

        <div className="filter-body">
          <RadioRow label="Vegan" name="diet" />
          <RadioRow label="Non-vegan" name="diet" />
        </div>
      </div>

    </aside>
  );
}
