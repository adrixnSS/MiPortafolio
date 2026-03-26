import React from 'react';
import { GameProvider } from './store/GameContext';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Experience } from './components/Experience';
import { CardBinder } from './components/CardBinder';
import { BugSpawner } from './components/BugSpawner';
import { PackOpener } from './components/PackOpener';
import { CustomCursor } from './components/CustomCursor';
import { ProjectMachine } from './components/ProjectMachine';
import { Contact } from './components/Contact';
import { AboutMe } from './components/AboutMe';

export default function App() {
  return (
    <GameProvider>
      <div className="bg-slate-950 min-h-screen text-slate-50 font-sans selection:bg-blue-500/30 overflow-x-hidden">
        <CustomCursor />
        <Header />
        <BugSpawner />
        <main>
          <Hero />
          <Experience />
          <ProjectMachine />
          <CardBinder />
          <AboutMe />
          <Contact />
        </main>
        <PackOpener />
        
        <footer className="py-8 text-center text-slate-500 bg-slate-950 border-t border-slate-900">
          <p>© {new Date().getFullYear()} Adrián Sánchez Simón. Portfolio Interactivo.</p>
        </footer>
      </div>
    </GameProvider>
  );
}
