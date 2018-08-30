import React, { Component } from "react";
import ShippingSection from "./ShippingSection";
import AddressSection from "./AddressSection";
import PaymentSection from "./PaymentSection";

class Forms extends Component {
  render() {
    return (
      <form className="checkout-page__left-section">
        <ShippingSection />
        <AddressSection />
        <PaymentSection />
      </form>
    );
  }
}

export default Forms;
