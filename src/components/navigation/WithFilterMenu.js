// import React, { Component } from "react";
// import { connect } from 'react-redux';
// import * as actions from '../../actions/filteringActions';

// const WithFilterMenu = WrappedComponent =>
//   class extends Component {
//     state = {
//       type: "",
//       price: "",
//       color: "",
//       sheetStyle: "",
//       coverMaterial: "",
//       audience: ""
//     };

    // handleCheckbox = event => {
    //   const { name, value, checked } = event.target;

    //   if (checked) {
    //     this.setState({
    //       [name]: value
    //     });
    //   } else {
    //     this.setState({
    //       [name]: ""
    //     });
    //   }

    //   if (checked) {
    //     this.props.filterByType({ name, value });
    //   }
      
    // };

  //   render() {

  //     return (
  //       <WrappedComponent
  //         {...this.state}
  //         {...this.props}
  //         // handleCheckbox={this.handleCheckbox}
  //       />
  //     );
  //   }
  // };

// export default connect(null, actions)(WithFilterMenu);
