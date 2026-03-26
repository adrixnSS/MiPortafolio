import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useMotionTemplate, useMotionValue } from 'framer-motion';
import confetti from 'canvas-confetti';
import { useGame, PROJECTS_DB, Project } from '../store/GameContext';
import { Github, ExternalLink, Gamepad2, Sparkles, X, ChevronDown, Lock, Cpu } from 'lucide-react';
import { useTranslation } from 'react-i18next';

// Holographic Card Component for the Showcase
const ProjectCard = ({ project, key }: { project: Project, key?: string }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const { t } = useTranslation();

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      onMouseMove={handleMouseMove}
      className="group relative flex flex-col justify-between overflow-hidden rounded-2xl bg-slate-900 border border-slate-800 p-6 shadow-2xl transition-all hover:-translate-y-1 hover:shadow-cyan-500/20"
    >
      {/* Holographic Glare Effect */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              rgba(255,255,255,0.1),
              transparent 80%
            )
          `,
        }}
      />
      
      {/* Top Accent Line */}
      <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${project.color}`} />

      <div className="relative z-10">
        <div className="flex items-center justify-between mb-4">
          <div className={`p-2 rounded-lg bg-gradient-to-br ${project.color} bg-opacity-10`}>
            <Cpu className="w-6 h-6 text-white drop-shadow-md" />
          </div>
          <span className="text-xs font-mono text-slate-500 uppercase tracking-widest">
            ID: {project.id}
          </span>
        </div>
        
        <h4 className="text-2xl font-black text-white mb-2 tracking-tight">{t(`projects.${project.id}.title`, { defaultValue: project.title })}</h4>
        <p className="text-slate-400 text-sm leading-relaxed mb-6 line-clamp-3">
          {t(`projects.${project.id}.desc`, { defaultValue: project.description })}
        </p>
      </div>

      <div className="relative z-10 mt-auto">
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map(tag => (
            <span key={tag} className="px-2.5 py-1 bg-slate-950 text-slate-300 text-[10px] uppercase tracking-wider rounded-md border border-slate-800 font-mono">
              {tag}
            </span>
          ))}
        </div>
        
        <div className="flex gap-3">
          <a 
            href={project.github} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 py-2 bg-slate-950 hover:bg-black text-slate-300 hover:text-white rounded-lg text-xs font-bold transition-colors border border-slate-800"
          >
            <Github className="w-4 h-4" /> {t('machine.code')}
          </a>
          <a 
            href={project.url} 
            target="_blank" 
            rel="noopener noreferrer"
            className={`flex-1 flex items-center justify-center gap-2 py-2 bg-gradient-to-r ${project.color} text-white rounded-lg text-xs font-bold transition-all hover:brightness-110 shadow-lg`}
          >
            <ExternalLink className="w-4 h-4" /> {t('machine.live')}
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export const ProjectMachine = () => {
  const { coins, unlockedProjects, playMachine } = useGame();
  const { t } = useTranslation();
  
  // Machine States
  const [isPlaying, setIsPlaying] = useState(false);
  const [clawPos, setClawPos] = useState({ x: 50, y: 10 }); // x: 10-90, y: 10-80
  const [clawOpen, setClawOpen] = useState(true);
  const [grabbedCapsule, setGrabbedCapsule] = useState<string | null>(null);
  const [chuteCapsule, setChuteCapsule] = useState<string | null>(null);
  
  const [revealedProject, setRevealedProject] = useState<Project | null>(null);
  const [showModal, setShowModal] = useState(false);

  const isSoldOut = unlockedProjects.length === PROJECTS_DB.length;

  const handlePlay = async () => {
    if (coins < 50 || isSoldOut || isPlaying) return;
    
    setIsPlaying(true);
    const project = playMachine();
    
    // 1. Move X to random position over capsules
    const targetX = 30 + Math.random() * 40; 
    setClawPos({ x: targetX, y: 10 });
    await new Promise(r => setTimeout(r, 1000));

    // 2. Drop Y
    setClawPos({ x: targetX, y: 75 });
    await new Promise(r => setTimeout(r, 800));

    // 3. Close Claw & Grab
    setClawOpen(false);
    await new Promise(r => setTimeout(r, 300));
    setGrabbedCapsule(project ? project.color : 'from-slate-400 to-slate-600');
    await new Promise(r => setTimeout(r, 500));

    // 4. Raise Y
    setClawPos({ x: targetX, y: 10 });
    await new Promise(r => setTimeout(r, 800));

    // 5. Move X to chute (left side)
    setClawPos({ x: 15, y: 10 });
    await new Promise(r => setTimeout(r, 1000));

    // 6. Open Claw & Drop into chute
    setClawOpen(true);
    setGrabbedCapsule(null);
    setChuteCapsule(project ? project.color : 'from-slate-400 to-slate-600');
    await new Promise(r => setTimeout(r, 600));

    // 7. Clear chute and show modal
    setChuteCapsule(null);
    if (project) {
      setRevealedProject(project);
      setShowModal(true);
      confetti({
        particleCount: 200,
        spread: 100,
        origin: { y: 0.6 },
        colors: ['#06b6d4', '#3b82f6', '#8b5cf6', '#ec4899']
      });
    }
    
    // Reset Claw
    setClawPos({ x: 50, y: 10 });
    setIsPlaying(false);
  };

  const closeReveal = () => {
    setShowModal(false);
    setTimeout(() => setRevealedProject(null), 300);
  };

  return (
    <section id="projects" className="py-32 bg-slate-950 relative overflow-hidden border-t border-slate-900/50">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-cyan-500 opacity-20 blur-[100px]"></div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center justify-center p-3 bg-slate-900/50 rounded-2xl border border-slate-800 mb-6 shadow-2xl"
          >
            <Gamepad2 className="w-8 h-8 text-cyan-400" />
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight"
          >
            {t('machine.title')}
          </motion.h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto font-light">
            {t('machine.desc')}
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-16 items-start">
          
          {/* --- THE CLAW MACHINE (HIGH-TECH REDESIGN) --- */}
          <div className="lg:col-span-5 flex justify-center sticky top-24">
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative w-full max-w-md h-[650px] bg-slate-900 rounded-3xl border border-slate-700 shadow-[0_0_50px_rgba(6,182,212,0.15)] flex flex-col p-5 overflow-hidden"
            >
              {/* Top Sign */}
              <div className="w-full h-16 bg-slate-950 rounded-xl border border-slate-800 mb-5 flex items-center justify-center relative overflow-hidden shadow-inner">
                <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(6,182,212,0.05)_50%,transparent_75%)] bg-[length:20px_20px] animate-[slide_2s_linear_infinite]"></div>
                <h3 className={`font-black text-xl md:text-2xl tracking-[0.2em] z-10 ${isSoldOut ? 'text-red-500 drop-shadow-[0_0_8px_rgba(239,68,68,0.8)]' : isPlaying ? 'text-cyan-400 drop-shadow-[0_0_8px_rgba(6,182,212,0.8)]' : 'text-slate-300'}`}>
                  {isSoldOut ? t('machine.depleted') : isPlaying ? t('machine.extracting') : t('machine.insert_coin')}
                </h3>
              </div>

              {/* Glass Area */}
              <div className="w-full flex-1 bg-slate-950/90 rounded-xl border border-slate-800 shadow-inner relative overflow-hidden">
                {/* Back grid reflection */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/5 to-transparent pointer-events-none"></div>
                
                {/* The Claw System */}
                <motion.div
                  className="absolute top-0 z-20 flex flex-col items-center"
                  animate={{ left: `${clawPos.x}%`, top: `${clawPos.y}%` }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                  style={{ translateX: '-50%' }}
                >
                  {/* Wire */}
                  <div className="w-0.5 bg-slate-400 absolute bottom-full h-[600px] shadow-[0_0_5px_rgba(255,255,255,0.5)]"></div>
                  
                  {/* Claw Head */}
                  <div className="w-10 h-8 bg-slate-800 rounded-t-lg border border-slate-600 relative z-10 shadow-md flex items-center justify-center">
                    <div className="w-full h-1 bg-cyan-500/50 absolute bottom-0 shadow-[0_0_10px_rgba(6,182,212,0.8)]"></div>
                  </div>
                  
                  {/* Prongs */}
                  <div className="flex justify-between w-16 -mt-1 relative z-0">
                    <motion.div
                      animate={{ rotate: clawOpen ? 30 : 5 }}
                      className="w-2 h-14 bg-slate-300 origin-top rounded-b-full shadow-sm"
                    />
                    <motion.div
                      animate={{ rotate: clawOpen ? -30 : -5 }}
                      className="w-2 h-14 bg-slate-300 origin-top rounded-b-full shadow-sm"
                    />
                  </div>

                  {/* Grabbed Capsule */}
                  {grabbedCapsule && (
                    <div className={`absolute top-12 w-12 h-12 rounded-full bg-gradient-to-br ${grabbedCapsule} shadow-[0_0_30px_rgba(255,255,255,0.4)] border border-white/30 z-30 flex items-center justify-center overflow-hidden`}>
                      <div className="w-full h-1/2 bg-white/20 absolute top-0"></div>
                      <Cpu className="w-5 h-5 text-white/80" />
                    </div>
                  )}
                </motion.div>

                {/* Chute Box (Inside Glass) */}
                <div className="absolute bottom-0 left-4 w-24 h-24 border-t border-r border-slate-800 bg-slate-900/80 rounded-tr-2xl flex items-end justify-center pb-2 backdrop-blur-sm">
                  <div className="w-16 h-2 bg-black rounded-full opacity-80 blur-sm"></div>
                </div>

                {/* Dropping Capsule Animation */}
                <AnimatePresence>
                  {chuteCapsule && (
                    <motion.div 
                      initial={{ y: -100, opacity: 1 }}
                      animate={{ y: 250, opacity: 0 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.6, ease: "easeIn" }}
                      className={`absolute top-1/2 left-[10%] w-12 h-12 rounded-full bg-gradient-to-br ${chuteCapsule} shadow-[0_0_20px_rgba(255,255,255,0.3)] border border-white/30 z-10 flex items-center justify-center`}
                    >
                      <Cpu className="w-5 h-5 text-white/80" />
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Capsules Pile */}
                {!isSoldOut && (
                  <div className="absolute bottom-0 right-0 left-32 h-32 flex items-end justify-around pb-2 px-4">
                    {PROJECTS_DB.filter(p => !unlockedProjects.includes(p.id)).map((p, i) => (
                      <div key={p.id} className={`w-12 h-12 rounded-full bg-gradient-to-br ${p.color} shadow-lg border border-white/20 relative overflow-hidden ${i % 2 === 0 ? '-ml-4 mb-4' : '-ml-2'}`}>
                        <div className="w-full h-1/2 bg-white/20 absolute top-0"></div>
                        <div className="absolute inset-0 flex items-center justify-center"><Cpu className="w-4 h-4 text-white/50" /></div>
                      </div>
                    ))}
                  </div>
                )}
                {isSoldOut && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-slate-800 font-black text-5xl rotate-[-15deg] border-4 border-slate-800 p-4 rounded-xl">
                      {t('machine.empty')}
                    </div>
                  </div>
                )}
              </div>

              {/* Control Panel */}
              <div className="w-full mt-5 bg-slate-950 rounded-2xl border border-slate-800 p-5 flex justify-between items-end relative shadow-inner">
                {/* Prize Dispenser Door */}
                <div className="w-24 h-20 bg-slate-900 rounded-xl border border-slate-700 flex flex-col items-center justify-start overflow-hidden relative shadow-inner">
                  <div className="w-full h-12 bg-slate-800 border-b border-slate-600 origin-top transform rotate-x-12 flex items-center justify-center">
                    <span className="text-slate-500 font-mono text-[10px] tracking-widest">DATA PORT</span>
                  </div>
                  <div className="absolute bottom-0 w-full h-4 bg-black/80 blur-sm"></div>
                </div>

                {/* Controls */}
                <div className="flex items-end gap-8">
                  {/* Play Button */}
                  <div className="flex flex-col items-center gap-3">
                    <div className="bg-slate-900 px-4 py-1.5 rounded-md border border-slate-800 shadow-inner">
                      <span className={`font-mono text-xs font-bold tracking-wider ${coins >= 50 ? 'text-cyan-400 animate-pulse' : 'text-red-500'}`}>
                        {coins >= 50 ? t('machine.ready') : t('machine.no_funds')}
                      </span>
                    </div>
                    <button
                      onClick={handlePlay}
                      disabled={coins < 50 || isSoldOut || isPlaying}
                      className="w-20 h-20 rounded-full bg-slate-800 border-2 border-slate-600 shadow-[0_8px_0_rgb(51,65,85),0_15px_20px_rgba(0,0,0,0.4)] active:shadow-[0_0_0_rgb(51,65,85),0_0_0_rgba(0,0,0,0)] active:translate-y-[8px] transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center group relative overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent"></div>
                      <span className={`font-black text-xs md:text-sm tracking-wider drop-shadow-md ${coins >= 50 && !isSoldOut ? 'text-cyan-400 group-hover:text-cyan-300' : 'text-slate-500'}`}>
                        {t('machine.extract')}
                      </span>
                    </button>
                    <span className="text-slate-400 font-mono text-xs flex items-center gap-1">
                      {t('machine.cost')} <span className="text-yellow-400 font-bold">50 ●</span>
                    </span>
                  </div>
                </div>
              </div>

            </motion.div>
          </div>

          {/* --- SHOWCASE (VITRINA) --- */}
          <div className="lg:col-span-7 flex flex-col gap-8">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <h3 className="text-2xl font-bold text-white flex items-center gap-3">
                <Sparkles className="text-cyan-400 w-6 h-6" />
                {t('machine.archive')}
              </h3>
              <div className="text-sm font-mono text-slate-500">
                {t('machine.unlocked')} <span className="text-cyan-400">{unlockedProjects.length}</span> / {PROJECTS_DB.length}
              </div>
            </div>
            
            {unlockedProjects.length === 0 ? (
              <div className="h-64 border border-dashed border-slate-700/50 rounded-3xl flex flex-col items-center justify-center text-slate-500 font-mono bg-slate-900/20">
                <Lock className="w-10 h-10 mb-4 opacity-50" />
                <span>[ {t('machine.locked')} ]</span>
              </div>
            ) : (
              <div className="grid sm:grid-cols-2 gap-6">
                {PROJECTS_DB.filter(p => unlockedProjects.includes(p.id)).map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* --- REVEAL MODAL --- */}
      <AnimatePresence>
        {showModal && revealedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-xl flex items-center justify-center p-4"
          >
            <div className="absolute top-8 right-8">
              <button onClick={closeReveal} className="text-slate-500 hover:text-white transition-colors bg-slate-900 p-3 rounded-full border border-slate-800">
                <X className="w-6 h-6" />
              </button>
            </div>

            <motion.div
              initial={{ scale: 0.8, y: 50, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="max-w-2xl w-full bg-slate-900 rounded-[2rem] p-1 border border-slate-700 shadow-[0_0_100px_rgba(6,182,212,0.2)] relative overflow-hidden"
            >
              <div className="bg-slate-950 rounded-[1.9rem] p-10 relative overflow-hidden">
                {/* Glowing Background */}
                <div className={`absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br ${revealedProject.color} opacity-20 blur-[100px] rounded-full`}></div>
                <div className={`absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr ${revealedProject.color} opacity-20 blur-[100px] rounded-full`}></div>
                
                <div className="relative z-10">
                  <motion.div 
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="flex justify-center mb-8"
                  >
                    <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-cyan-500/10 text-cyan-400 font-mono text-xs tracking-widest uppercase rounded-full border border-cyan-500/30">
                      <Sparkles className="w-4 h-4" /> {t('machine.extracted')}
                    </span>
                  </motion.div>
                  
                  <div className="text-center mb-10">
                    <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight">{t(`projects.${revealedProject.id}.title`, { defaultValue: revealedProject.title })}</h2>
                    <p className="text-slate-400 text-lg leading-relaxed max-w-xl mx-auto">
                      {t(`projects.${revealedProject.id}.desc`, { defaultValue: revealedProject.description })}
                    </p>
                  </div>

                  <div className="flex flex-wrap justify-center gap-3 mb-10">
                    {revealedProject.tags.map(tag => (
                      <span key={tag} className="px-4 py-2 bg-slate-900 text-slate-300 text-xs uppercase tracking-wider rounded-lg border border-slate-800 font-mono">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <a 
                      href={revealedProject.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-3 px-8 py-4 bg-slate-900 hover:bg-slate-800 text-white rounded-xl font-bold transition-colors border border-slate-700 text-sm"
                    >
                      <Github className="w-5 h-5" /> {t('machine.code')}
                    </a>
                    <a 
                      href={revealedProject.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className={`flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r ${revealedProject.color} text-white rounded-xl font-bold transition-all hover:brightness-110 shadow-lg text-sm`}
                    >
                      <ExternalLink className="w-5 h-5" /> {t('machine.live')}
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
