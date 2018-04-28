import React, { Component } from "react";

export default class DetailsToggle extends Component {
  state = {
    isDetailSelected: false
  };

  handleDetailsToggle = () => {
    this.setState({
      isDetailSelected: !this.state.isDetailSelected
    });
  };

  render() {
    const { isDetailSelected } = this.state;
    
    return (
      <div className="product-details__details-toggle">
        <p onClick={this.handleDetailsToggle}>
          {isDetailSelected ? "Hide details" : "Show more details"}
        </p>
        <div className="detail-text-toggle">
          {isDetailSelected ? this.props.details : null}
        </div>
      </div>
    );
  }
}
