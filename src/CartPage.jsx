import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { removeItem, addItem } from "./redux/slice";

function CartPage() {
  const cartSelector = useSelector((state) => state.cart.items);
  //   console.log("Right Now Cart is: ", cartSelector);
  const dispatch = useDispatch();
  const handleRemove = (cartItem) => {
    dispatch(removeItem(cartItem));
  };

  return (
    <>
      <div className="cart-page">
        <div>
          <h1>Welcome to Cart</h1>
        </div>
        <div className="cart-container">
          <div className="cart-summary">
            <h2>Cart Items: {cartSelector.length}</h2>
          </div>
          {cartSelector &&
            cartSelector.map((cartItems) => (
              <div className="cart-card" key={cartItems.id}>
                <div className="card-left">
                  <img src={cartItems.thumbnail} />
                </div>
                <div className="card-right">
                  <div className="cardRight-details">
                    <h2>{cartItems.title}</h2>
                    <p>{(cartItems.price * cartItems.quantity).toFixed(2)}</p>
                  </div>
                  <div className="cardRight-counter">
                    <div className="right-buttons">
                      <button
                        className="increaseCounter"
                        onClick={() => dispatch(addItem(cartItems))}
                      >
                        +
                      </button>
                      <p>{cartItems.quantity}</p>
                      <button
                        className="decreaseCounter"
                        onClick={() => dispatch(removeItem(cartItems))}
                      >
                        -
                      </button>
                    </div>
                    <div>
                      <button
                        className="remove-cart"
                        onClick={() => handleRemove(cartItems)}
                      >
                        Remove from Cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          <div className="cart-total">
            <h2>
              Total Price: $
              {cartSelector
                .reduce((total, item) => total + item.price * item.quantity, 0)
                .toFixed(2)}
            </h2>
          </div>
        </div>
      </div>
    </>
  );
}

export default CartPage;
