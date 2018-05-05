import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';

const BackToCollectionScrolling = () => (
  <div className="nav-info">
        <Link to="/collection/all">

        <div className="back-to-collection-main">
          <div className="section-index">
            <span className="section-index--end back-to-collection">Back to collection</span>
          </div>
          <img className="arrow-down" src="/icons/arrow-up.svg" />
        </div>
        </Link>
      </div>
);

export default BackToCollectionScrolling;
