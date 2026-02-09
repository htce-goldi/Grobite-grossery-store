import { Link, NavLink } from "react-router-dom";
import { Container } from "react-bootstrap";

import logo from "/images/logo/logo.svg";
import cartIcon from "/images/icons/Vector.svg";
import userIcon from "/images/icons/user.png";

export default function Header() {
  return (
    <header className="site-header">

      <div className="top-bar">
        <Container className="top-bar-inner">
          <div className="left">
            <span>Help desk</span>
            <span>FAQs</span>
          </div>

          <div className="right">
            <span>+234 000 000 000</span>
            <span>ENG</span>
          </div>
        </Container>
      </div>

      <div className="main-navbar">
        <Container className="nav-inner">

          <Link to="/" className="logo">
            <img src={logo} alt="Grobite Logo" />
          </Link>

          <nav className="nav-links">
            <NavLink to="/" end>
              Home
            </NavLink>
            <NavLink to="/shop">Shop</NavLink>
            <NavLink to="/deals">Deals</NavLink>
            <NavLink to="/blog">Blog</NavLink>
          </nav>


          <div className="nav-actions">

            <span className="login-text">Cart</span>
            <Link to="/cart" className="icon-circle">
              <img src={cartIcon} alt="Cart" />
            </Link>
            <span className="login-text">Login</span>
            <Link to="/login" className="icon-circle">
              <img src={userIcon} alt="User" />
            </Link>
          </div>
        </Container>
      </div>
    </header>
  );
}
