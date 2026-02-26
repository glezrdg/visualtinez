import Link from "next/link";
import Image from "next/image";
import { Instagram, Facebook, Mail, MapPin, Clock } from "lucide-react";

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
            <div className="flex items-center gap-2.5 mb-5">
              <Image
                src="/logo/vt-logo.jpg"
                alt="VT"
                width={44}
                height={44}
                quality={100}
                className="rounded-lg brightness-0 invert"
              />
              <span className="font-bold text-lg tracking-tight">VT</span>
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
                Sistema operativo
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
                <Mail size={15} className="text-accent/70 shrink-0" />
                info@vtstudio.com
              </li>
            </ul>
            <div className="flex gap-3 mt-6">
              <a
                href="#"
                className="w-9 h-9 rounded-lg bg-white/5 hover:bg-accent/20 flex items-center justify-center text-white/40 hover:text-accent transition-all"
                aria-label="Instagram"
              >
                <Instagram size={16} />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-lg bg-white/5 hover:bg-accent/20 flex items-center justify-center text-white/40 hover:text-accent transition-all"
                aria-label="Facebook"
              >
                <Facebook size={16} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/8 mt-14 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/25">
            &copy; {new Date().getFullYear()} VT Estudio Creativo. Todos los
            derechos reservados.
          </p>
          <p className="text-xs text-white/25">
            Santo Domingo, República Dominicana
          </p>
        </div>
      </div>
    </footer>
  );
}
