import React, { Component } from "react";
import { connect } from "react-redux";
import WithCheckout from "./WithCheckout";
import { SingleItemContext } from "../SingleItemPage";
import { addToCart } from "../../../actions/cartActions";

class CheckoutView extends Component {
  render() {
    const { quantity } = this.props;

    return (
      <WithCheckout
        render={handleOpenCart => (
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
                    handleOpenCart(quantity, currentColor, currentSize);

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
          </div>
        )}
      />
    );
  }
}

export default connect(null, { addToCart })(CheckoutView);
