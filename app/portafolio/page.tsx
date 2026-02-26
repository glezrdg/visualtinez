"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Play, Pause, Volume2, VolumeX } from "lucide-react";
import VideoModal from "@/components/VideoModal";

const ease = [0.25, 0.46, 0.45, 0.94] as const;

const categories = ["Todos", "Fotografia", "Branding", "Produccion"];

const projects = [
  {
    image: "/images/branding-mockup.jpg",
    title: "Identidad Visual VT",
    category: "Branding",
    description:
      "Sistema completo de identidad visual incluyendo logo, papeleria y aplicaciones digitales.",
  },
  {
    image: "/images/equipo-trabajo.jpg",
    title: "Sesion Corporativa",
    category: "Fotografia",
    description:
      "Sesion fotografica profesional para equipo de trabajo en estudio.",
  },
  {
    image: "/images/workspace.png",
    title: "Produccion Audiovisual",
    category: "Produccion",
    description:
      "Configuracion y produccion profesional de contenido audiovisual.",
  },
  {
    image: "/images/fundador-camara.jpg",
    title: "Contenido para Redes",
    category: "Fotografia",
    description:
      "Creacion de contenido visual optimizado para plataformas digitales.",
  },
  {
    image: "/images/miembro-laptop.png",
    title: "Contenido Digital",
    category: "Branding",
    description:
      "Creacion de contenido visual para presencia digital y redes sociales.",
  },
  {
    image: "/images/equipo-grupal.jpg",
    title: "Fotografia de Equipo",
    category: "Fotografia",
    description:
      "Sesion grupal para comunicar la identidad y cultura del equipo.",
  },
  {
    image: "/images/fundador-principal.png",
    title: "Fotografia Profesional",
    category: "Fotografia",
    description:
      "Retratos profesionales para posicionamiento de marca personal.",
  },
];

export default function PortafolioPage() {
  const [activeFilter, setActiveFilter] = useState("Todos");
  const [activeVideo, setActiveVideo] = useState<{
    src: string;
    title: string;
  } | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const previewRef = useRef<HTMLVideoElement>(null);

  const filteredProjects =
    activeFilter === "Todos"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  const handlePreviewToggle = () => {
    const vid = previewRef.current;
    if (!vid) return;
    if (isPlaying) {
      vid.pause();
      setIsPlaying(false);
    } else {
      vid.play();
      setIsPlaying(true);
    }
  };

  const handleMuteToggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    const vid = previewRef.current;
    if (!vid) return;
    vid.muted = !vid.muted;
    setIsMuted(!isMuted);
  };

  return (
    <>
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
                Aqui algunos de nuestros trabajos recientes.
              </p>
            </motion.div>
          </div>
        </section>

        {/* VIDEO SHOWCASE SECTION */}
        <section className="py-16 bg-neutral-950">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            {/* Video Section Label */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease, delay: 0.2 }}
              className="mb-10"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                <span className="text-xs font-bold text-accent uppercase tracking-[0.2em]">
                  Videografia
                </span>
                <div className="flex-1 h-px bg-white/10" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                Producciones audiovisuales
              </h2>
              <p className="mt-2 text-sm text-white/40 max-w-lg">
                Contenido en video de alto impacto para marcas que buscan
                destacar y conectar con su audiencia.
              </p>
            </motion.div>

            {/* Featured Video */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease, delay: 0.3 }}
              className="group relative rounded-3xl overflow-hidden shadow-2xl"
            >
              <div className="grid grid-cols-1 lg:grid-cols-5">
                {/* Video Area */}
                <div
                  className="relative lg:col-span-3 aspect-video lg:aspect-auto lg:min-h-96 cursor-pointer"
                  onClick={handlePreviewToggle}
                >
                  <Image
                    src="/images/fundador-principal.png"
                    alt="Comercial de Marca"
                    fill
                    sizes="(max-width: 1024px) 100vw, 60vw"
                    quality={100}
                    className={`object-cover transition-opacity duration-500 ${
                      isPlaying ? "opacity-0" : "opacity-100"
                    }`}
                  />
                  <video
                    ref={previewRef}
                    src="/videos/VIDEO07.MP4"
                    muted={isMuted}
                    playsInline
                    loop
                    className="absolute inset-0 w-full h-full object-cover"
                    onPlay={() => setIsPlaying(true)}
                    onPause={() => setIsPlaying(false)}
                  />

                  {/* Play/Pause Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div
                      className={`flex items-center justify-center rounded-full border-2 border-white/40 backdrop-blur-sm transition-all duration-500 ${
                        isPlaying
                          ? "w-12 h-12 bg-black/30 opacity-0 group-hover:opacity-100"
                          : "w-20 h-20 lg:w-24 lg:h-24 bg-white/15 hover:bg-white/25 hover:scale-110"
                      }`}
                    >
                      {isPlaying ? (
                        <Pause size={20} className="text-white fill-white" />
                      ) : (
                        <Play
                          size={28}
                          className="text-white fill-white ml-1"
                        />
                      )}
                    </div>
                  </div>

                  {/* Mute Toggle */}
                  {isPlaying && (
                    <button
                      onClick={handleMuteToggle}
                      className="absolute bottom-4 left-4 w-9 h-9 rounded-full bg-black/40 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-black/60 transition-colors"
                      aria-label={isMuted ? "Activar sonido" : "Silenciar"}
                    >
                      {isMuted ? (
                        <VolumeX size={16} />
                      ) : (
                        <Volume2 size={16} />
                      )}
                    </button>
                  )}

                  <div className="absolute inset-0 bg-linear-to-r from-transparent via-transparent to-neutral-900/80 hidden lg:block pointer-events-none" />
                  <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-neutral-900 to-transparent lg:hidden pointer-events-none" />
                </div>

                {/* Info Panel */}
                <div className="lg:col-span-2 p-8 lg:p-10 flex flex-col justify-center bg-neutral-900">
                  <span className="inline-flex items-center gap-2 rounded-full bg-accent/15 border border-accent/25 px-3 py-1 text-xs font-semibold text-accent w-fit mb-5">
                    <Play size={10} className="fill-accent" />
                    Video
                  </span>
                  <h3 className="text-2xl lg:text-3xl font-bold text-white tracking-tight">
                    Comercial de Marca
                  </h3>
                  <p className="mt-3 text-sm lg:text-base text-white/50 leading-relaxed">
                    Comercial audiovisual de alto impacto para posicionamiento
                    de marca. Produccion profesional con equipo cinematografico.
                  </p>

                  <button
                    onClick={() =>
                      setActiveVideo({
                        src: "/videos/VIDEO07.MP4",
                        title: "Comercial de Marca",
                      })
                    }
                    className="mt-6 inline-flex items-center gap-2.5 rounded-full bg-white/10 border border-white/15 px-6 py-3 text-sm font-semibold text-white hover:bg-white/20 transition-colors w-fit group/btn"
                  >
                    <Play size={14} className="fill-white" />
                    Ver en pantalla completa
                    <ArrowRight
                      size={14}
                      className="group-hover/btn:translate-x-1 transition-transform"
                    />
                  </button>

                  <div className="flex items-center gap-6 mt-8 pt-6 border-t border-white/10">
                    <div>
                      <p className="text-lg font-bold text-white">HD</p>
                      <p className="text-xs text-white/40 uppercase tracking-wider">
                        Calidad
                      </p>
                    </div>
                    <div className="w-px h-8 bg-white/10" />
                    <div>
                      <p className="text-lg font-bold text-white">33s</p>
                      <p className="text-xs text-white/40 uppercase tracking-wider">
                        Duracion
                      </p>
                    </div>
                    <div className="w-px h-8 bg-white/10" />
                    <div>
                      <p className="text-lg font-bold text-white">720p</p>
                      <p className="text-xs text-white/40 uppercase tracking-wider">
                        Resolucion
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* PHOTO GALLERY */}
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            {/* Filters */}
            <div className="flex flex-wrap gap-2 mb-12">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveFilter(cat)}
                  className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeFilter === cat
                      ? "bg-primary text-white shadow-md shadow-primary/20"
                      : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Grid */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeFilter}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6"
              >
                {filteredProjects.map((project, index) => (
                  <motion.div
                    key={project.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, ease, delay: index * 0.08 }}
                    className="group rounded-2xl overflow-hidden bg-white border border-neutral-200/80 hover:shadow-xl hover:shadow-primary/8 transition-all duration-500"
                  >
                    <div className="relative aspect-4/3 overflow-hidden">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        quality={100}
                        className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="inline-flex items-center rounded-full bg-white/90 backdrop-blur-sm px-3 py-1 text-xs font-semibold text-primary">
                          {project.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-lg font-bold text-neutral-900">
                        {project.title}
                      </h3>
                      <p className="mt-2 text-sm text-neutral-500 leading-relaxed">
                        {project.description}
                      </p>
                      <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary mt-4 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-500">
                        Ver proyecto <ArrowRight size={12} />
                      </span>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </section>
      </main>

      <VideoModal
        videoSrc={activeVideo?.src ?? null}
        title={activeVideo?.title ?? ""}
        onClose={() => setActiveVideo(null)}
      />
    </>
  );
}
