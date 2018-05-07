import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="footer-paperan">
          <div className="footer__info item">
            <p>Info</p>
            <ul>
              <li>About Paperan</li>
              <li>Blog</li>
              <li>Press</li>
              <li>FAQ</li>
              <li>Giftcards</li>
            </ul>
          </div>
          <div className="footer__contacts item">
            <p>Contacts</p>
            <ul>
              <li>Contact Us</li>
              <li>Store Locations</li>
            </ul>
          </div>
          <div className="footer__legal item">
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
        <div className="footer-credit">
          <a
            href="https://dribbble.com/shots/4104241-paperan-shopping-exploration"
            target="_blank"
          >
            Design by Patrik Michalicka
          </a>

          <a
            href="https://github.com/trunglive/paperan-shopping"
            target="_blank"
          >
            Code by Trung Vo
          </a>
        </div>
      </div>
    );
  }
}
