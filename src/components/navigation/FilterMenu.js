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
                  <label for="notebook" />
                </div>
                <label htmlFor="notebook" class="label-text">
                  Notebooks
                </label>
              </div>

              <div className="checkbox-item-container">
                <div className="type-checkbox__notepad checkbox-item">
                  <input type="checkbox" id="notepad" />
                  <label for="notepad" />
                </div>
                <label htmlFor="notepad" class="label-text">
                  Notepads
                </label>
              </div>

              <div className="checkbox-item-container">
                <div className="type-checkbox__sketchbook checkbox-item">
                  <input type="checkbox" id="sketchbook" />
                  <label for="sketchbook" />
                </div>
                <label htmlFor="sketchbook" class="label-text">
                  Sketchbooks
                </label>
              </div>

              <div className="checkbox-item-container">
                <div className="type-checkbox__journal checkbox-item">
                  <input type="checkbox" id="journal" />
                  <label for="journal" />
                </div>
                <label htmlFor="journal" class="label-text">
                  Journals
                </label>
              </div>
            </div>
          </div>

          {/* <div className="filter__by-price filter-child">
            <p>Price</p>

            <div className="price-checkbox checkbox">
              <div className="price-checkbox__less-than-ten checkbox-item">
                <input type="checkbox" id="less-than-ten" />
                <label htmlFor="less-than-ten">Less than 10</label>
              </div>
              <div className="price-checkbox__between-ten-and-thirty checkbox-item">
                <input type="checkbox" id="between-ten-and-thirty" />
                <label htmlFor="between-ten-and-thirty">10 to 30</label>
              </div>
              <div className="price-checkbox__between-thirty-and-fifty checkbox-item">
                <input type="checkbox" id="between-thirty-and-fifty" />
                <label htmlFor="between-thirty-and-fifty">30 to 50</label>
              </div>
              <div className="price-checkbox__more-than-fifty checkbox-item">
                <input type="checkbox" id="more-than-fifty" />
                <label htmlFor="more-than-fifty">More than 50</label>
              </div>
            </div>
          </div> */}

          {/* <div className="filter__by-color filter-child">
            <p>Color</p>

            <div className="color-checkbox checkbox">
              <div className="color-checkbox__black checkbox-item">
                <input type="checkbox" id="black" />
                <label htmlFor="black">Black</label>
              </div>
              <div className="color-checkbox__grey checkbox-item">
                <input type="checkbox" id="grey" />
                <label htmlFor="grey">Grey</label>
              </div>
              <div className="color-checkbox__blue checkbox-item">
                <input type="checkbox" id="blue" />
                <label htmlFor="blue">Blue</label>
              </div>
              <div className="color-checkbox__green checkbox-item">
                <input type="checkbox" id="green" />
                <label htmlFor="green">Green</label>
              </div>
              <div className="color-checkbox__purple checkbox-item">
                <input type="checkbox" id="purple" />
                <label htmlFor="purple">Purple</label>
              </div>
              <div className="color-checkbox__pink checkbox-item">
                <input type="checkbox" id="pink" />
                <label htmlFor="pink">Pink</label>
              </div>
            </div>
          </div> */}

          {/* <div className="filter__by-sheet-style filter-child">
            <p>Sheet Style</p>

            <div className="sheet-style-checkbox checkbox">
              <div className="sheet-style-checkbox__dotted-grid checkbox-item">
                <input type="checkbox" id="dotted-grid" />
                <label htmlFor="dotted-grid">Dotted grid</label>
              </div>
              <div className="sheet-style-checkbox__lined checkbox-item">
                <input type="checkbox" id="lined" />
                <label htmlFor="lined">Lined</label>
              </div>
              <div className="sheet-style-checkbox__sketch checkbox-item">
                <input type="checkbox" id="sketch" />
                <label htmlFor="sketch">Sketch</label>
              </div>
              <div className="sheet-style-checkbox__plain checkbox-item">
                <input type="checkbox" id="plain" />
                <label htmlFor="plain">Plain</label>
              </div>
              <div className="sheet-style-checkbox__graph checkbox-item">
                <input type="checkbox" id="graph" />
                <label htmlFor="graph">Graph</label>
              </div>
            </div>
          </div> */}

          {/* <div className="filter__by-cover-material filter-child">
            <p>Cover Material</p>

            <div className="cover-material-checkbox checkbox">
              <div className="cover-material-checkbox__paper checkbox-item">
                <input type="checkbox" id="paper" />
                <label htmlFor="paper">Paper</label>
              </div>
              <div className="cover-material-checkbox__hard-cardboard checkbox-item">
                <input type="checkbox" id="hard-cardboard" />
                <label htmlFor="hard-cardboard">Hard cardboard</label>
              </div>
              <div className="cover-material-checkbox__cardstock checkbox-item">
                <input type="checkbox" id="cardstock" />
                <label htmlFor="cardstock">Cardstock</label>
              </div>
              <div className="cover-material-checkbox__premium-plastic checkbox-item">
                <input type="checkbox" id="premium-plastic" />
                <label htmlFor="premium-plastic">Premium plastic</label>
              </div>
              <div className="cover-material-checkbox__luxurious- checkbox-item">
                <input type="checkbox" id="luxurious-leatherette" />
                <label htmlFor="luxurious-leatherette">
                  Luxurious leatherette
                </label>
              </div>
            </div>
          </div> */}

          {/* <div className="filter__by-audience filter-child">
            <p>Audience</p>

            <div className="audience-checkbox checkbox">
              <div className="audience-checkbox__photographer checkbox-item">
                <input type="checkbox" id="photographer" />
                <label htmlFor="photographer">Photographers</label>
              </div>
              <div className="audience-checkbox__designer checkbox-item">
                <input type="checkbox" id="designer" />
                <label htmlFor="designer">Designers</label>
              </div>
              <div className="audience-checkbox__artist checkbox-item">
                <input type="checkbox" id="artist" />
                <label htmlFor="artist">Artists</label>
              </div>
              <div className="audience-checkbox__student checkbox-item">
                <input type="checkbox" id="student" />
                <label htmlFor="student">Students</label>
              </div>
              <div className="audience-checkbox__creative-pro checkbox-item">
                <input type="checkbox" id="creative-pro" />
                <label htmlFor="creative-pro">Creative pros</label>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    );
  }
}

export default FilterMenu;
