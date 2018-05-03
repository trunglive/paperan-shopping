import React, { Component } from "react";
import Menu from "react-modal";

class WithCheckout extends Component {
  state = {
    isMenuOpen: false
  };

  componentWillMount() {
    Menu.setAppElement("body");
  }

  handleOpenMenu = (quantity, currentColor, currentSize) => {
    if (quantity > 0 && currentColor && currentSize) {
      this.setState({ isMenuOpen: true });
    }
  };

  handleCloseMenu = () => {
    this.setState({ isMenuOpen: false });
  };

  render() {
    return this.props.render(
      this.state.isMenuOpen,
      this.handleOpenMenu,
      this.handleCloseMenu
    );
  }
}

export default WithCheckout;
