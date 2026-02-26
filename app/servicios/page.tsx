"use client";

import { motion } from "framer-motion";
import {
  Camera,
  Video,
  Share2,
  BarChart3,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const ease = [0.25, 0.46, 0.45, 0.94] as const;

const services = [
  {
    number: "01",
    icon: Camera,
    title: "Fotografía Profesional",
    image: "/images/fundador-camara.jpg",
    description:
      "Capturamos la esencia de tu marca con sesiones fotográficas de alta calidad. Desde producto hasta lifestyle, cada imagen cuenta una historia.",
    features: [
      "Fotografía de producto",
      "Sesiones corporativas",
      "Contenido para redes sociales",
      "Fotografía de eventos",
      "Edición y retoque profesional",
    ],
  },
  {
    number: "02",
    icon: Video,
    title: "Producción Audiovisual",
    image: "/images/workspace.png",
    description:
      "Creamos contenido en video que engancha y convierte. Desde reels hasta producciones completas, tu mensaje cobra vida.",
    features: [
      "Reels y contenido corto",
      "Videos corporativos",
      "Comerciales publicitarios",
      "Contenido para YouTube",
      "Edición y postproducción",
    ],
  },
  {
    number: "03",
    icon: Share2,
    title: "Gestión de Redes Sociales",
    image: "/images/miembro-laptop.png",
    description:
      "Gestionamos tus redes con estrategia. No solo publicamos contenido, construimos comunidad y generamos engagement real.",
    features: [
      "Estrategia de contenido mensual",
      "Diseño de piezas gráficas",
      "Programación y publicación",
      "Community management",
      "Reportes de rendimiento",
    ],
  },
  {
    number: "04",
    icon: BarChart3,
    title: "Marketing Digital",
    image: "/images/equipo-trabajo.jpg",
    description:
      "Estrategia digital completa enfocada en resultados. Publicidad pagada, posicionamiento y campañas que generan retorno real.",
    features: [
      "Publicidad en Meta y Google",
      "Estrategia de posicionamiento",
      "Campañas de conversión",
      "Análisis y optimización",
      "Reportes mensuales de ROI",
    ],
  },
];

export default function ServiciosPage() {
  return (
    <main className="pt-20">
      {/* Header */}
      <section className="py-20 lg:py-28 bg-linear-to-b from-neutral-100 to-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease }}
            className="max-w-3xl"
          >
            <span className="inline-flex items-center gap-2 text-xs font-semibold text-accent uppercase tracking-[0.2em]">
              <span className="w-8 h-px bg-accent" />
              Nuestros servicios
            </span>
            <h1 className="mt-4 text-4xl sm:text-5xl font-bold text-neutral-900 tracking-tight">
              Soluciones integrales para tu{" "}
              <span className="text-drama text-primary">marca.</span>
            </h1>
            <p className="mt-6 text-lg text-neutral-600 leading-relaxed">
              Ofrecemos un acompañamiento completo: desde la producción de
              contenido hasta la estrategia digital. Un solo equipo, todos los
              resultados.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 space-y-24 lg:space-y-32">
          {services.map((service, index) => (
            <motion.div
              key={service.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center"
            >
              {/* Content */}
              <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-6xl lg:text-7xl font-extrabold text-primary/[0.07] leading-none">
                    {service.number}
                  </span>
                  <div className="w-12 h-12 rounded-xl bg-primary/8 flex items-center justify-center">
                    <service.icon size={22} className="text-primary" />
                  </div>
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold text-neutral-900 mb-4 tracking-tight">
                  {service.title}
                </h2>
                <p className="text-neutral-600 leading-relaxed mb-8">
                  {service.description}
                </p>
                <ul className="space-y-3">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-3 text-neutral-700 text-sm"
                    >
                      <CheckCircle2
                        size={16}
                        className="text-primary shrink-0"
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Image */}
              <div
                className={`${
                  index % 2 === 1 ? "lg:order-1" : ""
                } relative aspect-4/3 rounded-2xl overflow-hidden shadow-xl shadow-primary/10`}
              >
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  quality={100}
                  className="object-cover object-[center_10%]"
                />
                {/* Subtle gradient overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-primary-dark/20 to-transparent" />
                {/* Number badge */}
                <div className="absolute top-5 left-5">
                  <span className="inline-flex items-center gap-2 rounded-full bg-white/90 backdrop-blur-sm px-3.5 py-1.5 text-xs font-bold text-primary">
                    <service.icon size={14} />
                    {service.title}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 lg:py-24 bg-primary-dark">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              ¿Necesitas alguno de estos{" "}
              <span className="text-drama">servicios?</span>
            </h2>
            <p className="mt-4 text-white/50 text-lg">
              Cuéntanos sobre tu proyecto y armamos un plan a tu medida.
            </p>
            <Link
              href="/contacto"
              className="btn-magnetic inline-flex items-center gap-2.5 rounded-full bg-accent px-8 py-4 text-sm font-semibold text-white hover:shadow-lg hover:shadow-accent/25 transition-shadow group mt-8"
            >
              Solicitar cotización
              <ArrowRight
                size={15}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
