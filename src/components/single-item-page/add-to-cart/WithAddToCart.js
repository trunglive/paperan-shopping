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
          quantity={this.state.quantity}
          isItemOutOfStock={this.state.isItemOutOfStock}
          overQuantityClick={this.state.overQuantityClick}
          handleQuantityIncrement={this.handleQuantityIncrement}
          handleQuantityDecrement={this.handleQuantityDecrement}
          inStock={this.props.inStock}
        />
      );
    }
  };

export default WithAddToCart;
