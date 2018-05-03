import React, { Component } from "react";
import { connect } from "react-redux";
import Menu from "react-modal";
import TopBagSection from "./TopBagSection";
import ItemInCart from "./ItemInCart";
import BottomSubtotal from "./BottomSubtotal";
import { calculateSubtotal } from "../../utils/calculateSubtotal";
import { fetchCart } from "../../actions/modalActions";

class MainCartView extends Component {
  render() {
    const { isCartOpen, cart } = this.props;
    const totalPrice = calculateSubtotal(this.props.cart);

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

          {Object.keys(cart).map(id =>
            cart[id].map(item => (
              <ItemInCart guid={id} {...item} key={item.variationId} />
            ))
          )}
        </div>

        <BottomSubtotal totalPrice={totalPrice} />
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
