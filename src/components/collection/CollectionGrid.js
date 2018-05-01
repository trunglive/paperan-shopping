import React, { Component } from "react";
import WithHomepage from "../home/WithHomepage";
import CollectionGridItem from "./CollectionGridItem";
import { connect } from "react-redux";
import { convertTextToPriceRange } from "../../utils/convertTextToPriceRange";

class CollectionGrid extends Component {
  state = {
    threeCols: true,
    filterBy: this.props.filterBy
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

  componentWillReceiveProps(nextProps) {
    if (nextProps.filterBy !== this.props.filterBy) {
      this.setState({ filterBy: nextProps.filterBy });
    }
  }

  render() {
    const { threeCols, filterBy } = this.state;
    const { allItems } = this.props;

    const {
      type,
      price,
      colors,
      sheetStyle,
      coverMaterial,
      audience
    } = this.state.filterBy;

    const priceRange = convertTextToPriceRange(price);
    console.log(priceRange);

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
                Object.values(filterBy).every(
                  property => property.length === 0
                )
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
