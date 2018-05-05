import React, { Component } from "react";
import { connect } from "react-redux";
import Menu from "react-modal";
import { fetchCart, toggleCartAlert } from "../../actions/modalActions";

class WithCheckout extends Component {
  state = {
    isCartOpen: false
  };

  componentDidMount() {
    Menu.setAppElement("body");
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.modal.isCartOpen !== prevState.isCartOpen) {
      return {
        isCartOpen: nextProps.modal.isCartOpen
      };
    }

    return null;
  }

  handleOpenCart = (quantity, currentColor, currentSize) => {
    if (quantity > 0 && currentColor && currentSize) {
      this.props.fetchCart(true);
      this.props.toggleCartAlert(false);
    } else {
      this.props.toggleCartAlert(true);
    }
  };

  render() {
    return (
      <div className="with-checkout">
        {this.props.render(this.handleOpenCart)}
      </div>
    );
  }
}

const mapStateToProps = ({ modal }) => ({
  modal
});

export default connect(mapStateToProps, { fetchCart, toggleCartAlert })(
  WithCheckout
);
