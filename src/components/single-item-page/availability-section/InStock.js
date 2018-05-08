import React from "react";

const InStock = ({ inStock }) => (
  <div className="product-details__availability-container">
    <p>Availability</p>
    {inStock >= 10 && (
      <div className="ten-plus-stock">10+ pcs available in stock</div>
    )}
    {inStock < 10 &&
      inStock > 0 && (
        <div className="low-stock">This item is in limited stock</div>
      )}
    {inStock === 0 && (
      <div className="out-of-stock">Out of stock. Please check back later.</div>
    )}
  </div>
);

export default InStock;
