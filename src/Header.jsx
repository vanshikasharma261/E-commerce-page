import { Link } from "react-router-dom";
import logo from "./assets/logo-img.png";
import Cart from "./Cart";

function Header() {
  return (
    <div className="header">
      <div className="logo-container">
        <img src={logo} className="logo-img" />
        <span>My Shop</span>
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/">About</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
          <li>
            <Link to="/">Contact</Link>
          </li>
        </ul>
      </nav>
      <Cart />
    </div>
  );
}

export default Header;
