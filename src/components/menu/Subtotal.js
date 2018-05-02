import React from "react";

const Subtotal = ({ totalPrice }) => (
  <div className="checkout-menu__subtotal-section">
    <div className="checkout-menu__subtotal-section--price">
      <p>subtotal</p>
      <p>
        $ { totalPrice }
      </p>
    </div>
    <div className="checkout-menu__subtotal-section--shipping">
      <p>Shipping from Seattle, WA</p>
      <p>from $ 3.97</p>
    </div>
    <div className="product-details__add-to-cart-container--button checkout-menu__subtotal-section--continue-to-checkout-button">
      continue to checkout
    </div>
  </div>
);

// const mapStateToProps = cart => ({
//   cart
// });

export default Subtotal;
