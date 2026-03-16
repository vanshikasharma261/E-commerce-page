import { useSelector } from "react-redux";
import cart_img from "./assets/cart-img.png";
function Cart() {
  const selector = useSelector((state) => state.cart.value);

  return (
    <>
      <div className="cart">
        <img src={cart_img} className="cart-img" />
        <span className="cart-count">{selector}</span>
      </div>
    </>
  );
}

export default Cart;
