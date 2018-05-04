import React from "react";
import { renderProducts } from "./DisplayProducts";

const TrendingProducts = ({ allItems }) => (
  <div className="homepage-trending small-grid">
    <p>Trending</p>
    <div className="small-grid__photos">
      {renderProducts(allItems, "is_trending")}
    </div>
  </div>
);

export default TrendingProducts;
