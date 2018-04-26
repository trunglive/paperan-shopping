import React, { Component } from "react";
import { renderProducts } from "../../utils/renderProducts";

export default class FeaturedProducts extends Component {
  render() {
    const { allItems } = this.props;

    return (
      <div className="homepage-featured">
        {renderProducts(allItems, "is_featured")}
      </div>
    );
  }
}
