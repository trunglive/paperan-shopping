import React, { Component } from "react";
import { renderProducts } from "../../utils/renderProducts";

export default class OnSaleProducts extends Component {
  render() {
    const { allItems } = this.props;

    return (
      <div className="homepage-on-sale small-grid">
        <p>Sale</p>
        <div className="small-grid__photos">
          {renderProducts(allItems, "is_on_sale")}
        </div>
      </div>
    );
  }
}
