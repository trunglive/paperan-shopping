import React, { Component } from "react";
import { renderProducts } from "../../utils/renderProducts";

export default class NewArrivalsProducts extends Component {
  render() {
    const { allItems } = this.props;

    return (
      <div className="homepage-new-arrivals">
        <p>New Arrivals</p>
        <div className="homepage-new-arrivals__grid">
          {renderProducts(allItems, "is_new_arrival")}
        </div>
      </div>
    );
  }
}
