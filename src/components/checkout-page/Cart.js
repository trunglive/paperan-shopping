import React, { Component } from "react";
import { connect } from "react-redux";

import ItemInCart from "../menu-checkout-slider/ItemInCart";

class Cart extends Component {
  state = {};

  render() {
    const { cart } = this.props;

    return (
      <div className="checkout-page__right-section">
        <div className="your-cart-and-number">
          <div className="your-cart">Your cart</div>
          <div className="number">(10)</div>
        </div>
        <div className="checkout-menu__items-section all-items-in-cart">
          {Object.keys(cart).length > 0 &&
            Object.keys(cart).map(id =>
              cart[id].map(item => (
                <ItemInCart guid={id} {...item} key={item.variationId} />
              ))
            )}
        </div>
        <div className="checkout-menu__subtotal-section">
          <div className="checkout-menu__subtotal-section--price">
            <p>subtotal</p>
            <p>$ 100</p>
          </div>
          <div className="checkout-menu__subtotal-section--shipping">
            <p>Shipping from Seattle, WA</p>
            <p>from $ 3.97</p>
          </div>
          <div className="checkout-menu__subtotal-section--final-total-price">
            <p>total</p>
            <p>$ 397</p>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ cart }) => ({
  cart
});

export default connect(mapStateToProps)(Cart);
