import React, { Component } from "react";
import WithHomepage from "../home/WithHomepage";
import CollectionGridItem from "./CollectionGridItem";
// import WithFilterMenu from '../navigation/WithFilterMenu';

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
        <div className="collection-grid-nav">
          <p className="collection-grid-nav__title">Notebooks and planners</p>
          <div className="collection-grid-nav__option">
            <span
              onClick={this.handleTwoColsChange}
              className={threeCols ? "grey-text" : "false"}
            >
              Two cols
            </span>
            <span>/</span>
            <span
              onClick={this.handleThreeColsChange}
              className={threeCols ? "false" : "grey-text"}
            >
              Three cols
            </span>
          </div>
        </div>

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
