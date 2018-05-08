import React from "react";
import PaperanImageMagnify from "react-image-magnify";
import ZoomHint from "./ZoomHint";

const PhotoView = ({ photo_url, fullItemName }) => (
  <div className="photo-display">
    <PaperanImageMagnify
      {...{
        smallImage: {
          alt: fullItemName,
          src: photo_url,
          isFluidWidth: true
        },
        largeImage: {
          src: photo_url,
          width: 2000,
          height: 1500
        },
        imageClassName: "photo-display__small",
        enlargedImageClassName: "photo-display__large",
        isHintEnabled: true,
        isActivatedOnTouch: true,
        shouldHideHintAfterFirstActivation: false,
        hintComponent: () => <ZoomHint />
      }}
    />
  </div>
);

export default PhotoView;
