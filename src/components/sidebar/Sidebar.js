import React, { Component } from "react";
import { Link } from "react-router-dom";
import FilterMenu from "./FilterMenu";
import Filter from "react-modal";

export default class Sidebar extends Component {
  state = {
    isFilterOpen: false
  };

  componentWillMount() {
    Filter.setAppElement("body");
  }

  handleOpenFilter = () => {
    this.setState({ isFilterOpen: true });
  };

  handleCloseFilter = () => {
    this.setState({ isFilterOpen: false });
  };

  render() {
    const { isFilterOpen } = this.state;

    return (
      <div className="sidebar">
        <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
          <p className="sidebar__logo">P.</p>
        </Link>
        <img
          className="sidebar__setting-icon"
          src="/icons/setting.svg"
          onClick={this.handleOpenFilter}
        />
        <img className="sidebar__question-icon" src="/icons/question.svg" />
        <Filter
          isOpen={isFilterOpen}
          onRequestClose={this.handleCloseFilter}
          style={filterStyles}
          closeTimeoutMS={200}
          className="filter-container"
          contentLabel="Filter for Paperan"
        >
          <FilterMenu onCloseFilter={this.handleCloseFilter} />
        </Filter>
      </div>
    );
  }
}

const filterStyles = {
  overlay: {
    backgroundColor: "rgb(8, 8, 8, 0.3)"
  }
};
