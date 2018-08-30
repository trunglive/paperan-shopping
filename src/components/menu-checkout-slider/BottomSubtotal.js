import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const BottomSubtotal = ({ totalPrice, shippingCost, onCloseCart }) => (
  <div className="checkout-menu__subtotal-section">
    <div className="checkout-menu__subtotal-section--price">
      <p>subtotal</p>
      <p>$ {totalPrice}</p>
    </div>
    <div className="checkout-menu__subtotal-section--shipping">
      <p>Shipping from Seattle, WA</p>
      <p>from $ {shippingCost}</p>
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

const mapStateToProps = ({ shipping }) => ({
  shippingCost: shipping.cost
});

export default connect(mapStateToProps)(BottomSubtotal);
