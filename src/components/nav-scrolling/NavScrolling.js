import React, { Component } from "react";
import { connect } from "react-redux";

class NavScrolling extends Component {
  render() {
    return (
      <div className="nav-info">
        <div className="nav-info-main">
          <img className="arrow-up" src="/icons/arrow-up.svg" />
          <div className="section-index">
            <span className="section-index--start">{this.props.waypoint}</span>
            <span className="section-index--splash">/</span>
            <span className="section-index--end">03</span>
          </div>
          <img className="arrow-down" src="/icons/arrow-up.svg" />
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ waypoint }) => ({
  waypoint: waypoint.section
});

export default connect(mapStateToProps)(NavScrolling);
