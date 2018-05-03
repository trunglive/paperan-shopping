import React from "react";
import { Link } from "react-router-dom";
import FeaturedProducts from "./FeaturedProducts";
import NewArrivalsProducts from "./NewArrivalsProducts";
import OnSaleProducts from "./OnSaleProducts";
import WithHomePage from "./WithHomePage";

const HomePage = ({ allItems }) => (
  <div>
    <div className="homepage-header">
      <div className="slogan">
        <p>Makes everything</p>
        <p>noteworthy.</p>
      </div>

      <Link
        to="/collection/all"
        className="discover-collection button button--outline"
        style={{ textDecoration: "none", color: "inherit" }}
      >
        Discover collection
      </Link>
    </div>

    <FeaturedProducts allItems={allItems} />
    <NewArrivalsProducts allItems={allItems} />
    <OnSaleProducts allItems={allItems} />
  </div>
);

export default WithHomePage(HomePage);
