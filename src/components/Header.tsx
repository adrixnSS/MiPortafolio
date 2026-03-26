import React from 'react';
import { useGame, CARDS_DB } from '../store/GameContext';
import { Coins, Layers, Globe } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const LanguageSelector = () => {
  const { i18n, t } = useTranslation();
  
  const languages = [
    { code: 'es', label: t('lang.es') },
    { code: 'en-GB', label: t('lang.en-GB') },
    { code: 'en-US', label: t('lang.en-US') },
    { code: 'de', label: t('lang.de') },
    { code: 'nl', label: t('lang.nl') }
  ];

  return (
    <div className="relative group pointer-events-auto">
      <button className="bg-black/50 backdrop-blur-md border border-white/10 rounded-full px-4 py-2 flex items-center gap-2 text-white font-mono shadow-lg shadow-black/50 hover:bg-white/10 transition-colors">
        <Globe className="w-5 h-5 text-blue-400" />
        <span className="font-bold uppercase">{i18n.language}</span>
      </button>
      <div className="absolute top-full right-0 mt-2 w-40 bg-slate-900 border border-white/10 rounded-xl shadow-xl overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
        {languages.map((lang) => (
          <button
            key={lang.code}
            onClick={() => i18n.changeLanguage(lang.code)}
            className={`w-full text-left px-4 py-2 text-sm hover:bg-white/10 transition-colors ${i18n.language === lang.code ? 'text-blue-400 font-bold' : 'text-slate-300'}`}
          >
            {lang.label}
          </button>
        ))}
      </div>
    </div>
  );
};

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
          <LanguageSelector />
        </div>
      </div>
    </header>
  );
};
