"use client";

import { motion } from "framer-motion";
import { BookOpen, Users, GraduationCap, MapPin } from "lucide-react";

export default function HowItWorksSection() {
  const steps = [
    {
      icon: <Users className="w-6 h-6" />,
      title: "Aulas Presenciais",
      description: "Interação direta com instrutores e colegas."
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Teoria e Prática",
      description: "Conteúdo focado na realidade do mercado."
    },
    {
      icon: <GraduationCap className="w-6 h-6" />,
      title: "Treinamentos Normativos",
      description: "Forte base nas NR's de segurança vigentes."
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Ambiente Simulado",
      description: "Infraestrutura preparada para simulações reais."
    }
  ];

  return (
    <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://yata-apix-b73e099b-1f97-4317-b839-ebf651fd9f8f.s3-object.locaweb.com.br/6b8b00528dc848b0a50cd6e225fd505c.png')] opacity-10 bg-cover bg-center mix-blend-overlay"></div>
      
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-primary-400 font-bold tracking-widest uppercase text-sm mb-3">
            Metodologia
          </h2>
          <h3 className="text-3xl md:text-5xl font-extrabold text-white">
            Como funciona o curso?
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 p-8 rounded-3xl hover:bg-slate-800 transition-colors"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary-500/20 text-primary-400 flex items-center justify-center mb-6">
                {step.icon}
              </div>
              <h4 className="text-xl font-bold mb-3">{step.title}</h4>
              <p className="text-slate-400">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
