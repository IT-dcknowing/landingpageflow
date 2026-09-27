"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import {
  ShoppingCart, QrCode, Store, Wallet, FileText, Package, BarChart3,
  Calculator, BookOpen, ScanLine, RefreshCw, FileSpreadsheet, Upload, Send,
  Users, FileBadge, Percent, ShieldCheck, CalendarOff, Download,
  Scale, CalendarDays, MessageCircle, Archive, Radar,
  LayoutDashboard, KanbanSquare, UserPlus, BellRing, PieChart, Eye, Activity,
  Sparkles,
} from "lucide-react";

/** Noms d'icônes sérialisables (les pages serveur passent des strings, pas des composants). */
const ICONS: Record<string, LucideIcon> = {
  cart: ShoppingCart, qr: QrCode, store: Store, wallet: Wallet, doc: FileText,
  stock: Package, stats: BarChart3, calc: Calculator, book: BookOpen, scan: ScanLine,
  refresh: RefreshCw, sheet: FileSpreadsheet, upload: Upload, send: Send,
  users: Users, badge: FileBadge, percent: Percent, shield: ShieldCheck,
  leave: CalendarOff, download: Download, scale: Scale, calendar: CalendarDays,
  chat: MessageCircle, archive: Archive, radar: Radar, board: LayoutDashboard,
  kanban: KanbanSquare, assign: UserPlus, bell: BellRing, pie: PieChart,
  eye: Eye, pulse: Activity,
};

export type ProductFeature = { icon: string; title: string; text: string };
export type Testimonial = { quote: string; name: string; role: string; initials: string };

import { CheckCircle2 } from "lucide-react";
import FeatureCard from "./feature-card";
import TestimonialCard from "./testimonial-card";
import Reveal from "./Reveal";
import { cn } from "@/lib/utils";

type Props = {
  appName: string;
  tagline: string;
  title: string;
  subtitle: string;
  icon: string;
  logoSrc: string;
  /** Halo radial de la page, ex. "bg-[#1e40af]/40" */
  auraClass: string;
  features: ProductFeature[];
  practiceTitle: string;
  practiceText: string;
  practiceBullets: string[];
  practiceStats: { value: string; label: string }[];
  testimonials: Testimonial[];
  ctaTitle: string;
  ctaButton: string;
};

/** Template factorisé des 5 pages produits : hero sombre + features + pratique + avis + CTA. */
export default function ProductPageTemplate({
  appName,
  tagline,
  title,
  subtitle,
  icon: iconName,
  logoSrc,
  auraClass,
  features,
  practiceTitle,
  practiceText,
  practiceBullets,
  practiceStats,
  testimonials,
  ctaTitle,
  ctaButton,
}: Props) {
  const AppIcon = ICONS[iconName] ?? Sparkles;
  return (
    <div className="bg-[#050814]">
      {/* HERO sombre */}
      <section className="relative overflow-hidden bg-[radial-gradient(ellipse_at_center,#0A1628_0%,#050814_70%)] px-6 pb-20 pt-32 md:px-10 md:pt-40">
        <div aria-hidden className={cn("pointer-events-none absolute left-1/2 top-1/3 size-[560px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[120px]", auraClass)} />
        <div className="relative mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
          <div>
            <Reveal>
              <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-blue-200 backdrop-blur-xl">
                <AppIcon className="size-4" aria-hidden /> {tagline}
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <h1 className="mt-6 text-balance text-4xl font-black leading-[1.05] tracking-tight text-white md:text-6xl">
                {title}
              </h1>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-5 max-w-xl text-pretty text-sm leading-relaxed text-white/65 md:text-lg">
                {subtitle}
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="rounded-full bg-white px-7 py-3.5 text-sm font-bold text-[#0A1628] shadow-[0_0_40px_rgba(255,255,255,0.2)] transition hover:scale-105"
                >
                  Essayer gratuitement
                </Link>
                <Link
                  href="/contact"
                  className="rounded-full border border-white/25 bg-white/5 px-7 py-3.5 text-sm font-bold text-white backdrop-blur-xl transition hover:bg-white/15"
                >
                  Voir une démo
                </Link>
              </div>
            </Reveal>
          </div>
          <div className="flex justify-center">
            <motion.div
              animate={{ y: [0, -16, 0], rotate: [0, 2, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="relative"
            >
              <div aria-hidden className={cn("absolute inset-0 scale-110 rounded-full blur-[70px]", auraClass)} />
              <Image
                src={logoSrc}
                alt={`${appName} — icône 3D`}
                width={340}
                height={340}
                priority
                className="relative h-auto w-56 drop-shadow-[0_24px_60px_rgba(0,0,0,0.5)] md:w-80"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* FONCTIONNALITÉS */}
      <section className="mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-24" aria-label={`Fonctionnalités ${appName}`}>
        <Reveal>
          <p className="text-xs font-black uppercase tracking-[0.2em] text-blue-300">Fonctionnalités clés</p>
          <h2 className="mt-3 max-w-2xl text-3xl font-extrabold tracking-tight text-white md:text-4xl">
            Tout ce que {appName} fait pour vous
          </h2>
        </Reveal>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <FeatureCard key={f.title} icon={ICONS[f.icon] ?? Sparkles} title={f.title} text={f.text} delay={(i % 3) * 0.1} />
          ))}
        </div>
      </section>

      {/* EN PRATIQUE */}
      <section className="border-y border-white/10 bg-white/[0.02]" aria-label={`${appName} en pratique`}>
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-16 md:grid-cols-2 md:px-10 md:py-24">
          <Reveal>
            <p className="text-xs font-black uppercase tracking-[0.2em] text-blue-300">En pratique</p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-white md:text-4xl">{practiceTitle}</h2>
            <p className="mt-4 text-sm leading-relaxed text-white/65 md:text-base">{practiceText}</p>
            <ul className="mt-6 space-y-3">
              {practiceBullets.map((b) => (
                <li key={b} className="flex items-start gap-3 text-sm font-medium text-white/80">
                  <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-emerald-400" aria-hidden /> {b}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="rounded-3xl border border-white/15 bg-white/5 p-6 backdrop-blur-md md:p-8">
              <div className="grid grid-cols-3 gap-4 text-center">
                {practiceStats.map((s) => (
                  <div key={s.label}>
                    <p className="text-2xl font-black tracking-tight text-white md:text-3xl">{s.value}</p>
                    <p className="mt-1 text-xs leading-snug text-white/55">{s.label}</p>
                  </div>
                ))}
              </div>
              <div className="mt-6 rounded-2xl bg-[#0052FF]/10 p-4 text-center text-sm font-semibold text-blue-100 ring-1 ring-[#0052FF]/30">
                Connecté en temps réel aux 4 autres apps de la Suite Flow
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* TÉMOIGNAGES */}
      <section className="mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-24" aria-label="Témoignages clients">
        <Reveal>
          <p className="text-xs font-black uppercase tracking-[0.2em] text-blue-300">Ils l&apos;utilisent déjà</p>
          <h2 className="mt-3 max-w-2xl text-3xl font-extrabold tracking-tight text-white md:text-4xl">
            Ils ont adopté {appName}
          </h2>
        </Reveal>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <TestimonialCard key={t.name} quote={t.quote} name={t.name} role={t.role} initials={t.initials} delay={i * 0.1} />
          ))}
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="px-6 pb-20 md:px-10 md:pb-28" aria-label="Appel à l'action">
        <Reveal>
          <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[36px] bg-gradient-to-r from-[#030B2A] via-[#002288] to-[#0052FF] px-6 py-14 text-center md:py-20">
            <div aria-hidden className={cn("pointer-events-none absolute left-1/2 top-1/2 size-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[100px]", auraClass)} />
            <h2 className="relative text-3xl font-black tracking-tight text-white md:text-5xl">{ctaTitle}</h2>
            <p className="relative mx-auto mt-4 max-w-xl text-sm text-white/70 md:text-base">
              Déploiement accompagné par le cabinet DC-KNOWING. Sans engagement, sans stress.
            </p>
            <Link
              href="/contact"
              className="relative mt-8 inline-block rounded-full bg-white px-8 py-4 text-sm font-black uppercase tracking-wide text-[#0A1628] transition hover:scale-105"
            >
              {ctaButton}
            </Link>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
