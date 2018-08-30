import React from "react";

const AddressSection = () => (
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
        required
      />
      <input
        type="text"
        placeholder="Last name"
        className="last-name checkout-page__input-container"
        required
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
        required
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
        required
      />
      <input
        type="text"
        placeholder="Address"
        className="address checkout-page__input-container"
        required
      />
      <input
        type="text"
        placeholder="City"
        className="city checkout-page__input-container"
        required
      />
      <input
        type="text"
        placeholder="Country"
        className="country checkout-page__input-container"
        required
      />
    </div>
  </div>
);

export default AddressSection;
