import React from 'react';
import { useGame, CARDS_DB } from '../store/GameContext';
import { Coins, Layers } from 'lucide-react';
import { motion } from 'framer-motion';

export const Header = () => {
  const { coins, collectedCards } = useGame();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 p-4 pointer-events-none">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center gap-2 pointer-events-auto">
          <div className="bg-black/50 backdrop-blur-md border border-white/10 rounded-full px-4 py-2 flex items-center gap-2 text-white font-mono shadow-lg shadow-black/50">
            <Coins className="w-5 h-5 text-yellow-400" />
            <motion.span
              key={coins}
              initial={{ scale: 1.5, color: '#facc15' }}
              animate={{ scale: 1, color: '#ffffff' }}
              className="font-bold"
            >
              {coins}
            </motion.span>
          </div>
        </div>

        <div className="flex items-center gap-2 pointer-events-auto">
          <div className="bg-black/50 backdrop-blur-md border border-white/10 rounded-full px-4 py-2 flex items-center gap-2 text-white font-mono shadow-lg shadow-black/50">
            <Layers className="w-5 h-5 text-blue-400" />
            <span className="font-bold">
              {collectedCards.length} / {CARDS_DB.length}
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};
