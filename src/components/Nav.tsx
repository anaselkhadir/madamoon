"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

import { RDV_URL } from "@/lib/site";

const LINKS = [
  { label: "Accueil", href: "#accueil" },
  { label: "La Maison", href: "#maison" },
  { label: "Collections", href: "#collections" },
  { label: "L'Expérience", href: "#experience" },
  { label: "Votre morphologie", href: "https://madamoon.fr/votre-morphologie/" },
  { label: "FAQ", href: "https://madamoon.fr/faq/" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
  }, [open]);

  const dark = scrolled || open;

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-700 [transition-timing-function:cubic-bezier(0.22,1,0.36,1)] ${
          scrolled && !open
            ? "border-b border-line bg-ivory/85 backdrop-blur-xl"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-5 md:px-10">
          <a href="#accueil" aria-label="MADAMOON — retour à l'accueil" className="relative z-50">
            <Image
              src="/images/logo.png"
              alt="MADAMOON Paris"
              width={860}
              height={172}
              priority
              className={`h-7 w-auto transition-[filter] duration-700 md:h-8 ${
                dark ? "invert" : ""
              }`}
            />
          </a>

          <nav
            aria-label="Navigation principale"
            className={`hidden items-center gap-9 text-[11px] font-medium uppercase tracking-[0.22em] transition-colors duration-700 lg:flex ${
              dark ? "text-ink" : "text-white"
            }`}
          >
            {LINKS.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="group relative py-1"
              >
                {l.label}
                <span className="absolute bottom-0 left-0 h-px w-full origin-right scale-x-0 bg-gold transition-transform duration-500 [transition-timing-function:cubic-bezier(0.22,1,0.36,1)] group-hover:origin-left group-hover:scale-x-100" />
              </a>
            ))}
            <a
              href={RDV_URL}
              className={`border px-6 py-3 text-[11px] uppercase tracking-[0.22em] transition-all duration-500 [transition-timing-function:cubic-bezier(0.22,1,0.36,1)] hover:scale-[1.03] ${
                dark
                  ? "border-ink text-ink hover:bg-ink hover:text-ivory"
                  : "border-white/70 text-white hover:bg-white hover:text-ink"
              }`}
            >
              Prendre rendez-vous
            </a>
          </nav>

          {/* Mobile toggle */}
          <button
            type="button"
            aria-expanded={open}
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
            onClick={() => setOpen(!open)}
            className="relative z-50 flex h-10 w-10 items-center justify-center lg:hidden"
          >
            <span
              className={`absolute h-px w-6 transition-all duration-500 [transition-timing-function:cubic-bezier(0.22,1,0.36,1)] ${
                dark ? "bg-ink" : "bg-white"
              } ${open ? "rotate-45" : "-translate-y-[4px]"}`}
            />
            <span
              className={`absolute h-px w-6 transition-all duration-500 [transition-timing-function:cubic-bezier(0.22,1,0.36,1)] ${
                dark ? "bg-ink" : "bg-white"
              } ${open ? "-rotate-45" : "translate-y-[4px]"}`}
            />
          </button>
        </div>
      </header>

      {/* Fullscreen mobile menu */}
      <div
        className={`fixed inset-0 z-40 flex flex-col justify-center bg-ivory px-8 transition-opacity duration-700 [transition-timing-function:cubic-bezier(0.22,1,0.36,1)] lg:hidden ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <nav aria-label="Menu mobile" className="flex flex-col gap-2">
          {LINKS.map((l, i) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setOpen(false)}
              style={{ transitionDelay: open ? `${150 + i * 70}ms` : "0ms" }}
              className={`font-serif text-4xl font-light text-ink transition-all duration-700 [transition-timing-function:cubic-bezier(0.22,1,0.36,1)] ${
                open ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
            >
              {l.label}
            </a>
          ))}
          <a
            href={RDV_URL}
            onClick={() => setOpen(false)}
            style={{ transitionDelay: open ? `${150 + LINKS.length * 70}ms` : "0ms" }}
            className={`mt-8 inline-block w-max border border-ink px-8 py-4 text-[11px] font-medium uppercase tracking-[0.22em] text-ink transition-all duration-700 [transition-timing-function:cubic-bezier(0.22,1,0.36,1)] ${
              open ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            Prendre rendez-vous
          </a>
        </nav>
      </div>
    </>
  );
}
