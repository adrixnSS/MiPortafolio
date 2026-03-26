import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { Coffee, Atom, Database, GitBranch, Kanban, Layout, Network, Monitor, Flame, Crown } from 'lucide-react';
import { Card as CardType } from '../store/GameContext';
import { cn } from '../lib/utils';
import { useTranslation } from 'react-i18next';

const iconMap: Record<string, React.ElementType> = {
  Coffee, Atom, Database, GitBranch, Kanban, Layout, Network, Monitor, Flame, Crown
};

export const Card = ({ card, isRevealed = true, onClick }: { card: CardType, isRevealed?: boolean, onClick?: () => void }) => {
  const { t } = useTranslation();
  const Icon = iconMap[card.icon] || Coffee;
  const cardRef = useRef<HTMLDivElement>(null);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const rotateX = useTransform(y, [-100, 100], [15, -15]);
  const rotateY = useTransform(x, [-100, 100], [-15, 15]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set(e.clientX - centerX);
    y.set(e.clientY - centerY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  if (!isRevealed) {
    return (
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={onClick}
        className="w-48 h-72 rounded-xl bg-gradient-to-br from-slate-800 to-slate-900 border-2 border-slate-700 shadow-xl flex items-center justify-center cursor-pointer relative overflow-hidden group"
      >
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="w-16 h-16 rounded-full bg-slate-800 border-2 border-slate-600 flex items-center justify-center group-hover:border-blue-500 transition-colors">
          <span className="text-3xl font-bold text-slate-500 group-hover:text-blue-400">?</span>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      ref={cardRef}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      className={cn(
        "w-48 h-72 rounded-xl border-2 shadow-2xl relative overflow-hidden cursor-pointer",
        "bg-slate-900 flex flex-col items-center p-4",
        card.rarity === 'legendary' ? 'border-yellow-400 shadow-yellow-500/50' :
        card.rarity === 'epic' ? 'border-purple-500 shadow-purple-500/50' :
        card.rarity === 'rare' ? 'border-blue-500 shadow-blue-500/50' :
        'border-slate-600 shadow-slate-900/50'
      )}
    >
      {/* Holographic overlay */}
      <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-white/0 pointer-events-none" style={{ transform: "translateZ(20px)" }}></div>
      
      <div className={cn("w-full h-32 rounded-lg mb-4 flex items-center justify-center bg-gradient-to-br", card.color)} style={{ transform: "translateZ(30px)" }}>
        <Icon className="w-16 h-16 text-white drop-shadow-lg" />
      </div>
      
      <h3 className="text-white font-bold text-center text-sm mb-2" style={{ transform: "translateZ(40px)" }}>{t(`cards.${card.id}.title`, { defaultValue: card.title })}</h3>
      <p className="text-slate-400 text-xs text-center leading-tight" style={{ transform: "translateZ(20px)" }}>{t(`cards.${card.id}.desc`, { defaultValue: card.description })}</p>
      
      <div className="absolute bottom-2 right-2" style={{ transform: "translateZ(10px)" }}>
        <span className={cn(
          "text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-full",
          card.rarity === 'legendary' ? 'bg-yellow-500/20 text-yellow-400' :
          card.rarity === 'epic' ? 'bg-purple-500/20 text-purple-400' :
          card.rarity === 'rare' ? 'bg-blue-500/20 text-blue-400' :
          'bg-slate-700/50 text-slate-400'
        )}>
          {card.rarity}
        </span>
      </div>
    </motion.div>
  );
};
