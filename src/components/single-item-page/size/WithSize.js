import React, { Component } from "react";

class WithSize extends Component {
  state = {
    selectedPaperSize: ""
  };

  handlePaperSize = size => {
    this.setState({
      selectedPaperSize: size
      //dispatch size
    });
  };

  render() {
    return (
      <div className="with-size">
        {this.props.render(this.state.selectedPaperSize, this.handlePaperSize)}
      </div>
    );
  }
}

export default WithSize;
