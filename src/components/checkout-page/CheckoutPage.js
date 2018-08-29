import React, { Component } from 'react';
import { connect } from 'react-redux';

import MainCartView from '../menu-checkout-slider/MainCartView';
import { displayCurrentRoute } from '../../actions/routingActions';

class CheckoutPage extends Component {
  componentDidMount() {
    this.props.displayCurrentRoute(this.props.match.path);
  }

  render() {
    return (
      <div className="checkout-page">
        <p>this is the checkout page</p>
        <MainCartView />
      </div>
    )
  }
}

export default connect(null, { displayCurrentRoute })(CheckoutPage);