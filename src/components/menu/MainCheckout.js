import React, { Component } from "react";
import { connect } from "react-redux";
import Menu from "react-modal";
import WithMenuToggle from "./WithMenuToggle";
import BagContainer from "./BagContainer";
import ItemSelected from "./ItemSelected";
import Subtotal from "./Subtotal";
import { SingleItemContext } from "../single-item-page/SingleItemContainer";
import { addToCart } from "../../actions/cartActions";

class MainCheckout extends Component {
  render() {
    const {
      isMenuOpen,
      handleOpenMenu,
      handleCloseMenu,
      quantity
    } = this.props;

    // console.log(this.props);

    return (
      <div className="menu checkout-menu">
        <SingleItemContext.Consumer>
          {({
            guid,
            currentSize,
            currentColor,
            photo_url,
            fullItemName,
            price
          }) => (
            <div
              className="product-details__add-to-cart-container--button"
              onClick={() => {
                handleOpenMenu(quantity, currentColor, currentSize, guid);
                this.props.addToCart(
                  guid,
                  currentSize,
                  currentColor,
                  photo_url,
                  fullItemName,
                  price,
                  quantity
                );
              }}
            >
              add to cart
            </div>
          )}
        </SingleItemContext.Consumer>

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

export default connect(null, { addToCart })(WithMenuToggle(MainCheckout));

const modalStyles = {
  overlay: {
    backgroundColor: "rgba(54, 54, 54, 0.7)"
  }
};
