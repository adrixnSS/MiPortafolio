import React from 'react';
import { motion } from 'framer-motion';
import { useGame, CARDS_DB } from '../store/GameContext';
import { Card } from './Card';

export const CardBinder = () => {
  const { collectedCards, hasCollectedAll } = useGame();

  return (
    <section id="collection" className="py-24 bg-slate-950 relative min-h-screen">
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black text-white mb-4"
          >
            Mi Colección de Habilidades
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-400 text-lg max-w-2xl mx-auto"
          >
            ¡Atrapa bugs, gana monedas y abre sobres para descubrir mi stack tecnológico! 
            Colecciona las {CARDS_DB.length} cartas para desbloquear mi contacto.
          </motion.p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 justify-items-center">
          {CARDS_DB.map((card, index) => {
            const isCollected = collectedCards.includes(card.id);
            return (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <Card card={card} isRevealed={isCollected} />
              </motion.div>
            );
          })}
        </div>

        {hasCollectedAll && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-24 p-8 bg-gradient-to-r from-yellow-500/20 via-amber-500/20 to-yellow-500/20 border border-yellow-500/50 rounded-2xl text-center shadow-[0_0_50px_rgba(234,179,8,0.3)] backdrop-blur-md"
          >
            <h3 className="text-3xl font-black text-yellow-400 mb-4 uppercase tracking-widest">
              ¡Colección Completada!
            </h3>
            <p className="text-white text-lg mb-8">
              Has demostrado ser un verdadero cazador de talento. ¡Hablemos!
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="mailto:sanchezsimonadrian@gmail.com" className="px-8 py-4 bg-yellow-500 hover:bg-yellow-400 text-slate-900 rounded-full font-bold transition-all hover:scale-105 shadow-lg">
                sanchezsimonadrian@gmail.com
              </a>
              <a href="https://linkedin.com/in/adrian-sánchez-simón-" target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-full font-bold transition-all hover:scale-105 shadow-lg">
                LinkedIn
              </a>
              <a href="tel:+34651457733" className="px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white border border-slate-600 rounded-full font-bold transition-all hover:scale-105 shadow-lg">
                +34 651 457 733
              </a>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};
