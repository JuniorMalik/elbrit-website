import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "El Brit Treinamentos",
  description: "Formação e Capacitação de Profissionais para o Mercado de Trabalho",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} scroll-smooth antialiased`}>
      <body className="font-sans text-slate-900 bg-slate-50 min-h-screen flex flex-col">
        {children}
      </body>
    </html>
  );
}
