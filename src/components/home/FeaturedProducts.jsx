import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import products from "../../data/products.json";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/slices/cartSlice";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaShoppingCart } from "react-icons/fa";

export default function FeaturedProducts() {
    const dispatch = useDispatch();

    const handleAddToCart = (product) => {
        dispatch(addToCart(product));
    };

    return (
        <section className="py-5">
            <ToastContainer position="top-right" autoClose={2000} />

            <Container>

                <div className="d-flex justify-content-between align-items-center mb-4 flex-wrap">
                    <h4 className="fw-bold mb-2 mb-md-0">Featured Products</h4>

                    <div className="d-flex gap-2 flex-wrap">
                        <Button size="sm" variant="dark">
                            Popular buys
                        </Button>
                        <Button size="sm" variant="outline-secondary">
                            Discounted
                        </Button>
                        <Button size="sm" variant="outline-secondary">
                            Today's Deals
                        </Button>
                    </div>
                </div>

                <Row className="g-3">
                    {products.map((product) => (
                        <Col key={product.id} lg={2} md={3} sm={4} xs={6}>

                            <div className="product-card h-100 border rounded p-2 bg-white text-start">

                                <img
                                    src={product.image}
                                    alt={product.title}
                                    className="img-fluid mb-2 d-block mx-auto"
                                    style={{ height: "100px", objectFit: "contain" }}
                                />

                                {/* CATEGORY */}
                                <small className="text-muted d-block">
                                    {product.category}
                                </small>

                                <h6 className="fw-semibold mt-1 mb-2">
                                    {product.title}
                                </h6>
                                <div className="d-flex justify-content-between align-items-end">
                                    <div>
                                        {product.oldPrice && (
                                            <div
                                                style={{
                                                    color: "#E53935",
                                                    fontSize: "12px",
                                                    textDecoration: "line-through",
                                                }}
                                            >
                                                ₹{product.oldPrice}
                                            </div>
                                        )}
                                        <div
                                            style={{
                                                fontWeight: "600",
                                                fontSize: "15px",
                                            }}
                                        >
                                            ₹{product.price}
                                        </div>
                                    </div>
                                    <Button
                                        size="sm"
                                        onClick={() => handleAddToCart(product)}
                                        style={{
                                            backgroundColor: "#F6E7B2",
                                            border: "none",
                                            color: "#000",
                                            padding: "6px 12px",
                                            display: "flex",
                                            alignItems: "center",
                                            gap: "6px",
                                            fontSize: "14px",
                                        }}
                                    >
                                        <FaShoppingCart size={14} />
                                        Add
                                    </Button>
                                </div>
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
}
