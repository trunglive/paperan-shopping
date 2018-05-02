import React, { Component } from "react";
import { Link } from "react-router-dom";

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
          <Link
            to="/collection/all"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <span>Shop</span>
          </Link>
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
