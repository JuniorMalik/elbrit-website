"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-[90vh] flex items-center justify-center pt-20 overflow-hidden"
    >
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://yata-apix-b73e099b-1f97-4317-b839-ebf651fd9f8f.s3-object.locaweb.com.br/d41e0c9987e146bca102e7a038e830a0.png"
          alt="Treinamentos El Brit"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/60 to-slate-900/90 mix-blend-multiply"></div>
      </div>

      <div className="container relative z-10 mx-auto px-6 max-w-5xl flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl"
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight mb-8 drop-shadow-lg">
            Formação e Capacitação <br className="hidden md:block" />
            <span className="text-primary-400">para o Mercado de Trabalho</span>
          </h1>
          
          <p className="text-lg md:text-2xl text-slate-200 mb-10 max-w-3xl mx-auto font-light leading-relaxed drop-shadow-md">
            Cursos normativos e treinamentos técnicos com foco em prática, segurança e qualificação profissional.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#sobre"
              className="group flex items-center gap-2 bg-primary-500 hover:bg-primary-600 text-white px-8 py-4 rounded-full font-bold text-lg transition-all shadow-lg shadow-primary-500/30 hover:shadow-xl hover:-translate-y-1 w-full sm:w-auto justify-center"
            >
              Conheça Nossos Cursos
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#contato"
              className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-full font-bold text-lg transition-all hover:shadow-lg w-full sm:w-auto justify-center flex"
            >
              Fale com um Consultor
            </a>
          </div>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-white/60 text-sm font-medium tracking-widest uppercase">Role para baixo</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-white/60 to-transparent"></div>
      </motion.div>
    </section>
  );
}
