"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/18099314693";
const PHONE = "(809) 931-4693";

const ease = [0.25, 0.46, 0.45, 0.94] as const;

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[700px] overflow-hidden">
      {/* Static Image Background */}
      <Image
        src="/images/hero/HOMEPAGE02..jpg"
        alt="Visual Tinez"
        fill
        priority
        quality={100}
        sizes="100vw"
        className="object-cover"
      />

      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-linear-to-t from-[#001a22] via-black/30 to-transparent" />
      <div className="absolute inset-0 bg-linear-to-r from-[#001a22]/60 to-transparent" />
      <div className="absolute inset-x-0 top-0 h-28 bg-linear-to-b from-black/30 to-transparent" />

      {/* Content */}
      <div className="relative h-full flex flex-col justify-between pt-28 lg:pt-32 pb-10 lg:pb-16">
        {/* Top area — Location Pill */}
        <div className="mx-auto max-w-7xl w-full px-6 lg:px-8">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease, delay: 0.2 }}
            className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/15 px-4 py-1.5 text-xs font-semibold text-white/90 backdrop-blur-sm"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-accent status-pulse" />
            Santo Domingo, RD
          </motion.span>
        </div>

        {/* Bottom area — Main content */}
        <div className="mx-auto max-w-7xl w-full px-6 lg:px-8">
          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: 0.35 }}
            className="max-w-4xl"
          >
            <span className="block text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.08] uppercase">
              Estrategia en acción
            </span>
            <span className="block text-drama text-5xl sm:text-6xl lg:text-[5.5rem] text-white/90 mt-1 lg:mt-2 leading-[1] uppercase">
              Resultados en crecimiento
            </span>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease, delay: 0.5 }}
            className="mt-5 lg:mt-6 text-base lg:text-lg text-white/60 leading-relaxed max-w-xl"
          >
            Trabajamos con marcas que entienden que competir en el entorno
            digital requiere estructura, consistencia y enfoque estratégico.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease, delay: 0.65 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-7 lg:mt-8"
          >
            <Link
              href="/#portafolio"
              className="btn-magnetic inline-flex items-center justify-center gap-2.5 rounded-full bg-accent px-8 py-4 text-sm font-semibold text-white hover:shadow-lg hover:shadow-accent/25 transition-shadow group"
            >
              Ver portafolio
              <ArrowRight
                size={15}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-magnetic inline-flex items-center justify-center gap-2.5 rounded-full border border-white/25 bg-white/5 px-8 py-4 text-sm font-semibold text-white hover:bg-white/15 backdrop-blur-sm transition-colors"
            >
              <MessageCircle size={15} />
              Hablemos por WhatsApp
            </a>
          </motion.div>

          {/* Trust Signals */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="flex items-center gap-6 sm:gap-10 mt-10 lg:mt-12 pt-6 border-t border-white/10"
          >
            {[
              { value: "50+", label: "Proyectos" },
              { value: "4", label: "Servicios" },
              { value: "1-3h", label: "Respuesta" },
            ].map((stat, i) => (
              <div key={stat.label} className="flex items-center gap-6 sm:gap-10">
                <div>
                  <p className="text-2xl lg:text-3xl font-bold text-white">
                    {stat.value}
                  </p>
                  <p className="text-xs text-white/40 mt-0.5 uppercase tracking-wider">
                    {stat.label}
                  </p>
                </div>
                {i < 2 && (
                  <div className="w-px h-10 bg-white/10" />
                )}
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2">
        <div className="w-5 h-8 border border-white/20 rounded-full flex justify-center pt-1.5">
          <div className="w-1 h-1.5 bg-white/50 rounded-full scroll-dot" />
        </div>
      </div>
    </section>
  );
}
