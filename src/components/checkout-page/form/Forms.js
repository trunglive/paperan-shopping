import React from "react";

import ShippingSection from "./ShippingSection";
import AddressSection from "./AddressSection";
import PaymentSection from "./PaymentSection";

const Forms = ({ cartState }) => (
  <form
    className={`checkout-page__left-section ${cartState && "show-opacity"}`}
  >
    <ShippingSection />
    <AddressSection />
    <PaymentSection />
  </form>
);

export default Forms;
