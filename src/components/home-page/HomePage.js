import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import FeaturedProducts from "./FeaturedProducts";
import TrendingProducts from "./TrendingProducts";
import OnSaleProducts from "./OnSaleProducts";
import WithHomePage from "./WithHomePage";
import WayPoint from "react-waypoint";
import { handleWaypoint } from "../../actions/waypointActions";
import { displayCurrentRoute } from "../../actions/routingActions";

class HomePage extends Component {
  componentDidMount() {
    this.props.displayCurrentRoute(this.props.match.path);
  }

  render() {
    const { allItems } = this.props;

    return (
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

        <WayPoint
          topOffset={"50%"}
          onEnter={() => this.props.handleWaypoint({ section: "01" })}
        >
          <div>
            <FeaturedProducts allItems={allItems} />
          </div>
        </WayPoint>

        <WayPoint
          topOffset={"50%"}
          onEnter={() => this.props.handleWaypoint({ section: "02" })}
        >
          <div>
            <TrendingProducts allItems={allItems} />
          </div>
        </WayPoint>

        <WayPoint
          topOffset={"50%"}
          onEnter={() => this.props.handleWaypoint({ section: "03" })}
        >
          <div>
            <OnSaleProducts allItems={allItems} />
          </div>
        </WayPoint>
      </div>
    );
  }
}

export default connect(null, { handleWaypoint, displayCurrentRoute })(
  WithHomePage(HomePage)
);
