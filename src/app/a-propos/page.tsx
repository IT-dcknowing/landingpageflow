import Link from "next/link";
import { ShieldCheck, FileCheck2, MapPin } from "lucide-react";
import Reveal from "@/components/Reveal";

export const metadata = {
  title: "À propos — DC-KNOWING, The bespoke partner | Suite Flow",
  description: "Cabinet d'expertise comptable ivoirien devenu éditeur logiciel : 15+ experts, +80 PME, 100% conçu en Côte d'Ivoire.",
};

const EQUIPE = [
  { initials: "KC", name: "Keyman-Bi I. Constant", role: "Directeur Général" },
  { initials: "MY", name: "M. Yapi", role: "Contrôle de gestion" },
  { initials: "KA", name: "Alex Mardochée Koffi", role: "Transformation digitale & IA" },
  { initials: "WD", name: "Williams", role: "Développement" },
  { initials: "DD", name: "Donalde", role: "Relation client & IA" },
  { initials: "+9", name: "Pôle comptable", role: "7 stagiaires + managers" },
];

const VALEURS = [
  { icon: MapPin, title: "Proximité terrain", text: "Basés à Riviera Bonoumin, présents sur vos sites d'Abidjan à San Pedro." },
  { icon: FileCheck2, title: "Conformité stricte", text: "Agréé MBPE & FDFP. Chaque fonctionnalité respecte la réglementation ivoirienne." },
  { icon: ShieldCheck, title: "Souveraineté numérique", text: "Vos données d'entreprise hébergées et traitées dans un cadre maîtrisé, 100% conçu en Côte d'Ivoire." },
];

const CHIFFRES = [
  { value: "+80", label: "PME accompagnées" },
  { value: "15+", label: "experts sur site" },
  { value: "5", label: "logiciels métier" },
  { value: "100 %", label: "conçu en Côte d'Ivoire" },
];

export default function AProposPage() {
  return (
    <div className="bg-[#050814]">
      <section className="relative overflow-hidden bg-[radial-gradient(ellipse_at_center,#0A1628_0%,#050814_70%)] px-6 pb-16 pt-32 text-center md:px-10 md:pt-40">
        <div aria-hidden className="pointer-events-none absolute left-1/2 top-1/3 size-[560px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#0052FF]/25 blur-[120px]" />
        <div className="relative mx-auto max-w-3xl">
          <Reveal>
            <p className="inline-block rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-blue-200 backdrop-blur-xl">DC-KNOWING</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="mt-6 text-balance text-4xl font-black tracking-tight text-white md:text-6xl">
              Nous sommes DC-KNOWING. The bespoke partner.
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-white/65 md:text-lg">
              Cabinet d&apos;expertise comptable ivoirien, transformé en éditeur logiciel pour doter les PME d&apos;outils dignes des grandes entreprises.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Histoire + mission */}
      <section className="mx-auto grid max-w-6xl gap-5 px-6 md:grid-cols-2 md:px-10" aria-label="Histoire et mission">
        <Reveal>
          <div className="h-full rounded-[32px] border border-white/12 bg-white/[0.03] p-8 backdrop-blur-md md:p-10">
            <h2 className="text-2xl font-extrabold text-white">Notre histoire</h2>
            <p className="mt-4 text-sm leading-relaxed text-white/65 md:text-base">
              Né de la pratique quotidienne auprès de dizaines de PME abidjanaises, le cabinet a industrialisé ses propres méthodes : chaque tâche répétitive est devenue un module logiciel, chaque contrôle un automatisme. La Suite Flow est née sur le terrain, pas dans un bureau.
            </p>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="h-full rounded-[32px] border border-[#0052FF]/40 bg-gradient-to-b from-[#0052FF]/20 to-white/[0.03] p-8 backdrop-blur-md md:p-10">
            <h2 className="text-2xl font-extrabold text-white">Notre mission</h2>
            <p className="mt-4 text-xl font-bold leading-snug text-white md:text-2xl">
              « Doter les PME ivoiriennes d&apos;outils dignes des grandes entreprises. »
            </p>
            <p className="mt-4 text-sm leading-relaxed text-white/65">
              Rigueur juridique, excellence comptable et innovation digitale : le même niveau d&apos;exigence, du commerçant au groupe multi-sites.
            </p>
          </div>
        </Reveal>
      </section>

      {/* Équipe */}
      <section className="mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-24" aria-label="L'équipe">
        <Reveal>
          <p className="text-xs font-black uppercase tracking-[0.2em] text-blue-300">L&apos;équipe</p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-white md:text-4xl">Plus de 15 experts à vos côtés</h2>
        </Reveal>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {EQUIPE.map((m, i) => (
            <Reveal key={m.name} delay={(i % 3) * 0.1}>
              <div className="flex items-center gap-4 rounded-3xl border border-white/12 bg-white/[0.03] p-5 backdrop-blur-md">
                <span className="grid size-14 shrink-0 place-items-center rounded-2xl bg-[#0052FF]/25 text-base font-black text-white ring-1 ring-white/20" aria-hidden>
                  {m.initials}
                </span>
                <span>
                  <span className="block text-sm font-bold text-white">{m.name}</span>
                  <span className="block text-xs text-white/55">{m.role}</span>
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Valeurs */}
      <section className="mx-auto max-w-6xl px-6 md:px-10" aria-label="Nos valeurs">
        <div className="grid gap-5 md:grid-cols-3">
          {VALEURS.map((v, i) => (
            <Reveal key={v.title} delay={i * 0.1}>
              <div className="h-full rounded-3xl border border-white/12 bg-white/[0.03] p-7 backdrop-blur-md">
                <v.icon className="size-7 text-blue-300" aria-hidden />
                <h3 className="mt-4 text-lg font-extrabold text-white">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/60">{v.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Chiffres */}
      <section className="px-6 py-16 md:px-10 md:py-24" aria-label="Chiffres clés">
        <Reveal>
          <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 rounded-[36px] bg-gradient-to-r from-[#030B2A] via-[#002288] to-[#0052FF] px-6 py-12 text-center md:grid-cols-4 md:py-16">
            {CHIFFRES.map((c) => (
              <div key={c.label}>
                <p className="text-4xl font-black tracking-tight text-white md:text-5xl">{c.value}</p>
                <p className="mt-2 text-xs font-semibold uppercase tracking-widest text-white/65 md:text-sm">{c.label}</p>
              </div>
            ))}
          </div>
        </Reveal>
        <Reveal>
          <p className="mt-10 text-center">
            <Link href="/contact" className="inline-block rounded-full bg-white px-8 py-4 text-sm font-black uppercase tracking-wide text-[#0A1628] transition hover:scale-105">
              Travailler avec nous
            </Link>
          </p>
        </Reveal>
      </section>
    </div>
  );
}
