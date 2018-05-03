import React from "react";
import WithSize from "./WithSize";

const SizeView = ({ allSizes, sizeChange }) => (
  <WithSize
    render={(selectedPaperSize, handlePaperSize) => (
      <div className="product-details__size-container">
        <p>Size</p>
        <div className="product-details__size-list">
          {allSizes.map(singleSize => (
            <div
              className={
                selectedPaperSize === singleSize ? "paper-size-select" : "false"
              }
              onClick={() => (
                handlePaperSize(singleSize), sizeChange(singleSize)
              )}
              key={singleSize}
            >
              {singleSize}
            </div>
          ))}
        </div>
      </div>
    )}
  />
);

export default SizeView;
