import React, { Component } from 'react';

export default class NavigationInfo extends Component {
  render() {
    return (
      <div className="nav-info">
        <img className="arrow-up" src="/icons/arrow-up.svg" />
        <div className="section-index">
          <span className="section-index--start">01</span>
          <span className="section-index--splash">/</span>
          <span className="section-index--end">03</span>
        </div>
        <img className="arrow-down" src="/icons/arrow-up.svg" />
      </div>
    );
  }
}
