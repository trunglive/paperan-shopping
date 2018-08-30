import React, { Component } from "react";
import { connect } from "react-redux";

import Cart from "./Cart";
import { displayCurrentRoute } from "../../actions/routingActions";

class CheckoutPage extends Component {
  componentDidMount() {
    this.props.displayCurrentRoute(this.props.match.path);
  }

  render() {
    return (
      <div className="checkout-page">
        <form className="checkout-page__left-section">
          <div className="shipping-section">
            <div className="shipping-section__title checkout-page__title">
              <span>01</span>
              <span>Shipping</span>
            </div>
            <div className="shipping-section__all-shipping-carriers checkout-page__grid">
              <div className="shipping-section__dhl-parcel-service checkout-page__input-container">
                <div className="radio-and-carrier-info">
                  <input type="radio" name="shipping" />
                  <div className="shipping-section__carrier-info">
                    <label>DHL Parcel Service</label>
                    <label>Express delivery in 48 hours.</label>
                  </div>
                </div>
                <p className="shipping-cost">$19.99</p>
              </div>
              <div className="shipping-section__fedex-shipping checkout-page__input-container">
                <div className="radio-and-carrier-info">
                  <input type="radio" name="shipping" />
                  <div className="shipping-section__carrier-info">
                    <label>Fedex Shipping</label>
                    <label>Delivery in 2-4 weeks.</label>
                  </div>
                </div>
                <p className="shipping-cost">$4.99</p>
              </div>
            </div>
          </div>
          <div className="address-section">
            <div className="address-section__title checkout-page__title">
              <span>02</span>
              <span>Address</span>
            </div>
            <div className="address-section__all-fields-container checkout-page__grid">
              <input
                type="text"
                placeholder="First name"
                className="first-name checkout-page__input-container"
              />
              <input
                type="text"
                placeholder="Last name"
                className="last-name checkout-page__input-container"
              />
              <input
                type="text"
                placeholder="Company"
                className="company checkout-page__input-container"
              />
              <input
                type="email"
                placeholder="E-mail"
                className="email checkout-page__input-container"
              />
              <input
                type="tel"
                placeholder="Phone number"
                className="phone-number checkout-page__input-container"
              />
              <input
                type="text"
                placeholder="Zip code"
                className="zip-code checkout-page__input-container"
              />
              <input
                type="text"
                placeholder="Address"
                className="address checkout-page__input-container"
              />
              <input
                type="text"
                placeholder="City"
                className="city checkout-page__input-container"
              />
              <input
                type="text"
                placeholder="Country"
                className="country checkout-page__input-container"
              />
            </div>
          </div>
          <div className="payment-section">
            <div className="payment-section__title checkout-page__title">
              <span>03</span>
              <span>Payment</span>
            </div>
            <div className="payment-section__all-fields-container checkout-page__grid">
              <input
                type="text"
                placeholder="Name on card"
                className="name-on-card checkout-page__input-container"
              />
              <input
                type="number"
                placeholder="Card number"
                className="card-number checkout-page__input-container"
              />
              <input
                type="text"
                placeholder="Valid through"
                className="valid-through checkout-page__input-container"
              />
              <input
                type="number"
                placeholder="CVC code"
                className="cvc-code checkout-page__input-container"
              />
            </div>
          </div>
        </form>

        <Cart />
      </div>
    );
  }
}

export default connect(
  null,
  { displayCurrentRoute }
)(CheckoutPage);
