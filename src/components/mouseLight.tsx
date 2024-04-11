import React, { useState, useEffect } from 'react';

const MouseLight: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [blur, setBlur] = useState(0); // état pour le flou

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setPosition({ x: event.clientX, y: event.clientY });
      // Calculer un flou basé sur une certaine logique, par exemple la vitesse de la souris
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
        filter: `blur(${blur}px)` // Appliquer le flou variable
      }}
    />
  );
};

export default MouseLight;
