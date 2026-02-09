import { useParams } from "react-router-dom";
import products from "../data/products.json";

export default function CategoryProducts() {
  const { id } = useParams();

  const filtered = products.filter(
    (item) => item.category === id
  );

  return (
    <div className="container my-4">
      <h3 className="mb-4 text-capitalize">
        {id.replace("-", " ")}
      </h3>

      <div className="products-grid">
        {filtered.map((item) => (
          <div className="product-card" key={item.id}>
            <img src={item.image} alt={item.title} />
            <h6>{item.title}</h6>
            <p>₦{item.price}</p>
            <button>Add</button>
          </div>
        ))}
      </div>
    </div>
  );
}
