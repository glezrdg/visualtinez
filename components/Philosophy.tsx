"use client";

import { motion } from "framer-motion";

const ease = [0.25, 0.46, 0.45, 0.94] as const;

export default function Philosophy() {
  return (
    <section className="relative py-28 lg:py-40 bg-primary-dark overflow-hidden">
      {/* Grid Pattern */}
      <div className="absolute inset-0 grid-pattern" />

      {/* Decorative Blurs */}
      <div className="absolute top-0 right-0 w-125 h-125 bg-primary-light/8 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-100 h-100 bg-accent/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/3" />

      <div className="relative mx-auto max-w-5xl px-6 lg:px-8">
        {/* Label */}
        <motion.span
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease }}
          className="inline-flex items-center gap-2 text-xs font-semibold text-accent uppercase tracking-[0.2em] mb-10"
        >
          <span className="w-8 h-px bg-accent" />
          Nuestra filosofia
        </motion.span>

        {/* Contrast Statement */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease, delay: 0.1 }}
          className="text-lg md:text-xl text-white/35 leading-relaxed mb-6"
        >
          La mayoria de agencias se enfoca en publicar contenido por publicar.
          Nosotros creamos con proposito.
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease, delay: 0.2 }}
          className="text-drama text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white leading-[1.15]"
        >
          Creatividad con{" "}
          <span className="text-accent">estrategia</span> que genera{" "}
          <span className="text-accent">resultados</span>{" "}
          reales para tu marca.
        </motion.h2>

        {/* Divider + Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-8 sm:gap-16 mt-16 pt-10 border-t border-white/10"
        >
          {[
            { number: "01", text: "Acompanamiento cercano y estrategico" },
            { number: "02", text: "Creatividad + estrategia en un mismo equipo" },
            { number: "03", text: "Ejecucion agil con resultados medibles" },
          ].map((item) => (
            <div key={item.number} className="flex-1">
              <span className="text-xs font-mono text-accent/70 tracking-wider">
                {item.number}
              </span>
              <p className="text-sm text-white/50 mt-2 leading-relaxed">
                {item.text}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
