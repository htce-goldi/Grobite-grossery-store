import { useSelector, useDispatch } from "react-redux";
import {
  removeFromCart,
  increaseQty,
  decreaseQty,
  clearCart,
} from "../redux/slices/cartSlice";
import {
  Container,
  Row,
  Col,
  Button,
  Form,
  Toast,
  InputGroup,
} from "react-bootstrap";
import { BsPlus, BsDash, BsX } from "react-icons/bs";
import { ArrowRight } from "react-bootstrap-icons";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../components/layout/Footer";

export default function Cart() {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [promoCode, setPromoCode] = useState("");
  const [discount, setDiscount] = useState(0);
  const [showToast, setShowToast] = useState(false);
  const [toastMsg, setToastMsg] = useState("");

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.qty,
    0
  );

  const total = subtotal - discount;

  const handleApplyPromo = () => {
    if (promoCode === "DISCOUNT10") {
      setDiscount(subtotal * 0.1);
      setToastMsg("Coupon Applied Successfully");
    } else {
      setDiscount(0);
      setToastMsg("Invalid Coupon Code");
    }

    setShowToast(true);
    setPromoCode("");
    setTimeout(() => setShowToast(false), 2500);
  };

  if (cartItems.length === 0) {
    return (
      <>
        <Container className="my-5 text-center">
          <h3>Shopping Cart</h3>
          <p>Your cart is empty</p>
        </Container>
        <Footer />
      </>
    );
  }

  return (
    <>

      <Container className="my-5 position-relative">
        <h3>Shopping Cart</h3>
        <p>You have {cartItems.length} items in your cart</p>
        <Row className="fw-bold border-bottom py-2 d-none d-md-flex">
          <Col md={3}>Description</Col>
          <Col md={2}>Unit</Col>
          <Col md={2}>Price (₹)</Col>
          <Col md={2}>Quantity</Col>
          <Col md={2}>Total (₹)</Col>
          <Col md={1}></Col>
        </Row>

        {cartItems.map((item) => (
          <Row
            key={item.id}
            className="align-items-center border-bottom py-3"
          >
            <Col md={3} className="d-flex align-items-center gap-2">
              <img src={item.image} alt={item.title} width={50} />
              <span>{item.title}</span>
            </Col>

            <Col md={2}>{item.unit || "pcs"}</Col>
            <Col md={2}>₹{item.price}</Col>

            <Col md={2} className="d-flex align-items-center gap-2">
              <Button
                size="sm"
                variant="outline-secondary"
                onClick={() => dispatch(decreaseQty(item.id))}
              >
                <BsDash />
              </Button>

              <span>{item.qty}</span>

              <Button
                size="sm"
                variant="outline-secondary"
                onClick={() => dispatch(increaseQty(item.id))}
              >
                <BsPlus />
              </Button>
            </Col>

            <Col md={2}>₹{item.price * item.qty}</Col>

            <Col md={1}>
              <Button
                variant="link"
                onClick={() => dispatch(removeFromCart(item.id))}
              >
                <BsX size={22} color="black" />
              </Button>
            </Col>
          </Row>
        ))}

        <Row className="my-4">
          <Col md={12}>
            <div className="cart-summary-wrapper">
              <InputGroup className="promo-box">
                <Form.Control
                  placeholder="Enter Promo Code"
                  value={promoCode}
                  onChange={(e) => setPromoCode(e.target.value)}
                />
                <Button onClick={handleApplyPromo}>Apply</Button>
              </InputGroup>

              <div className="summary-box">
                <span>Discount</span>
                <strong>₹{discount.toFixed(2)}</strong>
              </div>

              <div className="summary-box">
                <span>Subtotal</span>
                <strong>₹{subtotal}</strong>
              </div>

              <div className="summary-box">
                <span>Total</span>
                <strong>₹{total}</strong>
              </div>
            </div>

            <div className="d-flex justify-content-end mt-3">
              <Button className="checkout-btn">
                Proceed to Checkout <ArrowRight />
              </Button>
            </div>

            <div
              className="text-end mt-2 continue-link"
              onClick={() => navigate("/shop")}
            >
              Continue shopping
            </div>
          </Col>
        </Row>

        <Toast
          show={showToast}
          onClose={() => setShowToast(false)}
          style={{ position: "fixed", top: 20, right: 20 }}
        >
          <Toast.Body>{toastMsg}</Toast.Body>
        </Toast>
      </Container>
      <Footer />
    </>
  );
}
