import { Navbar, Container, Form, Badge } from "react-bootstrap";
import { Cart, Heart } from "react-bootstrap-icons";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function AppNavbar() {
  const navigate = useNavigate();

  const cartItems = useSelector((state) => state.cart?.items || []);
  const wishlistItems = useSelector((state) => state.wishlist?.items || []);

  const [query, setQuery] = useState("");

  return (
    <Navbar bg="light" className="mb-3">
      <Container>
        <Navbar.Brand
          style={{ cursor: "pointer" }}
          onClick={() => navigate("/")}
        >
          Grobite
        </Navbar.Brand>

        <Form.Control
          placeholder="Search products..."
          style={{ maxWidth: 300 }}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) =>
            e.key === "Enter" && navigate(`/search/${query}`)
          }
        />

        <div className="d-flex gap-3 align-items-center">
          <div
            style={{ cursor: "pointer" }}
            onClick={() => navigate("/wishlist")}
          >
            <Heart size={22} />
            <Badge bg="danger" className="ms-1">
              {wishlistItems.length}
            </Badge>
          </div>

          <div
            style={{ cursor: "pointer" }}
            onClick={() => navigate("/cart")}
          >
            <Cart size={22} />
            <Badge bg="success" className="ms-1">
              {cartItems.length}
            </Badge>
          </div>
        </div>
      </Container>
    </Navbar>
  );
}
