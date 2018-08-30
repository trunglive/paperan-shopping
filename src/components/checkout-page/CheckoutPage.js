import React, { Component } from "react";
import { connect } from "react-redux";

import Forms from "./form/Forms";
import Cart from "./Cart";
import { displayCurrentRoute } from "../../actions/routingActions";

class CheckoutPage extends Component {
  componentDidMount() {
    this.props.displayCurrentRoute(this.props.match.path);
  }

  render() {
    return (
      <div className="checkout-page">
        <Forms />
        <Cart />
      </div>
    );
  }
}

export default connect(
  null,
  { displayCurrentRoute }
)(CheckoutPage);
