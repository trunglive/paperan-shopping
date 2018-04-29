import React, { Component } from "react";
import WithHomepage from "../home/WithHomepage";
import ColorContainer from "./color/ColorContainer";
import SizeContainer from "./size/SizeContainer";
import AddToCartContainer from "./add-to-cart/AddToCardContainer";
import DetailsToggle from './details-toggle/DetailsToggle';
import { capitalizeFirstLetter } from "../../utils/capitalizeFirstLetter";
import Checkout from '../menu/Checkout.js';

class SingleItemView extends Component {
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
          <ColorContainer color={color} />
          <SizeContainer size={size} />
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
          <AddToCartContainer inStock={in_stock} />
          <DetailsToggle details={details} />
        </div>

        {/* <Checkout /> */}
      </div>
    );
  }
}

export default WithHomepage(SingleItemView);
