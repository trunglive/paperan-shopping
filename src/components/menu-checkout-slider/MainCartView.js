import React, { Component } from "react";
import { connect } from "react-redux";
import Menu from "react-modal";

import TopBagSection from "./TopBagSection";
import ItemInCart from "./ItemInCart";
import BottomSubtotal from "./BottomSubtotal";
import { fetchCart } from "../../actions/modalActions";
import { calculateSubtotal } from "../../utils/calculateSubtotal";

class MainCartView extends Component {
  state = {
    cart: {}
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.cart !== prevState.cart) {
      return {
        cart: nextProps.cart
      };
    }

    return null;
  }

  handleCloseCart = () => {
    this.props.fetchCart(false);
  };

  render() {
    const { isCartOpen } = this.props;
    const { cart } = this.state;
    const totalPrice = calculateSubtotal(this.state.cart);

    return (
      <Menu
        isOpen={isCartOpen}
        onRequestClose={() => this.props.fetchCart(false)}
        style={modalStyles}
        closeTimeoutMS={200}
        className="checkout-menu-container"
        contentLabel="Menu for Paperan"
      >
        <div className="checkout-menu__items-section">
          <TopBagSection onCloseCart={this.handleCloseCart} />

          {Object.keys(cart).length > 0 ? (
            Object.keys(cart).map(id =>
              cart[id].map(item => (
                <ItemInCart
                  guid={id}
                  {...item}
                  key={item.variationId}
                  onCloseCart={this.handleCloseCart}
                />
              ))
            )
          ) : (
            <div className="checkout-menu__empty-cart">
              <p>The cart is empty</p>
              <img
                className="empty-cart-icon"
                src="/icons/cart-empty.svg"
                alt="empty-cart-icon"
              />
            </div>
          )}
        </div>
        {totalPrice > 0 && <BottomSubtotal totalPrice={totalPrice} />}
      </Menu>
    );
  }
}

export default connect(
  null,
  { fetchCart }
)(MainCartView);

const modalStyles = {
  overlay: {
    backgroundColor: "rgba(54, 54, 54, 0.7)"
  }
};
