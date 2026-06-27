"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MessageCircle, Phone, Mail, MapPin, Send, CheckCircle } from "lucide-react";

const WHATSAPP_NUMBER = "5511999999999"; // Número do cliente — trocar antes de subir

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    course: "",
    employees: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleWhatsApp = () => {
    const lines = [
      `*Contato pelo site — El Brit Treinamentos*`,
      ``,
      `👤 *Nome:* ${formData.name}`,
      formData.company ? `🏢 *Empresa:* ${formData.company}` : "",
      formData.email ? `📧 *E-mail:* ${formData.email}` : "",
      formData.phone ? `📱 *Telefone:* ${formData.phone}` : "",
      formData.course ? `📚 *Curso de interesse:* ${formData.course}` : "",
      formData.employees ? `👥 *Nº de funcionários:* ${formData.employees}` : "",
      formData.message ? `💬 *Mensagem:* ${formData.message}` : "",
    ].filter(Boolean).join("\n");

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lines)}`;
    window.open(url, "_blank");
    setSending(true);
    setTimeout(() => { setSubmitted(true); setSending(false); }, 800);
  };

  const isValid = formData.name.trim() && formData.phone.trim();

  return (
    <section id="contato" className="py-24 bg-slate-900 relative overflow-hidden">
      {/* BG */}
      <div className="absolute inset-0 bg-[url('https://yata-apix-b73e099b-1f97-4317-b839-ebf651fd9f8f.s3-object.locaweb.com.br/6b8b00528dc848b0a50cd6e225fd505c.png')] opacity-5 bg-cover bg-center" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="text-primary-400 font-bold tracking-widest uppercase text-sm">
            Fale conosco
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mt-2 mb-4">
            Solicite uma proposta
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            Preencha o formulário e entraremos em contato pelo WhatsApp em até 2 horas.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">
          {/* Infos de contato */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-6"
          >
            {[
              {
                icon: <MessageCircle className="w-5 h-5" />,
                label: "WhatsApp",
                value: "(11) 9 9999-9999",
                href: `https://wa.me/${WHATSAPP_NUMBER}`,
                color: "text-green-400",
                bg: "bg-green-500/10",
              },
              {
                icon: <Phone className="w-5 h-5" />,
                label: "Telefone",
                value: "(11) 3333-3333",
                href: "tel:+551133333333",
                color: "text-blue-400",
                bg: "bg-blue-500/10",
              },
              {
                icon: <Mail className="w-5 h-5" />,
                label: "E-mail",
                value: "contato@elbritttreinamentos.com.br",
                href: "mailto:contato@elbritttreinamentos.com.br",
                color: "text-purple-400",
                bg: "bg-purple-500/10",
              },
              {
                icon: <MapPin className="w-5 h-5" />,
                label: "Endereço",
                value: "São Paulo / SP",
                href: "#",
                color: "text-orange-400",
                bg: "bg-orange-500/10",
              },
            ].map((item, i) => (
              <a
                key={i}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-5 rounded-2xl bg-slate-800/60 border border-slate-700/50 hover:border-slate-600 transition-all group"
              >
                <div className={`w-12 h-12 rounded-xl ${item.bg} ${item.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                  {item.icon}
                </div>
                <div>
                  <p className="text-slate-400 text-xs font-bold uppercase tracking-wider mb-0.5">{item.label}</p>
                  <p className="text-white font-semibold text-sm">{item.value}</p>
                </div>
              </a>
            ))}

            {/* Quick WhatsApp */}
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Olá! Gostaria de mais informações sobre os cursos da El Brit Treinamentos.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 w-full py-4 bg-green-500 hover:bg-green-400 text-white font-bold rounded-2xl transition-all shadow-lg shadow-green-500/30 hover:shadow-xl hover:-translate-y-1"
            >
              <MessageCircle size={20} />
              Conversar no WhatsApp agora
            </a>
          </motion.div>

          {/* Formulário */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            {submitted ? (
              <div className="bg-slate-800/60 border border-slate-700/50 rounded-3xl p-12 text-center">
                <CheckCircle size={56} className="text-green-400 mx-auto mb-4" />
                <h3 className="text-2xl font-extrabold text-white mb-2">Mensagem enviada!</h3>
                <p className="text-slate-400">Você será redirecionado ao WhatsApp. Responderemos em breve!</p>
              </div>
            ) : (
              <div className="bg-slate-800/60 border border-slate-700/50 rounded-3xl p-8 backdrop-blur-sm">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {[
                    { name: "name", label: "Nome completo *", type: "text", placeholder: "Seu nome", required: true },
                    { name: "phone", label: "WhatsApp / Telefone *", type: "tel", placeholder: "(11) 9 9999-9999", required: true },
                    { name: "email", label: "E-mail", type: "email", placeholder: "seu@email.com", required: false },
                    { name: "company", label: "Empresa", type: "text", placeholder: "Nome da empresa", required: false },
                  ].map((field) => (
                    <div key={field.name}>
                      <label className="block text-slate-300 text-xs font-bold uppercase tracking-wider mb-2">
                        {field.label}
                      </label>
                      <input
                        name={field.name}
                        type={field.type}
                        placeholder={field.placeholder}
                        value={(formData as any)[field.name]}
                        onChange={handleChange}
                        required={field.required}
                        className="w-full bg-slate-700/50 border border-slate-600/50 focus:border-primary-500 focus:ring-1 focus:ring-primary-500/50 text-white placeholder-slate-500 rounded-xl px-4 py-3 text-sm outline-none transition-all"
                      />
                    </div>
                  ))}

                  <div>
                    <label className="block text-slate-300 text-xs font-bold uppercase tracking-wider mb-2">
                      Curso de interesse
                    </label>
                    <select
                      name="course"
                      value={formData.course}
                      onChange={handleChange}
                      className="w-full bg-slate-700/50 border border-slate-600/50 focus:border-primary-500 text-white rounded-xl px-4 py-3 text-sm outline-none transition-all"
                    >
                      <option value="">— Selecione —</option>
                      <optgroup label="Normas Regulamentadoras">
                        {["NR-01", "NR-05", "NR-06", "NR-07", "NR-10", "NR-10 SEP", "NR-12", "NR-13", "NR-17", "NR-18", "NR-20", "NR-23", "NR-33", "NR-35"].map(nr => (
                          <option key={nr} value={nr}>{nr}</option>
                        ))}
                      </optgroup>
                      <optgroup label="Cursos Complementares">
                        {["Brigada de Incêndio", "Primeiros Socorros", "Operador de Empilhadeira", "Operador de Guindaste", "Resgate em Altura", "Resgate em Espaço Confinado", "Direção Defensiva", "LOTO", "Outro"].map(c => (
                          <option key={c} value={c}>{c}</option>
                        ))}
                      </optgroup>
                    </select>
                  </div>

                  <div>
                    <label className="block text-slate-300 text-xs font-bold uppercase tracking-wider mb-2">
                      Nº de funcionários
                    </label>
                    <select
                      name="employees"
                      value={formData.employees}
                      onChange={handleChange}
                      className="w-full bg-slate-700/50 border border-slate-600/50 focus:border-primary-500 text-white rounded-xl px-4 py-3 text-sm outline-none transition-all"
                    >
                      <option value="">— Selecione —</option>
                      <option value="1-5">1 a 5</option>
                      <option value="6-20">6 a 20</option>
                      <option value="21-50">21 a 50</option>
                      <option value="51-100">51 a 100</option>
                      <option value="100+">Mais de 100</option>
                    </select>
                  </div>

                  <div className="sm:col-span-2">
                    <label className="block text-slate-300 text-xs font-bold uppercase tracking-wider mb-2">
                      Mensagem (opcional)
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={3}
                      placeholder="Alguma informação adicional, data específica, local..."
                      className="w-full bg-slate-700/50 border border-slate-600/50 focus:border-primary-500 text-white placeholder-slate-500 rounded-xl px-4 py-3 text-sm outline-none transition-all resize-none"
                    />
                  </div>
                </div>

                <button
                  onClick={handleWhatsApp}
                  disabled={!isValid || sending}
                  className="mt-6 w-full flex items-center justify-center gap-3 bg-green-500 hover:bg-green-400 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-green-500/25 hover:shadow-xl hover:-translate-y-0.5 text-base"
                >
                  {sending ? (
                    <span className="flex items-center gap-2">
                      <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Abrindo WhatsApp...
                    </span>
                  ) : (
                    <>
                      <MessageCircle size={20} />
                      Enviar pelo WhatsApp
                    </>
                  )}
                </button>
                <p className="text-center text-slate-500 text-xs mt-3">
                  * Campos obrigatórios. Seus dados são usados apenas para contato.
                </p>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
