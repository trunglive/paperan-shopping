import React, { Component } from "react";
import WithHomepage from "../home/WithHomepage";
import CollectionGridItem from "./CollectionGridItem";
import { connect } from "react-redux";
import { convertTextToPriceRange } from "../../utils/convertTextToPriceRange";
import Select from "react-select";
import 'react-select/dist/react-select.css';

class CollectionGrid extends Component {
  state = {
    threeCols: true,
    filterBy: null,
    sortBy: ""
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

  handleSortBy = val => {
    this.setState({ sortBy: val });
    console.log(val.label);
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
    const { allItems } = this.props;
    console.log(this.state.filterBy);

    const {
      type,
      price,
      colors,
      sheetStyle,
      coverMaterial,
      audience
    } = this.state.filterBy;

    const priceRange = convertTextToPriceRange(price);

    const { sortBy } = this.state;
    const value = sortBy && sortBy.value;

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
            <Select
              name="collection-sorting"
              value={value}
              placeholder={"Sort by"}
              autosize={true}
              onChange={this.handleSortBy}

              options={[
                { value: "best_sellers", label: "Best Sellers" },
                { value: "lowest_price", label: "Price: Low to High" },
                { value: "highest_price", label: "Price: High to Low" },
                { value: "highest_rating", label: "Top Rated" },
                { value: "newest", label: "Newest" }
              ]}
            />
          </div>
        </div>

        <div
          className={`${
            threeCols
              ? `collection-grid__items`
              : `collection-grid__items grid-two-cols`
          }`}
        >
          {allItems
            .filter(
              item =>
                type.includes(item.type) ||
                (priceRange[0] <= Number(item.price) &&
                  Number(item.price) <= priceRange[1]) ||
                colors.some(color => item.colors.includes(color)) ||
                sheetStyle.includes(item.sheet_style) ||
                coverMaterial.includes(item.cover_material) ||
                audience.includes(item.target_audience) ||
                Object.values(filterBy).every(property => property.length === 0)
            )
            .map(item => (
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

const mapStateToProps = ({ filterBy }) => ({
  filterBy
});

export default connect(mapStateToProps)(WithHomepage(CollectionGrid));
