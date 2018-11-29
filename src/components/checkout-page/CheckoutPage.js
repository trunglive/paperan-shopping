import React, { Component } from "react";
import { connect } from "react-redux";

import Forms from "./form/Forms";
import Cart from "./Cart";
import { displayCurrentRoute } from "../../actions/routingActions";

class CheckoutPage extends Component {
  state = {
    cart: false,
    burgerIconDisplay: true,
    bigCloseIconDisplay: false
  };

  componentDidMount() {
    this.props.displayCurrentRoute(this.props.match.path);
  }

  handleClickBurgerIcon = () => {
    this.setState({
      cart: true,
      burgerIconDisplay: false,
      bigCloseIconDisplay: true
    });
  };

  handleClickCloseBigIcon = () => {
    this.setState({
      cart: false,
      burgerIconDisplay: true
    });
  };

  render() {
    return (
      <div className="checkout-page">
        <Forms cartState={this.state.cart} />
        <Cart
          cartState={this.state.cart}
          burgerIconState={this.state.burgerIconDisplay}
        />
        <img
          className={`burger-menu-icon ${
            this.state.burgerIconDisplay ? "show-icon" : "hide-icon"
          }`}
          src="/icons/burger.svg"
          onClick={this.handleClickBurgerIcon}
        />
        <img
          className="close-big-icon"
          src="/icons/close-big.svg"
          onClick={this.handleClickCloseBigIcon}
        />
        )
      </div>
    );
  }
}

export default connect(
  null,
  { displayCurrentRoute }
)(CheckoutPage);
