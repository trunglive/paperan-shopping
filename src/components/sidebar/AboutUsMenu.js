import React, { Component } from "react";

class AboutUsMenu extends Component {
  render() {
    return (
      <div className="about-us-container">
      <img
          className="close-menu-icon close-about-us-icon"
          src="/icons/close.svg"
          onClick={this.props.onCloseAboutUs}
        />
        <img className="scroll-about-us-icon" src="/icons/scroll.svg" />
        <p className="about-us-text">About Paperan</p>
        <p className="about-us-goal">
          Paperan is an emerging office supplies brand which provides
          high-quality products for creative enthusiasts. We aim to make viable
          connections between minimalist design and versatile durable materials
          that push office supplies to the new level. Paperan is a thoughtful
          collection of notebooks, notepads, sketchbooks and journals with the
          idea of simplicity in mind. We value our customer experience and the
          quality is the most important aspect in our product selection process.
        </p>
      </div>
    );
  }
}

export default AboutUsMenu;
