import React, { Component } from "react";

const WithCollection = WrappedComponent =>
  class extends Component {
    static displayName = `WithCollection(${WrappedComponent.displayName ||
      WrappedComponent.name})`;

      state = {
        threeCols: true
      };
    
      handleTwoColsChange = () => {
        this.setState({
          threeCols: false
        });
      };
    
      handleThreeColsChange = () => {
        this.setState({
          threeCols: true
        });
      };

    render() {
      const { threeCols } = this.state;
      
      return (
        <WrappedComponent
          threeCols={threeCols}
          onColsChange={this.handleColsChange}
        />
      );
    }
  };

export default WithCollection;
