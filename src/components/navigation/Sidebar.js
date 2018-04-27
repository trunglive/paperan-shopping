import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Sidebar extends Component {
  render() {
    return (
      <div className="sidebar">
        <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
          <p className="sidebar__logo">P.</p>
        </Link>
        <img className="sidebar__setting-icon" src="/icons/setting.svg" />
        <img className="sidebar__question-icon" src="/icons/question.svg" />
      </div>
    );
  }
}
