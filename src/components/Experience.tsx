import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Code, Database, Server } from 'lucide-react';

const experiences = [
  {
    id: 1,
    role: "FullStack Developer",
    company: "Consultora Tecnológica Global",
    period: "2022 - ACTUALIDAD",
    description: [
      "Diseño e implementación de microservicios con Java Spring Boot y desarrollo de interfaces con React.",
      "Mantenimiento evolutivo de aplicaciones de escritorio en Java Swing.",
      "Gestión de bases de datos relacionales y optimización de consultas (HSQLDB, SQLite, SQL).",
      "Control de versiones con Git (Bitbucket/SourceTree).",
      "Gestión de tareas y equipos en Jira."
    ],
    icon: Server,
    color: "from-blue-500 to-cyan-500"
  },
  {
    id: 2,
    role: "Web Developer & CRM Specialist",
    company: "Empresa del Sector Energético",
    period: "2022 - 2022",
    description: [
      "Lideré la transformación digital, gestionando y personalizando el CRM (Zoho Creator) con Deluge y JavaScript.",
      "Desarrollé y mantuve portales web corporativos utilizando HTML5, CSS3 y ReactJs.",
      "Creé herramientas internas para la gestión de almacenes y seguimiento de KPI."
    ],
    icon: Code,
    color: "from-emerald-500 to-teal-500"
  },
  {
    id: 3,
    role: "Frontend Developer",
    company: "Proyecto Freelance",
    period: "2022 - 2022",
    description: [
      "Desarrollo de una SPA para la gestión de contenido multimedia.",
      "Uso de ReactJs, Material UI (MUI), API REST (TMDB), Firebase (Auth, DB)."
    ],
    icon: Database,
    color: "from-purple-500 to-pink-500"
  },
  {
    id: 4,
    role: "Experiencia Laboral Variada",
    company: "Varios Sectores",
    period: "2019 - 2022",
    description: [
      "Mozo de almacén, Repartidor a domicilio, Camarero, Asistente de piscina.",
      "Desarrollo de habilidades blandas: trabajo en equipo, atención al cliente y resolución de problemas bajo presión."
    ],
    icon: Briefcase,
    color: "from-slate-500 to-gray-500"
  }
];

export const Experience = () => {
  return (
    <section id="experience" className="py-24 bg-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20"></div>
      
      <div className="max-w-5xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">Experiencia Laboral</h2>
          <p className="text-slate-400 text-lg">Mi trayectoria profesional, anonimizada por privacidad.</p>
        </motion.div>

        <div className="relative border-l-4 border-slate-800 ml-4 md:ml-1/2 md:-translate-x-2">
          {experiences.map((exp, index) => {
            const Icon = exp.icon;
            return (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`mb-12 pl-8 md:pl-0 relative flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-[-14px] md:left-1/2 md:-translate-x-1/2 w-6 h-6 rounded-full bg-slate-900 border-4 border-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.5)] z-10"></div>
                
                {/* Content Card */}
                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pl-12' : 'md:pr-12'}`}>
                  <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-2xl border border-slate-700 hover:border-blue-500/50 transition-colors group">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${exp.color} flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-1">{exp.role}</h3>
                    <h4 className="text-blue-400 font-medium mb-2">{exp.company}</h4>
                    <span className="inline-block px-3 py-1 bg-slate-900 text-slate-300 text-sm rounded-full mb-4 font-mono border border-slate-700">
                      {exp.period}
                    </span>
                    
                    <ul className="space-y-2">
                      {exp.description.map((item, i) => (
                        <li key={i} className="text-slate-400 text-sm flex items-start">
                          <span className="mr-2 text-blue-500 mt-1">▹</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
