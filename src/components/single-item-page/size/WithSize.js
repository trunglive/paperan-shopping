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
          {...this.state}
          {...this.props}
          handlePaperSize={this.handlePaperSize}
        />
      );
    }
  };

export default WithSize;
