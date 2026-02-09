import { Card, Button } from "react-bootstrap";
import { FaShoppingCart } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/slices/cartSlice";
import { useNavigate } from "react-router-dom";

export default function ProductCard({ product }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAddToCart = (e) => {
    e.stopPropagation();
    dispatch(addToCart(product));
  };

  return (
    <Card
      className="product-card border p-2"
      style={{
        cursor: "pointer",
        minHeight: "240px", 
      }}
      onClick={() => navigate(`/product/${product.id}`)}
    >

      <Card.Img
        src={product.image}
        alt={product.title}
        style={{
          height: "110px",
          objectFit: "contain",
        }}
      />

      <Card.Body className="p-2 text-start d-flex flex-column">
        <small className="text-muted">{product.category}</small>

        <Card.Title className="fs-6 mb-1">
          {product.title}
        </Card.Title>

        <div className="mt-auto d-flex justify-content-between align-items-center">
 
          <div>
            {product.oldPrice && (
              <div>
                <del style={{ color: "red" }}>
                  ₹{product.oldPrice}
                </del>
              </div>
            )}
            <b>₹{product.price}</b>
          </div>

          <Button
            size="sm"
            variant="warning"
            className="d-flex align-items-center gap-1"
            disabled={product.stock === 0}
            onClick={handleAddToCart}
          >
            <FaShoppingCart />
            Add
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}
