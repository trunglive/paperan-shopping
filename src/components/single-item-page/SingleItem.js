import React, { Component } from "react";
import WithHomepage from "../home/WithHomepage";
import { single } from "rxjs/operators";
import { capitalizeFirstLetter } from "../../utils/capitalizeFirstLetter";
import { convertColorName } from "../../utils/paperColors";

class SingleItem extends Component {
  state = {
    selectedPaperSize: "",
    selectedColor: "",
    isDetailSelected: false
  };

  handlePaperSize = size => {
    this.setState({
      selectedPaperSize: size
    });
  };

  handlePaperColor = color => {
    this.setState({
      selectedColor: color
    });
  };

  handleDetailsToggle = () => {
    this.setState({
      isDetailSelected: !this.state.isDetailSelected
    });
  };

  render() {
    const item = this.props.allItems.find(
      item => item.guid === this.props.match.params.id
    );

    const {
      guid,
      target_audience,
      photo_url,
      name,
      type,
      price,
      color,
      size,
      in_stock,
      details
    } = item;

    const { selectedPaperSize, selectedColor, isDetailSelected } = this.state;

    return (
      <div className="single-product">
        <div className="photo-display">
          <img src={photo_url} alt={`${name} ${type} for ${target_audience}`} />
        </div>
        <div className="product-details">
          <div className="product-details__path">
            <span>
              {capitalizeFirstLetter(type)}
              <span className="long-dash">&mdash;</span>For {target_audience}
            </span>
          </div>
          <div className="product-details__name">
            {capitalizeFirstLetter(name)}
          </div>
          <div className="product-details__price">
            <span>$ {price}</span>
            <span>incl. VAT</span>
          </div>
          <div className="product-details__color-container">
            <p>Color</p>
            <div className="product-details__color-list">
              {color.map(singleColor => (
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
                    onClick={() => this.handlePaperColor(singleColor)}
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="product-details__size-container">
            <p>Size</p>
            <div className="product-details__size-list">
              {size.map(singleSize => (
                <div
                  className={
                    selectedPaperSize === singleSize
                      ? "paper-size-select"
                      : "false"
                  }
                  onClick={() => this.handlePaperSize(singleSize)}
                  key={singleSize}
                >
                  {singleSize}
                </div>
              ))}
            </div>
          </div>
          <div className="product-details__availability-container">
            <p>Availability</p>
            {in_stock >= 10 && (
              <div className="ten-plus-stock">10+ pcs available in stock</div>
            )}
            {in_stock < 10 &&
              in_stock > 0 && (
                <div className="low-stock">This item is in limited stock</div>
              )}
            {in_stock === 0 && (
              <div className="out-of-stock">
                Out of stock. Please check back later.
              </div>
            )}
          </div>
          <div className="product-details__add-to-cart-container">
            <p>Quantity</p>
            <p>select box</p>
            <div className="product-details__add-to-cart-container--button">
              add to cart
            </div>
          </div>

          <div className="product-details__details-toggle">
            <p onClick={this.handleDetailsToggle}>
              {isDetailSelected ? "Hide details" : "Show more details"}
            </p>
            <div className="detail-text-toggle">
              {isDetailSelected ? details : null}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default WithHomepage(SingleItem);
