import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bug } from 'lucide-react';
import { useGame } from '../store/GameContext';

interface BugData {
  id: string;
  x: number;
  y: number;
}

export const BugSpawner = () => {
  const { addCoins } = useGame();
  const [bugs, setBugs] = useState<BugData[]>([]);

  useEffect(() => {
    // Spawn bugs randomly
    const interval = setInterval(() => {
      if (Math.random() > 0.6 && bugs.length < 5) {
        setBugs((prev) => [
          ...prev,
          {
            id: Math.random().toString(36).substr(2, 9),
            x: Math.random() * (window.innerWidth - 50),
            y: Math.random() * (window.innerHeight - 50),
          },
        ]);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [bugs.length]);

  const handleCatch = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setBugs((prev) => prev.filter((b) => b.id !== id));
    addCoins(50);
    
    // Create floating +50 text effect
    const el = document.createElement('div');
    el.innerText = '+50';
    el.className = 'fixed text-yellow-400 font-bold text-xl z-[100] pointer-events-none animate-bounce';
    el.style.left = `${e.clientX}px`;
    el.style.top = `${e.clientY}px`;
    document.body.appendChild(el);
    setTimeout(() => el.remove(), 1000);
  };

  return (
    <div className="fixed inset-0 pointer-events-none z-40">
      <AnimatePresence>
        {bugs.map((bug) => (
          <motion.div
            key={bug.id}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            className="absolute cursor-pointer pointer-events-auto text-green-500 hover:text-green-400 drop-shadow-[0_0_10px_rgba(34,197,94,0.8)]"
            style={{ left: bug.x, top: bug.y }}
            onClick={(e) => handleCatch(bug.id, e)}
          >
            <Bug className="w-8 h-8 animate-pulse" />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};
