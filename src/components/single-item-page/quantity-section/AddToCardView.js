import React, { Component } from "react";
import WithAddToCart from "./WithAddToCart";
import CheckoutView from "../../menu-checkout-slider/CheckoutView";

class AddToCartView extends Component {
  render() {
    const { inStock } = this.props;

    return (
      <WithAddToCart
        render={({
          quantity,
          isItemOutOfStock,
          overQuantityClick,
          handleQuantityIncrement,
          handleQuantityDecrement
        }) => (
          <div className="add-to-card-and-alert">
            <div className="product-details__add-to-cart-container">
              <p>Quantity</p>
              <div className="numeric-input">
                <p className="quantity-input">{quantity} pcs</p>
                <div>
                  <div className="plus-container">
                    <img
                      className="plus-icon"
                      src="/icons/plus.svg"
                      onClick={() => handleQuantityIncrement(inStock)}
                    />
                  </div>
                  <div className="minus-container">
                    <img
                      className="minus-icon"
                      src="/icons/minus.svg"
                      onClick={() => handleQuantityDecrement(inStock)}
                    />
                  </div>
                </div>
              </div>

              <CheckoutView quantity={quantity} />
            </div>

            {isItemOutOfStock && (
              <p className="stock-alert">This item was out of stock</p>
            )}
            {overQuantityClick && (
              <p className="stock-alert">
                This is the maximum quantity available
              </p>
            )}
          </div>
        )}
      />
    );
  }
}

export default AddToCartView;
