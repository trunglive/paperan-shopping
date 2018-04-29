import React from "react";

const Subtotal = () => (
  <div className="checkout-menu__subtotal-section">
    <div className="checkout-menu__subtotal-section--price">
      <p>subtotal</p>
      <p>$25.34</p>
    </div>
    <div className="checkout-menu__subtotal-section--shipping">
      <p>Shipping from Seattle, WA</p>
      <p>from $3.97</p>
    </div>
    <div className="product-details__add-to-cart-container--button checkout-menu__pricing-section--continue-to-checkout-button">
      continue to checkout
    </div>
  </div>
);

export default Subtotal;
