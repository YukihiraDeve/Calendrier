import React, { useState, useEffect } from 'react';

const MouseLight: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [blur, setBlur] = useState(0); 

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setPosition({ x: event.clientX, y: event.clientY });
      const blurAmount = Math.min(Math.abs(event.movementX + event.movementY), 30);
      setBlur(blurAmount * 0.1);
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div
      className="light"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        filter: `blur(${blur}px)`
      }}
    />
  );
};

export default MouseLight;
