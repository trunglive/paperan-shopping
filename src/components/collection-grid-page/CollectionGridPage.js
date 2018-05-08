import React, { Component } from "react";
import { connect } from "react-redux";

import CollectionGridItem from "./CollectionGridItem";
import SortBy from "./sort-by/SortBy";
import WithHomePage from "../home-page/WithHomePage";
import WithCurrentRoute from "../page-routing/WithCurrentRoute";
import { ItemSelectors } from "../../selectors/ItemSelectors";
import { displayCurrentRoute } from "../../actions/routingActions";

class CollectionGridPage extends Component {
  state = {
    threeCols: true,
    filterBy: null,
    searchVal: ""
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
    if (
      nextProps.filterBy !== prevState.filterBy ||
      nextProps.searchVal !== prevState.searchVal
    ) {
      return {
        filterBy: nextProps.filterBy,
        searchVal: nextProps.searchVal
      };
    }

    return null;
  }

  componentDidMount() {
    this.props.displayCurrentRoute(this.props.match.path);
  }

  render() {
    const { threeCols, filterBy, searchVal } = this.state;
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
                Col 1
              </span>
              <span>/</span>
              <span
                onClick={this.handleThreeColsChange}
                className={threeCols ? "false" : "grey-text"}
              >
                Col 2
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
          {ItemSelectors(allItems, filterBy, sortBy, searchVal).map(item => (
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

const mapStateToProps = ({ filterBy, sortBy, search }) => ({
  filterBy,
  sortBy: sortBy.value,
  searchVal: search.keyword
});

export default connect(mapStateToProps, { displayCurrentRoute })(
  WithHomePage(CollectionGridPage)
);
