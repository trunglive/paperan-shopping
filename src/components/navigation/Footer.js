import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="footer__info">
          <p>Info</p>
          <ul>
            <li>About Paperan</li>
            <li>Blog</li>
            <li>Press</li>
            <li>FAQ</li>
            <li>Giftcards</li>
          </ul>
        </div>
        <div className="footer__contacts">
          <p>Contacts</p>
          <ul>
            <li>Contact Us</li>
            <li>Store Locations</li>
          </ul>
        </div>
        <div className="footer__legal">
          <p>Legal</p>
          <ul>
            <li>Terms & Conditions</li>
            <li>Shopping & Delivery</li>
            <li>Returns & Exchanges</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="footer__social item">
          <p>Social</p>
          <ul>
            <li>Facebook</li>
            <li>Twitter</li>
            <li>Youtube</li>
            <li>Instagram</li>
          </ul>
        </div>
      </div>
    );
  }
}
