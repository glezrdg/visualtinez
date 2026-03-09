"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const ease = [0.25, 0.46, 0.45, 0.94] as const;

const clients = [
  {
    name: "DV7 Academy",
    initials: "DV7",
    work: "Cobertura fotográfica deportiva",
    category: "Producción",
  },
  {
    name: "LICEY",
    initials: "LIC",
    work: "Contenido digital deportivo para redes sociales",
    category: "Producción",
  },
  {
    name: "University Soccer",
    initials: "US",
    work: "Producción documental de atletas jóvenes",
    category: "Producción",
  },
  {
    name: "Carla Solís",
    initials: "CS",
    logo: "/images/portfolio/branding/carla-solis/Logo-2-jpg.jpg",
    work: "Identidad visual completa para marca de fitness",
    category: "Branding",
  },
  {
    name: "Fly Gaming",
    initials: "FG",
    logo: "/images/portfolio/branding/fly-gaming/Color.jpg",
    work: "Logotipo y branding para tienda de tecnología",
    category: "Branding",
  },
  {
    name: "Llaves Arias",
    initials: "LA",
    work: "Sesión fotográfica profesional de producto",
    category: "Fotografía",
  },
  {
    name: "QkShine",
    initials: "QK",
    work: "Fotografía de producto y lifestyle",
    category: "Fotografía",
  },
  {
    name: "Yn",
    initials: "YN",
    work: "Sesión fotográfica de marca personal",
    category: "Fotografía",
  },
  {
    name: "Armería Éxito",
    initials: "AE",
    work: "Producción audiovisual de producto",
    category: "Producción",
  },
];

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.06 },
  },
};

const staggerItem = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease } },
};

export default function Clients() {
  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease }}
          className="max-w-2xl mb-16 lg:mb-20"
        >
          <span className="inline-flex items-center gap-2 text-xs font-semibold text-accent uppercase tracking-[0.2em]">
            <span className="w-8 h-px bg-accent" />
            Clientes
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-900 tracking-tight">
            Marcas que confían{" "}
            <span className="text-drama text-primary">en nosotros.</span>
          </h2>
          <p className="mt-5 text-neutral-600 text-lg leading-relaxed">
            Cada proyecto es una alianza. Trabajamos de cerca con marcas que
            buscan resultados reales y un equipo comprometido.
          </p>
        </motion.div>

        {/* Client Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {clients.map((client) => (
            <motion.div
              key={client.name}
              variants={staggerItem}
              className="group flex items-start gap-5 p-6 rounded-2xl bg-neutral-50 border border-neutral-200/60 hover:border-primary/20 hover:bg-primary/[0.03] transition-all duration-500"
            >
              {/* Logo or Initials */}
              <div className="shrink-0">
                {client.logo ? (
                  <div className="relative w-14 h-14 rounded-xl overflow-hidden bg-white border border-neutral-200 shadow-sm">
                    <Image
                      src={client.logo}
                      alt={client.name}
                      fill
                      sizes="56px"
                      quality={100}
                      className="object-contain p-1"
                    />
                  </div>
                ) : (
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                    <span className="text-sm font-bold text-primary">
                      {client.initials}
                    </span>
                  </div>
                )}
              </div>

              {/* Info */}
              <div className="min-w-0">
                <h3 className="text-base font-bold text-neutral-900 group-hover:text-primary transition-colors">
                  {client.name}
                </h3>
                <span className="inline-flex items-center rounded-full bg-primary/8 px-2 py-0.5 text-[10px] font-semibold text-primary uppercase tracking-wider mt-1">
                  {client.category}
                </span>
                <p className="text-sm text-neutral-500 leading-relaxed mt-2">
                  {client.work}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
