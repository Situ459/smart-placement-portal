import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        Smart Placement Portal
      </div>

      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#features">Features</a></li>
        <li><a href="#footer">Contact</a></li>
      </ul>

      <Link to="/login">
        <button className="login-btn">
          Login
        </button>
      </Link>
    </nav>
  );
}

export default Navbar;