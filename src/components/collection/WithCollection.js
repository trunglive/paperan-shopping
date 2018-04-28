// import React, { Component } from "react";

// const WithCollection = WrappedComponent =>
//   class extends Component {
//     static displayName = `WithCollection(${WrappedComponent.displayName ||
//       WrappedComponent.name})`;

//     state = {
//       threeCols: true
//     };

//     handleTwoColsChange = () => {
//       this.setState({
//         threeCols: false
//       });
//     };

//     handleThreeColsChange = () => {
//       this.setState({
//         threeCols: true
//       });
//     };

//     render() {
//       return (
//         <WrappedComponent
//           threeCols={this.state.threeCols}
//           handleTwoColsChange={this.handleTwoColsChange}
//           handleThreeColsChange={this.handleThreeColsChange}
//         />
//       );
//     }
//   };

// export default WithCollection;
