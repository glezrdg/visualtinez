import Link from "next/link";
import Image from "next/image";
import { Instagram, Facebook, Phone, MapPin, Clock } from "lucide-react";

const footerLinks = [
  { href: "/#servicios", label: "Servicios" },
  { href: "/#portafolio", label: "Portafolio" },
  { href: "/#equipo", label: "Equipo" },
  { href: "/contacto", label: "Contacto" },
];

export default function Footer() {
  return (
    <footer className="bg-primary-dark text-white rounded-t-3xl -mt-px">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 pt-16 lg:pt-20 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16">
          {/* Brand */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-3 mb-5">
              <Image
                src="/logo/vt-logo.jpg"
                alt="Visual Tinez"
                width={64}
                height={64}
                quality={100}
                className="rounded-xl"
              />
              <span className="font-bold text-2xl tracking-tight">
                Visual Tinez
              </span>
            </div>
            <p className="text-white/40 text-sm leading-relaxed max-w-sm">
              Estudio creativo en Santo Domingo. Producción audiovisual y
              estrategia digital para marcas que quieren crecer con
              acompañamiento constante y resultados medibles.
            </p>

            {/* Operational Status */}
            <div className="mt-6 inline-flex items-center gap-2.5 rounded-full bg-white/5 border border-white/8 px-4 py-2">
              <span className="w-2 h-2 rounded-full bg-green-400 status-pulse" />
              <span className="text-xs font-mono text-white/50 tracking-wide">
                Sistema activo
              </span>
            </div>
          </div>

          {/* Links */}
          <div className="md:col-span-3">
            <h4 className="font-semibold text-xs uppercase tracking-[0.15em] mb-5 text-white/30">
              Navegación
            </h4>
            <ul className="flex flex-col gap-3">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/50 hover:text-accent transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Info */}
          <div className="md:col-span-4">
            <h4 className="font-semibold text-xs uppercase tracking-[0.15em] mb-5 text-white/30">
              Contacto
            </h4>
            <ul className="flex flex-col gap-4 text-sm text-white/50">
              <li className="flex items-center gap-3">
                <MapPin size={15} className="text-accent/70 shrink-0" />
                Santo Domingo, República Dominicana
              </li>
              <li className="flex items-center gap-3">
                <Clock size={15} className="text-accent/70 shrink-0" />
                Lunes a Viernes, 9:00 AM - 6:00 PM
              </li>
              <li className="flex items-center gap-3">
                <Phone size={15} className="text-accent/70 shrink-0" />
                (809) 931-4693
              </li>
            </ul>
            <div className="flex gap-3 mt-6">
              <a
                href="https://www.instagram.com/visualtinez"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 hover:bg-accent/20 flex items-center justify-center text-white/40 hover:text-accent transition-all"
                aria-label="Instagram"
              >
                <Instagram size={16} />
              </a>
              <a
                href="https://www.facebook.com/share/1GxYtv6oZk/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 hover:bg-accent/20 flex items-center justify-center text-white/40 hover:text-accent transition-all"
                aria-label="Facebook"
              >
                <Facebook size={16} />
              </a>
              <a
                href="https://www.tiktok.com/@visualtinez"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 hover:bg-accent/20 flex items-center justify-center text-white/40 hover:text-accent transition-all"
                aria-label="TikTok"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 0 0-.79-.05A6.34 6.34 0 0 0 3.15 15.2a6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.51a8.27 8.27 0 0 0 4.76 1.5v-3.4a4.85 4.85 0 0 1-1-.08z" />
                </svg>
              </a>
              <a
                href="https://www.threads.com/@visualtinez"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 hover:bg-accent/20 flex items-center justify-center text-white/40 hover:text-accent transition-all"
                aria-label="Threads"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                  <path d="M12.186 24h-.007c-3.581-.024-6.334-1.205-8.184-3.509C2.35 18.44 1.5 15.586 1.472 12.01v-.017c.028-3.579.879-6.43 2.525-8.482C5.845 1.205 8.6.024 12.18 0h.014c2.746.02 5.043.725 6.826 2.098 1.677 1.29 2.858 3.13 3.509 5.467l-2.773.793c-1.017-3.662-3.608-5.497-7.576-5.52-2.682.019-4.726.894-6.078 2.601-1.2 1.516-1.826 3.748-1.848 6.558v.014c.022 2.811.648 5.042 1.848 6.558 1.352 1.706 3.396 2.583 6.078 2.6 2.145-.014 3.796-.586 5.074-1.2.888-.588 1.855-1.53 1.898-3.067.013-.49-.04-1.106-.214-1.793-.373.15-.766.284-1.17.397a8.33 8.33 0 0 1-2.255.323c-3.176 0-5.333-1.868-5.333-4.603 0-2.642 2.004-4.499 4.87-4.499 1.573 0 2.876.57 3.77 1.65.674.812 1.073 1.86 1.163 3.078.086-.003.171-.008.256-.016l.015-.002c-.058 2.048-.495 3.636-1.339 4.856-1.502 2.17-4.084 3.289-7.68 3.322z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/8 mt-14 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/25">
            &copy; {new Date().getFullYear()} Visual Tinez. Todos los derechos
            reservados.
          </p>
          <p className="text-xs text-white/25">
            Santo Domingo, República Dominicana
          </p>
        </div>
      </div>
    </footer>
  );
}
