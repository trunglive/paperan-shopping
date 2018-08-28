import React from "react";
import { Link } from "react-router-dom";
import FadeIn from "react-lazyload-fadein";
import ItemRating from "react-star-ratings";

import { capitalizeFirstLetter } from "../../utils/capitalizeFirstLetter";
import { calculateAverageRating } from "../../utils/calculateAverageRating";

const CollectionGridItem = ({
  guid,
  photo_url,
  name,
  price,
  type,
  sheet_style,
  target_audience,
  reviews,
  resizePhoto
}) => (
  <div>
    <Link to={`/collection/${type}/${guid}`}>
      <FadeIn easing={"ease-out"} height={400}>
        {onload => (
          <img
            src={photo_url}
            alt={`${name} ${type} for ${target_audience}`}
            className={resizePhoto}
            onLoad={onload}
          />
        )}
      </FadeIn>
    </Link>

    <div className="collection-grid__item">
      <div className="collection-grid__item--price">
        <span>$ </span>
        <span>{price}</span>
      </div>
      <p className="collection-grid__item--label">
        {`${capitalizeFirstLetter(name)} ${capitalizeFirstLetter(
          sheet_style
        )} ${capitalizeFirstLetter(type)}`}
      </p>

      <ItemRating
        starRatedColor="#808080"
        starEmptyColor="#bbb"
        rating={calculateAverageRating(reviews)}
        numberOfStars={5}
        starDimension="12px"
        starSpacing="1px"
      />
      <span className="collection-grid__item--rating">
        {calculateAverageRating(reviews) > 0 ? (
          reviews.length
        ) : (
          <span className="collection-grid__item--no-review">
            no reviews yet
          </span>
        )}{" "}
      </span>
    </div>
  </div>
);

export default CollectionGridItem;
