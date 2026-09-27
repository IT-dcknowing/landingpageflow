"use client";

import { useCallback } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowDown, Search, User, Phone } from "lucide-react";
import HexagonLogo from "./HexagonLogo";
import FloatingBadge from "./FloatingBadge";

const NAV_LINKS = ["Accueil", "À propos", "Modules", "FAQ"];

const SIDE_TEXT =
  "Conçue pour les réalités des PME ivoiriennes. Saisissez vos opérations une seule fois, nos 5 logiciels interconnectés s'occupent du reste.";

// 5 badges ÉCARTÉS façon Canva (pas entassés au centre)
const badges = [
  // Sell (S) : à gauche, sous le F
  { src: "/logos/sell-flow.png", alt: "Sell Flow", pos: "left-[5%] top-[64%]", size: 64, delay: 0 },
  // Legal (L) : en haut, chevauchant la barre du L
  { src: "/logos/legal-flow.png", alt: "Legal Flow", pos: "left-[29%] top-[8%]", size: 52, delay: 0.5 },
  // Compta (C) : en haut à droite, au-dessus du W
  { src: "/logos/compta-flow.png", alt: "Compta Flow", pos: "right-[30%] top-[4%]", size: 60, delay: 1 },
  // Task (T) : en bas à droite, chevauchant le bas du W
  { src: "/logos/task-flow.png", alt: "Task Flow", pos: "right-[22%] bottom-[6%]", size: 56, delay: 1.5 },
  // RH : tout à droite, en lévitation
  { src: "/logos/rh-flow.png", alt: "RH Flow", pos: "right-[3%] top-[30%]", size: 64, delay: 2 },
];

export default function Hero() {
  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);
  const rotateX = useSpring(useTransform(my, [0, 1], [10, -10]), { stiffness: 120, damping: 18 });
  const rotateY = useSpring(useTransform(mx, [0, 1], [-12, 12]), { stiffness: 120, damping: 18 });

  const onMouseMove = useCallback(
    (e: React.MouseEvent<HTMLElement>) => {
      const r = e.currentTarget.getBoundingClientRect();
      mx.set((e.clientX - r.left) / r.width);
      my.set((e.clientY - r.top) / r.height);
    },
    [mx, my]
  );

  return (
    <section
      id="suite"
      aria-label="Suite Flow - Hero"
      onMouseMove={onMouseMove}
      className="relative mx-auto w-full max-w-[1440px] min-h-[92vh] overflow-clip rounded-[36px] bg-gradient-to-r from-[#030B2A] via-[#002288] to-[#0052FF] px-6 pb-24 pt-20 md:px-12 md:pb-28 md:pt-20"
      style={{ perspective: 1200 }}
    >
      {/* Bandeau supérieur : nav + pastille onglet à courbures concaves */}
      <header className="absolute inset-x-0 top-0 z-40">
        {/* Nappe navy anti-liseré sous le bord haut */}
        <div aria-hidden className="absolute inset-x-0 top-0 h-3 bg-[#030B2A]" />
        <div className="relative grid grid-cols-[1fr_auto_1fr] items-start px-8 md:px-10">
          {/* Liens gauche : fond bleu, texte blanc, medium, discret */}
          <nav aria-label="Navigation principale" className="hidden items-center gap-7 pt-5 lg:flex">
            {NAV_LINKS.map((label) => (
              <a
                key={label}
                href="#suite"
                className="text-[13px] font-medium text-white/85 transition hover:text-white"
              >
                {label}
              </a>
            ))}
          </nav>
          <div className="pt-5 lg:hidden" aria-hidden />

          {/* Pastille centrale découpée (jonction concave fluide) */}
          <div className="notch-scoop rounded-b-[28px] bg-white px-6 md:px-10 pb-3 pt-2.5 text-center shadow-[0_12px_32px_rgba(0,0,0,0.35)]">
            <span className="text-xs md:text-sm font-black tracking-wide text-[#0A1628] whitespace-nowrap">
              LA SUITE FLOW
            </span>
          </div>

          {/* Groupe droite : recherche + compte + pilule Contact */}
          <div className="flex items-center justify-end gap-2.5 pt-3.5">
            <a
              href="#suite"
              aria-label="Rechercher"
              className="hidden size-9 place-items-center rounded-full bg-white text-[#0A1628] transition hover:bg-white/90 sm:grid"
            >
              <Search className="size-4" aria-hidden />
            </a>
            <a
              href="#contact"
              aria-label="Mon compte"
              className="hidden size-9 place-items-center rounded-full bg-white text-[#0A1628] transition hover:bg-white/90 sm:grid"
            >
              <User className="size-4" aria-hidden />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-white py-1.5 pl-4 pr-1.5 text-[13px] font-bold text-[#0A1628] transition hover:bg-white/90"
            >
              Contact
              <span className="grid size-6 place-items-center rounded-full bg-[#0052FF] text-white">
                <Phone className="size-3" aria-hidden />
              </span>
            </a>
          </div>
        </div>
      </header>

      {/* LA SUITE blanc au-dessus de FLOW */}
      <p className="text-center text-2xl font-light tracking-wide text-white md:text-4xl">
        LA SUITE
      </p>

      {/* FLOW géant + hexagone */}
      <div className="relative mt-1 flex items-center justify-center font-black leading-[0.85] tracking-tighter text-white">
        <span className="text-[32vw] md:text-[13rem] lg:text-[16rem]">FL</span>
        <HexagonLogo
          rotateX={rotateX}
          rotateY={rotateY}
          className="-mx-[0.18em] text-[32vw] md:text-[13rem] lg:text-[16rem]"
        />
        <span className="text-[32vw] md:text-[13rem] lg:text-[16rem]">W</span>

        {/* Badges écartés — desktop */}
        <div aria-hidden className="pointer-events-none absolute inset-0 z-30 hidden md:block">
          {badges.map((b) => (
            <div key={b.alt} className={`absolute ${b.pos}`}>
              <FloatingBadge src={b.src} alt={b.alt} size={b.size} delay={b.delay} />
            </div>
          ))}
        </div>
      </div>

      {/* Badges mobile */}
      <div className="mt-4 flex flex-wrap items-center justify-center gap-3 md:hidden">
        {badges.map((b) => (
          <FloatingBadge key={b.alt} src={b.src} alt={b.alt} size={48} delay={b.delay} />
        ))}
      </div>

      {/* Bas : GAUCHE texte + bouton / DROITE texte */}
      <div className="mt-8 grid gap-8 md:grid-cols-2 md:gap-16">
        <div className="text-left">
          <p className="max-w-sm text-[13px] leading-relaxed text-white">{SIDE_TEXT}</p>
          <motion.a
            href="#logiciels"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="mt-5 inline-block rounded-xl bg-white px-6 py-3 text-xs font-black uppercase tracking-wide text-black"
          >
            Découvrez nos logiciels
          </motion.a>
        </div>
        <div className="text-right">
          <p className="ml-auto max-w-sm text-[13px] leading-relaxed text-white">{SIDE_TEXT}</p>
        </div>
      </div>

      {/* Onglet bas : flèche */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2">
        <div className="grid place-items-center rounded-t-[24px] bg-white px-6 pt-2.5 pb-1.5">
          <motion.a
            href="#logiciels"
            aria-label="Faire défiler"
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 1.6, repeat: Infinity }}
          >
            <ArrowDown className="size-5 text-[#0A1628]" aria-hidden />
          </motion.a>
        </div>
      </div>
    </section>
  );
}
