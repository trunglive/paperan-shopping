import React, { Component } from "react";
import { SingleItemContext } from "../single-item-page/SingleItemContainer";
import WithColor from "../single-item-page/color/WithColor";

class ItemSelected extends Component {
  render() {
    return (
      <WithColor
        render={(selectedColor, handlePaperColor) => (
          <SingleItemContext.Consumer>
            {({ fullItemName, price, currentSize, currentColor }) => (
              <div className="checkout-menu__items-section--items-container">
                <div className="item-display--left">
                  <img src="/photos/journal/journal-1.jpg" />
                  <div>
                    <p className="item-name">{fullItemName}</p>
                    <div className="item-size-and-color">
                      <span>{currentSize}</span>
                      <span>{currentColor}</span>
                    </div>
                    <p className="item-quantity">Qty: 1</p>
                  </div>
                </div>
                <div className="item-display--right">
                  <p>$ {price}</p>
                  <p className="item-delete">Delete</p>
                </div>
              </div>
            )}
          </SingleItemContext.Consumer>
        )}
      />
    );
  }
}

export default ItemSelected;

{
}
