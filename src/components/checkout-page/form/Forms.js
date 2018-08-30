import React from "react";

import ShippingSection from "./ShippingSection";
import AddressSection from "./AddressSection";
import PaymentSection from "./PaymentSection";

const Forms = () => (
  <form className="checkout-page__left-section">
    <ShippingSection />
    <AddressSection />
    <PaymentSection />
  </form>
);

export default Forms;
