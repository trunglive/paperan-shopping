import React, { Component } from "react";
import Menu from "react-modal";

class Checkout extends Component {
  state = {
    isMenuOpen: false
  };

  handleOpenMenu = () => {
    this.setState({ isMenuOpen: true });
  };

  handleCloseMenu = () => {
    this.setState({ isMenuOpen: false });
  };

  render() {
    return (
      <div className="menu checkout-menu">
        <div
          className="product-details__add-to-cart-container--button"
          onClick={this.handleOpenMenu}
        >
          check out
        </div>
        <Menu
          isOpen={this.state.isMenuOpen}
          onRequestClose={this.handleCloseMenu}
          style={modalStyles}
          className="checkout-menu-container"
          contentLabel="Menu for Paperan"
        >
          <div className="checkout-menu__items-section">
            <div className="checkout-menu__items-section--bag-container">
              <img
                className="close-menu-icon"
                src="/icons/close.svg"
                onClick={this.handleCloseMenu}
              />
            </div>
            <div className="checkout-menu__items-section--items-container" />
          </div>

          <div className="checkout-menu__pricing-section">
            <div className="checkout-menu__pricing-section--subtotal">
              <p>subtotal</p>
              <p>$25.34</p>
            </div>
            <div className="checkout-menu__pricing-section--shipping">
              <p>shipping to germany</p>
              <p>from $4.99</p>
            </div>
            <div className="checkout-menu__pricing-section--continue-to-checkout-button">
              continue to checkout
            </div>
          </div>
        </Menu>
      </div>
    );
  }
}

export default Checkout;

const modalStyles = {
  overlay: {
    backgroundColor: "rgba(54, 54, 54, 0.7)"
  }
};
