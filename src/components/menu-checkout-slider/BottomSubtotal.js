import React from "react";
import { Link } from "react-router-dom";

const BottomSubtotal = ({ totalPrice, onCloseCart }) => (
  <div className="checkout-menu__subtotal-section">
    <div className="checkout-menu__subtotal-section--price">
      <p>subtotal</p>
      <p>$ {totalPrice}</p>
    </div>
    <div className="checkout-menu__subtotal-section--shipping">
      <p>Shipping from Seattle, WA</p>
      <p>from $ 3.97</p>
    </div>
    <Link to="/checkout" style={{ textDecoration: "none", color: "#fff" }}>
      <div
        className="product-details__add-to-cart-container--button checkout-menu__subtotal-section--continue-to-checkout-button"
        onClick={onCloseCart}
      >
        continue to checkout
      </div>
    </Link>
  </div>
);

export default BottomSubtotal;
