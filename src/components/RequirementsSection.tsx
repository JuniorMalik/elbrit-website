"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export default function RequirementsSection() {
  const requirements = [
    "Mais de 18 anos completos",
    "Ensino fundamental completo",
    "Carteira Nacional de Habilitação (CNH)",
    "Disponibilidade total de horário",
  ];

  return (
    <section id="inscricao" className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary-50 to-transparent -z-10"></div>
      
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 w-full"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-tr from-primary-200 to-blue-200 rounded-[2.5rem] blur-xl opacity-50"></div>
              <img 
                src="https://yata-apix-b73e099b-1f97-4317-b839-ebf651fd9f8f.s3-object.locaweb.com.br/293b29d1dc454bdd84bf25059fa6fafd.png" 
                alt="Treinamentos práticos" 
                className="relative w-full rounded-3xl shadow-2xl object-cover"
              />
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <h2 className="text-primary-500 font-bold tracking-widest uppercase text-sm mb-3">
              Pré-requisitos
            </h2>
            <h3 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6">
              Quem pode participar?
            </h3>
            
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Se você tem vontade de aprender e deseja entrar no mercado de trabalho com qualificação de excelência, a El Brit Treinamentos pode ser o seu próximo passo profissional.
            </p>

            <ul className="space-y-4 mb-10">
              {requirements.map((req, index) => (
                <li key={index} className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary-100 flex items-center justify-center text-primary-600">
                    <CheckCircle2 size={16} />
                  </div>
                  <span className="text-slate-700 font-medium">{req}</span>
                </li>
              ))}
            </ul>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 border-l-4 border-l-primary-500">
              <p className="text-slate-600 italic">
                As atividades são realizadas de forma presencial em São Paulo/SP, com foco em formação técnica, prática em campo e desenvolvimento profissional.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
