import React, { Component } from "react";
import { connect } from "react-redux";
import { displayCurrentRoute } from "../../actions/routingActions";

class WithCurrentRoute extends Component {
  componentDidMount() {
    if (this.props.match) {
      this.props.displayCurrentRoute(this.props.match.path);
    } else {
      this.props.displayCurrentRoute();
    }
  }

  render() {
    return this.props.render();
  }
}

export default connect(null, { displayCurrentRoute })(WithCurrentRoute);
