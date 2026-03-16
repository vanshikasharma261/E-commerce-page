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
            <a href="">Home</a>
          </li>
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Products</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
        </ul>
      </nav>
      <Cart />
    </div>
  );
}

export default Header;
