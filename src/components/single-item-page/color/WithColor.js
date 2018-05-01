import React, { Component } from "react";

class WithColor extends Component {
  state = {
    selectedColor: ""
  };

  handlePaperColor = color => {
    this.setState({
      selectedColor: color
      //dispatch color
    });
  };

  render() {  
    return (
      <div className="with-color">
        {this.props.render(this.state.selectedColor, this.handlePaperColor)}
      </div>
    );
  }
}

export default WithColor;
