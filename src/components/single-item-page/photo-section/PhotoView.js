import React from "react";

const PhotoView = ({ photo_url, fullItemName }) => (
  <div className="photo-display">
    <img src={photo_url} alt={fullItemName} />
  </div>
);

export default PhotoView;
