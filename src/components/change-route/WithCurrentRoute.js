import React, { Component } from "react";
import { connect } from "react-redux";
import { toggleFilterIcon } from "../../actions/modalActions";

class WithCurrentRoute extends Component {
  componentDidMount() {
    if (this.props.match) {
      this.props.toggleFilterIcon(this.props.match.path);
    } else {
      this.props.toggleFilterIcon();
    }
  }

  render() {
    return this.props.render();
  }
}

export default connect(null, { toggleFilterIcon })(WithCurrentRoute);
