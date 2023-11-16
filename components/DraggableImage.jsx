// DraggableImage.jsx
'use client'
import {React, useState} from 'react';
import { useDrag } from 'react-dnd';

const DraggableImage = ({ src, alt }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const [{ isDragging }, drag, preview] = useDrag({
    type: 'IMAGE',
    onDrag: (item) => {
      setPosition({ x: item.deltaX, y: item.deltaY });
    },
  });

  return (
    <>
      <div
        ref={(node) => drag(node, preview)}
        className="draggable-image"
        style={{
          opacity: isDragging ? 0.5 : 1,
          cursor: 'grab',
          // position: 'fixed',
          // top: 0,
          // left: 0,
          // zIndex: 1000,
          // transform: `translate(${position.x}px, ${position.y}px)`,
        }}
      >
        <img src={src} alt={alt} />
      </div>
    </>
  );
};

export default DraggableImage;