import React, { Component } from "react";
import { connect } from "react-redux";

import Forms from "./form/Forms";
import Cart from "./Cart";
import { displayCurrentRoute } from "../../actions/routingActions";

class CheckoutPage extends Component {
  state = {
    cart: false
  };

  componentDidMount() {
    this.props.displayCurrentRoute(this.props.match.path);
  }

  handleClickBurgerIcon = () => {
    this.setState({
      cart: !this.state.cart
    });
  };

  render() {
    const width = Math.max(
      document.documentElement.clientWidth,
      window.innerWidth || 0
    );

    return (
      <div className="checkout-page">
        <Forms cartState={this.state.cart} />
        <Cart cartState={this.state.cart} />
        <img
          className="burger-menu-icon"
          src="/icons/burger.svg"
          onClick={this.handleClickBurgerIcon}
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
