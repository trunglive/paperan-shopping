import React, { Component } from "react";

const WithAddToCart = WrappedComponent =>
  class extends Component {
    static displayName = `WithAddToCart(${WrappedComponent.displayName ||
      WrappedComponent.name})`;

    state = {
      quantity: 0,
      isItemOutOfStock: false,
      overQuantityClick: false
    };

    handleQuantityIncrement = inStock => {
      this.setState(state => {
        if (inStock === 0) {
          return {
            isItemOutOfStock: true
          };
        }
        if (state.quantity >= inStock) {
          return { overQuantityClick: true };
        }
        return { quantity: state.quantity + 1 };
      });
    };

    handleQuantityDecrement = inStock => {
      this.setState(state => {
        if (state.quantity === 0) return;
        return { quantity: state.quantity - 1, overQuantityClick: false };
      });
    };

    render() {
      return (
        <WrappedComponent
          {...this.state}
          {...this.props}
          handleQuantityIncrement={this.handleQuantityIncrement}
          handleQuantityDecrement={this.handleQuantityDecrement}
        />
      );
    }
  };

export default WithAddToCart;
