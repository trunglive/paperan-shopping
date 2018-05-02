import React, { Component } from "react";
import WithAddToCart from "./WithAddToCart";
import MainCheckout from "../../menu/MainCheckout";
// import { SingleItemContext } from "../SingleItemContainer";

class AddToCartView extends Component {
  render() {
    const {
      quantity,
      isItemOutOfStock,
      overQuantityClick,
      handleQuantityIncrement,
      handleQuantityDecrement,
      inStock
    } = this.props;

    return (
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

          <MainCheckout quantity={quantity} />
        </div>

        {isItemOutOfStock && (
          <p className="stock-alert">This item was out of stock</p>
        )}
        {overQuantityClick && (
          <p className="stock-alert">This is the maximum quantity available</p>
        )}
      </div>
    );
  }
}

export default WithAddToCart(AddToCartView);
