import React from "react";
import PaperanImageMagnify from "react-image-magnify";

import ZoomHint from "./ZoomHint";

const PhotoView = ({ photoUrl, fullItemName }) => (
  <div className="photo-display">
    <PaperanImageMagnify
      {...{
        smallImage: {
          alt: fullItemName,
          src: photoUrl,
          isFluidWidth: true
        },
        largeImage: {
          src: photoUrl,
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
