import React, { Component } from "react";
import { database } from "../../firebase";

// enable this for offline data fetching
// import { paperan as API } from "../../../dev_off/paperan.json";

const WithHomePage = WrappedComponent =>
  class extends Component {
    static displayName = `WithHomePage(${WrappedComponent.displayName ||
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

        const result = allItems.map(item => {
          if (item.reviews === undefined) {
            return {
              ...item,
              reviews: []
            };
          } else {
            return item;
          }
        });

        this.setState({
          allItems: result
        });
      });
    }

    // enable this for offline data fetching
    // componentWillMount() {
    //   {
    //     this.setState({
    //       allItems: API
    //     });
    //   }
    // }

    render() {
      const { allItems } = this.state;

      return (
        <div className="homepage">
          {allItems.length > 0 ? (
            <WrappedComponent {...this.state} {...this.props} />
          ) : (
            <img className="paperan-spinner" src="/icons/paperan-spinner.svg" />
          )}
        </div>
      );
    }
  };

export default WithHomePage;
