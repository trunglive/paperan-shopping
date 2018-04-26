import React, { Component } from "react";

export default class HomePage extends Component {
  render() {
    return (
      <div className="homepage">
        <div className="homepage-header">
          <div className="slogan">
            <p>Makes everything</p>
            <p>noteworthy.</p>
          </div>
          <a className="discover-collection button button--outline">
            Discover collection
          </a>
        </div>
        <div className="homepage-photo-grid">
          <img src="/photos/homepage/notebook-0.jpg" alt="homepage photo 0" />
          <img src="/photos/homepage/notebook-1.jpg" alt="homepage photo 1" />
          <img src="/photos/homepage/notebook-2.jpg" alt="homepage photo 2" />
          <img src="/photos/homepage/notebook-3.jpg" alt="homepage photo 3" />
          <img src="/photos/homepage/notebook-4.jpg" alt="homepage photo 4" />
          <img src="/photos/homepage/notebook-5.jpg" alt="homepage photo 5" />
          <img src="/photos/homepage/notebook-6.jpg" alt="homepage photo 6" />
          <img src="/photos/homepage/notebook-7.jpg" alt="homepage photo 7" />
        </div>
      </div>
    );
  }
}
