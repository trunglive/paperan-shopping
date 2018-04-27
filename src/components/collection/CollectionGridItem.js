import React from "react";
import { Link } from "react-router-dom";
import WithCollection from "./WithCollection";
import { capitalizeFirstLetter } from "../../utils/capitalizeFirstLetter";

const CollectionGridItem = ({
  guid,
  photo_url,
  name,
  type,
  target_audience,
  price,
  size,
  threeCols,
  resizePhoto
}) => (
  <div>
    <Link to={`/collection/${type}/${guid}`}>
      <img
        src={photo_url}
        alt={`${name} ${type} for ${target_audience}`}
        className={resizePhoto}
      />
    </Link>

    <div className="collection-grid__item">
      <div className="collection-grid__item--price">
        <span>$ </span>
        <span>{price}</span>
      </div>
      <p className="collection-grid__item--label">{`${capitalizeFirstLetter(
        name
      )} ${size} ${capitalizeFirstLetter(type)}`}</p>
    </div>
  </div>
);

export default CollectionGridItem;

//
