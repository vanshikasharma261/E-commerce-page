import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "./redux/slice";
import { fetchProduct } from "./redux/productSlice";
import { useEffect, useState } from "react";
function Product() {
  const dispatch = useDispatch();

  const handleAddClick = (item) => {
    dispatch(addItem(item));
  };
  const handleRemoveClick = (item) => {
    dispatch(removeItem(item));
  };
  useEffect(() => {
    dispatch(fetchProduct());
  }, []);

  const productSelector = useSelector((state) => state.product.items);
  const cartSelector = useSelector((state) => state.cart.items);

  return (
    <div className="grid">
      {productSelector.length > 0 &&
        productSelector.map((item) => (
          <div className="product-card" key={item.id}>
            <img src={item.thumbnail} />
            <div className="content">
              <div className="title">{item.title}</div>
              <div className="brand">{item.brand}</div>
              <div className="price">${item.price}</div>
              <div className="rating">{item.rating}</div>
              {cartSelector.find((cartItem) => cartItem.id === item.id) ? (
                <button
                  className="btn remove-btn"
                  onClick={() => handleRemoveClick(item)}
                >
                  Remove from Cart
                </button>
              ) : (
                <button className="btn" onClick={() => handleAddClick(item)}>
                  Add to Cart
                </button>
              )}
            </div>
          </div>
        ))}
    </div>
  );
}

export default Product;
