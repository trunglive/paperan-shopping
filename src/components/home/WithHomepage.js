import React, { Component } from "react";
import { database } from "../../firebase";

const WithHomepage = WrappedComponent =>
  class extends Component {
    static displayName = `WithHomepage(${WrappedComponent.displayName ||
      WrappedComponent.name})`;

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
            <WrappedComponent allItems={allItems} />
          ) : (
            <img className="paperan-spinner" src="/icons/paperan-spinner.svg" />
          )}
        </div>
      );
    }
  };

export default WithHomepage;
