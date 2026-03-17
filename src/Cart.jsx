import { useSelector } from "react-redux";
import cart_img from "./assets/cart-img.png";
import { Link } from "react-router-dom";
function Cart() {
  const cartSelector = useSelector((state) => state.cart.items);

  return (
    <>
      <div className="cart">
        <Link to="/cart">
          <img src={cart_img} className="cart-img" />
        </Link>
        <span className="cart-count">{cartSelector.length}</span>
      </div>
    </>
  );
}

export default Cart;
