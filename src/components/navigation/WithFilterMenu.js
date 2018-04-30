import React, { Component } from "react";

const WithFilterMenu = WrappedComponent =>
  class extends Component {
    state = {
      type: "",
      price: "",
      color: "",
      sheetStyle: "",
      coverMaterial: "",
      audience: ""
    };

    handleCheckbox = event => {
      const { name, value, checked } = event.target;

      if (checked) {
        this.setState({
          [name]: value
        });
      } else {
        this.setState({
          [name]: ""
        });
      }
    };

    render() {

      return (
        <WrappedComponent
          {...this.state}
          {...this.props}
          handleCheckbox={this.handleCheckbox}
        />
      );
    }
  };

export default WithFilterMenu;
