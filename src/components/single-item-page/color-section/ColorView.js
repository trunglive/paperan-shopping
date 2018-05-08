import React, { Component } from "react";

import WithColor from "./WithColor";
import { convertColorName } from "../../../utils/paperColors";

class ColorView extends Component {
  render() {
    const { allColors, colorChange } = this.props;

    return (
      <WithColor
        render={(selectedColor, handlePaperColor) => (
          <div className="product-details__color-container">
            <p>Color</p>
            <div className="product-details__color-list">
              {allColors.map(singleColor => (
                <div
                  style={{
                    border:
                      selectedColor === singleColor
                        ? `1px solid ${convertColorName(selectedColor)}`
                        : "1px solid #fff"
                  }}
                  key={singleColor}
                >
                  <div
                    style={{ backgroundColor: convertColorName(singleColor) }}
                    className="square-color"
                    onClick={() => (
                      handlePaperColor(singleColor), colorChange(singleColor)
                    )}
                  />
                </div>
              ))}
            </div>
          </div>
        )}
      />
    );
  }
}

export default ColorView;
