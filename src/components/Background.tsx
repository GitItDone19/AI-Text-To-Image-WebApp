import React, { useEffect, useRef } from 'react';

export function Background() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const createParticle = () => {
      const particle = document.createElement('div');
      particle.className = 'particle';
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.animation = `particle ${3 + Math.random() * 4}s linear`;
      
      container.appendChild(particle);
      
      setTimeout(() => {
        particle.remove();
      }, 7000);
    };

    const interval = setInterval(() => {
      createParticle();
    }, 200);

    return () => clearInterval(interval);
  }, []);

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 bg-gradient-to-br from-[#030014] via-[#0a011f] to-[#020817] overflow-hidden -z-10"
    />
  );
}