import React, { Component } from "react";

const WithColor = WrappedComponent =>
  class extends Component {
    static displayName = `WithColor(${WrappedComponent.displayName ||
      WrappedComponent.name})`;
      
    state = {
      selectedColor: ""
    };

    handlePaperColor = color => {
      this.setState({
        selectedColor: color
      });
    };

    render() {
      return (
        <WrappedComponent
          selectedColor={this.state.selectedColor}
          handlePaperColor={this.handlePaperColor}
          color={this.props.color}
        />
      );
    }
  };

export default WithColor;
