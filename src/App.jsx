import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Header from "./components/layout/Header.jsx";

import Home from "./pages/Home.jsx";
import Shop from "./pages/Shop.jsx";
import ProductDetails from "./pages/ProductDetails.jsx";
import Cart from "./pages/Cart.jsx";
import Deals from "./pages/Deals.jsx";
import Login from "./pages/Login";


import Categories from "./pages/Categories.jsx";
import CategoriesProducts from "./pages/CategoriesProduct.jsx";
import ExploreCategories from "./components/categories/ExploreCategories.jsx";
import FeaturedProducts from "./components/home/FeaturedProducts.jsx";

export default function App() {
  return (
    <>

      <Header />
      <ToastContainer position="top-right" autoClose={2000} />
      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/shop" element={<Shop />} />
        <Route path="/shop/:category" element={<Shop />} />

        <Route path="/product/:id" element={<ProductDetails />} />

        <Route path="/cart" element={<Cart />} />
        <Route path="/deals" element={<Deals />} />
        <Route path="/login" element={<Login />} />

        <Route path="/categories" element={<Categories />} />
        <Route path="/categoriesproduct" element={<CategoriesProducts />} />
        <Route path="/explorecategories" element={<ExploreCategories />} />

        <Route
          path="/featuredproducts" element={<FeaturedProducts />}
        />

      </Routes>

    </>
  );
}
