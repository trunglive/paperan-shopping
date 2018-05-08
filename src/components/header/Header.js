import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { fetchCart } from "../../actions/modalActions";
import { searchProducts } from "../../actions/searchActions";
import { calculateQuantityInCart } from "../../utils/calculateQuantityInCart";

class Header extends Component {
  handleSearch = event => {
    this.props.searchProducts(event.target.value);
  };

  render() {
    return (
      <div className="header">
        <div className="search-bar-container">
          {(this.props.route === "/collection/all" ||
            this.props.route === "/collection/all/") && (
            <div className="search-bar-main">
              <img
                className="search-bar-main__search-icon"
                src="/icons/search.svg"
              />
              <input
                placeholder="Search products"
                onChange={this.handleSearch}
                value={this.props.keyword}
              />
            </div>
          )}
        </div>

        <div className="user-account-container">
          <Link
            to="/collection/all"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <span>Shop</span>
          </Link>
          <span>My account</span>
          <div
            className="quantity-in-cart"
            onClick={() => this.props.fetchCart(true)}
          >
            <img
              className="quantity-in-cart__cart-icon"
              src="/icons/cart.svg"
            />
            <div className="circle">
              <p className="quantity">
                {calculateQuantityInCart(this.props.cart)}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ cart, route, search }) => ({
  cart,
  route: route.currentRoute,
  keyword: search.keyword
});

export default connect(mapStateToProps, { fetchCart, searchProducts })(Header);
