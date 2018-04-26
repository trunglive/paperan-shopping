import React, { Component } from "react";
import { database } from "../../firebase";
import Homepage from "./Homepage";

export default class HomepageContainer extends Component {
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
        {allItems.length > 0 ? (
          <Homepage allItems={allItems} />
        ) : (
          <img className="paperan-spinner" src="/icons/paperan-spinner.svg" />
        )}
      </div>
    );
  }
}