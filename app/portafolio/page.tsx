"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const ease = [0.25, 0.46, 0.45, 0.94] as const;

/* ─── BRANDING PROJECTS ─── */
const brandingProjects = [
  {
    slug: "carla-solis",
    title: "Carla Solís",
    subtitle: "Marca Personal — Entrenamiento Fitness",
    description:
      "Carla Solís es una entrenadora personal enfocada en ayudar a las personas a transformar su físico y adoptar un estilo de vida más saludable a través de la disciplina, el conocimiento y la constancia.",
    challenge:
      "Desarrollar una identidad visual sólida y profesional que transmita autoridad, conocimiento y experiencia, sin perder dinamismo ni energía propios del sector fitness.",
    cover: "/images/portfolio/branding/carla-solis/Logo-2-jpg.jpg",
    images: [
      "/images/portfolio/branding/carla-solis/Carla Solis.jpg",
      "/images/portfolio/branding/carla-solis/GORRA.jpg",
      "/images/portfolio/branding/carla-solis/MOCHILA.jpg",
      "/images/portfolio/branding/carla-solis/Pote02.jpg",
      "/images/portfolio/branding/carla-solis/Tote Bag2.jpg",
      "/images/portfolio/branding/carla-solis/Letrero2.jpg",
      "/images/portfolio/branding/carla-solis/reloj.jpg",
    ],
  },
  {
    slug: "fly-gaming",
    title: "Fly Gaming",
    subtitle: "Tienda Virtual — Tecnología & Gaming",
    description:
      "Fly Gaming es una tienda virtual especializada en la venta de equipos y accesorios tecnológicos para computadoras, desde periféricos hasta componentes esenciales para armar y optimizar setups de alto rendimiento.",
    challenge:
      "Desarrollar un logotipo creativo y atractivo que conectara de inmediato con una audiencia joven y tecnológica, sin perder claridad ni profesionalismo.",
    cover: "/images/portfolio/branding/fly-gaming/Color.jpg",
    images: [
      "/images/portfolio/branding/fly-gaming/Celular.jpg",
      "/images/portfolio/branding/fly-gaming/Laptop.jpg",
      "/images/portfolio/branding/fly-gaming/Gorra.jpg",
      "/images/portfolio/branding/fly-gaming/TSHIRT.jpg",
      "/images/portfolio/branding/fly-gaming/Empaque.jpg",
      "/images/portfolio/branding/fly-gaming/Laptop2.jpg",
    ],
  },
];

/* ─── PHOTOGRAPHY PROJECTS ─── */
const photographyProjects = [
  {
    slug: "llaves-arias",
    title: "Llaves Arias",
    cover: "/images/portfolio/fotografia/llaves-arias/DSC_0054.jpg",
    images: [
      "/images/portfolio/fotografia/llaves-arias/DSC_0058.jpg",
      "/images/portfolio/fotografia/llaves-arias/DSC_0084.jpg",
      "/images/portfolio/fotografia/llaves-arias/DSC_0094.jpg",
      "/images/portfolio/fotografia/llaves-arias/DSC_0106.jpg",
      "/images/portfolio/fotografia/llaves-arias/DSC_0113.jpg",
      "/images/portfolio/fotografia/llaves-arias/DSC_0130.jpg",
    ],
  },
  {
    slug: "qkshine",
    title: "QkShine",
    cover: "/images/portfolio/fotografia/qkshine/P1370357_1.jpg",
    images: [
      "/images/portfolio/fotografia/qkshine/P1370399-2.jpg",
      "/images/portfolio/fotografia/qkshine/P1390261-1.jpg",
      "/images/portfolio/fotografia/qkshine/P1390281.jpg",
      "/images/portfolio/fotografia/qkshine/P1390341.jpg",
    ],
  },
  {
    slug: "yn",
    title: "Yn",
    cover: "/images/portfolio/fotografia/yn/P1240333.JPG",
    images: [
      "/images/portfolio/fotografia/yn/P1240336.JPG",
      "/images/portfolio/fotografia/yn/P1240341.JPG",
      "/images/portfolio/fotografia/yn/P1240402.JPG",
      "/images/portfolio/fotografia/yn/P1240447.JPG",
    ],
  },
];

/* ─── PRODUCTION PROJECTS (full format like branding) ─── */
const productionFullProjects = [
  {
    slug: "dv7",
    title: "DV7 Academy",
    subtitle: "Cobertura Deportiva — Academia de Fútbol",
    description:
      "Producción fotográfica integral realizada para la academia de fútbol DV7. Capturamos la energía, disciplina y pasión de jóvenes atletas durante sus sesiones de entrenamiento.",
    challenge:
      "Capturar la intensidad y emoción de las sesiones de entrenamiento de jóvenes porteros, transmitiendo la disciplina y profesionalismo de la academia DV7 a través de imágenes dinámicas y auténticas.",
    cover: "/images/portfolio/produccion/dv7/P1490628.jpg",
    images: [
      "/images/portfolio/produccion/dv7/P1500532.jpg",
      "/images/portfolio/produccion/dv7/P1480805.jpg",
      "/images/portfolio/produccion/dv7/P1500059.jpg",
      "/images/portfolio/produccion/dv7/P1490038.jpg",
      "/images/portfolio/produccion/dv7/P1490356.jpg",
      "/images/portfolio/produccion/dv7/P1490377.jpg",
      "/images/portfolio/produccion/dv7/P1500311.jpg",
      "/images/portfolio/produccion/dv7/P1500463.jpg",
      "/images/portfolio/produccion/dv7/P1500567.jpg",
      "/images/portfolio/produccion/dv7/P1480808.jpg",
      "/images/portfolio/produccion/dv7/P1480810.jpg",
      "/images/portfolio/produccion/dv7/P1480829.jpg",
      "/images/portfolio/produccion/dv7/P1490629.jpg",
      "/images/portfolio/produccion/dv7/P1490645.jpg",
      "/images/portfolio/produccion/dv7/P1490651.jpg",
      "/images/portfolio/produccion/dv7/P1490684.jpg",
      "/images/portfolio/produccion/dv7/P1500147.jpg",
      "/images/portfolio/produccion/dv7/P1500485.jpg",
      "/images/portfolio/produccion/dv7/P1500546.jpg",
    ],
  },
];

/* ─── PRODUCTION PROJECTS (text-only cards, no photos yet) ─── */
const productionCardProjects = [
  {
    title: "LICEY",
    subtitle: "Contenido Digital Deportivo",
    description:
      "Desarrollo de contenido audiovisual para redes sociales y plataformas digitales del equipo, enfocado en fortalecer la conexión con la fanaticada y elevar la calidad visual de su comunicación.",
  },
  {
    title: "University Soccer",
    subtitle: "Narrativa y Producción Audiovisual Deportiva",
    description:
      "Desarrollo de producciones documentales centradas en atletas jóvenes, construidas a partir de historias reales que resaltan su proceso, disciplina y crecimiento dentro y fuera del campo.",
  },
  {
    title: "Armería Éxito",
    subtitle: "Producción Audiovisual",
    description:
      "Desarrollo de contenido audiovisual enfocado en resaltar la experiencia y el rendimiento de los rifles PCP, mostrando su funcionamiento, precisión y calidad en escenarios reales de uso.",
  },
];

type Tab = "branding" | "fotografia" | "produccion";

export default function PortafolioPage() {
  const [activeTab, setActiveTab] = useState<Tab>("branding");

  const tabs: { key: Tab; label: string }[] = [
    { key: "branding", label: "Branding" },
    { key: "fotografia", label: "Fotografías" },
    { key: "produccion", label: "Producción" },
  ];

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
              Portafolio
            </span>
            <h1 className="mt-4 text-4xl sm:text-5xl font-bold text-neutral-900 tracking-tight">
              Nuestro trabajo habla{" "}
              <span className="text-drama text-primary">por nosotros.</span>
            </h1>
            <p className="mt-6 text-lg text-neutral-600 leading-relaxed">
              Cada proyecto es una oportunidad para crear algo extraordinario.
              Aquí algunos de nuestros trabajos recientes.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Tabs */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 mb-14">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 ${
                  activeTab === tab.key
                    ? "bg-primary text-white shadow-md shadow-primary/20"
                    : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            {/* ─── BRANDING TAB ─── */}
            {activeTab === "branding" && (
              <motion.div
                key="branding"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="space-y-20"
              >
                {brandingProjects.map((project) => (
                  <div key={project.slug}>
                    {/* Cover + Info */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mb-10">
                      <div className="relative aspect-4/3 rounded-2xl overflow-hidden shadow-xl bg-neutral-100">
                        <Image
                          src={project.cover}
                          alt={project.title}
                          fill
                          sizes="(max-width: 1024px) 100vw, 50vw"
                          quality={100}
                          className="object-contain p-4"
                        />
                      </div>
                      <div>
                        <span className="inline-flex items-center rounded-full bg-accent/10 border border-accent/20 px-3 py-1 text-xs font-semibold text-accent mb-4">
                          Branding
                        </span>
                        <h2 className="text-3xl lg:text-4xl font-bold text-neutral-900 tracking-tight">
                          {project.title}
                        </h2>
                        <p className="text-sm text-neutral-500 mt-1 mb-4">
                          {project.subtitle}
                        </p>
                        <p className="text-neutral-600 leading-relaxed mb-4">
                          {project.description}
                        </p>
                        <div className="bg-neutral-100 rounded-xl p-5">
                          <h4 className="text-sm font-bold text-neutral-900 mb-2">
                            Reto
                          </h4>
                          <p className="text-sm text-neutral-600 leading-relaxed">
                            {project.challenge}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Gallery */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                      {project.images.map((img, i) => (
                        <motion.div
                          key={img}
                          initial={{ opacity: 0, y: 15 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{
                            duration: 0.4,
                            ease,
                            delay: i * 0.05,
                          }}
                          className="group relative aspect-square rounded-xl overflow-hidden"
                        >
                          <Image
                            src={img}
                            alt={`${project.title} - ${i + 1}`}
                            fill
                            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                            quality={100}
                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                        </motion.div>
                      ))}
                    </div>
                  </div>
                ))}
              </motion.div>
            )}

            {/* ─── PHOTOGRAPHY TAB ─── */}
            {activeTab === "fotografia" && (
              <motion.div
                key="fotografia"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="space-y-16"
              >
                {photographyProjects.map((project) => (
                  <div key={project.slug}>
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                      <h3 className="text-2xl font-bold text-neutral-900">
                        {project.title}
                      </h3>
                      <div className="flex-1 h-px bg-neutral-200" />
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                      {/* Cover first */}
                      <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, ease }}
                        className="group relative aspect-4/3 rounded-xl overflow-hidden col-span-2 row-span-2"
                      >
                        <Image
                          src={project.cover}
                          alt={project.title}
                          fill
                          sizes="(max-width: 640px) 100vw, 50vw"
                          quality={100}
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </motion.div>
                      {/* Other photos */}
                      {project.images.map((img, i) => (
                        <motion.div
                          key={img}
                          initial={{ opacity: 0, y: 15 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{
                            duration: 0.4,
                            ease,
                            delay: (i + 1) * 0.06,
                          }}
                          className="group relative aspect-4/3 rounded-xl overflow-hidden"
                        >
                          <Image
                            src={img}
                            alt={`${project.title} - ${i + 1}`}
                            fill
                            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                            quality={100}
                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                        </motion.div>
                      ))}
                    </div>
                  </div>
                ))}
              </motion.div>
            )}

            {/* ─── PRODUCTION TAB ─── */}
            {activeTab === "produccion" && (
              <motion.div
                key="produccion"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="space-y-20"
              >
                {/* Full projects (same format as branding) */}
                {productionFullProjects.map((project) => (
                  <div key={project.slug}>
                    {/* Cover + Info */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mb-10">
                      <div className="relative aspect-4/3 rounded-2xl overflow-hidden shadow-xl">
                        <Image
                          src={project.cover}
                          alt={project.title}
                          fill
                          sizes="(max-width: 1024px) 100vw, 50vw"
                          quality={100}
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <span className="inline-flex items-center rounded-full bg-primary/10 border border-primary/20 px-3 py-1 text-xs font-semibold text-primary mb-4">
                          Producción
                        </span>
                        <h2 className="text-3xl lg:text-4xl font-bold text-neutral-900 tracking-tight">
                          {project.title}
                        </h2>
                        <p className="text-sm text-neutral-500 mt-1 mb-4">
                          {project.subtitle}
                        </p>
                        <p className="text-neutral-600 leading-relaxed mb-4">
                          {project.description}
                        </p>
                        <div className="bg-neutral-100 rounded-xl p-5">
                          <h4 className="text-sm font-bold text-neutral-900 mb-2">
                            Reto
                          </h4>
                          <p className="text-sm text-neutral-600 leading-relaxed">
                            {project.challenge}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Gallery */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                      {project.images.map((img, i) => (
                        <motion.div
                          key={img}
                          initial={{ opacity: 0, y: 15 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{
                            duration: 0.4,
                            ease,
                            delay: i * 0.05,
                          }}
                          className="group relative aspect-square rounded-xl overflow-hidden"
                        >
                          <Image
                            src={img}
                            alt={`${project.title} - ${i + 1}`}
                            fill
                            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                            quality={100}
                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                        </motion.div>
                      ))}
                    </div>
                  </div>
                ))}

                {/* Reels showcase */}
                <div className="rounded-3xl overflow-hidden bg-neutral-100 p-6 lg:p-10">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    <span className="text-xs font-bold text-primary uppercase tracking-[0.2em]">
                      Reels
                    </span>
                    <div className="flex-1 h-px bg-neutral-300" />
                  </div>
                  <p className="text-neutral-600 text-sm max-w-2xl mb-8">
                    Contenido vertical de alto impacto para redes sociales.
                  </p>
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                    {[
                      {
                        src: "/videos/reels/VIDEO01.mp4",
                        label: "Reel 01",
                      },
                      {
                        src: "/videos/reels/VIDEO03.MP4",
                        label: "Reel 02",
                      },
                      {
                        src: "/videos/reels/VIDEO05.mp4",
                        label: "Reel 03",
                      },
                      {
                        src: "/videos/reels/VIDEO07.MP4",
                        label: "Reel 04",
                      },
                    ].map((reel, i) => (
                      <motion.div
                        key={reel.src}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                          duration: 0.4,
                          ease,
                          delay: i * 0.1,
                        }}
                        className="relative aspect-9/16 rounded-2xl overflow-hidden bg-neutral-900 shadow-lg"
                      >
                        <video
                          src={reel.src}
                          muted
                          playsInline
                          loop
                          className="absolute inset-0 w-full h-full object-cover"
                          onMouseEnter={(e) =>
                            (e.target as HTMLVideoElement).play()
                          }
                          onMouseLeave={(e) => {
                            const vid = e.target as HTMLVideoElement;
                            vid.pause();
                            vid.currentTime = 0;
                          }}
                        />
                        <div className="absolute bottom-0 left-0 right-0 p-3 bg-linear-to-t from-black/60 to-transparent">
                          <span className="text-xs font-semibold text-white">
                            {reel.label}
                          </span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Other production project cards (text only, no photos yet) */}
                {productionCardProjects.length > 0 && (
                  <div>
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                      <span className="text-xs font-bold text-primary uppercase tracking-[0.2em]">
                        Más proyectos
                      </span>
                      <div className="flex-1 h-px bg-neutral-200" />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {productionCardProjects.map((project, i) => (
                        <motion.div
                          key={project.title}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{
                            duration: 0.4,
                            ease,
                            delay: i * 0.08,
                          }}
                          className="group p-8 rounded-2xl bg-neutral-100 hover:bg-primary/5 border border-neutral-200/80 hover:border-primary/20 transition-all duration-500"
                        >
                          <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary mb-4">
                            Producción
                          </span>
                          <h3 className="text-2xl font-bold text-neutral-900 mb-1">
                            {project.title}
                          </h3>
                          <p className="text-sm text-primary font-medium mb-4">
                            {project.subtitle}
                          </p>
                          <p className="text-sm text-neutral-600 leading-relaxed">
                            {project.description}
                          </p>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
    </main>
  );
}
