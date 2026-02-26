"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { Menu, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "/#servicios", label: "Servicios" },
  { href: "/#portafolio", label: "Portafolio" },
  { href: "/#equipo", label: "Equipo" },
  { href: "/contacto", label: "Contacto" },
];

export default function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(!isHome);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isHome) {
      setScrolled(true);
      return;
    }
    const handleScroll = () => setScrolled(window.scrollY > 80);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHome]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3" : "py-4 lg:py-5"
      }`}
    >
      <div
        className={`mx-auto max-w-6xl px-3 transition-all duration-500 ${
          scrolled
            ? "glass border border-neutral-200/50 shadow-lg shadow-primary/5 rounded-2xl mx-4 lg:mx-auto"
            : ""
        }`}
      >
        <div className="flex h-14 lg:h-16 items-center justify-between px-3 lg:px-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 shrink-0">
            <Image
              src="/logo/vt-logo.jpg"
              alt="VT"
              width={40}
              height={40}
              quality={100}
              className={`rounded-lg transition-all duration-500 ${
                scrolled ? "" : "brightness-0 invert"
              }`}
            />
            <span
              className={`font-bold text-lg tracking-tight transition-colors duration-500 ${
                scrolled ? "text-neutral-900" : "text-white"
              }`}
            >
              VT
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
                  scrolled
                    ? "text-neutral-600 hover:text-primary hover:bg-primary/5"
                    : "text-white/80 hover:text-white hover:bg-white/10"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA Desktop */}
          <div className="hidden lg:flex">
            <Link
              href="/contacto"
              className={`btn-magnetic inline-flex items-center gap-2 rounded-full px-6 py-2.5 text-sm font-semibold transition-all duration-500 ${
                scrolled
                  ? "bg-primary text-white hover:shadow-lg hover:shadow-primary/20"
                  : "bg-white/15 text-white border border-white/25 hover:bg-white/25"
              }`}
            >
              Hablemos
              <ArrowRight size={14} />
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              scrolled ? "text-neutral-700" : "text-white"
            }`}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden mx-4 mt-2 glass border border-neutral-200/50 rounded-2xl shadow-xl overflow-hidden"
          >
            <div className="p-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-3 text-base font-medium text-neutral-700 hover:text-primary hover:bg-primary/5 rounded-xl transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/contacto"
                onClick={() => setIsOpen(false)}
                className="btn-magnetic mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-white"
              >
                Hablemos
                <ArrowRight size={14} />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
