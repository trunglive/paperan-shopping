import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchCart } from "../../actions/modalActions";
import { Link } from "react-router-dom";
import { calculateQuantityInCart } from '../../utils/calculateQuantityInCart';

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
          <div className="quantity-in-cart" onClick={() => this.props.fetchCart(true)}>
            <img
              className="quantity-in-cart__cart-icon"
              src="/icons/cart.svg"
            />
            <div className="circle">
              <p className="quantity">{calculateQuantityInCart(this.props.cart)}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ cart, modal }) => ({
  cart,
  isFilterShown: modal.isFilterShown
});

export default connect(mapStateToProps, { fetchCart })(Header);
