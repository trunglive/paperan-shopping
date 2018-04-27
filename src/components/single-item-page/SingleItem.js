import React, { Component } from "react";
import WithHomepage from "../home/WithHomepage";
import { single } from "rxjs/operators";
import { capitalizeFirstLetter } from "../../utils/capitalizeFirstLetter";

class SingleItem extends Component {
  state = {
    isPaperSizeSelect: false,
    isDetailSelect: false
  };

  handlePaperSizeSelect = () => {
    this.setState({
      isPaperSizeSelect: !this.state.isPaperSizeSelect
    });
  };

  handleDetailSelect = () => {
    this.setState({
      isDetailSelect: !this.state.isDetailSelect
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

    const { isPaperSizeSelect, isDetailSelect } = this.state;

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
                  className={`square ${singleColor}-square`}
                  key={singleColor}
                />
              ))}
            </div>
          </div>
          <div className="product-details__size-container">
            <p>Size</p>
            <div className="product-details__size-list">
              {size.map(singleSize => (
                <div
                  className={`${
                    isPaperSizeSelect ? "paper-size-select" : "false"
                  }`}
                  onClick={this.handlePaperSizeSelect}
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
            <p onClick={this.handleDetailSelect}>
              {isDetailSelect ? "Hide details" : "Show more details"}
            </p>
            <div className="detail-text-toggle">
              {isDetailSelect ? details : null}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default WithHomepage(SingleItem);
