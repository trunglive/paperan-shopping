import React, { Component } from "react";
import { connect } from "react-redux";

import { fetchShippingCost } from "../../../actions/shippingActions";

class ShippingSection extends Component {
  handleShippingCostChange = ({ target: { value } }) => {
    this.props.fetchShippingCost(value);
  };

  render() {
    return (
      <div className="shipping-section">
        <div className="shipping-section__title checkout-page__title">
          <span>01</span>
          <span>Shipping</span>
        </div>
        <div className="shipping-section__all-shipping-carriers checkout-page__grid">
          <div className="shipping-section__dhl-parcel-service checkout-page__input-container">
            <div className="radio-and-carrier-info">
              <input
                type="radio"
                name="shipping"
                value={19.97}
                id="dhl"
                checked={this.props.shippingCost === 19.97}
                onChange={this.handleShippingCostChange}
              />
              <div className="shipping-section__carrier-info">
                <label htmlFor="dhl">DHL Parcel Service</label>
                <label htmlFor="dhl">Express delivery in 48 hours.</label>
              </div>
            </div>
            <p className="shipping-cost">$19.97</p>
          </div>
          <div className="shipping-section__fedex-shipping checkout-page__input-container">
            <div className="radio-and-carrier-info">
              <input
                type="radio"
                name="shipping"
                value={3.97}
                id="fedex"
                checked={this.props.shippingCost === 3.97}
                onChange={this.handleShippingCostChange}
              />
              <div className="shipping-section__carrier-info">
                <label htmlFor="fedex">Fedex Shipping</label>
                <label htmlFor="fedex">Delivery in 2-4 weeks.</label>
              </div>
            </div>
            <p className="shipping-cost">$3.97</p>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ shipping }) => ({
  shippingCost: shipping.cost
});

export default connect(
  mapStateToProps,
  { fetchShippingCost }
)(ShippingSection);
