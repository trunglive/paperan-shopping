import React from "react";
import { connect } from "react-redux";

import { displayCurrentFilter } from "../../utils/displayCurrentFilter";

const FilterNavScrolling = ({ filterBy }) => (
  <div className="nav-info">
    <div className="filter-info-main">
      <div className="section-index filter-nav-scrolling">
        <img className="filter-three-dots-icon" src="/icons/three-dots.svg" />
        <span className="filter-text">filter</span>
        <span className="filter-by">{displayCurrentFilter(filterBy)}</span>
      </div>
    </div>
  </div>
);

const mapStateToProps = ({ filterBy }) => ({
  filterBy
});

export default connect(mapStateToProps)(FilterNavScrolling);
