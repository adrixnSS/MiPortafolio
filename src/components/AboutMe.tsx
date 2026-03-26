import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Code2, BrainCircuit, Rocket } from 'lucide-react';

export const AboutMe = () => {
  return (
    <section id="about" className="py-32 bg-slate-950 relative overflow-hidden border-t border-slate-900/50">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(6,182,212,0.05)_0%,transparent_70%)] pointer-events-none"></div>
      <div className="absolute right-0 top-1/4 -z-10 h-[400px] w-[400px] rounded-full bg-violet-500 opacity-10 blur-[120px]"></div>
      <div className="absolute left-0 bottom-1/4 -z-10 h-[400px] w-[400px] bg-cyan-500 opacity-10 blur-[120px]"></div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden border border-slate-800 bg-slate-900 aspect-square md:aspect-[4/5] shadow-2xl group">
              {/* Placeholder for actual image - using a tech-themed placeholder for now */}
              <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-950 flex flex-col items-center justify-center text-slate-500">
                <Terminal className="w-24 h-24 mb-4 opacity-20 group-hover:opacity-40 transition-opacity duration-500" />
                <span className="font-mono text-sm tracking-widest uppercase opacity-50 text-center px-4">
                  [ Espacio reservado para foto de estudio ]<br/>
                  <span className="text-xs opacity-70 mt-2 block">Reemplazar con imagen real en el dominio final</span>
                </span>
              </div>
              
              {/* Overlay Effects */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80"></div>
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:12px_12px] opacity-30"></div>
              
              {/* Decorative Corner Elements */}
              <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-cyan-500/50"></div>
              <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-cyan-500/50"></div>
            </div>

            {/* Floating Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="absolute -bottom-8 -right-8 bg-slate-900 border border-slate-700 p-6 rounded-2xl shadow-xl backdrop-blur-md hidden md:block"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 bg-cyan-500/10 rounded-xl">
                  <Code2 className="w-8 h-8 text-cyan-400" />
                </div>
                <div>
                  <p className="text-slate-400 text-sm font-mono uppercase tracking-wider">Status</p>
                  <p className="text-white font-bold text-lg">Building the Future</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Text Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-cyan-400 text-xs font-mono uppercase tracking-widest mb-6 w-fit">
              <BrainCircuit className="w-4 h-4" />
              <span>System Architect</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-black text-white mb-8 tracking-tight leading-tight">
              Transformando <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-500">Lógica</span> en Experiencias.
            </h2>

            <div className="space-y-6 text-slate-400 text-lg leading-relaxed font-light">
              <p>
                No solo escribo código; diseño sistemas. Mi enfoque se basa en la intersección entre la ingeniería de software rigurosa y la creatividad sin límites. Creo firmemente que las mejores soluciones tecnológicas son aquellas que, además de ser eficientes, resultan intuitivas y cautivadoras para el usuario.
              </p>
              
              <div className="pl-6 border-l-2 border-cyan-500/30 py-2 my-8">
                <p className="text-slate-300 italic">
                  "Mi ambición no es solo resolver problemas complejos, sino hacerlo de una manera que parezca magia."
                </p>
              </div>

              <p>
                Busco constantemente desafiar los límites de lo posible en el desarrollo web y de software. Mi objetivo a largo plazo es liderar proyectos que tengan un impacto real, combinando arquitecturas escalables con interfaces que enganchen desde el primer clic.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-6">
              <div className="bg-slate-900/50 p-4 rounded-xl border border-slate-800">
                <h4 className="text-white font-bold mb-2 flex items-center gap-2">
                  <Rocket className="w-4 h-4 text-violet-400" /> Visión
                </h4>
                <p className="text-sm text-slate-500">Crear productos digitales que destaquen por su rendimiento y diseño.</p>
              </div>
              <div className="bg-slate-900/50 p-4 rounded-xl border border-slate-800">
                <h4 className="text-white font-bold mb-2 flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-cyan-400" /> Mindset
                </h4>
                <p className="text-sm text-slate-500">Aprendizaje continuo, adaptabilidad y obsesión por el detalle.</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
