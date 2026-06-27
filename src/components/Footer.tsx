"use client";

import { MessageCircle, Phone, Mail, Camera, Briefcase, ArrowUp } from "lucide-react";

const WHATSAPP_NUMBER = "5511999999999";

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="bg-slate-950 text-white">
      {/* Faixa CTA */}
      <div className="bg-gradient-to-r from-primary-700 to-primary-500 py-10 px-6">
        <div className="container mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl md:text-2xl font-extrabold">Pronto para capacitar sua equipe?</h3>
            <p className="text-primary-100 text-sm mt-1">Treinamentos conforme as NRs vigentes — in company ou em nossa sede.</p>
          </div>
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Olá! Gostaria de solicitar uma proposta de treinamento.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-white text-primary-600 font-bold px-7 py-3.5 rounded-full hover:bg-slate-50 transition-all shadow-lg hover:-translate-y-0.5 flex-shrink-0"
          >
            <MessageCircle size={18} />
            Solicitar Proposta
          </a>
        </div>
      </div>

      {/* Corpo do footer */}
      <div className="container mx-auto max-w-7xl px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Logo + descrição */}
        <div className="md:col-span-2">
          <img
            src="https://yata-apix-b73e099b-1f97-4317-b839-ebf651fd9f8f.s3-object.locaweb.com.br/14b1ebc5dd56479b96b43b57bbad01c1.png"
            alt="El Brit Treinamentos"
            className="h-10 w-auto object-contain mb-5 brightness-0 invert"
          />
          <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
            Formação profissional técnica em segurança do trabalho, eletricidade e telecomunicações. Certificados reconhecidos pelo mercado e em conformidade com as Normas Regulamentadoras.
          </p>
          <div className="flex gap-3 mt-5">
            {[
              { icon: <Camera size={18} />, href: "#", label: "Instagram" },
              { icon: <Briefcase size={18} />, href: "#", label: "LinkedIn" },
              { icon: <MessageCircle size={18} />, href: `https://wa.me/${WHATSAPP_NUMBER}`, label: "WhatsApp" },
            ].map((s, i) => (
              <a
                key={i}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="w-10 h-10 rounded-xl bg-slate-800 hover:bg-primary-500 flex items-center justify-center text-slate-400 hover:text-white transition-all"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Links rápidos */}
        <div>
          <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-5">Navegação</h4>
          <ul className="space-y-3">
            {[
              { label: "Início", href: "#home" },
              { label: "Serviços", href: "#sobre" },
              { label: "Cursos", href: "#cursos" },
              { label: "Inscrição", href: "#inscricao" },
              { label: "Contato", href: "#contato" },
            ].map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-slate-400 hover:text-primary-400 text-sm font-medium transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contato */}
        <div>
          <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-5">Contato</h4>
          <ul className="space-y-4">
            <li>
              <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-slate-400 hover:text-green-400 transition-colors text-sm">
                <MessageCircle size={16} className="flex-shrink-0" />
                (11) 9 9999-9999
              </a>
            </li>
            <li>
              <a href="tel:+551133333333" className="flex items-center gap-3 text-slate-400 hover:text-blue-400 transition-colors text-sm">
                <Phone size={16} className="flex-shrink-0" />
                (11) 3333-3333
              </a>
            </li>
            <li>
              <a href="mailto:contato@elbritttreinamentos.com.br" className="flex items-center gap-3 text-slate-400 hover:text-purple-400 transition-colors text-sm">
                <Mail size={16} className="flex-shrink-0" />
                contato@elbritttreinamentos.com.br
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-slate-800 py-5 px-6">
        <div className="container mx-auto max-w-7xl flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-slate-500 text-xs text-center">
            © {new Date().getFullYear()} El Brit Treinamentos. Todos os direitos reservados.
          </p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-slate-500 hover:text-primary-400 text-xs font-semibold transition-colors"
          >
            <ArrowUp size={14} />
            Voltar ao topo
          </button>
        </div>
      </div>
    </footer>
  );
}
