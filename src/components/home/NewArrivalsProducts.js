import React from "react";
import { renderProducts } from "../../utils/renderProducts";

const NewArrivalsProducts = ({ allItems }) => (
  <div className="homepage-new-arrivals small-grid">
    <p>New Arrivals</p>
    <div className="small-grid__photos">
      {renderProducts(allItems, "is_new_arrival")}
    </div>
  </div>
);

export default NewArrivalsProducts;
