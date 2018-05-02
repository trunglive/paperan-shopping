import React, { Component } from "react";
import { connect } from "react-redux";
import { SingleItemContext } from "../single-item-page/SingleItemContainer";
import { removeFromCart } from '../../actions/cartActions';

class ItemSelected extends Component {
  render() {
    const {
      guid,
      variationId,
      quantity,
      photo_url,
      fullItemName,
      price,
      currentSize,
      currentColor,
      removeFromCart
    } = this.props;

    // console.log(this.props);

    return (
      <div className="checkout-menu__items-section--items-container">
        <div className="item-display--left">
          <img src={photo_url} alt={fullItemName} />
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
          <p
            className="item-delete"
            onClick={() => removeFromCart(guid, variationId)}
          >
            Delete
          </p>
        </div>
      </div>
    );
  }
}

export default connect(null, { removeFromCart })(ItemSelected);
