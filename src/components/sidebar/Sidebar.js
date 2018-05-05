import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import FilterMenu from "./FilterMenu";
import Filter from "react-modal";

class Sidebar extends Component {
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
        {(this.props.route.currentRoute === "/collection/all" ||
          this.props.route.currentRoute === "/collection/all/") && (
          <img
            className="sidebar__setting-icon"
            src="/icons/setting.svg"
            onClick={this.handleOpenFilter}
          />
        )}

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

const mapStateToProps = ({ route }) => ({
  route
});

export default connect(mapStateToProps, null)(Sidebar);

const filterStyles = {
  overlay: {
    backgroundColor: "rgb(8, 8, 8, 0.3)"
  }
};
