import React from "react";
import { renderProducts } from "../../utils/renderProducts";

const FeaturedProducts = ({ allItems }) => (
  <div className="homepage-featured">
    {renderProducts(allItems, "is_featured")}
  </div>
);

export default FeaturedProducts;