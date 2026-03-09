"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const ease = [0.25, 0.46, 0.45, 0.94] as const;

const teamMembers = [
  {
    image: "/images/jolbert.png",
    name: "Jolbert Espinal",
    role: "Fundador y Estratega",
  },
  {
    image: "/images/leonardo.jpg",
    name: "Leonardo Almonte",
    role: "Productor de Contenido Digital",
  },
  {
    image: "/images/nicolas.png",
    name: "Nicolás Peralta",
    role: "Estratega de Medios Digitales",
  },
];

export default function Team() {
  return (
    <section id="equipo" className="py-24 lg:py-32 bg-neutral-100">
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
            Nuestro equipo
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-900 tracking-tight">
            Tu equipo creativo{" "}
            <span className="text-drama text-primary">fijo.</span>
          </h2>
          <p className="mt-5 text-neutral-600 text-lg leading-relaxed">
            No somos freelancers, somos tu equipo. Trabajamos contigo mes a mes
            con acompañamiento continuo y resultados medibles.
          </p>
        </motion.div>

        {/* Group Photo — reduced height */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease }}
          className="relative aspect-21/9 rounded-2xl overflow-hidden mb-14 shadow-xl shadow-primary/10"
        >
          <Image
            src="/images/equipo-trabajo.jpg"
            alt="Equipo Visual Tinez"
            fill
            sizes="(max-width: 768px) 100vw, 1280px"
            quality={100}
            className="object-cover object-[center_20%]"
          />
          <div className="absolute inset-0 bg-linear-to-t from-primary-dark/20 to-transparent" />
        </motion.div>

        {/* Individual Members — bigger photos */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 lg:gap-12">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease, delay: index * 0.1 }}
              className="group text-center"
            >
              <div className="relative w-40 h-40 lg:w-48 lg:h-48 mx-auto rounded-full overflow-hidden mb-5 border-4 border-white shadow-lg group-hover:shadow-xl group-hover:shadow-primary/10 transition-shadow duration-500">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  sizes="192px"
                  quality={100}
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="text-xl font-bold text-neutral-900">
                {member.name}
              </h3>
              <p className="text-sm text-neutral-500 mt-1">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
