import React, { Component } from "react";
import { Link } from "react-router-dom";
import { capitalizeFirstLetter } from "../../utils/capitalizeFirstLetter";
import { calculateAverageRating } from "../../utils/calculateAverageRating";
import FadeIn from "react-lazyload-fadein";
import ItemRating from "react-star-ratings";



const CollectionGridItem = ({
  guid,
  photo_url,
  name,
  price,
  type,
  sheet_style,
  target_audience,
  reviews,
  threeCols,
  resizePhoto
}) => (
  <div>
    <FadeIn easing={"ease-out"} height={300}>
      {onload => (
        <div>
          <Link to={`/collection/${type}/${guid}`}>
            <img
              src={photo_url}
              alt={`${name} ${type} for ${target_audience}`}
              className={resizePhoto}
              onLoad={onload}
            />
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
            {console.log(calculateAverageRating(reviews))}
            <ItemRating
              starRatedColor="#808080"
              starEmptyColor="#bbb"
              rating={calculateAverageRating(reviews)}
              numberOfStars={5}
              starDimension="12px"
              starSpacing="1px"
            />
          </div>
        </div>
      )}
    </FadeIn>
  </div>
);

export default CollectionGridItem;
