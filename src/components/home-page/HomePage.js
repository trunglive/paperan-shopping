import React from "react";
import { Link } from "react-router-dom";
import FeaturedProducts from "./FeaturedProducts";
import TrendingProducts from "./TrendingProducts";
import OnSaleProducts from "./OnSaleProducts";
import WithHomePage from "./WithHomePage";
import WithCurrentRoute from "../change-route/WithCurrentRoute";

const HomePage = ({ allItems }) => (
  <WithCurrentRoute
    render={() => (
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
        <TrendingProducts allItems={allItems} />
        <OnSaleProducts allItems={allItems} />
      </div>
    )}
  />
);

export default WithHomePage(HomePage);
