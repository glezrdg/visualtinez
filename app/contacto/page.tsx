"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Clock,
  Mail,
  MessageCircle,
  Send,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

const WHATSAPP_URL = "https://wa.me/18492807332";
const ease = [0.25, 0.46, 0.45, 0.94] as const;

export default function ContactoPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

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
              Contacto
            </span>
            <h1 className="mt-4 text-4xl sm:text-5xl font-bold text-neutral-900 tracking-tight">
              Cuentanos sobre tu{" "}
              <span className="text-drama text-primary">proyecto.</span>
            </h1>
            <p className="mt-6 text-lg text-neutral-600 leading-relaxed">
              Respondemos directamente desde nuestro equipo estrategico en 1 a 3
              horas en horario laboral.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Form + Info */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease, delay: 0.1 }}
              className="lg:col-span-3"
            >
              {submitted ? (
                <div className="rounded-2xl bg-primary/5 border border-primary/20 p-12 text-center">
                  <CheckCircle2
                    size={48}
                    className="text-primary mx-auto mb-4"
                  />
                  <h3 className="text-2xl font-bold text-neutral-900 mb-2">
                    Mensaje enviado!
                  </h3>
                  <p className="text-neutral-600">
                    Te responderemos en 1 a 3 horas en horario laboral.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="nombre"
                        className="block text-sm font-medium text-neutral-700 mb-2"
                      >
                        Nombre completo *
                      </label>
                      <input
                        type="text"
                        id="nombre"
                        name="nombre"
                        required
                        className="w-full rounded-xl border border-neutral-200 bg-neutral-100/50 px-4 py-3.5 text-sm text-neutral-900 placeholder-neutral-400 focus:border-primary focus:ring-2 focus:ring-primary/20 focus:bg-white focus:outline-none transition-all"
                        placeholder="Tu nombre"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-neutral-700 mb-2"
                      >
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full rounded-xl border border-neutral-200 bg-neutral-100/50 px-4 py-3.5 text-sm text-neutral-900 placeholder-neutral-400 focus:border-primary focus:ring-2 focus:ring-primary/20 focus:bg-white focus:outline-none transition-all"
                        placeholder="tu@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="telefono"
                      className="block text-sm font-medium text-neutral-700 mb-2"
                    >
                      Telefono / WhatsApp
                    </label>
                    <input
                      type="tel"
                      id="telefono"
                      name="telefono"
                      className="w-full rounded-xl border border-neutral-200 bg-neutral-100/50 px-4 py-3.5 text-sm text-neutral-900 placeholder-neutral-400 focus:border-primary focus:ring-2 focus:ring-primary/20 focus:bg-white focus:outline-none transition-all"
                      placeholder="+1 849 000 0000"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="servicio"
                      className="block text-sm font-medium text-neutral-700 mb-2"
                    >
                      Servicio de interes *
                    </label>
                    <select
                      id="servicio"
                      name="servicio"
                      required
                      className="w-full rounded-xl border border-neutral-200 bg-neutral-100/50 px-4 py-3.5 text-sm text-neutral-900 focus:border-primary focus:ring-2 focus:ring-primary/20 focus:bg-white focus:outline-none transition-all"
                    >
                      <option value="">Selecciona un servicio</option>
                      <option value="fotografia">Fotografia</option>
                      <option value="videografia">
                        Produccion Audiovisual
                      </option>
                      <option value="redes">Gestion de Redes Sociales</option>
                      <option value="marketing">Marketing Digital</option>
                      <option value="paquete">
                        Paquete completo (varios servicios)
                      </option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="mensaje"
                      className="block text-sm font-medium text-neutral-700 mb-2"
                    >
                      Cuentanos sobre tu proyecto *
                    </label>
                    <textarea
                      id="mensaje"
                      name="mensaje"
                      required
                      rows={5}
                      className="w-full rounded-xl border border-neutral-200 bg-neutral-100/50 px-4 py-3.5 text-sm text-neutral-900 placeholder-neutral-400 focus:border-primary focus:ring-2 focus:ring-primary/20 focus:bg-white focus:outline-none transition-all resize-none"
                      placeholder="Describe brevemente tu proyecto, objetivos y cualquier detalle que nos ayude a entender tus necesidades..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn-magnetic inline-flex items-center gap-2.5 rounded-full bg-primary px-8 py-4 text-sm font-semibold text-white hover:shadow-lg hover:shadow-primary/20 transition-shadow group"
                  >
                    <Send size={15} />
                    Enviar mensaje
                    <ArrowRight
                      size={14}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </button>
                </form>
              )}
            </motion.div>

            {/* Info sidebar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease, delay: 0.2 }}
              className="lg:col-span-2 space-y-6"
            >
              {/* Contact info card */}
              <div className="rounded-2xl bg-neutral-100/70 border border-neutral-200/50 p-6 space-y-5">
                <h3 className="font-bold text-neutral-900">Informacion</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin
                      size={17}
                      className="text-primary shrink-0 mt-0.5"
                    />
                    <div>
                      <p className="text-sm font-medium text-neutral-900">
                        Ubicacion
                      </p>
                      <p className="text-sm text-neutral-500">
                        Santo Domingo, Republica Dominicana
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock
                      size={17}
                      className="text-primary shrink-0 mt-0.5"
                    />
                    <div>
                      <p className="text-sm font-medium text-neutral-900">
                        Horario
                      </p>
                      <p className="text-sm text-neutral-500">
                        Lunes a Viernes, 9:00 AM - 6:00 PM
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Mail
                      size={17}
                      className="text-primary shrink-0 mt-0.5"
                    />
                    <div>
                      <p className="text-sm font-medium text-neutral-900">
                        Email
                      </p>
                      <p className="text-sm text-neutral-500">
                        info@vtstudio.com
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* WhatsApp card */}
              <div className="rounded-2xl bg-primary p-6 text-white">
                <MessageCircle size={22} className="mb-3 text-white/70" />
                <h3 className="font-bold text-lg">Prefiere WhatsApp?</h3>
                <p className="text-sm text-white/50 mt-2 mb-5 leading-relaxed">
                  Escribenos directamente y te respondemos en minutos.
                </p>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-magnetic inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-primary hover:shadow-lg transition-shadow"
                >
                  Abrir WhatsApp
                  <ArrowRight size={14} />
                </a>
              </div>

              {/* Response time */}
              <div className="rounded-2xl border border-accent/20 bg-accent/5 p-6">
                <h3 className="font-bold text-neutral-900 text-sm">
                  Tiempo de respuesta
                </h3>
                <p className="text-3xl font-bold text-accent mt-2">1-3 horas</p>
                <p className="text-sm text-neutral-500 mt-1">
                  Responde directamente el equipo estrategico en horario
                  laboral.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
