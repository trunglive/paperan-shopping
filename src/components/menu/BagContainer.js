import React from "react";

const BagContainer = ({ handleCloseMenu }) => (
  <div className="checkout-menu__items-section--bag-container">
    <div className="bag-group">
      <img className="checkout-menu__bag-icon" src="/icons/cart.svg" />
      <span>Shopping bag</span>
    </div>
    <img
      className="close-menu-icon"
      src="/icons/close.svg"
      onClick={handleCloseMenu}
    />
  </div>
);

export default BagContainer;
