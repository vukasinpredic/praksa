import React, { useEffect } from 'react';
import './Glow.css';

const Glow = () => {
  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = e.clientX;
      const y = e.clientY;
      const glowingElement = document.querySelector('.glowing-background');

      glowingElement.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(255,255,255,0.3), transparent)`;
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return <div className="glowing-background"></div>;
};

export default Glow;

