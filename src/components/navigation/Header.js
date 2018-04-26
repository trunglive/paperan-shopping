import React, { Component } from "react";

export default class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="search-bar-container">
          <img
            className="search-bar-container__search-icon"
            src="/icons/search.svg"
          />
          <span>Search</span>
        </div>
        <div className="user-account-container">
        <span>My account</span>
        <img
            className="user-account-container__cart-icon"
            src="/icons/cart.svg"
          />
        </div>
      </div>
    );
  }
}
