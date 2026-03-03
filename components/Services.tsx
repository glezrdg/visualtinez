"use client";

import { motion } from "framer-motion";
import { Camera, Video, Share2, BarChart3, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const ease = [0.25, 0.46, 0.45, 0.94] as const;

const services = [
  {
    number: "01",
    icon: Camera,
    title: "Fotografía",
    image: "/images/portfolio/fotografia/llaves-arias/DSC_0054.jpg",
    description:
      "Sesiones fotográficas profesionales para tu marca: producto, corporativas, lifestyle y contenido para redes.",
  },
  {
    number: "02",
    icon: Video,
    title: "Videografía",
    image: "/images/fundador-camara.jpg",
    description:
      "Producción audiovisual completa. Comerciales, contenido para redes y videos corporativos.",
  },
  {
    number: "03",
    icon: Share2,
    title: "Gestión de Redes",
    image: "/images/equipo-trabajo.jpg",
    description:
      "Manejo integral de tus redes sociales con estrategia, contenido y comunidad. No solo publicamos, construimos.",
  },
  {
    number: "04",
    icon: BarChart3,
    title: "Marketing Digital",
    image: "/images/servicios/Marketing.jpg",
    description:
      "Estrategia digital completa: publicidad, posicionamiento y campañas enfocadas en resultados reales.",
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
            className="mt-6 sm:mt-0 btn-magnetic inline-flex items-center gap-2.5 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-white hover:shadow-lg hover:shadow-primary/20 transition-shadow group"
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
            <Link key={service.number} href="/servicios">
              <motion.div
                variants={staggerItem}
                className="group relative rounded-2xl overflow-hidden h-full min-h-70 lg:min-h-80 cursor-pointer"
              >
                {/* Background Image */}
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(max-width: 640px) 100vw, 50vw"
                  quality={100}
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-black/20 group-hover:from-primary-dark/85 group-hover:via-primary-dark/50 group-hover:to-primary-dark/25 transition-colors duration-500" />

                {/* Content */}
                <div className="relative h-full flex flex-col justify-between p-8 lg:p-10">
                  {/* Number + Icon */}
                  <div className="flex items-start justify-between">
                    <span className="text-6xl lg:text-7xl font-extrabold text-white/15 leading-none">
                      {service.number}
                    </span>
                    <div className="w-12 h-12 rounded-xl bg-white/15 backdrop-blur-sm flex items-center justify-center group-hover:bg-white/25 transition-all duration-500">
                      <service.icon size={22} className="text-white" />
                    </div>
                  </div>

                  {/* Text */}
                  <div>
                    <h3 className="text-xl lg:text-2xl font-bold text-white mb-2">
                      {service.title}
                    </h3>
                    <p className="text-white/70 leading-relaxed text-sm">
                      {service.description}
                    </p>

                    {/* Arrow */}
                    <div className="mt-4 pt-4 border-t border-white/15">
                      <span className="inline-flex items-center gap-2 text-sm font-semibold text-white opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-500">
                        Conocer más
                        <ArrowRight size={14} />
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
