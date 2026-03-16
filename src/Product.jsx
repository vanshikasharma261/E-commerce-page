import { useDispatch, useSelector } from "react-redux";
import mouse_img from "./assets/wireless-mouse.png";
import { addItem, removeItem } from "./redux/slice";
import { fetchProduct } from "./redux/productSlice";
import { useEffect } from "react";
function Product() {
  const dispatch = useDispatch();

  const handleAddClick = () => {
    dispatch(addItem(1));
  };
  const handleRemoveClick = () => {
    dispatch(removeItem(1));
  };
  useEffect(() => {
    dispatch(fetchProduct());
  }, []);

  const productSelector = useSelector((state) => state.product.items);
  console.log(productSelector);

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
              <button className="btn" onClick={handleAddClick}>
                Add to Cart
              </button>
            </div>
          </div>
        ))}
    </div>
  );
}

export default Product;
