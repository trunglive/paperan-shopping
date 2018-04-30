import React, { Component } from "react";
import Menu from "react-modal";
import WithMenuToggle from "./WithMenuToggle";
import BagContainer from "./BagContainer";
import ItemSelected from "./ItemSelected";
import Subtotal from "./Subtotal";

class MainCheckout extends Component {
  render() {
    const {
      isMenuOpen,
      handleOpenMenu,
      handleCloseMenu,
      quantity,
      currentColor,
      currentSize
    } = this.props;

    return (
      <div className="menu checkout-menu">
        <div
          className="product-details__add-to-cart-container--button"
          onClick={() => handleOpenMenu(quantity, currentColor, currentSize)}
        >
          add to cart
        </div>
        <Menu
          isOpen={isMenuOpen}
          onRequestClose={handleCloseMenu}
          style={modalStyles}
          closeTimeoutMS={200}
          className="checkout-menu-container"
          contentLabel="Menu for Paperan"
        >
          <div className="checkout-menu__items-section">
            <BagContainer handleCloseMenu={handleCloseMenu} />
            <ItemSelected quantity={quantity} />
          </div>

          <Subtotal />
        </Menu>
      </div>
    );
  }
}

export default WithMenuToggle(MainCheckout);

const modalStyles = {
  overlay: {
    backgroundColor: "rgba(54, 54, 54, 0.7)"
  }
};
