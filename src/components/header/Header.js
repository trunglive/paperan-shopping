import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchCart } from "../../actions/modalActions";
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="search-bar-container">
          {this.props.isFilterShown && (
            <div>
              <img
                className="search-bar-container__search-icon"
                src="/icons/search.svg"
              />
              <span>Search products</span>
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
          <img
            className="user-account-container__cart-icon"
            src="/icons/cart.svg"
            onClick={() => this.props.fetchCart(true)}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ modal }) => ({
  isFilterShown: modal.isFilterShown
});

export default connect(mapStateToProps, { fetchCart })(Header);
