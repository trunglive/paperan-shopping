import React, { Component } from "react";
import WithHomepage from "../home/WithHomepage";
import ColorContainer from "./color/ColorContainer";
import SizeContainer from "./size/SizeContainer";
import InStock from "./in-stock/InStock.js";
import AddToCartContainer from "./add-to-cart/AddToCardContainer";
import DetailsToggle from "./details-toggle/DetailsToggle";
import { capitalizeFirstLetter } from "../../utils/capitalizeFirstLetter";

class SingleItemView extends Component {
  state = {
    currentColor: "",
    currentSize: ""
  };

  handleColorChange = color => {
    this.setState({
      currentColor: color
    });
  };

  handleSizeChange = size => {
    this.setState({
      currentSize: size
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
      sheet_style,
      type,
      price,
      color,
      size,
      in_stock,
      details
    } = itemSelected;

    const fullItemName = `${capitalizeFirstLetter(
      name
    )} ${capitalizeFirstLetter(sheet_style)} ${capitalizeFirstLetter(type)}`;

    const { currentSize, currentColor } = this.state;
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
          <div className="product-details__name">{fullItemName}</div>
          <div className="product-details__price">
            <span>$ {price}</span>
            <span>incl. VAT</span>
          </div>
          <ColorContainer
            allColors={color}
            colorChange={this.handleColorChange}
          />
          <SizeContainer allSizes={size} sizeChange={this.handleSizeChange} />
          <InStock inStock={in_stock} />
          <SingleItemContext.Provider
            value={{
              photo_url,
              name,
              type,
              target_audience,
              fullItemName,
              price,
              currentSize,
              currentColor
            }}
          >
            <AddToCartContainer inStock={in_stock} />
          </SingleItemContext.Provider>

          <DetailsToggle details={details} />
        </div>
      </div>
    );
  }
}

export default WithHomepage(SingleItemView);

export const SingleItemContext = React.createContext(null);
