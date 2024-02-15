import { useCartActions } from "../../store/Store";

import "./ProductView.css";
import toast from "react-hot-toast";

function ProductView({ productData }) {
  const { addToCart } = useCartActions();

  function handleAddToCart() {
    addToCart(productData);
    toast.success("Added to Cart");
  }

  return (
    <div className="product-container">
      <div className="product-img_wrapper">
        <img src={productData.image} />
      </div>
      <div className="product-info">
        <h2 className="product-name">{productData.title}</h2>
        <p className="product-price">${productData.price}</p>
        <p className="product-description">{productData.description}</p>

        <button className="product-cart_btn" onClick={handleAddToCart}>
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductView;
