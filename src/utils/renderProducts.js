import React from "react";
import FadeIn from "react-lazyload-fadein";

export const renderProducts = (products, section) => {
  return products.filter(item => item[section]).map(item => (
    <a href={`/collection/${item.type}/${item.guid}`} target="_blank" key={item.guid}>
      <FadeIn duration={800} easing={"ease-in"}>
        {onload => (
          <img
            src={item.photo_url}
            alt={`${item.name} ${item.type} for ${item.target_audience}`}
            onLoad={onload}
          />
        )}
      </FadeIn>
    </a>
  ));
};
