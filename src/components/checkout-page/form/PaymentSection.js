import React from "react";

const PaymentSection = () => (
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
        required
      />
      <input
        type="number"
        placeholder="Card number"
        className="card-number checkout-page__input-container"
        required
      />
      <input
        type="text"
        placeholder="Valid through"
        className="valid-through checkout-page__input-container"
        required
      />
      <input
        type="number"
        placeholder="CVC code"
        className="cvc-code checkout-page__input-container"
        required
      />
      <div className="purchase product-details__add-to-cart-container--button checkout-menu__subtotal-section--continue-to-checkout-button">
        Purchase
      </div>
    </div>
  </div>
);

export default PaymentSection;
