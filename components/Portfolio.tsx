"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const ease = [0.25, 0.46, 0.45, 0.94] as const;

/* ─── Featured DV7 photos for sports coverage showcase ─── */
const featuredDV7 = [
  "/images/portfolio/produccion/dv7/P1490628.jpg",
  "/images/portfolio/produccion/dv7/P1500532.jpg",
  "/images/portfolio/produccion/dv7/P1480805.jpg",
  "/images/portfolio/produccion/dv7/P1500059.jpg",
];

/* ─── Portfolio projects — one per category, no repeats ─── */
const photoProjects = [
  {
    image: "/images/portfolio/branding/fly-gaming/Laptop.jpg",
    title: "Fly Gaming",
    category: "Branding",
  },
  {
    image: "/images/portfolio/fotografia/qkshine/P1370357_1.jpg",
    title: "QkShine",
    category: "Fotografía",
  },
  {
    image: "/images/portfolio/produccion/dv7/P1490628.jpg",
    title: "DV7 Academy",
    category: "Producción",
  },
  {
    image: "/images/portfolio/fotografia/llaves-arias/DSC_0084.jpg",
    title: "Llaves Arias",
    category: "Fotografía",
  },
  {
    image: "/images/servicios/Marketing.jpg",
    title: "Estrategia Digital",
    category: "Marketing",
  },
];

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const staggerItem = {
  hidden: { opacity: 0, y: 25 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
};

export default function Portfolio() {
  return (
    <section id="portafolio" className="py-24 lg:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
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
              Portafolio
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-900 tracking-tight">
              Nuestro trabajo{" "}
              <span className="text-drama text-primary">habla.</span>
            </h2>
          </div>
          <Link
            href="/portafolio"
            className="mt-6 sm:mt-0 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary-dark transition-colors group"
          >
            Ver todo el portafolio
            <ArrowRight
              size={15}
              className="group-hover:translate-x-1 transition-transform"
            />
          </Link>
        </motion.div>

        {/* === SPORTS COVERAGE SHOWCASE === */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease }}
          className="mb-16 lg:mb-20"
        >
          {/* Section Label */}
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-xs font-bold text-accent uppercase tracking-[0.2em]">
              Cobertura Deportiva
            </span>
            <div className="flex-1 h-px bg-neutral-200" />
          </div>

          {/* DV7 Featured Grid */}
          <div className="group relative rounded-3xl overflow-hidden bg-neutral-900 shadow-2xl shadow-primary/10">
            <div className="grid grid-cols-2 lg:grid-cols-4">
              {featuredDV7.map((src, i) => (
                <div
                  key={src}
                  className="relative aspect-3/4 overflow-hidden"
                >
                  <Image
                    src={src}
                    alt={`DV7 Academy - ${i + 1}`}
                    fill
                    sizes="(max-width: 1024px) 50vw, 25vw"
                    quality={100}
                    className="object-cover hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent" />
                </div>
              ))}
            </div>

            {/* Info overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8 bg-linear-to-t from-black/90 via-black/60 to-transparent">
              <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
                <div>
                  <span className="inline-flex items-center gap-2 rounded-full bg-accent/15 border border-accent/25 px-3 py-1 text-xs font-semibold text-accent mb-3">
                    Producción Deportiva
                  </span>
                  <h3 className="text-xl lg:text-2xl font-bold text-white tracking-tight">
                    DV7 Academy — Cobertura Deportiva
                  </h3>
                  <p className="mt-2 text-sm text-white/60 max-w-xl leading-relaxed">
                    Producción fotográfica integral de la academia de fútbol DV7.
                    Capturamos la energía, disciplina y pasión de jóvenes atletas
                    en acción.
                  </p>
                </div>
                <Link
                  href="/portafolio"
                  className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/15 px-5 py-2.5 text-sm font-semibold text-white hover:bg-white/20 transition-colors shrink-0"
                >
                  Ver proyecto
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </motion.div>

        {/* === PHOTO GALLERY === */}
        <div>
          {/* Photo Section Label */}
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2 h-2 rounded-full bg-primary" />
            <span className="text-xs font-bold text-primary uppercase tracking-[0.2em]">
              Proyectos
            </span>
            <div className="flex-1 h-px bg-neutral-200" />
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6"
          >
            {photoProjects.map((project) => (
              <motion.div
                key={project.title}
                variants={staggerItem}
                className="group relative aspect-4/3 rounded-2xl overflow-hidden cursor-pointer"
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  quality={100}
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-primary-dark/90 via-primary-dark/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center rounded-full bg-white/90 backdrop-blur-sm px-3 py-1 text-xs font-semibold text-primary">
                    {project.category}
                  </span>
                </div>

                {/* Bottom Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-3 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <h3 className="text-lg font-bold text-white">
                    {project.title}
                  </h3>
                  <span className="inline-flex items-center gap-1.5 text-xs text-white/70 mt-2 font-medium">
                    Ver proyecto <ArrowRight size={12} />
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
