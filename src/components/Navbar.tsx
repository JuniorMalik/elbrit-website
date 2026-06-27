"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Início", href: "#home" },
    { name: "Serviços", href: "#sobre" },
    { name: "Cursos", href: "#cursos" },
    { name: "Inscrição", href: "#inscricao" },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 backdrop-blur-md shadow-sm py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-6 max-w-7xl flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2">
          {/* Logo Original */}
          <img
            src="https://yata-apix-b73e099b-1f97-4317-b839-ebf651fd9f8f.s3-object.locaweb.com.br/14b1ebc5dd56479b96b43b57bbad01c1.png"
            alt="El Brit Treinamentos"
            className="h-10 md:h-12 w-auto object-contain"
          />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-sm font-semibold tracking-wide uppercase transition-colors ${
                isScrolled ? "text-slate-700 hover:text-primary-500" : "text-white hover:text-primary-200"
              }`}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contato"
            className={`px-5 py-2.5 rounded-full text-sm font-bold transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 ${
              isScrolled
                ? "bg-primary-500 text-white shadow-primary-500/25 hover:bg-primary-600"
                : "bg-white text-primary-600 shadow-black/10 hover:bg-slate-50"
            }`}
          >
            Fale Conosco
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-lg"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X className={isScrolled ? "text-slate-800" : "text-white"} size={28} />
          ) : (
            <Menu className={isScrolled ? "text-slate-800" : "text-white"} size={28} />
          )}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-white shadow-xl border-t border-slate-100 md:hidden"
          >
            <div className="flex flex-col py-4 px-6 gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-slate-800 font-semibold uppercase tracking-wide py-2 border-b border-slate-50"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contato"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-2 text-center bg-primary-500 text-white font-bold py-3 rounded-xl shadow-lg shadow-primary-500/25"
              >
                Fale Conosco
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
