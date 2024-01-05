import { useContext, useState } from "react";
import { CartContext } from "../context/CartProvider";
import { Link, NavLink } from "react-router-dom";
import { MagnifyingGlass, ShoppingCart } from "phosphor-react";
import SlidingCart from "./SlidingCart";
import "./Navbar.css";

function Navbar() {
  const [showCart, setShowCart] = useState(false);

  function toggleShowCart() {
    setShowCart(!showCart);
  }
  return (
    <header className={`header ${showCart ? "visible" : ""}`}>
      <nav className="nav container">
        <span className="brand-name">
          <Link to="/">Ace Store</Link>
        </span>
        <ul className="nav-link_container">
          <li className="nav-link">
            <NavLink to="/">Home</NavLink>
          </li>
          <li className="nav-link">
            <NavLink to="/explore/men">Men</NavLink>
          </li>
          <li className="nav-link">
            <NavLink to="/explore/women">Women</NavLink>
          </li>
          <li className="nav-link">
            <NavLink to="/explore/all">Explore All</NavLink>
          </li>
          <li className="nav-link">
            <span>
              <MagnifyingGlass size={22} />
            </span>
            <CartButton toggleShowCart={toggleShowCart} />
          </li>
        </ul>
      </nav>
      <SlidingCart toggleShowCart={toggleShowCart} />
      <CartSliderOverlay />
    </header>
  );
}

function CartButton({ toggleShowCart }) {
  const { cart } = useContext(CartContext);

  const totalCartQty = cart.reduce((totalQty, current) => {
    return totalQty + current.qty;
  }, 0);

  return (
    <span onClick={toggleShowCart}>
      <ShoppingCart size={22} />
      <div className="cart-counter">{totalCartQty}</div>
    </span>
  );
}

function CartSliderOverlay() {
  return <div className="cart-slide_overlay"></div>;
}

export default Navbar;
