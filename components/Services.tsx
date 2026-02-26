"use client";

import { motion } from "framer-motion";
import { Camera, Video, Share2, BarChart3, ArrowRight } from "lucide-react";
import Link from "next/link";

const ease = [0.25, 0.46, 0.45, 0.94] as const;

const services = [
  {
    number: "01",
    icon: Camera,
    title: "Fotografia",
    description:
      "Sesiones fotograficas profesionales para tu marca. Producto, corporativas, lifestyle y contenido para redes.",
  },
  {
    number: "02",
    icon: Video,
    title: "Videografia",
    description:
      "Produccion audiovisual completa. Reels, comerciales, contenido para redes y videos corporativos.",
  },
  {
    number: "03",
    icon: Share2,
    title: "Gestion de Redes",
    description:
      "Manejo integral de tus redes sociales con estrategia, contenido y comunidad. No solo publicamos, construimos.",
  },
  {
    number: "04",
    icon: BarChart3,
    title: "Marketing Digital",
    description:
      "Estrategia digital completa. Publicidad, posicionamiento y campanas enfocadas en resultados reales.",
  },
];

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const staggerItem = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
};

export default function Services() {
  return (
    <section id="servicios" className="py-24 lg:py-32 bg-neutral-100">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease }}
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-16 lg:mb-20"
        >
          <div>
            <span className="inline-flex items-center gap-2 text-xs font-semibold text-accent uppercase tracking-[0.2em]">
              <span className="w-8 h-px bg-accent" />
              Nuestros servicios
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-900 tracking-tight">
              Todo lo que tu marca{" "}
              <span className="text-drama text-primary">necesita.</span>
            </h2>
          </div>
          <Link
            href="/servicios"
            className="mt-6 sm:mt-0 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary-dark transition-colors group"
          >
            Ver todos los servicios
            <ArrowRight
              size={15}
              className="group-hover:translate-x-1 transition-transform"
            />
          </Link>
        </motion.div>

        {/* Service Cards Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-5 lg:gap-6"
        >
          {services.map((service) => (
            <motion.div
              key={service.number}
              variants={staggerItem}
              className="group relative p-8 lg:p-10 rounded-2xl bg-white hover:shadow-xl hover:shadow-primary/8 transition-all duration-500 border border-neutral-200/80 hover:border-primary/20"
            >
              {/* Number + Icon */}
              <div className="flex items-start justify-between mb-8">
                <span className="text-6xl lg:text-7xl font-extrabold text-primary/[0.07] group-hover:text-primary/15 transition-colors duration-500 leading-none">
                  {service.number}
                </span>
                <div className="w-12 h-12 rounded-xl bg-primary/8 flex items-center justify-center group-hover:bg-primary group-hover:shadow-lg group-hover:shadow-primary/20 transition-all duration-500">
                  <service.icon
                    size={22}
                    className="text-primary group-hover:text-white transition-colors duration-500"
                  />
                </div>
              </div>

              {/* Content */}
              <h3 className="text-xl lg:text-2xl font-bold text-neutral-900 mb-3">
                {service.title}
              </h3>
              <p className="text-neutral-600 leading-relaxed">
                {service.description}
              </p>

              {/* Arrow */}
              <div className="mt-6 pt-5 border-t border-neutral-100 group-hover:border-primary/10 transition-colors">
                <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-500">
                  Conocer mas
                  <ArrowRight size={14} />
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
