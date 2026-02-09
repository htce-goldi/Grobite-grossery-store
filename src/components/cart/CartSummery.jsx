import { Button, Form } from "react-bootstrap";

export default function CartSummary() {
  return (
    <div className="cart-box">
      <h6 className="fw-bold mb-3">Shopping Cart</h6>

      <div className="cart-item">
        <span> Broccoli</span>
        <span>₹50</span>
      </div>

      <div className="cart-item">
        <span> Potatoes</span>
        <span>₹40</span>
      </div>

      <Form.Control
        placeholder="Enter Promo Code"
        className="my-3"
      />

      <Button variant="danger" className="w-100">
        Checkout
      </Button>
    </div>
  );
}
