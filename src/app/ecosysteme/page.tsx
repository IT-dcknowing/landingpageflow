"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Landmark, Handshake } from "lucide-react";
import Reveal from "@/components/Reveal";

/** Schéma nodal : Suite Flow au centre, satellites interconnectés (fil bleu animé). */
function NodalSchema() {
  const nodes = [
    { x: 60, y: 150, label: "Consultance & CGA" },
    { x: 340, y: 150, label: "Business & Wallet" },
  ];
  return (
    <div className="relative mx-auto w-full max-w-2xl">
      <svg viewBox="0 0 400 300" className="h-auto w-full" role="img" aria-label="Schéma d'interconnexion de l'écosystème">
        {nodes.map((n) => (
          <motion.line
            key={n.label}
            x1={200} y1={150} x2={n.x} y2={n.y}
            stroke="#0052FF" strokeWidth={2} strokeDasharray="6 6"
            initial={{ strokeDashoffset: 24 }}
            animate={{ strokeDashoffset: 0 }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "linear" }}
            opacity={0.7}
          />
        ))}
        {nodes.map((n) => (
          <g key={n.label}>
            <circle cx={n.x} cy={n.y} r={30} fill="#0A1628" stroke="#0052FF" strokeWidth={2} />
            <circle cx={n.x} cy={n.y} r={38} fill="none" stroke="#0052FF" strokeWidth={1} opacity={0.35}>
              <animate attributeName="r" values="32;44" dur="2.4s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.5;0" dur="2.4s" repeatCount="indefinite" />
            </circle>
            <text x={n.x} y={n.y + 52} textAnchor="middle" fill="#fff" fontSize={12} fontWeight={700}>{n.label}</text>
          </g>
        ))}
        <circle cx={200} cy={150} r={46} fill="#0052FF" />
        <circle cx={200} cy={150} r={46} fill="none" stroke="#fff" strokeWidth={2} opacity={0.5} />
        <text x={200} y={145} textAnchor="middle" fill="#fff" fontSize={20} fontWeight={900}>F</text>
        <text x={200} y={162} textAnchor="middle" fill="#fff" fontSize={10} fontWeight={700}>SUITE FLOW</text>
      </svg>
    </div>
  );
}

export default function EcosystemePage() {
  return (
    <div className="bg-[#050814]">
      <section className="relative overflow-hidden bg-[radial-gradient(ellipse_at_center,#0A1628_0%,#050814_70%)] px-6 pb-16 pt-32 md:px-10 md:pt-40">
        <div aria-hidden className="pointer-events-none absolute left-1/2 top-1/3 size-[560px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#0052FF]/25 blur-[120px]" />
        <div className="relative mx-auto max-w-3xl text-center">
          <Reveal>
            <p className="inline-block rounded-full border border-blue-400/30 bg-blue-500/20 px-4 py-1.5 text-xs font-extrabold uppercase tracking-widest text-blue-300">
              L&apos;Écosystème Nodal Unique
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="mt-6 text-balance text-4xl font-black leading-tight tracking-tight text-white md:text-6xl">
              Plus qu&apos;un logiciel.<br />
              <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-300 bg-clip-text text-transparent">
                Un moteur économique local.
              </span>
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mx-auto mt-5 max-w-2xl text-pretty text-sm leading-relaxed text-slate-300 md:text-lg">
              Pensé par des experts ivoiriens, pour les PME ivoiriennes. La Suite Flow vous connecte directement à votre expert-comptable, aux centres de gestion agréés et dynamise vos échanges B2B.
            </p>
          </Reveal>
        </div>
        <Reveal delay={0.25}>
          <NodalSchema />
        </Reveal>
      </section>

      {/* Bento 3 cartes Bible */}
      <div className="mx-auto grid max-w-6xl gap-6 px-6 pb-20 md:grid-cols-3 md:px-10 md:pb-28">
        <Reveal>
          <div className="flex h-full flex-col justify-between rounded-3xl border border-white/10 bg-slate-900/70 p-8 backdrop-blur-md transition-colors hover:border-blue-500/50">
            <div className="space-y-4">
              <span className="grid size-12 place-items-center rounded-2xl border border-blue-400/30 bg-blue-500/20 text-xl" aria-hidden>
                <Landmark className="size-6 text-blue-300" aria-hidden />
              </span>
              <h2 className="text-xl font-black text-white">Consultance Flow</h2>
              <p className="text-sm leading-relaxed text-slate-300">
                Donnez un accès sécurisé et certifié à votre cabinet comptable &amp; commissaire aux comptes agréé ONECCA. Fini les allers-retours de classeurs papier.
              </p>
            </div>
            <p className="mt-6 border-t border-white/10 pt-4 text-xs font-bold text-blue-400">Connexion ONECCA &amp; CGA →</p>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="relative flex h-full flex-col items-center justify-center overflow-hidden rounded-3xl border-2 border-blue-500/60 bg-slate-900/70 p-8 text-center shadow-[0_0_50px_-10px_rgba(0,82,255,0.35)] backdrop-blur-md">
            <div aria-hidden className="absolute -right-12 -top-12 size-40 rounded-full bg-blue-600/30 blur-2xl" />
            <div className="relative mb-5 w-20">
              <div aria-hidden className="absolute inset-0 animate-pulse rounded-3xl bg-blue-500 blur-xl" />
              <Image src="/logos/suite-flow.png" alt="Noyau Suite Flow" width={160} height={160} className="relative h-auto w-full" />
            </div>
            <p className="text-xs font-extrabold uppercase tracking-widest text-cyan-300">Noyau Central</p>
            <h2 className="mt-1 text-2xl font-black text-white">LA SUITE FLOW</h2>
            <p className="mt-2 max-w-xs text-xs leading-relaxed text-slate-300">
              Le pont d&apos;intelligence entre toutes vos filiales, vos données financières et vos partenaires d&apos;affaires.
            </p>
            <p className="mt-4 inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-600/30 px-3 py-1 text-xs font-bold text-blue-200">
              <span className="size-2 rounded-full bg-cyan-400" aria-hidden /> 5 Modules • 1 Seule Base
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="flex h-full flex-col justify-between rounded-3xl border border-white/10 bg-slate-900/70 p-8 backdrop-blur-md transition-colors hover:border-blue-500/50">
            <div className="space-y-4">
              <span className="grid size-12 place-items-center rounded-2xl border border-cyan-400/30 bg-cyan-500/20" aria-hidden>
                <Handshake className="size-6 text-cyan-300" aria-hidden />
              </span>
              <h2 className="text-xl font-black text-white">Business Flow &amp; Wallet</h2>
              <p className="text-sm leading-relaxed text-slate-300">
                Place de marché B2B intégrée entre entreprises abonnées en Côte d&apos;Ivoire. Règlements directs compatibles Wave, Orange Money, MTN et virements interbancaires BCEAO.
              </p>
            </div>
            <p className="mt-6 border-t border-white/10 pt-4 text-xs font-bold text-cyan-300">Réseau B2B &amp; Mobile Money →</p>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
