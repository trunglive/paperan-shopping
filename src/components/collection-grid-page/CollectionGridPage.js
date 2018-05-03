import React, { Component } from "react";
import WithHomePage from "../home-page/WithHomePage";
import CollectionGridItem from "./CollectionGridItem";
import SortBy from "./sort-by/SortBy";
import { connect } from "react-redux";
import { ItemSelectors } from '../../selectors/ItemSelectors';

class CollectionGridPage extends Component {
  state = {
    threeCols: true,
    filterBy: null,
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

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.filterBy === prevState.filterBy) {
      return null;
    }

    return {
      filterBy: nextProps.filterBy
    };
  }

  render() {
    const { threeCols, filterBy } = this.state;
    const { allItems, sortBy } = this.props;

    const {
      type,
      price,
      colors,
      sheetStyle,
      coverMaterial,
      audience
    } = this.state.filterBy;

    return (
      <div className="collection collection-grid">
        <div className="collection-grid-nav">
          <p className="collection-grid-nav__title">Notebooks and planners</p>
          <div className="collection-grid-nav__option">
            <div className="col-switch">
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

            <SortBy />
          </div>
        </div>

        <div
          className={`${
            threeCols
              ? `collection-grid__items`
              : `collection-grid__items grid-two-cols`
          }`}
        >
            {ItemSelectors(allItems, filterBy, sortBy).map(item => (
              <CollectionGridItem
                key={item.guid}
                {...item}
                resizePhoto={threeCols ? null : "resize-photo"}
              />
            ))}
        </div>

        <div className="more-item">You have reached the end of the list</div>
      </div>
    );
  }
}

const mapStateToProps = ({ filterBy, sortBy }) => ({
  filterBy,
  sortBy: sortBy.value
});

export default connect(mapStateToProps)(WithHomePage(CollectionGridPage));
