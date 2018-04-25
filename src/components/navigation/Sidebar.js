import React, { Component } from 'react';

export default class Sidebar extends Component {
  render() {
    return (
      <div className="sidebar">
        <p className="sidebar__logo">P.</p>
        <img className="sidebar__setting-icon" src="/icons/setting.svg" />
        <img className="sidebar__question-icon" src="icons/question.svg" />
      </div>
    );
  }
}

