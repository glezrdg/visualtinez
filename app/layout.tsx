import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "VT | Estudio Creativo — Produccion Audiovisual & Marketing Digital",
  description:
    "Estudio creativo en Santo Domingo, RD. Produccion audiovisual, fotografia profesional, gestion de redes sociales y marketing digital con enfoque estrategico y resultados medibles.",
  keywords: [
    "produccion audiovisual",
    "fotografia profesional",
    "marketing digital",
    "redes sociales",
    "Santo Domingo",
    "agencia creativa",
    "estudio creativo",
    "VT",
  ],
  openGraph: {
    title: "VT | Estudio Creativo",
    description:
      "Produccion audiovisual y estrategia digital para marcas que quieren crecer.",
    type: "website",
    locale: "es_DO",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${inter.variable} ${plusJakarta.variable} ${cormorant.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
