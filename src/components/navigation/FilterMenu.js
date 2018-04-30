import React, { Component } from "react";

class FilterMenu extends Component {
  state = {};

  render() {
    const { onCloseFilter } = this.props;

    return (
      <div className="filter-container">
        <img
          className="close-menu-icon close-filter-icon"
          src="/icons/close-white.svg"
          onClick={this.onCloseFilter}
        />
        <div className="filter-all">
          <div className="filter__by-type filter-child">
            <p>Type</p>

            <div className="type-checkbox checkbox">
              <div className="checkbox-item-container">
                <div className="type-checkbox__notebook checkbox-item">
                  <input type="checkbox" id="notebook" />
                  <label htmlFor="notebook" />
                </div>
                <label htmlFor="notebook" class="label-text">
                  Notebooks
                </label>
              </div>

              <div className="checkbox-item-container">
                <div className="type-checkbox__notepad checkbox-item">
                  <input type="checkbox" id="notepad" />
                  <label htmlFor="notepad" />
                </div>
                <label htmlFor="notepad" class="label-text">
                  Notepads
                </label>
              </div>

              <div className="checkbox-item-container">
                <div className="type-checkbox__sketchbook checkbox-item">
                  <input type="checkbox" id="sketchbook" />
                  <label htmlFor="sketchbook" />
                </div>
                <label htmlFor="sketchbook" class="label-text">
                  Sketchbooks
                </label>
              </div>

              <div className="checkbox-item-container">
                <div className="type-checkbox__journal checkbox-item">
                  <input type="checkbox" id="journal" />
                  <label htmlFor="journal" />
                </div>
                <label htmlFor="journal" class="label-text">
                  Journals
                </label>
              </div>
            </div>
          </div>

          <div className="filter__by-price filter-child">
            <p>Price</p>

            <div className="price-checkbox checkbox">
              <div className="checkbox-item-container">
                <div className="price-checkbox__less-than-ten checkbox-item">
                  <input type="checkbox" id="less-than-ten" />
                  <label htmlFor="less-than-ten" />
                </div>
                <label htmlFor="less-than-ten" class="label-text">
                  Less than 10
                </label>
              </div>

              <div className="checkbox-item-container">
                <div className="price-checkbox__between-ten-and-thirty checkbox-item">
                  <input type="checkbox" id="between-ten-and-thirty" />
                  <label htmlFor="between-ten-and-thirty" />
                </div>
                <label htmlFor="between-ten-and-thirty" class="label-text">
                  {" "}
                  10 to 30
                </label>
              </div>

              <div className="checkbox-item-container">
                <div className="price-checkbox__between-thirty-and-fifty checkbox-item">
                  <input type="checkbox" id="between-thirty-and-fifty" />
                  <label htmlFor="between-thirty-and-fifty" />
                </div>
                <label htmlFor="between-thirty-and-fifty" class="label-text">
                  30 to 50
                </label>
              </div>

              <div className="checkbox-item-container">
                <div className="price-checkbox__more-than-fifty checkbox-item">
                  <input type="checkbox" id="more-than-fifty" />
                  <label htmlFor="more-than-fifty" />
                </div>
                <label htmlFor="more-than-fifty" class="label-text">
                  More than 50
                </label>
              </div>
            </div>
          </div>

          <div className="filter__by-color filter-child">
            <p>Color</p>

            <div className="color-checkbox checkbox">
              <div className="checkbox-item-container">
                <div className="color-checkbox__black checkbox-item">
                  <input type="checkbox" id="black" />
                  <label htmlFor="black" />
                </div>
                <label htmlFor="black" class="label-text">
                  Black
                </label>
              </div>
              <div className="checkbox-item-container">
                <div className="color-checkbox__grey checkbox-item">
                  <input type="checkbox" id="grey" />
                  <label htmlFor="grey" />
                </div>
                <label htmlFor="grey" class="label-text">
                  Grey
                </label>
              </div>
              <div className="checkbox-item-container">
                <div className="color-checkbox__blue checkbox-item">
                  <input type="checkbox" id="blue" />
                  <label htmlFor="blue" />
                </div>
                <label htmlFor="blue" class="label-text">
                  Blue
                </label>
              </div>
              <div className="checkbox-item-container">
                <div className="color-checkbox__green checkbox-item">
                  <input type="checkbox" id="green" />
                  <label htmlFor="green" />
                </div>
                <label htmlFor="green" class="label-text">
                  Green
                </label>
              </div>
              <div className="checkbox-item-container">
                <div className="color-checkbox__purple checkbox-item">
                  <input type="checkbox" id="purple" />
                  <label htmlFor="purple" />
                </div>
                <label htmlFor="purple" class="label-text">
                  Purple
                </label>
              </div>
              <div className="checkbox-item-container">
                <div className="color-checkbox__pink checkbox-item">
                  <input type="checkbox" id="pink" />
                  <label htmlFor="pink" />
                </div>
                <label htmlFor="pink" class="label-text">
                  Pink
                </label>
              </div>
            </div>
          </div>

          <div className="filter__by-sheet-style filter-child">
            <p>Sheet Style</p>

            <div className="sheet-style-checkbox checkbox">
              <div className="checkbox-item-container">
                <div className="sheet-style-checkbox__dotted-grid checkbox-item">
                  <input type="checkbox" id="dotted-grid" />
                  <label htmlFor="dotted-grid" />
                </div>
                <label htmlFor="dotted-grid" class="label-text">
                  Dotted grid
                </label>
              </div>

              <div className="checkbox-item-container">
                <div className="sheet-style-checkbox__lined checkbox-item">
                  <input type="checkbox" id="lined" />
                  <label htmlFor="lined" />
                </div>
                <label htmlFor="lined" class="label-text">
                  Lined
                </label>
              </div>

              <div className="checkbox-item-container">
                <div className="sheet-style-checkbox__sketch checkbox-item">
                  <input type="checkbox" id="sketch" />
                  <label htmlFor="sketch" />
                </div>
                <label htmlFor="sketch" class="label-text">
                  Sketch
                </label>
              </div>
              <div className="checkbox-item-container">
                <div className="sheet-style-checkbox__plain checkbox-item">
                  <input type="checkbox" id="plain" />
                  <label htmlFor="plain" />
                </div>
                <label htmlFor="plain" class="label-text">
                  Plain
                </label>
              </div>

              <div className="checkbox-item-container">
                <div className="sheet-style-checkbox__graph checkbox-item">
                  <input type="checkbox" id="graph" />
                  <label htmlFor="graph" />
                </div>
                <label htmlFor="graph" class="label-text">
                  Graph
                </label>
              </div>
            </div>
          </div>

          <div className="filter__by-cover-material filter-child">
            <p>Cover Material</p>

            <div className="cover-material-checkbox checkbox">
              <div className="checkbox-item-container">
                <div className="cover-material-checkbox__paper checkbox-item">
                  <input type="checkbox" id="paper" />
                  <label htmlFor="paper" />
                </div>
                <label htmlFor="paper" class="label-text">
                  Paper
                </label>
              </div>

              <div className="checkbox-item-container">
                <div className="cover-material-checkbox__hard-cardboard checkbox-item">
                  <input type="checkbox" id="hard-cardboard" />
                  <label htmlFor="hard-cardboard" />
                </div>
                <label htmlFor="hard-cardboard" class="label-text">
                  Hard cardboard
                </label>
              </div>

              <div className="checkbox-item-container">
                <div className="cover-material-checkbox__cardstock checkbox-item">
                  <input type="checkbox" id="cardstock" />
                  <label htmlFor="cardstock" />
                </div>
                <label htmlFor="cardstock" class="label-text">
                  Cardstock
                </label>
              </div>

              <div className="checkbox-item-container">
                <div className="cover-material-checkbox__premium-plastic checkbox-item">
                  <input type="checkbox" id="premium-plastic" />
                  <label htmlFor="premium-plastic" />
                </div>
                <label htmlFor="premium-plastic" class="label-text">
                  Premium plastic
                </label>
              </div>

              <div className="checkbox-item-container">
                <div className="cover-material-checkbox__luxurious- checkbox-item">
                  <input type="checkbox" id="luxurious-leatherette" />
                  <label htmlFor="luxurious-leatherette" />
                </div>
                <label htmlFor="luxurious-leatherette" class="label-text">
                  Luxurious leatherette
                </label>
              </div>
            </div>
          </div>

          <div className="filter__by-audience filter-child">
            <p>Audience</p>

            <div className="audience-checkbox checkbox">
              <div className="checkbox-item-container">
                <div className="audience-checkbox__photographer checkbox-item">
                  <input type="checkbox" id="photographer" />
                  <label htmlFor="photographer" />
                </div>
                <label htmlFor="photographer" class="label-text">
                  Photographers
                </label>
              </div>

              <div className="checkbox-item-container">
                <div className="audience-checkbox__designer checkbox-item">
                  <input type="checkbox" id="designer" />
                  <label htmlFor="designer" />
                </div>
                <label htmlFor="designer" class="label-text">
                  Designers
                </label>
              </div>

              <div className="checkbox-item-container">
                <div className="audience-checkbox__artist checkbox-item">
                  <input type="checkbox" id="artist" />
                  <label htmlFor="artist" />
                </div>
                <label htmlFor="artist" class="label-text">
                  Artists
                </label>
              </div>

              <div className="checkbox-item-container">
                <div className="audience-checkbox__student checkbox-item">
                  <input type="checkbox" id="student" />
                  <label htmlFor="student" />
                </div>
                <label htmlFor="student" class="label-text">
                  Students
                </label>
              </div>

              <div className="checkbox-item-container">
                <div className="audience-checkbox__creative-pro checkbox-item">
                  <input type="checkbox" id="creative-pro" />
                  <label htmlFor="creative-pro" />
                </div>
                <label htmlFor="creative-pro" class="label-text">
                  Creative pros
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FilterMenu;
