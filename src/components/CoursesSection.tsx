"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Shield, Zap, Wifi, HardHat, ChevronDown, MessageCircle } from "lucide-react";

const NR_COURSES = [
  { code: "NR-01", title: "Disposições Gerais e GRO/PGR", hours: 8, desc: "Fundamentos do gerenciamento de riscos ocupacionais e elaboração do PGR." },
  { code: "NR-05", title: "CIPA", hours: 8, desc: "Comissão Interna de Prevenção de Acidentes — formação de membros e atribuições." },
  { code: "NR-06", title: "Equipamentos de Proteção Individual", hours: 4, desc: "Seleção, uso correto e conservação dos EPIs." },
  { code: "NR-07", title: "PCMSO", hours: 8, desc: "Programa de Controle Médico de Saúde Ocupacional e exames periódicos." },
  { code: "NR-10", title: "Segurança em Eletricidade", hours: 40, desc: "Trabalho em instalações elétricas com segurança — básico e complementar SEP." },
  { code: "NR-10 SEP", title: "Sistema Elétrico de Potência", hours: 40, desc: "Capacitação para atuação no Sistema Elétrico de Potência com ênfase em alta tensão." },
  { code: "NR-11", title: "Transporte e Armazenagem", hours: 8, desc: "Movimentação segura de cargas, operação de equipamentos e sinalização." },
  { code: "NR-12", title: "Máquinas e Equipamentos", hours: 16, desc: "Segurança no uso de máquinas industriais, proteções e procedimentos de bloqueio." },
  { code: "NR-13", title: "Caldeiras e Vasos de Pressão", hours: 24, desc: "Inspeção, operação e segurança em caldeiras e equipamentos pressurizados." },
  { code: "NR-17", title: "Ergonomia", hours: 8, desc: "Adaptação das condições de trabalho às características psicofisiológicas dos trabalhadores." },
  { code: "NR-18", title: "Construção Civil", hours: 8, desc: "Condições de segurança nos canteiros de obras." },
  { code: "NR-20", title: "Inflamáveis e Combustíveis", hours: 16, desc: "Manuseio seguro de líquidos inflamáveis, prevenção de incêndios e explosões." },
  { code: "NR-23", title: "Proteção Contra Incêndios", hours: 16, desc: "Uso de extintores, brigada de incêndio e rotas de fuga." },
  { code: "NR-33", title: "Espaços Confinados", hours: 16, desc: "Supervisor, vigia e trabalhador autorizado para espaços confinados." },
  { code: "NR-35", title: "Trabalho em Altura", hours: 8, desc: "Planejamento, organização e execução de trabalhos em altura com segurança." },
];

const COMPLEMENT_COURSES = [
  { title: "Brigada de Incêndio", hours: 16, icon: "🔥" },
  { title: "Primeiros Socorros", hours: 8, icon: "🩺" },
  { title: "Operador de Empilhadeira", hours: 40, icon: "🏗️" },
  { title: "Operador de Ponte Rolante", hours: 16, icon: "⚙️" },
  { title: "Operador de Guindaste", hours: 24, icon: "🏗️" },
  { title: "Operador de Plataforma (PEMT)", hours: 24, icon: "🔧" },
  { title: "Bloqueio e Etiquetagem (LOTO)", hours: 8, icon: "🔒" },
  { title: "Resgate em Altura", hours: 16, icon: "🧗" },
  { title: "Resgate em Espaço Confinado", hours: 16, icon: "⛑️" },
  { title: "Direção Defensiva", hours: 8, icon: "🚗" },
  { title: "Operação de Subestações", hours: 24, icon: "⚡" },
  { title: "Proteção de Sistemas Elétricos", hours: 16, icon: "🛡️" },
];

type Tab = "nrs" | "complementares";

function CourseCard({ course, onContact }: { course: any; onContact: (name: string) => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      className="group bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 p-6 flex flex-col"
    >
      <div className="flex items-start justify-between mb-3">
        <span className="inline-block bg-primary-50 text-primary-600 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full">
          {course.code || course.icon}
        </span>
        <span className="text-xs font-semibold text-slate-400 bg-slate-50 px-2 py-1 rounded-lg">
          {course.hours}h
        </span>
      </div>
      <h4 className="text-slate-900 font-bold text-base mb-2 leading-snug flex-grow">
        {course.title}
      </h4>
      {course.desc && (
        <p className="text-sm text-slate-500 leading-relaxed mb-4 flex-grow">
          {course.desc}
        </p>
      )}
      <button
        onClick={() => onContact(course.title)}
        className="mt-auto flex items-center justify-center gap-2 bg-green-50 hover:bg-green-500 text-green-600 hover:text-white border border-green-200 hover:border-green-500 px-4 py-2.5 rounded-xl font-bold text-sm transition-all duration-200"
      >
        <MessageCircle size={15} />
        Solicitar via WhatsApp
      </button>
    </motion.div>
  );
}

export default function CoursesSection() {
  const [activeTab, setActiveTab] = useState<Tab>("nrs");

  const handleContact = (courseName: string) => {
    const msg = encodeURIComponent(
      `Olá! Tenho interesse no curso *${courseName}*. Poderia me passar mais informações sobre turmas, valores e datas?`
    );
    window.open(`https://wa.me/5511999999999?text=${msg}`, "_blank");
  };

  return (
    <section id="cursos" className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Decoração */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-primary-100 rounded-full blur-3xl opacity-40 -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-100 rounded-full blur-3xl opacity-40 translate-x-1/2 translate-y-1/2" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="text-primary-500 font-bold tracking-widest uppercase text-sm">
            Catálogo Completo
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mt-2 mb-4">
            Nossos Cursos e Treinamentos
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            Mais de 30 cursos normativos e complementares para capacitar sua equipe conforme a legislação vigente.
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="flex justify-center mb-10">
          <div className="bg-white border border-slate-200 rounded-2xl p-1.5 flex gap-1 shadow-sm">
            {([
              { key: "nrs", label: "Normas Regulamentadoras (NRs)", icon: <Shield size={16} /> },
              { key: "complementares", label: "Cursos Complementares", icon: <HardHat size={16} /> },
            ] as const).map(({ key, label, icon }) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm transition-all duration-200 ${
                  activeTab === key
                    ? "bg-primary-500 text-white shadow-lg shadow-primary-500/30"
                    : "text-slate-500 hover:text-slate-800 hover:bg-slate-50"
                }`}
              >
                {icon}
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.25 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
          >
            {(activeTab === "nrs" ? NR_COURSES : COMPLEMENT_COURSES).map((course, i) => (
              <CourseCard key={i} course={course} onContact={handleContact} />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-primary-600 to-primary-500 rounded-3xl p-10 text-white text-center shadow-2xl shadow-primary-500/30 relative overflow-hidden"
        >
          <div className="absolute inset-0 opacity-10 bg-[url('https://yata-apix-b73e099b-1f97-4317-b839-ebf651fd9f8f.s3-object.locaweb.com.br/6b8b00528dc848b0a50cd6e225fd505c.png')] bg-cover bg-center" />
          <div className="relative z-10">
            <h3 className="text-2xl md:text-3xl font-extrabold mb-3">
              Não encontrou o curso que precisa?
            </h3>
            <p className="text-primary-100 mb-6 text-lg">
              Entre em contato e montamos um treinamento personalizado para a sua empresa.
            </p>
            <button
              onClick={() => handleContact("curso personalizado")}
              className="inline-flex items-center gap-2 bg-white text-primary-600 font-bold px-8 py-4 rounded-full hover:bg-slate-50 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
            >
              <MessageCircle size={20} />
              Falar com Consultor
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
