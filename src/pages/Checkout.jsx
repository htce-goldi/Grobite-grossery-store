import { Container, Row, Col, Button, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

import { clearCart } from "../redux/slices/cartSlice";
import { placeOrder } from "../redux/slices/orderSlice";
import { applyCoupon, removeCoupon } from "../redux/slices/couponSlice";

export default function Checkout() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const cartItems = useSelector((state) => state.cart.cartItems);
  const { discount } = useSelector((state) => state.coupon);

  const [coupon, setCoupon] = useState("");
  const [address, setAddress] = useState({
    name: "",
    phone: "",
    street: "",
    city: "",
    pincode: "",
  });

  if (cartItems.length === 0) {
    return <h4 className="text-center mt-5">Cart is empty</h4>;
  }

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  const delivery = 40;
  const discountAmount = (subtotal * discount) / 100;
  const total = subtotal + delivery - discountAmount;

  const handleChange = (e) => {
    setAddress({ ...address, [e.target.name]: e.target.value });
  };

  const handlePlaceOrder = () => {
    if (!address.name || !address.phone || !address.street) {
      alert("Please fill address details");
      return;
    }

    dispatch(
      placeOrder({
        id: Date.now(),
        items: cartItems,
        total,
        address,
        status: "Placed",
        date: new Date().toLocaleDateString(),
      })
    );

    dispatch(clearCart());
    navigate("/orders");
  };

  return (
    <Container className="py-5">
      <Row>
        <Col lg={7}>
          <h5 className="mb-3">Delivery Address</h5>

          <Form>
            <Row className="mb-3">
              <Col md={6}>
                <Form.Control
                  placeholder="Full Name"
                  name="name"
                  onChange={handleChange}
                />
              </Col>
              <Col md={6}>
                <Form.Control
                  placeholder="Phone"
                  name="phone"
                  onChange={handleChange}
                />
              </Col>
            </Row>

            <Form.Control
              className="mb-3"
              placeholder="Street Address"
              name="street"
              onChange={handleChange}
            />

            <Row>
              <Col md={6}>
                <Form.Control
                  placeholder="City"
                  name="city"
                  onChange={handleChange}
                />
              </Col>
              <Col md={6}>
                <Form.Control
                  placeholder="Pincode"
                  name="pincode"
                  onChange={handleChange}
                />
              </Col>
            </Row>
          </Form>
        </Col>
        <Col lg={5}>
          <div className="checkout-summary p-4 border rounded">
            <h5 className="mb-3">Order Summary</h5>

            {cartItems.map((item) => (
              <div
                key={item.id}
                className="d-flex justify-content-between mb-2"
              >
                <span>
                  {item.name} × {item.qty}
                </span>
                <span>₹{item.price * item.qty}</span>
              </div>
            ))}

            <hr />

            <div className="d-flex justify-content-between">
              <span>Subtotal</span>
              <span>₹{subtotal}</span>
            </div>

            <div className="d-flex justify-content-between">
              <span>Delivery</span>
              <span>₹{delivery}</span>
            </div>

            <div className="d-flex justify-content-between text-success">
              <span>Discount</span>
              <span>- ₹{discountAmount}</span>
            </div>

            <hr />

            <div className="d-flex justify-content-between fw-bold">
              <span>Total</span>
              <span>₹{total}</span>
            </div>

            <Form className="d-flex gap-2 mt-3">
              <Form.Control
                placeholder="Coupon Code"
                value={coupon}
                onChange={(e) => setCoupon(e.target.value)}
              />
              <Button onClick={() => dispatch(applyCoupon(coupon))}>
                Apply
              </Button>
              <Button
                variant="outline-danger"
                onClick={() => dispatch(removeCoupon())}
              >
                Remove
              </Button>
            </Form>

            <Button className="w-100 mt-4" onClick={handlePlaceOrder}>
              Place Order
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
