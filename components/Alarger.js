import React, { useState } from 'react';
import ZoomPanPinch from 'react-zoom-pan-pinch';

const Alarger = ({ src, alt, onClose }) => {
  const [zoomLevel, setZoomLevel] = useState(1);

  return (
    <div className="enlarged-image-container">
      <div className="close-button" onClick={onClose}>
        Close
      </div>
      <ZoomPanPinch
        background="#fff" // Background color of the container
        height="100vh"    // Height of the container
        width="100%"      // Width of the container
        initialZoom={zoomLevel}
        setZoomLevel={setZoomLevel}
      >
        <img src={src} alt={alt} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
      </ZoomPanPinch>
    </div>
  );
};

export default Alarger;