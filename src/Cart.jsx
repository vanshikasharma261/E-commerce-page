import { useSelector } from "react-redux";
import cart_img from "./assets/cart-img.png";
function Cart() {
  const cartSelector = useSelector((state) => state.cart.items);

  return (
    <>
      <div className="cart">
        <img src={cart_img} className="cart-img" />
        <span className="cart-count">{cartSelector.length}</span>
      </div>
    </>
  );
}

export default Cart;
