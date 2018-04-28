import React from "react";
import WithSize from "./WithSize";

const SizeView = ({ size, selectedPaperSize, handlePaperSize }) => (
  <div className="product-details__size-container">
    <p>Size</p>
    <div className="product-details__size-list">
      {size.map(singleSize => (
        <div
          className={
            selectedPaperSize === singleSize ? "paper-size-select" : "false"
          }
          onClick={() => handlePaperSize(singleSize)}
          key={singleSize}
        >
          {singleSize}
        </div>
      ))}
    </div>
  </div>
);

export default WithSize(SizeView);
