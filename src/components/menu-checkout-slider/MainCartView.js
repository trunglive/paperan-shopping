import React, { Component } from "react";
import { connect } from "react-redux";
import Menu from "react-modal";
import TopBagSection from "./TopBagSection";
import ItemInCart from "./ItemInCart";
import BottomSubtotal from "./BottomSubtotal";
import { calculateSubtotal } from "../../utils/calculateSubtotal";
import { fetchCart } from "../../actions/modalActions";

class MainCartView extends Component {
  state = {
    cart: {}
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.cart !== prevState.cart) {
      return {
        cart: nextProps.cart
      };
    }

    return null;
  }

  render() {
    const { isCartOpen } = this.props;
    const { cart } = this.state;
    const totalPrice = calculateSubtotal(this.state.cart);
    // console.log(this.props);
    return (
      <Menu
        isOpen={isCartOpen}
        onRequestClose={() => this.props.fetchCart(false)}
        style={modalStyles}
        closeTimeoutMS={200}
        className="checkout-menu-container"
        contentLabel="Menu for Paperan"
      >
        <div className="checkout-menu__items-section">
          <TopBagSection handleCloseCart={() => this.props.fetchCart(false)} />

          {Object.keys(cart).length > 0 ? (
            Object.keys(cart).map(id =>
              cart[id].map(item => (
                <ItemInCart guid={id} {...item} key={item.variationId} />
              ))
            )
          ) : (
            <div className="checkout-menu__empty-cart">
              <p>The cart is empty</p>
              <img
                className="empty-cart-icon"
                src="/icons/cart-empty.svg"
                alt="empty-cart-icon"
              />
            </div>
          )}
        </div>
        {totalPrice > 0 && <BottomSubtotal totalPrice={totalPrice} />}
      </Menu>
    );
  }
}

export default connect(null, { fetchCart })(MainCartView);

const modalStyles = {
  overlay: {
    backgroundColor: "rgba(54, 54, 54, 0.7)"
  }
};
