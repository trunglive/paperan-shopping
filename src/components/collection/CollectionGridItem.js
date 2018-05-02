import React from "react";
import { Link } from "react-router-dom";
// import WithCollection from "./WithCollection";
import { capitalizeFirstLetter } from "../../utils/capitalizeFirstLetter";
import FadeIn from "react-lazyload-fadein";

const CollectionGridItem = ({
  guid,
  photo_url,
  name,
  price,
  type,
  sheet_style,
  target_audience,
  threeCols,
  resizePhoto
}) => (
  <div>
    <FadeIn easing={"ease-out"} height={500}>
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
          </div>
        </div>
      )}
    </FadeIn>
  </div>
);

export default CollectionGridItem;

//
