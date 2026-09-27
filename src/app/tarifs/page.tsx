"use client";

import Link from "next/link";
import { useState } from "react";
import { Check, ChevronDown, Sparkles } from "lucide-react";
import Reveal from "@/components/Reveal";
import { cn } from "@/lib/utils";

const PLANS = [
  {
    name: "SOLO",
    price: "30 000",
    unit: "FCFA / mois",
    note: "Pour démarrer",
    desc: "Idéal pour les consultants, prestataires de service et auto-entrepreneurs.",
    features: ["3 logiciels au choix (ex : Sell + Compta + Task)", "Facturation FNE normalisée illimitée", "1 Utilisateur Administrateur", "Support standard par email"],
    highlight: false,
    cta: "Choisir le Pack Solo",
  },
  {
    name: "BUSINESS",
    price: "75 000",
    unit: "FCFA / mois",
    note: "L'arsenal complet",
    desc: "La configuration recommandée pour piloter sereinement une PME en pleine croissance.",
    features: ["Les 5 logiciels inclus sans restriction", "Jusqu'à 10 collaborateurs connectés", "Passerelle directe avec votre Expert-Comptable (ONECCA)", "Alertes fiscales par WhatsApp personnalisées", "Support WhatsApp prioritaire 6j/7"],
    highlight: true,
    cta: "Démarrer avec le Pack Business",
  },
  {
    name: "PREMIUM VIP",
    price: "135 000",
    unit: "FCFA / mois",
    note: "Accompagnement d'élite",
    desc: "Pour les entreprises multi-établissements et celles désirant un suivi sur mesure.",
    features: ["Tout débloqué en illimité", "Multi-établissements & Multi-sociétés", "Accompagnement VIP dédié par le cabinet DC-KNOWING", "Formation sur site pour toutes vos équipes"],
    highlight: false,
    cta: "Contacter la Direction VIP",
  },
];

const FAQS = [
  { q: "Puis-je changer de formule ?", a: "Oui, à tout moment. La migration est immédiate et vos données suivent sans ressaisie." },
  { q: "Y a-t-il un engagement ?", a: "Non. Formules mensuelles sans engagement, résiliables à la fin du mois en cours." },
  { q: "Le déploiement est-il inclus ?", a: "Oui : paramétrage, import de vos données et formation de démarrage sont accompagnés par nos équipes." },
  { q: "Puis-je ne prendre qu'un seul logiciel ?", a: "Oui avec Solo. Mais l'interconnexion des 5 apps (Business) supprime vraiment la double saisie." },
  { q: "Et si j'ai besoin d'un expert-comptable ?", a: "Le cabinet DC-KNOWING peut prendre votre comptabilité en charge en plus de l'outil, sur devis." },
];

export default function TarifsPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="bg-[#050814]">
      <section className="relative overflow-hidden bg-[radial-gradient(ellipse_at_center,#0A1628_0%,#050814_70%)] px-6 pb-16 pt-32 text-center md:px-10 md:pt-40">
        <div aria-hidden className="pointer-events-none absolute left-1/2 top-1/3 size-[560px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#0052FF]/25 blur-[120px]" />
        <div className="relative mx-auto max-w-3xl">
          <Reveal>
            <p className="inline-block rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-blue-200 backdrop-blur-xl">Transparence Absolue</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="mt-6 text-balance text-4xl font-black tracking-tight text-white md:text-6xl">
              Un investissement rentable dès le 1er mois.
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mx-auto mt-5 max-w-xl text-sm text-white/65 md:text-lg">
              Bien moins cher que vos pénalités de retard et vos erreurs de facturation.
            </p>
          </Reveal>
        </div>
      </section>

      {/* 3 formules */}
      <section className="mx-auto grid max-w-6xl gap-5 px-6 md:grid-cols-3 md:px-10" aria-label="Formules tarifaires">
        {PLANS.map((p, i) => (
          <Reveal key={p.name} delay={i * 0.1} className="h-full">
            <div className={cn(
              "relative flex h-full flex-col rounded-[32px] border p-8 backdrop-blur-md",
              p.highlight
                ? "border-[#0052FF]/60 bg-gradient-to-b from-[#0052FF]/25 to-white/[0.04] shadow-[0_0_60px_rgba(0,82,255,0.35)]"
                : "border-white/12 bg-white/[0.03]"
            )}>
              {p.highlight && (
                <span className="absolute -top-3.5 left-1/2 inline-flex -translate-x-1/2 items-center gap-1.5 whitespace-nowrap rounded-full bg-[#0052FF] px-4 py-1.5 text-xs font-black text-white">
                  <Sparkles className="size-3.5" aria-hidden /> Le Choix des PME Ivoiriennes
                </span>
              )}
              <h2 className="text-lg font-extrabold text-white">{p.name}</h2>
              <p className="mt-1 text-sm text-white/60">{p.desc}</p>
              <p className="mt-5 text-xs uppercase tracking-widest text-white/45">{p.note}</p>
              <p className="mt-1 text-4xl font-black tracking-tight text-white">{p.price}<span className="ml-1 text-xs font-bold text-white/50">{p.unit}</span></p>
              <ul className="mt-6 flex-1 space-y-3">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm font-medium text-white/80">
                    <Check className="mt-0.5 size-4 shrink-0 text-emerald-400" aria-hidden /> {f}
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                className={cn(
                  "mt-8 rounded-full px-6 py-3.5 text-center text-sm font-bold transition hover:scale-[1.03]",
                  p.highlight ? "bg-white text-[#0A1628]" : "border border-white/25 bg-white/5 text-white hover:bg-white/15"
                )}
              >
                {p.cta}
              </Link>
            </div>
          </Reveal>
        ))}
      </section>

      {/* Bundles */}
      <section className="mx-auto max-w-6xl px-6 py-16 md:px-10" aria-label="Offres spéciales">
        <Reveal>
          <h2 className="text-2xl font-extrabold tracking-tight text-white md:text-3xl">Bundles spéciaux</h2>
        </Reveal>
        <div className="mt-6 grid gap-5 md:grid-cols-2">
          <Reveal>
            <div className="rounded-[28px] border border-white/12 bg-white/[0.03] p-8 backdrop-blur-md">
              <p className="text-xs font-black uppercase tracking-widest text-blue-300">Bundle Recrutement</p>
              <h3 className="mt-2 text-xl font-extrabold text-white">ATS Flow + RH Flow</h3>
              <p className="mt-2 text-sm text-white/60">Du CV au bulletin : recrutez, contractualisez et payez dans un seul flux.</p>
              <p className="mt-4 text-3xl font-black text-white">25 000 <span className="text-xs font-bold text-white/50">FCFA HT / mois, dès</span></p>
              <Link href="/contact" className="mt-6 inline-block rounded-full bg-white px-6 py-3 text-sm font-bold text-[#0A1628] transition hover:scale-105">Demander ce bundle</Link>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="rounded-[28px] border border-white/12 bg-white/[0.03] p-8 backdrop-blur-md">
              <p className="text-xs font-black uppercase tracking-widest text-blue-300">Direction Financière Externalisée</p>
              <h3 className="mt-2 text-xl font-extrabold text-white">Pack DFE</h3>
              <p className="mt-2 text-sm text-white/60">Un DAF senior dédié + toute la Suite Flow pour piloter comme un grand groupe.</p>
              <p className="mt-4 text-3xl font-black text-white">Sur devis</p>
              <Link href="/contact" className="mt-6 inline-block rounded-full border border-white/25 bg-white/5 px-6 py-3 text-sm font-bold text-white transition hover:bg-white/15">Parler à un expert</Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-3xl px-6 pb-20 md:px-10 md:pb-28" aria-label="Questions fréquentes">
        <Reveal>
          <h2 className="text-center text-2xl font-extrabold tracking-tight text-white md:text-3xl">FAQ tarifs</h2>
        </Reveal>
        <div className="mt-8 space-y-3">
          {FAQS.map((f, i) => (
            <Reveal key={f.q} delay={i * 0.05}>
              <button
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                aria-expanded={openFaq === i}
                className="w-full rounded-2xl border border-white/12 bg-white/[0.03] px-5 py-4 text-left backdrop-blur-md"
              >
                <span className="flex items-center justify-between gap-4 text-sm font-bold text-white">
                  {f.q}
                  <ChevronDown className={cn("size-4 shrink-0 transition-transform", openFaq === i && "rotate-180")} aria-hidden />
                </span>
                {openFaq === i && <span className="mt-2 block text-sm leading-relaxed text-white/65">{f.a}</span>}
              </button>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}
