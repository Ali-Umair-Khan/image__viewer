import React, { useState } from 'react';
import { Magnifier, GlassMagnifier, SideBySideMagnifier } from 'react-image-magnifiers';

const EnlargedImage = ({ src, alt, onClose }) => {
  return (
    <div className="enlarged-image-container">
      <div className="close-button" onClick={onClose}>
        Close
      </div>
      <Magnifier
        imageSrc={src}
        imageAlt={alt}
        magnifierSize="30%"
        style={{ zIndex: 1000 }}
      />
    </div>
  );
};

export default EnlargedImage;
