import React from "react";
import FeaturedProducts from "./FeaturedProducts";
import NewArrivalsProducts from "./NewArrivalsProducts";
import OnSaleProducts from "./OnSaleProducts";

const Homepage = ({ allItems }) => (
  <div className="homepage">
    <div className="homepage-header">
      <div className="slogan">
        <p>Makes everything</p>
        <p>noteworthy.</p>
      </div>
      <a className="discover-collection button button--outline">
        Discover collection
      </a>
    </div>

    <FeaturedProducts allItems={allItems} />
    <NewArrivalsProducts allItems={allItems} />
    <OnSaleProducts allItems={allItems} />
  </div>
);

export default Homepage;
