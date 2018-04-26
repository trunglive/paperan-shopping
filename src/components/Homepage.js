import React, { Component } from "react";
import { paperan as api } from "../../dev_off/paperan.json";

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
        <div className="homepage-featured">
          <img
            src="/photos/homepage/featured/notebook-ft-1.jpg"
            alt="homepage featured photo 1"
          />
          <img
            src="/photos/homepage/featured/notebook-ft-2.jpg"
            alt="homepage featured photo 2"
          />
          <img
            src="/photos/homepage/featured/notebook-ft-3.jpg"
            alt="homepage featured photo 3"
          />
          <img
            src="/photos/homepage/featured/notebook-ft-4.jpg"
            alt="homepage featured photo 4"
          />
          <img
            src="/photos/homepage/featured/notebook-ft-5.jpg"
            alt="homepage featured photo 5"
          />
          <img
            src="/photos/homepage/featured/notebook-ft-6.jpg"
            alt="homepage featured photo 6"
          />
          <img
            src="/photos/homepage/featured/notebook-ft-7.jpg"
            alt="homepage featured photo 7"
          />
          <img
            src="/photos/homepage/featured/notebook-ft-8.jpg"
            alt="homepage featured photo 8"
          />
        </div>
        <div className="homepage-new-arrivals">
          <p>New Arrivals</p>
          <div className="homepage-new-arrivals__grid">
            <img
              src="/photos/homepage/new-arrivals/notebook-na-1.jpg"
              alt="homepage new arrivals photo 1"
            />
            <img
              src="/photos/homepage/new-arrivals/notebook-na-2.jpg"
              alt="homepage new arrivals photo 2"
            />
            <img
              src="/photos/homepage/new-arrivals/notebook-na-3.jpg"
              alt="homepage new arrivals photo 3"
            />
            <img
              src="/photos/homepage/new-arrivals/notebook-na-4.jpg"
              alt="homepage new arrivals photo 4"
            />
            <img
              src="/photos/homepage/new-arrivals/notebook-na-5.jpg"
              alt="homepage new arrivals photo 5"
            />
            <img
              src="/photos/homepage/new-arrivals/notebook-na-6.jpg"
              alt="homepage new arrivals photo 6"
            />
            <img
              src="/photos/homepage/new-arrivals/notebook-na-7.jpg"
              alt="homepage new arrivals photo 7"
            />
            <img
              src="/photos/homepage/new-arrivals/notebook-na-8.jpg"
              alt="homepage new arrivals photo 8"
            />
            <img
              src="/photos/homepage/new-arrivals/notebook-na-9.jpg"
              alt="homepage new arrivals photo 9"
            />
          </div>
        </div>
        {/* <div className="testing">
          {api.map(item => (
            <img
              className="photo-item"
              src={item["photo_url"]}
              key={api["guid"]}
            />
          ))}
        </div> */}
      </div>
    );
  }
}
