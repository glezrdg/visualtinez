"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/18492807332";
const ease = [0.25, 0.46, 0.45, 0.94] as const;

export default function CTA() {
  return (
    <section className="py-24 lg:py-32 bg-primary relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-125 h-125 bg-primary-light/15 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-100 h-100 bg-accent/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/3" />
      <div className="absolute inset-0 grid-pattern" />

      <div className="relative mx-auto max-w-4xl px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease }}
        >
          <span className="inline-flex items-center gap-2 text-xs font-semibold text-accent uppercase tracking-[0.2em] mb-6">
            <span className="w-8 h-px bg-accent/50" />
            Listo para empezar
            <span className="w-8 h-px bg-accent/50" />
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight tracking-tight">
            Llevemos tu marca al{" "}
            <span className="text-drama">siguiente nivel.</span>
          </h2>

          <p className="mt-6 text-base lg:text-lg text-white/50 max-w-2xl mx-auto leading-relaxed">
            Respondemos en 1 a 3 horas en horario laboral. Cuentanos sobre tu
            proyecto y te decimos como podemos ayudarte.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
            <Link
              href="/contacto"
              className="btn-magnetic inline-flex items-center gap-2.5 rounded-full bg-white px-8 py-4 text-sm font-semibold text-primary hover:shadow-xl hover:shadow-white/15 transition-shadow group"
            >
              Enviar mensaje
              <ArrowRight
                size={15}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-magnetic inline-flex items-center gap-2.5 rounded-full border border-white/20 bg-white/5 px-8 py-4 text-sm font-semibold text-white hover:bg-white/15 backdrop-blur-sm transition-colors"
            >
              <MessageCircle size={15} />
              WhatsApp directo
            </a>
          </div>

          {/* Response time badge */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-12 inline-flex items-center gap-2 rounded-full bg-white/8 border border-white/10 px-5 py-2 text-xs text-white/50"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 status-pulse" />
            Equipo disponible — Respuesta en 1-3 horas
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
