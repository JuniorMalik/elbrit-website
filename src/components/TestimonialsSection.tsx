"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Carlos Eduardo",
    role: "Eletricista · Empresa Alpitel",
    text: "O curso de NR-10 SEP foi excelente. Instrutores experientes, ambiente bem equipado e o certificado abriu muitas portas para minha carreira.",
    rating: 5,
    initials: "CE",
    color: "from-blue-500 to-blue-700",
  },
  {
    name: "Ana Paula Ferreira",
    role: "Técnica de Segurança do Trabalho",
    text: "Contratei treinamentos de NR-33 e NR-35 para toda a equipe. Atendimento ágil, material de qualidade e a empresa ficou em conformidade.",
    rating: 5,
    initials: "AP",
    color: "from-primary-500 to-primary-700",
  },
  {
    name: "Roberto Nascimento",
    role: "Supervisor de Obras",
    text: "A El Brit organizou o treinamento na nossa empresa com total flexibilidade de horário. Recomendo para qualquer empresa do setor.",
    rating: 5,
    initials: "RN",
    color: "from-purple-500 to-purple-700",
  },
  {
    name: "Marcos Oliveira",
    role: "Operador de Empilhadeira",
    text: "Fiz o curso de operador de empilhadeira e a prática foi muito completa. Em menos de uma semana já estava trabalhando com a habilitação.",
    rating: 5,
    initials: "MO",
    color: "from-orange-500 to-orange-700",
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={14} className="fill-yellow-400 text-yellow-400" />
      ))}
    </div>
  );
}

export default function TestimonialsSection() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50 to-white pointer-events-none" />
      
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="text-primary-500 font-bold tracking-widest uppercase text-sm">
            Depoimentos
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mt-2 mb-4">
            O que dizem nossos alunos
          </h2>
          <p className="text-slate-500 text-lg max-w-xl mx-auto">
            Profissionais qualificados que transformaram suas carreiras com a El Brit Treinamentos.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.1 }}
              className="bg-white border border-slate-100 rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 relative"
            >
              <Quote size={32} className="text-primary-100 absolute top-6 right-6" />
              
              <StarRating count={t.rating} />
              
              <p className="text-slate-700 mt-4 mb-6 leading-relaxed text-[15px]">
                &ldquo;{t.text}&rdquo;
              </p>

              <div className="flex items-center gap-4 pt-4 border-t border-slate-50">
                <div className={`w-11 h-11 rounded-full bg-gradient-to-br ${t.color} flex items-center justify-center text-white font-bold text-sm flex-shrink-0`}>
                  {t.initials}
                </div>
                <div>
                  <p className="font-bold text-slate-900 text-sm">{t.name}</p>
                  <p className="text-slate-400 text-xs font-medium">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Números */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { value: "5.000+", label: "Alunos Formados" },
            { value: "30+", label: "Cursos Disponíveis" },
            { value: "10 anos", label: "de Experiência" },
            { value: "98%", label: "de Aprovação" },
          ].map((stat, i) => (
            <div key={i} className="bg-slate-50 rounded-2xl p-6 text-center border border-slate-100">
              <p className="text-3xl font-extrabold text-primary-500 mb-1">{stat.value}</p>
              <p className="text-sm font-semibold text-slate-500">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
