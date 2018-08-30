import React, { Component } from "react";
import { connect } from "react-redux";

import ItemInCart from "../menu-checkout-slider/ItemInCart";
import { calculateQuantityInCart } from "../../utils/calculateQuantityInCart";
import { calculateSubtotal } from "../../utils/calculateSubtotal";

class Cart extends Component {
  state = {};

  render() {
    const { cart } = this.props;
    const subtotal = calculateSubtotal(cart);
    const total = (calculateSubtotal(cart) + 3.97).toFixed(2);

    return (
      <div className="checkout-page__right-section">
        <div className="your-cart-and-number">
          <div className="your-cart">Your cart</div>
          <div className="number">
            ({calculateQuantityInCart(cart)})
          </div>
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
            <p>$ {subtotal}</p>
          </div>
          <div className="checkout-menu__subtotal-section--shipping">
            <p>Shipping from Seattle, WA</p>
            <p>from $ 3.97</p>
          </div>
          <div className="checkout-menu__subtotal-section--final-total-price">
            <p>total</p>
            <p>$ {total}</p>
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
