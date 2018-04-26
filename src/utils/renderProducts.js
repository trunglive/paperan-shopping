import React from 'react';

export const renderProducts = (products, section) => {
  return products
    .filter(item => item[section])
    .map(item => (
      <img
        key={item.guid}
        src={item.photo_url}
        alt={`${item.name} ${item.type} for ${item.target_audience}`}
      />
    ));
};
