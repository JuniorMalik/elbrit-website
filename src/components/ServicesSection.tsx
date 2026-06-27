"use client";

import { motion } from "framer-motion";
import { Zap, Wifi, ShieldCheck } from "lucide-react";

export default function ServicesSection() {
  const services = [
    {
      icon: <Zap className="w-8 h-8 text-yellow-500" />,
      title: "Formação de Eletricistas",
      description:
        "Capacitação completa para atuação em redes de distribuição, com foco em segurança, procedimentos e prática em campo.",
      color: "from-yellow-500/20 to-transparent",
      borderColor: "group-hover:border-yellow-500/50",
    },
    {
      icon: <Wifi className="w-8 h-8 text-blue-500" />,
      title: "Capacitação em Telecomunicações",
      description:
        "Formação técnica para atuação em redes, instalação e manutenção. Preparamos o profissional para os desafios do setor.",
      color: "from-blue-500/20 to-transparent",
      borderColor: "group-hover:border-blue-500/50",
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-primary-500" />,
      title: "Cursos Normativos (NRs)",
      description:
        "Treinamentos conforme legislação vigente, com aplicação teórica e prática para garantir a conformidade da sua equipe.",
      color: "from-primary-500/20 to-transparent",
      borderColor: "group-hover:border-primary-500/50",
    },
  ];

  return (
    <section id="sobre" className="py-24 bg-white relative z-10">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-primary-500 font-bold tracking-widest uppercase text-sm mb-3">
            O que fazemos?
          </h2>
          <h3 className="text-3xl md:text-5xl font-extrabold text-slate-900">
            Nossas Especialidades
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`group bg-white rounded-3xl p-8 border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 relative overflow-hidden flex flex-col h-full ${service.borderColor}`}
            >
              <div
                className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl ${service.color} opacity-0 group-hover:opacity-100 rounded-bl-full transition-opacity duration-500 -z-10`}
              ></div>
              
              <div className="w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center mb-6 shadow-sm border border-slate-100 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              
              <h4 className="text-xl font-bold text-slate-900 mb-4">
                {service.title}
              </h4>
              
              <p className="text-slate-600 leading-relaxed flex-grow">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Decorative image from original site */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 flex justify-center"
        >
          <img 
            src="https://yata-apix-b73e099b-1f97-4317-b839-ebf651fd9f8f.s3-object.locaweb.com.br/d08533728126442894d51c12dc25fd38.png" 
            alt="Especialidades" 
            className="w-full max-w-4xl object-contain rounded-3xl shadow-2xl"
          />
        </motion.div>
      </div>
    </section>
  );
}
