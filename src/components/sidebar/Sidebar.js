import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import FilterMenu from "./FilterMenu";
import Filter from "react-modal";
import AboutUsMenu from "./AboutUsMenu";
import AboutUs from "react-modal";

class Sidebar extends Component {
  state = {
    isFilterOpen: false,
    isAboutUsOpen: false
  };

  componentWillMount() {
    Filter.setAppElement("body");
  }

  handleOpenFilter = () => {
    this.setState({ isFilterOpen: true, isAboutUsOpen: false });
  };

  handleCloseFilter = () => {
    this.setState({ isFilterOpen: false });
  };

  handleOpenAboutUs = () => {
    this.setState({
      isAboutUsOpen: true,
      isFilterOpen: false
    });
  };

  handleCloseAboutUs = () => {
    this.setState({
      isAboutUsOpen: false
    });
  };

  render() {
    const { isFilterOpen, isAboutUsOpen } = this.state;

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

        <img
          className="sidebar__question-icon"
          src="/icons/question.svg"
          onClick={this.handleOpenAboutUs}
        />
        <AboutUs
          isOpen={isAboutUsOpen}
          onRequestClose={this.handleCloseAboutUs}
          style={aboutUsStyles}
          closeTimeoutMS={200}
          className="about-us-container"
          contentLabel="About Us for Paperan"
        >
          <AboutUsMenu onCloseAboutUs={this.handleCloseAboutUs} />
        </AboutUs>
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

const aboutUsStyles = {
  overlay: {
    backgroundColor: "rgb(8, 8, 8, 0.3)"
  }
};
