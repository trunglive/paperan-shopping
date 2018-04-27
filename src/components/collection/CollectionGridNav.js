import React from "react";
// import WithCollection from "./WithCollection";

const CollectionGridNav = ({
  onTwoColsChange,
  onThreeColsChange,
  threeCols
}) => (
  <div className="collection-grid-nav">
    <p className="collection-grid-nav__title">Notebooks and planners</p>
    <div className="collection-grid-nav__option">
      <span
        onClick={onTwoColsChange}
        className={threeCols ? "grey-text" : "false"}
      >
        Two cols
      </span>
      <span>/</span>
      <span
        onClick={onThreeColsChange}
        className={threeCols ? "false" : "grey-text"}
      >
        Three cols
      </span>
    </div>
  </div>
);

export default CollectionGridNav;
