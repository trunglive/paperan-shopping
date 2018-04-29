import React from "react";

const ItemSelected = () => (
  <div className="checkout-menu__items-section--items-container">
    <div className="item-display--left">
      <img src="/photos/journal/journal-1.jpg" />
      <div>
        <p className="item-name">Refresh & Reboot Grid Dot A5</p>
        <div className="item-size-and-color">
          <span>A5, </span>
          <span>Green</span>
        </div>

        <p className="item-quantity">Qty: 1</p>
      </div>
    </div>
    <div className="item-display--right">
      <p>$17.49</p>
      <p className="item-delete">Delete</p>
    </div>
  </div>
);

export default ItemSelected;
