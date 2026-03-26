import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHoverDevice, setIsHoverDevice] = useState(true);

  useEffect(() => {
    if (window.matchMedia('(hover: none) and (pointer: coarse)').matches) {
      setIsHoverDevice(false);
      return;
    }

    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', updateMousePosition);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
    };
  }, []);

  if (!isHoverDevice) return null;

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-4 h-4 bg-blue-500 rounded-full pointer-events-none z-[9999] mix-blend-screen shadow-[0_0_10px_rgba(59,130,246,0.8)]"
        animate={{ x: mousePosition.x - 8, y: mousePosition.y - 8 }}
        transition={{ type: 'tween', ease: 'backOut', duration: 0.1 }}
      />
      <motion.div
        className="fixed top-0 left-0 w-12 h-12 border border-blue-400/50 rounded-full pointer-events-none z-[9998] mix-blend-screen"
        animate={{ x: mousePosition.x - 24, y: mousePosition.y - 24 }}
        transition={{ type: 'tween', ease: 'easeOut', duration: 0.3 }}
      />
    </>
  );
};
