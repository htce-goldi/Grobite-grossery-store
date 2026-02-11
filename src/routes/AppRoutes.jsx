import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Shop from "../pages/Shop";
import Cart from "../pages/Cart";
import Checkout from "../pages/Checkout";
import ProductDetails from "../pages/ProductDetails";
import ProtectedRoute from "./ProtectedRoute";
import Deals from "../pages/Deals";
import Orders from "../pages/Orders";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Header from "../components/layout/Header";
import ExploreCategories from "../components/categories/ExploreCategories";
import FeaturedProducts from "../components/home/FeaturedProducts";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/" element={<Home />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/product/:id" element={<ProductDetails />} />
      <Route path="/deals" element={<Deals />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/orders" element={<Orders />} />
      <Route path="/header" element={<Header />} />
      <Route path="/protectedroute" element={<ProtectedRoute />} />
      <Route path="/ExploreCategories" element={<ExploreCategories />} />
      <Route path="/Featuredproduct" element={<FeaturedProducts />} />


    </Routes>
  );
}
