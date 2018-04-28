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
          {...this.state}
          {...this.props}
          handlePaperColor={this.handlePaperColor}
        />
      );
    }
  };

export default WithColor;
