import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { removeFromCart } from "../../actions/cartActions";

const ItemInCart = ({
  guid,
  productType,
  variationId,
  quantity,
  photo_url,
  fullItemName,
  price,
  currentSize,
  currentColor,
  removeFromCart,
  onCloseCart
}) => (
  <div className="checkout-menu__items-section--items-container">
    <div className="item-display--left">
      <Link to={`/collection/${productType}/${guid}`}>
        <img src={photo_url} alt={fullItemName} onClick={onCloseCart} />
      </Link>

      <div>
        <Link
          to={`/collection/${productType}/${guid}`}
          style={{ color: "inherit", textDecoration: "none" }}
        >
          <p className="item-name" onClick={onCloseCart}>{fullItemName}</p>
        </Link>
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

export default connect(
  null,
  { removeFromCart }
)(ItemInCart);
