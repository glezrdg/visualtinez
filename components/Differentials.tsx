"use client";

import { motion } from "framer-motion";
import { Users, Lightbulb, TrendingUp } from "lucide-react";

const ease = [0.25, 0.46, 0.45, 0.94] as const;

const differentials = [
  {
    icon: Users,
    title: "Acompanamiento cercano",
    description:
      "No solo ejecutamos, hacemos seguimiento estrategico constante. Tu marca siempre tiene un equipo detras.",
    stat: "24/7",
    statLabel: "Seguimiento",
  },
  {
    icon: Lightbulb,
    title: "Creatividad + Estrategia",
    description:
      "Integramos la vision creativa con un plan estrategico solido. Todo lo que creamos tiene un proposito.",
    stat: "100%",
    statLabel: "Personalizado",
  },
  {
    icon: TrendingUp,
    title: "Resultados medibles",
    description:
      "Ejecucion agil con enfoque en metricas reales. No hacemos contenido por hacer, buscamos impacto.",
    stat: "ROI",
    statLabel: "Comprobable",
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
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
};

export default function Differentials() {
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
            Por que elegirnos
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-900 tracking-tight">
            Lo que nos hace{" "}
            <span className="text-drama text-primary">diferentes.</span>
          </h2>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
        >
          {differentials.map((item) => (
            <motion.div
              key={item.title}
              variants={staggerItem}
              className="group relative p-8 lg:p-10 rounded-3xl bg-neutral-100/70 hover:bg-primary hover:shadow-xl hover:shadow-primary/15 transition-all duration-500 border border-transparent hover:border-primary-light/20"
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-2xl bg-primary/10 group-hover:bg-white/15 flex items-center justify-center mb-8 transition-colors duration-500">
                <item.icon
                  size={22}
                  className="text-primary group-hover:text-white transition-colors duration-500"
                />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-neutral-900 group-hover:text-white mb-3 transition-colors duration-500">
                {item.title}
              </h3>
              <p className="text-neutral-600 group-hover:text-white/70 leading-relaxed transition-colors duration-500">
                {item.description}
              </p>

              {/* Stat */}
              <div className="mt-8 pt-6 border-t border-neutral-200/50 group-hover:border-white/15 transition-colors duration-500">
                <span className="text-2xl font-bold text-primary group-hover:text-accent transition-colors duration-500">
                  {item.stat}
                </span>
                <span className="ml-2 text-xs text-neutral-500 group-hover:text-white/50 uppercase tracking-wider transition-colors duration-500">
                  {item.statLabel}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
