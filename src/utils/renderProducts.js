import React from "react";

export const renderProducts = (products, section) => {
  return products.filter(item => item[section]).map(item => (
    <a href={`/collection/${item.type}/${item.guid}`} target="_blank">
      <img
        key={item.guid}
        src={item.photo_url}
        alt={`${item.name} ${item.type} for ${item.target_audience}`}
      />
    </a>
  ));
};
