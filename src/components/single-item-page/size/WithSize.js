import React, { Component } from "react";

const WithSize = WrappedComponent =>
  class extends Component {
    static displayName = `WithSize(${WrappedComponent.displayName ||
      WrappedComponent.name})`;

    state = {
      selectedPaperSize: ""
    };

    handlePaperSize = size => {
      this.setState({
        selectedPaperSize: size
      });
    };

    render() {
      return (
        <WrappedComponent
          selectedPaperSize={this.state.selectedPaperSize}
          handlePaperSize={this.handlePaperSize}
          size={this.props.size}
        />
      );
    }
  };

export default WithSize;
