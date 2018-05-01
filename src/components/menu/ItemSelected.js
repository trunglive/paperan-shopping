import React, { Component } from "react";
import { SingleItemContext } from "../single-item-page/SingleItemContainer";

class ItemSelected extends Component {
  render() {
    const { quantity } = this.props;

    return (
      <SingleItemContext.Consumer>
        {({
          photo_url,
          fullItemName,
          price,
          currentSize,
          currentColor
        }) => (
          <div className="checkout-menu__items-section--items-container">
            <div className="item-display--left">
              <img
                src={photo_url}
                alt={fullItemName}
              />
              <div>
                <p className="item-name">{fullItemName}</p>
                <div className="item-size-and-color">
                  <span>{currentSize}, </span>
                  <span>{currentColor}</span>
                </div>
                <p className="item-quantity">{quantity}</p>
              </div>
            </div>
            <div className="item-display--right">
              <p>$ {price}</p>
              <p className="item-delete">Delete</p>
            </div>
          </div>
        )}
      </SingleItemContext.Consumer>
    );
  }
}

export default ItemSelected;
