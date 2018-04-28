import React, { Component } from "react";
import WithHomepage from "../home/WithHomepage";
import { single } from "rxjs/operators";
import { capitalizeFirstLetter } from "../../utils/capitalizeFirstLetter";
import { convertColorName } from "../../utils/paperColors";

class SingleItem extends Component {
  state = {
    selectedColor: "",
    selectedPaperSize: "",
    quantity: 0,
    overQuantityClick: false,
    isDetailSelected: false
  };

  handlePaperColor = color => {
    this.setState({
      selectedColor: color
    });
  };

  handlePaperSize = size => {
    this.setState({
      selectedPaperSize: size
    });
  };

  handleQuantityIncrement = inStock => {
    this.setState(state => {
      if (state.quantity >= inStock) {
        return { overQuantityClick: true };
      }
      return { quantity: state.quantity + 1 };
    });
  };

  handleQuantityDecrement = inStock => {
    this.setState(state => {
      if (state.quantity === 0) return;
      return { quantity: state.quantity - 1, overQuantityClick: false };
    });
  };

  handleDetailsToggle = () => {
    this.setState({
      isDetailSelected: !this.state.isDetailSelected
    });
  };

  render() {
    const itemSelected = this.props.allItems.find(
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
    } = itemSelected;

    const {
      selectedColor,
      selectedPaperSize,
      quantity,
      overQuantityClick,
      isDetailSelected
    } = this.state;

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
            <div className="numeric-input">
              <p className="quantity-input">{quantity} pcs</p>
              <div>
                <div className="plus-container">
                  <img
                    className="plus-icon"
                    src="/icons/plus.svg"
                    onClick={() => this.handleQuantityIncrement(in_stock)}
                  />
                </div>
                <div className="minus-container">
                  <img
                    className="minus-icon"
                    src="/icons/minus.svg"
                    onClick={() => this.handleQuantityDecrement(in_stock)}
                  />
                </div>
              </div>
            </div>
            <div className="product-details__add-to-cart-container--button">
              add to cart
            </div>
          </div>
          {overQuantityClick && (
            <p className="stock-alert">
              This is the maximum quantity available
            </p>
          )}
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
