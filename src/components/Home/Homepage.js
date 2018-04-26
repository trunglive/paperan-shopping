import React, { Component } from "react";
import { database } from "../../firebase";
import FeaturedProducts from './FeaturedProducts';
import NewArrivalsProducts from './NewArrivalsProducts';
import OnSaleProducts from './OnSaleProducts';

export default class HomePage extends Component {
  state = {
    allItems: []
  };

  componentDidMount() {
    database.ref("paperan/shop").on("value", snapshot => {
      const allItems = [];

      snapshot.forEach(childSnapshot => {
        allItems.push({
          id: childSnapshot.key,
          ...childSnapshot.val()
        });
      });

      this.setState({
        allItems
      });
    });
  }

  render() {
    const { allItems } = this.state;

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

        <FeaturedProducts allItems={allItems} />
        <NewArrivalsProducts allItems={allItems} />
        <OnSaleProducts allItems={allItems} />
      </div>
    );
  }
}
