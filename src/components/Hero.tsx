import React, { useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useGame } from '../store/GameContext';
import { ChevronDown, Terminal } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export const Hero = () => {
  const { addCoins } = useGame();
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const { t } = useTranslation();

  // Add coins on scroll
  useEffect(() => {
    let lastScroll = 0;
    const handleScroll = () => {
      const current = window.scrollY;
      if (current - lastScroll > 100) {
        addCoins(10);
        lastScroll = current;
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [addCoins]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-950">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(59,130,246,0.1),_rgba(15,23,42,1))]"></div>
      
      {/* Animated grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

      <motion.div 
        style={{ y, opacity }}
        className="relative z-10 text-center px-4 max-w-4xl mx-auto"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
          className="w-32 h-32 mx-auto mb-8 rounded-full flex items-center justify-center border-4 border-blue-500/30 shadow-[0_0_30px_rgba(59,130,246,0.3)] overflow-hidden bg-slate-800"
        >
          <img 
            src="/profile.jpg" 
            alt="Adrián Sánchez Simón" 
            className="w-full h-full object-cover"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.onerror = null;
              target.src = "https://picsum.photos/seed/adrian/200/200";
            }}
          />
        </motion.div>

        <motion.h1 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight"
        >
          {t('hero.name')}
        </motion.h1>
        
        <motion.h2 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 mb-8"
        >
          {t('hero.role')}
        </motion.h2>

        <motion.p 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-lg md:text-xl text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed"
        >
          {t('hero.description')}
        </motion.p>

        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a href="#experience" className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-full font-bold transition-all hover:scale-105 hover:shadow-[0_0_20px_rgba(59,130,246,0.5)]">
            {t('hero.btn.experience')}
          </a>
          <a href="#collection" className="px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white rounded-full font-bold transition-all border border-slate-700 hover:border-slate-500">
            {t('hero.btn.collection')}
          </a>
        </motion.div>
      </motion.div>

      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-slate-500"
      >
        <ChevronDown className="w-8 h-8" />
      </motion.div>
    </section>
  );
};
