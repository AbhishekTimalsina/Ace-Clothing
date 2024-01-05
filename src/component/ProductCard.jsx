import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartProvider";

import "./ProductCard.css";

function ProductCard({ product }) {
  const [isAddedToCart, setIsAddedToCart] = useState(false);
  let { addToCart } = useContext(CartContext);

  function handleAddToCart() {
    setIsAddedToCart(!isAddedToCart);
    addToCart(product);
  }

  return (
    <div className="product-card_wrapper">
      <Link to={`/product/${product.id}`}>
        <div className="product-card_img">
          <img src={product?.image} />
        </div>
      </Link>
      <div className="product-card_description">
        <h3>{product.title}</h3>
        <p>{product?.description}</p>
        <span className="product-card_bottom">
          <button className="add-cart_btn" onClick={handleAddToCart}>
            Add to Cart
          </button>
          <b className="product-price">${product?.price}</b>
        </span>
      </div>
    </div>
  );
}

export default ProductCard;
