import React, { Component } from "react";
import { Link } from "react-router-dom";
import Filter from "react-modal";

export default class Sidebar extends Component {
  state = {
    isFilterOpen: false
  };

  handleOpenFilter = () => {
    this.setState({ isFilterOpen: true });
  };

  handleCloseFilter = () => {
    this.setState({ isFilterOpen: false });
  };

  handleTest = () => {
    console.log("check box");
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
          className="filter-container"
          contentLabel="Filter for Paperan"
        >
          <div className="filter-container">
            <div className="filter__by-type">
              <p>Type</p>

              <div className="type-checkbox">
                <div className="type-checkbox__notebook">
                  <input type="checkbox" id="notebook" />
                  <label htmlFor="notebook">Notebooks</label>
                </div>
                <div className="type-checkbox__notepad">
                  <input type="checkbox" id="notepad" />
                  <label htmlFor="notepad">Notepads</label>
                </div>
                <div className="type-checkbox__sketchbook">
                  <input type="checkbox" id="sketchbook" />
                  <label htmlFor="sketchbook">Sketchbooks</label>
                </div>
                <div className="type-checkbox__journal">
                  <input type="checkbox" id="journal" />
                  <label htmlFor="journal">Journals</label>
                </div>
              </div>
            </div>

            <div className="filter__by-price">
              <p>Price</p>

              <div className="price-checkbox">
                <div className="price-checkbox__less-than-ten">
                  <input type="checkbox" id="less-than-ten" />
                  <label htmlFor="less-than-ten">Less than 10</label>
                </div>
                <div className="price-checkbox__between-ten-and-thirty">
                  <input type="checkbox" id="between-ten-and-thirty" />
                  <label htmlFor="between-ten-and-thirty">10 to 30</label>
                </div>
                <div className="price-checkbox__between-thirty-and-fifty">
                  <input type="checkbox" id="between-thirty-and-fifty" />
                  <label htmlFor="between-thirty-and-fifty">30 to 50</label>
                </div>
                <div className="price-checkbox__more-than-fifty">
                  <input type="checkbox" id="more-than-fifty" />
                  <label htmlFor="more-than-fifty">More than 50</label>
                </div>
              </div>
            </div>

            <div className="filter__by-color">
              <p>Color</p>

              <div className="color-checkbox">
                <div className="color-checkbox__black">
                  <input type="checkbox" id="black" />
                  <label htmlFor="black">Black</label>
                </div>
                <div className="color-checkbox__grey">
                  <input type="checkbox" id="grey" />
                  <label htmlFor="grey">Grey</label>
                </div>
                <div className="color-checkbox__blue">
                  <input type="checkbox" id="blue" />
                  <label htmlFor="blue">Blue</label>
                </div>
                <div className="color-checkbox__green">
                  <input type="checkbox" id="green" />
                  <label htmlFor="green">Green</label>
                </div>
                <div className="color-checkbox__purple">
                  <input type="checkbox" id="purple" />
                  <label htmlFor="purple">Purple</label>
                </div>
                <div className="color-checkbox__pink">
                  <input type="checkbox" id="pink" />
                  <label htmlFor="pink">Pink</label>
                </div>
              </div>
            </div>

            <div className="filter__by-sheet-style">
              <p>Sheet Style</p>

              <div className="sheet-style-checkbox">
                <div className="sheet-style-checkbox__dotted-grid">
                  <input type="checkbox" id="dotted-grid" />
                  <label htmlFor="dotted-grid">Dotted grid</label>
                </div>
                <div className="sheet-style-checkbox__lined">
                  <input type="checkbox" id="lined" />
                  <label htmlFor="lined">Lined</label>
                </div>
                <div className="sheet-style-checkbox__sketch">
                  <input type="checkbox" id="sketch" />
                  <label htmlFor="sketch">Sketch</label>
                </div>
                <div className="sheet-style-checkbox__plain">
                  <input type="checkbox" id="plain" />
                  <label htmlFor="plain">Plain</label>
                </div>
                <div className="sheet-style-checkbox__graph">
                  <input type="checkbox" id="graph" />
                  <label htmlFor="graph">Graph</label>
                </div>
              </div>
            </div>

            <div className="filter__by-cover-material">
              <p>Cover Material</p>

              <div className="cover-material-checkbox">
                <div className="cover-material-checkbox__paper">
                  <input type="checkbox" id="paper" />
                  <label htmlFor="paper">Paper</label>
                </div>
                <div className="cover-material-checkbox__hard-cardboard">
                  <input type="checkbox" id="hard-cardboard" />
                  <label htmlFor="hard-cardboard">Hard cardboard</label>
                </div>
                <div className="cover-material-checkbox__cardstock">
                  <input type="checkbox" id="cardstock" />
                  <label htmlFor="cardstock">Cardstock</label>
                </div>
                <div className="cover-material-checkbox__premium-plastic">
                  <input type="checkbox" id="premium-plastic" />
                  <label htmlFor="premium-plastic">Premium plastic</label>
                </div>
                <div className="cover-material-checkbox__luxurious-leatherette">
                  <input type="checkbox" id="luxurious-leatherette" />
                  <label htmlFor="luxurious-leatherette">
                    Luxurious leatherette
                  </label>
                </div>
              </div>
            </div>

            <div className="filter__by-audience">
              <p>Audience</p>

              <div className="audience-checkbox">
                <div className="audience-checkbox__photographer">
                  <input type="checkbox" id="photographer" />
                  <label htmlFor="photographer">Photographers</label>
                </div>
                <div className="audience-checkbox__designer">
                  <input type="checkbox" id="designer" />
                  <label htmlFor="designer">Designers</label>
                </div>
                <div className="audience-checkbox__artist">
                  <input type="checkbox" id="artist" />
                  <label htmlFor="artist">Artists</label>
                </div>
                <div className="audience-checkbox__student">
                  <input type="checkbox" id="student" />
                  <label htmlFor="student">Students</label>
                </div>
                <div className="audience-checkbox__creative-pro">
                  <input type="checkbox" id="creative-pro" />
                  <label htmlFor="creative-pro">Creative pros</label>
                </div>
              </div>
            </div>
          </div>
        </Filter>
      </div>
    );
  }
}

const filterStyles = {
  overlay: {
    backgroundColor: "rgba(54, 54, 54, 0.1)"
  }
};
