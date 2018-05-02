import React, { Component } from "react";
import { connect } from "react-redux";
import Menu from "react-modal";
import WithMenuToggle from "./WithMenuToggle";
import BagContainer from "./BagContainer";
import ItemSelected from "./ItemSelected";
import Subtotal from "./Subtotal";
import { SingleItemContext } from "../single-item-page/SingleItemContainer";
import { addToCart } from "../../actions/cartActions";
import { calculateSubtotal } from '../../utils/calculateSubtotal';

class MainCheckout extends Component {
  render() {
    const {
      isMenuOpen,
      handleOpenMenu,
      handleCloseMenu,
      quantity,
      cart
    } = this.props;

    const totalPrice = calculateSubtotal(cart);

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
                handleOpenMenu(quantity, currentColor, currentSize);

                if (quantity > 0 && currentColor && currentSize) {
                  this.props.addToCart(
                    guid,
                    currentSize,
                    currentColor,
                    photo_url,
                    fullItemName,
                    price,
                    quantity
                  );
                }
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

            {Object.keys(cart).map(id =>
              cart[id].map(item => <ItemSelected {...item} key={item.variationId} />)
            )}
          </div>

          <Subtotal totalPrice={totalPrice} />
        </Menu>
      </div>
    );
  }
}

const mapStateToProps = ({ cart }) => ({
  cart
});

export default connect(mapStateToProps, { addToCart })(
  WithMenuToggle(MainCheckout)
);

const modalStyles = {
  overlay: {
    backgroundColor: "rgba(54, 54, 54, 0.7)"
  }
};
