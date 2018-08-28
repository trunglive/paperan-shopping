import React from "react";
import { connect } from "react-redux";

import { calculateQuantityInCart } from "../../utils/calculateQuantityInCart";

const TopBagSection = ({ onCloseCart, cart }) => (
  <div className="checkout-menu__items-section--bag-container">
    <div className="bag-group">
      <div className="quantity-in-cart">
        <img className="quantity-in-cart__cart-icon" src="/icons/cart.svg" />
        <div className="circle">
          <p className="quantity">{calculateQuantityInCart(cart)}</p>
        </div>
      </div>

      <span>Shopping bag</span>
    </div>

    <img
      className="close-menu-icon"
      src="/icons/close.svg"
      onClick={onCloseCart}
    />
  </div>
);

const mapStateToProps = ({ cart }) => ({
  cart
});

export default connect(mapStateToProps)(TopBagSection);
