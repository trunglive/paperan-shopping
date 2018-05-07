import React from "react";
import { renderProducts } from "./DisplayProducts";

const OnSaleProducts = ({ allItems }) => (
  <div className="homepage-on-sale small-grid">
    <p>Sale</p>
    <div className="small-grid__photos">
      {renderProducts(allItems, "is_on_sale")}
    </div>
  </div>
);

export default OnSaleProducts;
