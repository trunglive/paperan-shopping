import React, { Component } from "react";
import WithHomepage from "../home-page/WithHomepage";
import PhotoView from "./photo-section/PhotoView";
import ColorView from "./color-section/ColorView";
import SizeView from "./size-section/SizeView";
import InStock from "./availability-section/InStock.js";
import AddToCartView from "./quantity-section/AddToCardView";
import DetailsToggle from "./details-toggle/DetailsToggle";
import { capitalizeFirstLetter } from "../../utils/capitalizeFirstLetter";

class SingleItemPage extends Component {
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
      colors,
      sizes,
      in_stock,
      details
    } = itemSelected;

    const fullItemName = `${capitalizeFirstLetter(
      name
    )} ${capitalizeFirstLetter(sheet_style)} ${capitalizeFirstLetter(type)}`;

    const { currentSize, currentColor } = this.state;
    return (
      <div className="single-item">
        <PhotoView photo_url={photo_url} fullItemName={fullItemName} />
        <div className="item-details">
          <div className="item-details__path">
            <span>
              {capitalizeFirstLetter(type)}
              <span className="long-dash">&mdash;</span>For {target_audience}
            </span>
          </div>
          <div className="item-details__name">{fullItemName}</div>
          <div className="item-details__price">
            <span>$ {price}</span>
            <span>incl. VAT</span>
          </div>
          <ColorView allColors={colors} colorChange={this.handleColorChange} />
          <SizeView allSizes={sizes} sizeChange={this.handleSizeChange} />
          <InStock inStock={in_stock} />
          <SingleItemContext.Provider
            value={{
              guid,
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
            <AddToCartView inStock={in_stock} />
          </SingleItemContext.Provider>

          <DetailsToggle details={details} />
        </div>
      </div>
    );
  }
}

export default WithHomepage(SingleItemPage);

export const SingleItemContext = React.createContext(null);
