"use client";

import { useRef, useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import {
  ShoppingCart,
  Calculator,
  Users,
  Scale,
  LayoutDashboard,
  CheckCheck,
  ArrowRight,
} from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";

/* ---------------------------------- data --------------------------------- */

const STEPS = [
  {
    icon: ShoppingCart,
    name: "Sell Flow",
    title: "Vendez vite. Facturez juste. Dormez tranquille.",
    text: "Depuis la caisse ou sur le terrain, émettez des factures certifiées FNE en 1 clic. Le QR code DGI se génère tout seul. Fini la terreur des contrôles fiscaux et les redressements inattendus.",
  },
  {
    icon: Calculator,
    name: "Compta Flow",
    title: "Prenez vos factures en photo. Votre compta est faite.",
    text: "Arrêtez la ressaisie interminable. Sell Flow et RH Flow envoient directement les données ici. Vos bilans SYSCOHADA s'équilibrent par magie, sans erreurs d'écritures.",
  },
  {
    icon: Users,
    name: "RH Flow",
    title: "La paie ivoirienne, sans aspirine.",
    text: "Calculez l'ITS, gérez la CNPS et la CMU en respectant scrupuleusement les derniers barèmes légaux. Vos déclarations sociales sont prêtes à être envoyées en fin de mois.",
  },
  {
    icon: Scale,
    name: "Legal Flow",
    title: "Zéro oubli. Zéro pénalité.",
    text: "On s'occupe de retenir les dates critiques pour vous. Recevez un message avant chaque échéance fiscale et juridique pour agir au bon moment.",
  },
  {
    icon: LayoutDashboard,
    name: "Task Flow",
    title: "Le cerveau de votre entreprise.",
    text: "Suivez qui fait quoi, et quand. Le cockpit parfait pour le dirigeant de PME qui veut tout piloter en un coup d'œil, sans micro-management épuisant.",
  },
];

/* --------------------- visuels réels (captures projet) -------------------- */

/** Fenêtre navigateur façon Bible : dots + titre + capture réelle. */
function ShotFrame({
  title,
  src,
  alt,
  badge,
}: {
  title: string;
  src: string;
  alt: string;
  badge?: string;
}) {
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-2.5 shadow-2xl shadow-slate-500/20">
      <div className="mb-2 flex items-center justify-between rounded-lg border border-slate-100 bg-slate-50 px-3 py-1.5 text-[11px] font-semibold text-slate-500">
        <span className="flex items-center gap-1.5">
          <span className="inline-block size-2.5 rounded-full bg-rose-400" aria-hidden />
          <span className="inline-block size-2.5 rounded-full bg-amber-400" aria-hidden />
          <span className="inline-block size-2.5 rounded-full bg-emerald-400" aria-hidden />
          <span className="ml-2 font-bold text-slate-700">{title}</span>
        </span>
        {badge && (
          <span className="rounded bg-slate-200/60 px-2 py-0.5 text-[10px] font-bold text-slate-600">{badge}</span>
        )}
      </div>
      <Image src={src} alt={alt} width={900} height={620} className="h-auto w-full rounded-xl border border-slate-200/70 object-cover" />
    </div>
  );
}

/** Pastille verre flottante façon Bible. */
function FloatBadge({
  children,
  className,
  delayed,
}: {
  children: React.ReactNode;
  className?: string;
  delayed?: boolean;
}) {
  return (
    <motion.div
      animate={{ y: [0, -8, 0] }}
      transition={{ duration: delayed ? 5.5 : 5, repeat: Infinity, ease: "easeInOut", delay: delayed ? 1.5 : 0 }}
      className={cn(
        "absolute z-20 flex items-center gap-2 rounded-full border border-white bg-white/85 px-3.5 py-1.5 text-xs font-bold text-slate-800 shadow-lg backdrop-blur-xl",
        className
      )}
    >
      {children}
    </motion.div>
  );
}

function SellUI() {
  return (
    <div className="relative">
      <ShotFrame title="Sell Flow · Gestion Commerciale & Caisse FNE" badge="Période 2026" src="/screenshots/sell-dashboard.png" alt="Dashboard Sell Flow" />
      <div className="absolute -bottom-8 -right-2 w-3/5 rounded-2xl border border-white bg-white/90 p-2 shadow-xl backdrop-blur-xl sm:-right-6 sm:w-1/2">
        <p className="mb-1 flex items-center justify-between border-b border-slate-100 pb-1 text-[10px] font-extrabold uppercase text-slate-800">
          <span className="flex items-center gap-1.5"><span className="size-2 animate-pulse rounded-full bg-emerald-500" aria-hidden />Facture Proforma FNE</span>
          <span className="text-[9px] font-bold text-slate-400">DGI Côte d&apos;Ivoire</span>
        </p>
        <Image src="/screenshots/sell-facture.png" alt="Facture proforma FNE Sell Flow" width={420} height={300} className="h-auto w-full rounded-lg border border-slate-200/60" />
      </div>
      <FloatBadge className="-top-4 right-6" delayed><span aria-hidden>✅</span> Facturation Normalisée DGI</FloatBadge>
      <FloatBadge className="bottom-12 -left-2"><span className="size-2 rounded-full bg-emerald-500" aria-hidden /> QR DGI Actif</FloatBadge>
    </div>
  );
}

function ComptaUI() {
  return (
    <div className="relative">
      <ShotFrame title="Flow Compta · Pilotage Performance & SYSCOHADA" badge="Solde Consolidé" src="/screenshots/compta-dashboard.png" alt="Dashboard Flow Compta" />
      <div className="absolute -bottom-8 -left-2 w-3/5 rounded-2xl border border-white bg-white/90 p-2 shadow-xl backdrop-blur-xl sm:-left-6 sm:w-1/2">
        <p className="mb-1 border-b border-slate-100 pb-1 text-[10px] font-extrabold uppercase text-blue-800">Import relevés bancaires</p>
        <Image src="/screenshots/compta-import.png" alt="Import comptable Flow Compta" width={420} height={300} className="h-auto w-full rounded-lg border border-slate-200/60" />
      </div>
      <FloatBadge className="-top-4 right-6" delayed><span aria-hidden>⚡</span> Clôture Fiscale &amp; Bilan Automatique</FloatBadge>
      <FloatBadge className="bottom-12 -right-2"><span className="font-bold text-blue-700">✓ 100% Conforme</span></FloatBadge>
    </div>
  );
}

function RhUI() {
  return (
    <div className="relative">
      <ShotFrame title="RH Flow · Traitement de la Paie Mensuelle" badge="Net : 518 867 FCFA" src="/screenshots/rh-paie.png" alt="Traitement de paie RH Flow" />
      <div className="absolute -top-10 -left-2 w-36 rounded-2xl border border-white bg-white/90 p-2 text-center shadow-xl backdrop-blur-xl sm:-left-6 sm:w-44">
        <p className="text-[9px] font-extrabold text-indigo-900">Pointage Mobile</p>
        <div className="mx-auto mt-1 grid w-fit grid-cols-4 gap-[2px]" aria-hidden>
          {[1,0,1,1,0,1,0,1,1,1,0,0,0,1,1,0].map((v, i) => (
            <span key={i} className={cn("size-1.5 rounded-[1px]", v ? "bg-indigo-950" : "bg-slate-200")} />
          ))}
        </div>
        <p className="mt-1 rounded bg-indigo-100 text-[8px] font-bold text-indigo-900">QR Code</p>
      </div>
      <div className="absolute -bottom-8 -right-2 w-1/2 rounded-2xl border border-white bg-white/90 p-2 shadow-xl backdrop-blur-xl sm:-right-6 sm:w-5/12">
        <p className="mb-1 flex items-center justify-between border-b border-slate-100 px-1 pb-1 text-[9px] font-extrabold uppercase text-indigo-950">
          Bulletin Officiel <span className="text-[8px] font-bold text-indigo-700">CNPS · CMU · ITS</span>
        </p>
        <Image src="/screenshots/rh-bulletin.png" alt="Bulletin de salaire RH Flow" width={420} height={300} className="h-auto w-full rounded-lg border border-slate-200/60" />
      </div>
      <FloatBadge className="-top-4 right-8" delayed><span aria-hidden>🛡️</span> Barèmes DGI &amp; CNPS 2026</FloatBadge>
      <FloatBadge className="bottom-10 left-4"><span aria-hidden>✨</span> 0 Anomalie Détectée</FloatBadge>
    </div>
  );
}

function LegalUI() {
  return (
    <div className="relative">
      <ShotFrame title="Legal Flow · Portail de Conformité Fiscale & Sociale" badge="DGI / CNPS / CMU" src="/screenshots/legal.png" alt="Portail Legal Flow" />
      <div className="absolute -bottom-8 -left-2 w-72 space-y-2 rounded-2xl border border-white bg-white/90 p-4 shadow-xl backdrop-blur-xl sm:-left-6">
        <p className="flex items-center justify-between text-[10px] font-extrabold uppercase text-purple-800">
          <span className="flex items-center gap-1.5"><span className="size-2.5 animate-pulse rounded-full bg-purple-600" aria-hidden />💬 Alerte WhatsApp DGI</span>
          <span className="font-semibold normal-case text-slate-400">Reçue à 08h30</span>
        </p>
        <p className="text-xs font-semibold leading-snug text-slate-800">
          Déclaration TVA &amp; Acompte IS validés. <span className="font-bold text-purple-700">0 pénalité garantie</span>.
        </p>
        <p className="flex items-center justify-between border-t border-slate-100 pt-1 text-[10px]">
          <span className="font-medium text-slate-500">Veille fiscale OHADA</span>
          <span className="font-extrabold text-purple-700">À jour 2026 ✓</span>
        </p>
      </div>
      <FloatBadge className="-top-4 right-6 text-purple-700" delayed><span aria-hidden>⚖️</span> Registre Juridique Centralisé</FloatBadge>
      <div className="absolute bottom-12 -right-2 hidden items-center gap-1 rounded-full bg-[#ECE5DD] px-3 py-1.5 text-[10px] text-slate-500 sm:flex">
        14:22 • Lu <CheckCheck className="size-3.5 text-sky-500" aria-hidden />
      </div>
    </div>
  );
}

function TaskUI() {
  return (
    <div className="relative">
      <ShotFrame title="Task Flow · Vue d'ensemble & Métriques Cabinet" badge="889 Tâches traitées" src="/screenshots/task.jpeg" alt="Vue d'ensemble Task Flow" />
      <div className="absolute -bottom-8 -right-2 w-3/5 rounded-2xl border border-white bg-white/90 p-3 shadow-xl backdrop-blur-xl sm:-right-6 sm:w-1/2">
        <p className="mb-1.5 flex items-center justify-between border-b border-slate-100 pb-1 text-[10px] font-extrabold uppercase text-slate-800">
          Tâches en cours <span className="font-bold normal-case text-slate-500">Ouattara Yaya</span>
        </p>
        <p className="rounded-lg bg-slate-50 px-2 py-1.5 text-[11px] font-semibold text-slate-700 ring-1 ring-slate-100">Relance dossier Kouassi</p>
        <p className="rounded-lg bg-slate-50 px-2 py-1.5 text-[11px] font-semibold text-slate-700 ring-1 ring-slate-100">Bilan mensuel BTP</p>
        <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-slate-100">
          <div className="h-full w-[73%] rounded-full bg-slate-800" aria-hidden />
        </div>
      </div>
      <FloatBadge className="-top-4 left-4" delayed><span aria-hidden>📌</span> Cockpit des Opérations en Cours</FloatBadge>
      <FloatBadge className="bottom-12 -left-2"><span aria-hidden>⚡</span> 27/37 Tâches Terminées</FloatBadge>
    </div>
  );
}

const UIS = [SellUI, ComptaUI, RhUI, LegalUI, TaskUI];

/* --------------------------------- section -------------------------------- */

export default function FlowStorySection() {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    setActive(Math.min(STEPS.length - 1, Math.floor(v * STEPS.length)));
  });

  const ActiveUI = UIS[active];

  return (
    <section aria-label="La Suite Flow en action" ref={ref} className="relative h-[400vh] bg-[#F8FAFC]">
      <div className="sticky top-0 flex h-screen flex-col overflow-hidden">
        {/* Dock flottant */}
        <div className="z-40 flex justify-center px-4 pt-6">
          <div className="rounded-full border border-slate-200/80 bg-white/85 py-2 pl-3 pr-4 shadow-lg shadow-slate-900/5 backdrop-blur-xl">
            <div className="flex items-center gap-1.5" role="tablist" aria-label="Applications Suite Flow">
              {STEPS.map((s, i) => (
                <button
                  key={s.name}
                  role="tab"
                  aria-selected={active === i}
                  aria-label={s.name}
                  onClick={() => setActive(i)}
                  className={cn(
                    "flex items-center gap-2 rounded-full px-3.5 py-2 text-xs font-bold transition-all",
                    active === i
                      ? "bg-[#0052FF] text-white shadow-[0_8px_20px_-6px_rgba(0,82,255,0.6)]"
                      : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                  )}
                >
                  <s.icon className="size-4" aria-hidden />
                  <span className="hidden sm:inline">{s.name.split(" ")[0]}</span>
                </button>
              ))}
            </div>
            {/* Fil bleu lumineux */}
            <div className="mx-3 mt-2 h-1 overflow-hidden rounded-full bg-slate-100" aria-hidden>
              <motion.div style={{ scaleX: scrollYProgress }} className="h-full origin-left rounded-full bg-gradient-to-r from-[#002288] to-[#0052FF]" />
            </div>
          </div>
        </div>

        {/* Contenu 2 colonnes */}
        <div className="mx-auto grid w-full max-w-6xl flex-1 items-center gap-8 px-6 pb-10 md:grid-cols-2 md:gap-14 md:px-10">
          <div aria-live="polite">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
              >
                <p className="text-xs font-black uppercase tracking-[0.2em] text-[#0052FF]">
                  {String(active + 1).padStart(2, "0")} / 05 — {STEPS[active].name}
                </p>
                <h3 className="mt-3 text-balance text-2xl font-extrabold leading-tight text-slate-900 md:text-4xl">
                  {STEPS[active].title}
                </h3>
                <p className="mt-4 max-w-lg text-pretty text-sm leading-relaxed text-slate-600 md:text-base">
                  {STEPS[active].text}
                </p>
                <a
                  href="#contact"
                  className="group mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#0052FF]"
                >
                  Découvrir {STEPS[active].name}
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden />
                </a>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex justify-center md:justify-end">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 32 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="w-full max-w-md"
              >
                <ActiveUI />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
