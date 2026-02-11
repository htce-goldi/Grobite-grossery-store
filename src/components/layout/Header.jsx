import { Link, NavLink, useNavigate } from "react-router-dom";
import { Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/slices/authSlice";
// import { handleLogout} from "../../assets/services/authHandlers"

import logo from "/images/logo/logo.svg";
import cartIcon from "/images/icons/Vector.svg";
import userIcon from "/images/icons/user.png";

export default function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

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
            <NavLink to="/" end>Home</NavLink>
            <NavLink to="/shop">Shop</NavLink>
            <NavLink to="/deals">Deals</NavLink>
            <NavLink to="/blog">Blog</NavLink>
          </nav>
          <div
            className="nav-actions"
            style={{ display: "flex", alignItems: "center", gap: "12px" }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
              <span className="login-text">Cart</span>
              <Link to="/cart" className="icon-circle">
                <img src={cartIcon} alt="Cart" />
              </Link>
            </div>
            {user ? (
              <div
                style={{ display: "flex", alignItems: "center", gap: "8px" }}
              >
               <span className="login-text">
             {user?.name || "User"}
             </span>

                <button
                  onClick={handleLogout}
                  style={{
                    background: "transparent",
                    border: "none",
                    cursor: "pointer",
                    padding: 0,
                  }}
                  title="Logout"
                >
                  <img src={userIcon} alt="Logout" />
                </button>
                <span
                  onClick={handleLogout}
                  style={{ cursor: "pointer", fontSize: "14px" }}
                >
                  Logout
                </span>
              </div>
            ) : (
              <div
                style={{ display: "flex", alignItems: "center", gap: "6px" }}
              >
                <span className="login-text">Login</span>
                <Link to="/login" className="icon-circle">
                  <img src={userIcon} alt="User" />
                </Link>
              </div>
            )}
          </div>
        </Container>
      </div>
    </header>
  );
}
