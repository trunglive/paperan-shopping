import React from "react";

const ZoomHint = ({ isTouchDetected }) => (
  <div className="zoom-hint">
    <img className="zoom-in-icon" src="/icons/zoom-in.svg" alt="zoom in icon" />
    {isTouchDetected ? "Long-Press to Zoom" : "Rollover to Zoom"}
  </div>
);

export default ZoomHint;
