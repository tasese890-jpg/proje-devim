import React, { useEffect, useState } from 'react';

export const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseDown = () => setClicked(true);
    const handleMouseUp = () => setClicked(false);

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target &&
        (target.tagName === 'A' ||
          target.tagName === 'BUTTON' ||
          target.closest('button') ||
          target.closest('a') ||
          target.classList.contains('cursor-pointer'))
      ) {
        setHovered(true);
      } else {
        setHovered(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  // Hidden on touch screens or outside window
  return (
    <>
      <div
        className={`hidden md:block fixed pointer-events-none z-[99998] rounded-full border-2 transition-all duration-150 ease-out transform -translate-x-1/2 -translate-y-1/2 ${
          hovered
            ? 'w-14 h-14 bg-emerald-500/10 border-amber-400 scale-125'
            : clicked
            ? 'w-7 h-7 bg-rose-500/20 border-rose-500 scale-90'
            : 'w-8 h-8 border-emerald-500'
        }`}
        style={{ left: `${position.x}px`, top: `${position.y}px` }}
      />
      <div
        className={`hidden md:block fixed pointer-events-none z-[99998] rounded-full bg-emerald-500 transition-all duration-75 ease-out transform -translate-x-1/2 -translate-y-1/2 ${
          hovered ? 'w-3 h-3 bg-amber-400' : 'w-2 h-2'
        }`}
        style={{ left: `${position.x}px`, top: `${position.y}px` }}
      />
    </>
  );
};
