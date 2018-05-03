import React, { Component } from "react";
import { connect } from "react-redux";
import Menu from "react-modal";
import WithCheckout from "./WithCheckout";
import TopBagSection from "./TopBagSection";
import ItemInCart from "./ItemInCart";
import BottomSubtotal from "./BottomSubtotal";
import { SingleItemContext } from "../SingleItemPage";
import { addToCart } from "../../../actions/cartActions";
import { calculateSubtotal } from "../../../utils/calculateSubtotal";

class CheckoutView extends Component {
  render() {
    const { quantity, cart } = this.props;
    const totalPrice = calculateSubtotal(this.props.cart);

    return (
      <WithCheckout
        render={(isMenuOpen, handleOpenMenu, handleCloseMenu) => (
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
                <TopBagSection handleCloseMenu={handleCloseMenu} />

                {Object.keys(cart).map(id =>
                  cart[id].map(item => (
                    <ItemInCart guid={id} {...item} key={item.variationId} />
                  ))
                )}
              </div>

              <BottomSubtotal totalPrice={totalPrice} />
            </Menu>
          </div>
        )}
      />
    );
  }
}

const mapStateToProps = ({ cart }) => ({
  cart
});

export default connect(mapStateToProps, { addToCart })(CheckoutView);

const modalStyles = {
  overlay: {
    backgroundColor: "rgba(54, 54, 54, 0.7)"
  }
};
