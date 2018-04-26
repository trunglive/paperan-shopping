import React, { Component } from "react";
import { renderProducts } from "../../utils/renderProducts";

export default class NewArrivalsProducts extends Component {
<<<<<<< HEAD
  
=======
>>>>>>> f2a7f34d7eaaabc58571044d58a0e0aef426f035
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
