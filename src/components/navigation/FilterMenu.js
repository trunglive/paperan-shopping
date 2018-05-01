import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../actions/filteringActions";

class FilterMenu extends Component {
  // state = {
  //   type: "",
  //   price: "",
  //   color: "",
  //   sheetStyle: "",
  //   coverMaterial: "",
  //   audience: ""
  // };

  handleCheckBox = event => {
    const { name, value, checked } = event.target;

    if (checked) {
      this.props.filterByCategory(name, value);
    }
  };

  render() {
    const { onCloseFilter } = this.props;
    console.log(this.state);

    return (
      <div className="filter-container">
        <img
          className="close-menu-icon close-filter-icon"
          src="/icons/close-white.svg"
          onClick={onCloseFilter}
        />
        <div className="filter-all">
          <div className="filter__by-type filter-child">
            <p>Type</p>

            <div className="type-checkbox checkbox">
              <div className="checkbox-item-container">
                <div className="type-checkbox__notebook checkbox-item">
                  <input
                    type="checkbox"
                    id="notebook"
                    name="type"
                    value="notebook"
                    onChange={this.handleCheckBox}
                  />
                  <label htmlFor="notebook" />
                </div>
                <label htmlFor="notebook" className="label-text">
                  Notebooks
                </label>
              </div>

              <div className="checkbox-item-container">
                <div className="type-checkbox__notepad checkbox-item">
                  <input
                    type="checkbox"
                    id="notepad"
                    name="type"
                    value="notepad"
                    onClick={this.handleCheckBox}
                  />
                  <label htmlFor="notepad" />
                </div>
                <label htmlFor="notepad" className="label-text">
                  Notepads
                </label>
              </div>

              <div className="checkbox-item-container">
                <div className="type-checkbox__sketchbook checkbox-item">
                  <input
                    type="checkbox"
                    id="sketchbook"
                    name="type"
                    value="sketchbook"
                    onClick={this.handleCheckBox}
                  />
                  <label htmlFor="sketchbook" />
                </div>
                <label htmlFor="sketchbook" className="label-text">
                  Sketchbooks
                </label>
              </div>

              <div className="checkbox-item-container">
                <div className="type-checkbox__journal checkbox-item">
                  <input
                    type="checkbox"
                    id="journal"
                    name="type"
                    value="journal"
                    onClick={this.handleCheckBox}
                  />
                  <label htmlFor="journal" />
                </div>
                <label htmlFor="journal" className="label-text">
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
                  <input
                    type="checkbox"
                    id="less-than-ten"
                    name="price"
                    value="less-than-ten"
                    onClick={this.handleCheckBox}
                  />
                  <label htmlFor="less-than-ten" />
                </div>
                <label htmlFor="less-than-ten" className="label-text">
                  Less than 10
                </label>
              </div>

              <div className="checkbox-item-container">
                <div className="price-checkbox__between-ten-and-thirty checkbox-item">
                  <input
                    type="checkbox"
                    id="between-ten-and-thirty"
                    name="price"
                    value="between-ten-and-thirty"
                    onClick={this.handleCheckBox}
                  />
                  <label htmlFor="between-ten-and-thirty" />
                </div>
                <label htmlFor="between-ten-and-thirty" className="label-text">
                  {" "}
                  10 to 30
                </label>
              </div>

              <div className="checkbox-item-container">
                <div className="price-checkbox__between-thirty-and-fifty checkbox-item">
                  <input
                    type="checkbox"
                    id="between-thirty-and-fifty"
                    name="price"
                    value="between-thirty-and-fifty"
                    onClick={this.handleCheckBox}
                  />
                  <label htmlFor="between-thirty-and-fifty" />
                </div>
                <label
                  htmlFor="between-thirty-and-fifty"
                  className="label-text"
                >
                  30 to 50
                </label>
              </div>

              <div className="checkbox-item-container">
                <div className="price-checkbox__more-than-fifty checkbox-item">
                  <input
                    type="checkbox"
                    id="more-than-fifty"
                    name="price"
                    value="more-than-fifty"
                    onClick={this.handleCheckBox}
                  />
                  <label htmlFor="more-than-fifty" />
                </div>
                <label htmlFor="more-than-fifty" className="label-text">
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
                  <input
                    type="checkbox"
                    id="black"
                    name="color"
                    value="black"
                    onClick={this.handleCheckBox}
                  />
                  <label htmlFor="black" />
                </div>
                <label htmlFor="black" className="label-text">
                  Black
                </label>
              </div>
              <div className="checkbox-item-container">
                <div className="color-checkbox__grey checkbox-item">
                  <input
                    type="checkbox"
                    id="grey"
                    name="color"
                    value="grey"
                    onClick={this.handleCheckBox}
                  />
                  <label htmlFor="grey" />
                </div>
                <label htmlFor="grey" className="label-text">
                  Grey
                </label>
              </div>
              <div className="checkbox-item-container">
                <div className="color-checkbox__blue checkbox-item">
                  <input
                    type="checkbox"
                    id="blue"
                    name="color"
                    value="blue"
                    onClick={this.handleCheckBox}
                  />
                  <label htmlFor="blue" />
                </div>
                <label htmlFor="blue" className="label-text">
                  Blue
                </label>
              </div>
              <div className="checkbox-item-container">
                <div className="color-checkbox__green checkbox-item">
                  <input
                    type="checkbox"
                    id="green"
                    name="color"
                    value="green"
                    onClick={this.handleCheckBox}
                  />
                  <label htmlFor="green" />
                </div>
                <label htmlFor="green" className="label-text">
                  Green
                </label>
              </div>
              <div className="checkbox-item-container">
                <div className="color-checkbox__purple checkbox-item">
                  <input
                    type="checkbox"
                    id="purple"
                    name="color"
                    value="purple"
                    onClick={this.handleCheckBox}
                  />
                  <label htmlFor="purple" />
                </div>
                <label htmlFor="purple" className="label-text">
                  Purple
                </label>
              </div>
              <div className="checkbox-item-container">
                <div className="color-checkbox__pink checkbox-item">
                  <input
                    type="checkbox"
                    id="pink"
                    name="color"
                    value="pink"
                    onClick={this.handleCheckBox}
                  />
                  <label htmlFor="pink" />
                </div>
                <label htmlFor="pink" className="label-text">
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
                  <input
                    type="checkbox"
                    id="dotted-grid"
                    name="sheetStyle"
                    value="dotted grid"
                    onClick={this.handleCheckBox}
                  />
                  <label htmlFor="dotted-grid" />
                </div>
                <label htmlFor="dotted-grid" className="label-text">
                  Dotted grid
                </label>
              </div>

              <div className="checkbox-item-container">
                <div className="sheet-style-checkbox__lined checkbox-item">
                  <input
                    type="checkbox"
                    id="lined"
                    name="sheetStyle"
                    value="lined"
                    onClick={this.handleCheckBox}
                  />
                  <label htmlFor="lined" />
                </div>
                <label htmlFor="lined" className="label-text">
                  Lined
                </label>
              </div>

              <div className="checkbox-item-container">
                <div className="sheet-style-checkbox__sketch checkbox-item">
                  <input
                    type="checkbox"
                    id="sketch"
                    name="sheetStyle"
                    value="sketch"
                    onClick={this.handleCheckBox}
                  />
                  <label htmlFor="sketch" />
                </div>
                <label htmlFor="sketch" className="label-text">
                  Sketch
                </label>
              </div>
              <div className="checkbox-item-container">
                <div className="sheet-style-checkbox__plain checkbox-item">
                  <input
                    type="checkbox"
                    id="plain"
                    name="sheetStyle"
                    value="plain"
                    onClick={this.handleCheckBox}
                  />
                  <label htmlFor="plain" />
                </div>
                <label htmlFor="plain" className="label-text">
                  Plain
                </label>
              </div>

              <div className="checkbox-item-container">
                <div className="sheet-style-checkbox__graph checkbox-item">
                  <input
                    type="checkbox"
                    id="graph"
                    name="sheetStyle"
                    value="graph"
                    onClick={this.handleCheckBox}
                  />
                  <label htmlFor="graph" />
                </div>
                <label htmlFor="graph" className="label-text">
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
                  <input
                    type="checkbox"
                    id="paper"
                    name="coverMaterial"
                    value="paper"
                    onClick={this.handleCheckBox}
                  />
                  <label htmlFor="paper" />
                </div>
                <label htmlFor="paper" className="label-text">
                  Paper
                </label>
              </div>

              <div className="checkbox-item-container">
                <div className="cover-material-checkbox__hard-cardboard checkbox-item">
                  <input
                    type="checkbox"
                    id="hard-cardboard"
                    name="coverMaterial"
                    value="hard cardboard"
                    onClick={this.handleCheckBox}
                  />
                  <label htmlFor="hard-cardboard" />
                </div>
                <label htmlFor="hard-cardboard" className="label-text">
                  Hard cardboard
                </label>
              </div>

              <div className="checkbox-item-container">
                <div className="cover-material-checkbox__cardstock checkbox-item">
                  <input
                    type="checkbox"
                    id="cardstock"
                    name="coverMaterial"
                    value="cardstock"
                    onClick={this.handleCheckBox}
                  />
                  <label htmlFor="cardstock" />
                </div>
                <label htmlFor="cardstock" className="label-text">
                  Cardstock
                </label>
              </div>

              <div className="checkbox-item-container">
                <div className="cover-material-checkbox__premium-plastic checkbox-item">
                  <input
                    type="checkbox"
                    id="premium-plastic"
                    name="coverMaterial"
                    value="premium plastic"
                    onClick={this.handleCheckBox}
                  />
                  <label htmlFor="premium-plastic" />
                </div>
                <label htmlFor="premium-plastic" className="label-text">
                  Premium plastic
                </label>
              </div>

              <div className="checkbox-item-container">
                <div className="cover-material-checkbox__luxurious- checkbox-item">
                  <input
                    type="checkbox"
                    id="luxurious-leatherette"
                    name="coverMaterial"
                    value="luxurious leatherette"
                    onClick={this.handleCheckBox}
                  />
                  <label htmlFor="luxurious-leatherette" />
                </div>
                <label htmlFor="luxurious-leatherette" className="label-text">
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
                  <input
                    type="checkbox"
                    id="photographer"
                    name="audience"
                    value="photographers"
                    onClick={this.handleCheckBox}
                  />
                  <label htmlFor="photographer" />
                </div>
                <label htmlFor="photographer" className="label-text">
                  Photographers
                </label>
              </div>

              <div className="checkbox-item-container">
                <div className="audience-checkbox__designer checkbox-item">
                  <input
                    type="checkbox"
                    id="designer"
                    name="audience"
                    value="designers"
                    onClick={this.handleCheckBox}
                  />
                  <label htmlFor="designer" />
                </div>
                <label htmlFor="designer" className="label-text">
                  Designers
                </label>
              </div>

              <div className="checkbox-item-container">
                <div className="audience-checkbox__artist checkbox-item">
                  <input
                    type="checkbox"
                    id="artist"
                    name="audience"
                    value="artists"
                    onClick={this.handleCheckBox}
                  />
                  <label htmlFor="artist" />
                </div>
                <label htmlFor="artist" className="label-text">
                  Artists
                </label>
              </div>

              <div className="checkbox-item-container">
                <div className="audience-checkbox__student checkbox-item">
                  <input
                    type="checkbox"
                    id="student"
                    name="audience"
                    value="students"
                    onClick={this.handleCheckBox}
                  />
                  <label htmlFor="student" />
                </div>
                <label htmlFor="student" className="label-text">
                  Students
                </label>
              </div>

              <div className="checkbox-item-container">
                <div className="audience-checkbox__creative-pro checkbox-item">
                  <input
                    type="checkbox"
                    id="creative-pro"
                    name="audience"
                    value="creative pros"
                    onClick={this.handleCheckBox}
                  />
                  <label htmlFor="creative-pro" />
                </div>
                <label htmlFor="creative-pro" className="label-text">
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

export default connect(null, actions)(FilterMenu);
