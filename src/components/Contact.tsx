import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MessageCircle, Send } from 'lucide-react';

export const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-slate-950 relative overflow-hidden border-t border-slate-900">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_100%,_rgba(59,130,246,0.1),_rgba(15,23,42,1))]"></div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>

      <div className="max-w-5xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="w-20 h-20 mx-auto mb-6 bg-blue-500/10 rounded-full flex items-center justify-center border border-blue-500/30 shadow-[0_0_30px_rgba(59,130,246,0.3)]"
          >
            <Send className="w-10 h-10 text-blue-400 ml-1" />
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black text-white mb-4 tracking-tight"
          >
            ¿Hablamos?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-400 text-lg max-w-2xl mx-auto"
          >
            Si te ha gustado lo que has visto y buscas un desarrollador FullStack apasionado, resolutivo y con ganas de aportar valor, no dudes en contactarme.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* WhatsApp Card */}
          <motion.a
            href="https://wa.me/34651457733"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05, translateY: -10 }}
            className="group relative bg-slate-900 rounded-3xl p-8 border border-slate-800 hover:border-green-500/50 transition-all overflow-hidden shadow-2xl"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="absolute -right-10 -top-10 w-40 h-40 bg-green-500/20 blur-3xl rounded-full group-hover:bg-green-500/30 transition-colors"></div>
            
            <div className="relative z-10 flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-green-500/20 rounded-2xl flex items-center justify-center mb-6 text-green-400 group-hover:scale-110 group-hover:bg-green-500 group-hover:text-white transition-all duration-300">
                <MessageCircle className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">WhatsApp</h3>
              <p className="text-slate-400 mb-6">Respuesta rápida. Ideal para una primera toma de contacto o dudas urgentes.</p>
              <span className="text-green-400 font-mono font-bold text-lg bg-green-500/10 px-4 py-2 rounded-lg border border-green-500/20">
                +34 651 457 733
              </span>
            </div>
          </motion.a>

          {/* Email Card */}
          <motion.a
            href="mailto:sanchezsimonadrian@gmail.com"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05, translateY: -10 }}
            className="group relative bg-slate-900 rounded-3xl p-8 border border-slate-800 hover:border-blue-500/50 transition-all overflow-hidden shadow-2xl"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="absolute -left-10 -bottom-10 w-40 h-40 bg-blue-500/20 blur-3xl rounded-full group-hover:bg-blue-500/30 transition-colors"></div>
            
            <div className="relative z-10 flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-blue-500/20 rounded-2xl flex items-center justify-center mb-6 text-blue-400 group-hover:scale-110 group-hover:bg-blue-500 group-hover:text-white transition-all duration-300">
                <Mail className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Email</h3>
              <p className="text-slate-400 mb-6">Para propuestas formales, ofertas de trabajo o detalles extensos sobre proyectos.</p>
              <span className="text-blue-400 font-mono font-bold text-sm sm:text-base bg-blue-500/10 px-4 py-2 rounded-lg border border-blue-500/20 break-all">
                sanchezsimonadrian@gmail.com
              </span>
            </div>
          </motion.a>
        </div>
      </div>
    </section>
  );
};
