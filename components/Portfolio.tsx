"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Play, Pause, Volume2, VolumeX } from "lucide-react";
import VideoModal from "./VideoModal";

const ease = [0.25, 0.46, 0.45, 0.94] as const;

const photoProjects = [
  {
    image: "/images/branding-mockup.jpg",
    title: "Identidad Visual VT",
    category: "Branding",
  },
  {
    image: "/images/equipo-trabajo.jpg",
    title: "Sesión Corporativa",
    category: "Fotografía",
  },
  {
    image: "/images/workspace.png",
    title: "Producción Audiovisual",
    category: "Producción",
  },
  {
    image: "/images/fundador-camara.jpg",
    title: "Contenido para Redes",
    category: "Fotografía",
  },
  {
    image: "/images/miembro-laptop.png",
    title: "Contenido Digital",
    category: "Branding",
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
  const [activeVideo, setActiveVideo] = useState<{
    src: string;
    title: string;
  } | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const previewRef = useRef<HTMLVideoElement>(null);

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

          {/* === VIDEO SHOWCASE === */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease }}
            className="mb-16 lg:mb-20"
          >
            {/* Video Section Label */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-xs font-bold text-accent uppercase tracking-[0.2em]">
                Videografía
              </span>
              <div className="flex-1 h-px bg-neutral-200" />
            </div>

            {/* Featured Video Card */}
            <div className="group relative rounded-3xl overflow-hidden bg-neutral-900 cursor-pointer shadow-2xl shadow-primary/10">
              <div className="grid grid-cols-1 lg:grid-cols-5">
                {/* Video Area - takes 3/5 on desktop */}
                <div
                  className="relative lg:col-span-3 aspect-video lg:aspect-auto lg:min-h-96"
                  onClick={handlePreviewToggle}
                >
                  {/* Poster/Thumbnail */}
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
                  {/* Inline Preview Video */}
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

                  {/* Gradient for text readability */}
                  <div className="absolute inset-0 bg-linear-to-r from-transparent via-transparent to-neutral-900/80 hidden lg:block pointer-events-none" />
                  <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-neutral-900 to-transparent lg:hidden pointer-events-none" />
                </div>

                {/* Info Panel - takes 2/5 on desktop */}
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
                    de marca. Producción profesional con equipo cinematográfico.
                  </p>

                  {/* Fullscreen play button */}
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

                  {/* Video stats */}
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
                        Duración
                      </p>
                    </div>
                    <div className="w-px h-8 bg-white/10" />
                    <div>
                      <p className="text-lg font-bold text-white">720p</p>
                      <p className="text-xs text-white/40 uppercase tracking-wider">
                        Resolución
                      </p>
                    </div>
                  </div>
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
                Fotografía & Branding
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

      <VideoModal
        videoSrc={activeVideo?.src ?? null}
        title={activeVideo?.title ?? ""}
        onClose={() => setActiveVideo(null)}
      />
    </>
  );
}
