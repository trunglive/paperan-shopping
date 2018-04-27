import React, { Component } from "react";
import WithHomepage from "../home/WithHomepage";
// import WithCollection from "./WithCollection";
import CollectionGridNav from "./CollectionGridNav";
import CollectionGridItem from "./CollectionGridItem";

class CollectionGrid extends Component {
  state = {
    threeCols: true
  };

  handleTwoColsChange = () => {
    this.setState({
      threeCols: false
    });
  };

  handleThreeColsChange = () => {
    this.setState({
      threeCols: true
    });
  };

  render() {
    const { threeCols } = this.state;
    const { allItems } = this.props;

    return (
      <div className="collection collection-grid">
        <CollectionGridNav
          onTwoColsChange={this.handleTwoColsChange}
          onThreeColsChange={this.handleThreeColsChange}
          threeCols={threeCols}
        />

        <div
          className={`${
            threeCols
              ? `collection-grid__items`
              : `collection-grid__items grid-two-cols`
          }`}
        >
          {allItems.map(item => (
            <CollectionGridItem
              key={item.guid}
              {...item}
              resizePhoto={threeCols ? null : "resize-photo"}
            />
          ))}
        </div>

        <div className="more-item">You've reached the end of the list</div>
      </div>
    );
  }
}

export default WithHomepage(CollectionGrid);
