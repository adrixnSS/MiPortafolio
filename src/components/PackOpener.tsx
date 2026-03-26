import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { useGame, Card as CardType } from '../store/GameContext';
import { Card } from './Card';
import { PackageOpen, X } from 'lucide-react';

export const PackOpener = () => {
  const { coins, buyPack } = useGame();
  const [isOpen, setIsOpen] = useState(false);
  const [revealedCard, setRevealedCard] = useState<CardType | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleOpenPack = () => {
    if (coins < 100) return;
    setIsAnimating(true);
    const card = buyPack();
    
    // Simulate pack opening delay
    setTimeout(() => {
      setRevealedCard(card);
      setIsAnimating(false);
      
      if (card?.rarity === 'legendary' || card?.rarity === 'epic') {
        confetti({
          particleCount: 150,
          spread: 80,
          origin: { y: 0.6 },
          colors: ['#FFD700', '#FFA500', '#FF4500']
        });
      } else {
        confetti({
          particleCount: 50,
          spread: 60,
          origin: { y: 0.6 }
        });
      }
    }, 1500);
  };

  const close = () => {
    setIsOpen(false);
    setRevealedCard(null);
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-40 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-3 rounded-full font-bold shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 hover:scale-105 transition-all flex items-center gap-2"
      >
        <PackageOpen className="w-5 h-5" />
        Abrir Sobre (100 <span className="text-yellow-400">●</span>)
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          >
            <div className="absolute top-6 right-6">
              <button onClick={close} className="text-white/50 hover:text-white transition-colors">
                <X className="w-8 h-8" />
              </button>
            </div>

            <div className="flex flex-col items-center">
              {!revealedCard ? (
                <motion.div
                  animate={isAnimating ? { rotate: [0, -10, 10, -10, 10, 0], scale: [1, 1.1, 1] } : {}}
                  transition={{ duration: 0.5, repeat: isAnimating ? Infinity : 0 }}
                  className="relative cursor-pointer group"
                  onClick={!isAnimating ? handleOpenPack : undefined}
                >
                  <div className="w-64 h-96 bg-gradient-to-br from-blue-600 to-indigo-900 rounded-xl border-4 border-blue-400 shadow-2xl shadow-blue-500/50 flex flex-col items-center justify-center overflow-hidden">
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-30"></div>
                    <PackageOpen className="w-24 h-24 text-blue-300 mb-4 drop-shadow-lg group-hover:scale-110 transition-transform" />
                    <h2 className="text-2xl font-black text-white tracking-widest uppercase drop-shadow-md">Skill Pack</h2>
                    <p className="text-blue-200 font-mono mt-2">Click to open</p>
                  </div>
                  
                  {coins < 100 && !isAnimating && (
                    <div className="absolute inset-0 bg-black/60 rounded-xl flex items-center justify-center backdrop-blur-sm">
                      <p className="text-red-400 font-bold text-lg bg-black/80 px-4 py-2 rounded-lg">Faltan Monedas</p>
                    </div>
                  )}
                </motion.div>
              ) : (
                <motion.div
                  initial={{ scale: 0, rotateY: 180 }}
                  animate={{ scale: 1, rotateY: 0 }}
                  transition={{ type: 'spring', damping: 15 }}
                  className="flex flex-col items-center gap-8"
                >
                  <h2 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500 drop-shadow-lg">
                    ¡Nueva Habilidad!
                  </h2>
                  <div className="scale-150">
                    <Card card={revealedCard} />
                  </div>
                  <button
                    onClick={() => setRevealedCard(null)}
                    className="mt-12 bg-white/10 hover:bg-white/20 text-white px-8 py-3 rounded-full font-bold backdrop-blur-md transition-colors"
                  >
                    Abrir Otro
                  </button>
                </motion.div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
