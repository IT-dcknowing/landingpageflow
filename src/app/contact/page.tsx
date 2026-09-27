import { MapPin, Phone, Mail, Clock, CalendarCheck } from "lucide-react";
import ContactForm from "@/components/contact-form";
import Reveal from "@/components/Reveal";

export const metadata = {
  title: "Contact — Parlons de votre entreprise | Suite Flow",
  description: "Réservez votre Audit Flash Gratuit : Abidjan, 27 22 42 14 43 / 07 67 13 19 93.",
};

const CALENDLY_URL = "https://calendly.com/dcknowing";

const INFOS = [
  { icon: MapPin, label: "Adresse", value: "Riviera Bonoumin, Cocody — Abidjan, Côte d'Ivoire" },
  { icon: Phone, label: "Téléphone", value: "27 22 42 14 43 / 07 67 13 19 93" },
  { icon: Mail, label: "Email", value: "dcknowing@gmail.com" },
  { icon: Clock, label: "Horaires", value: "Lun – Ven · 8h – 18h" },
];

export default function ContactPage() {
  return (
    <div className="bg-[#050814]">
      <section className="relative overflow-hidden bg-[radial-gradient(ellipse_at_center,#0A1628_0%,#050814_70%)] px-6 pb-14 pt-32 text-center md:px-10 md:pt-40">
        <div aria-hidden className="pointer-events-none absolute left-1/2 top-1/3 size-[560px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#0052FF]/25 blur-[120px]" />
        <div className="relative mx-auto max-w-3xl">
          <Reveal>
            <p className="inline-block rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-blue-200 backdrop-blur-xl">Contact</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="mt-6 text-balance text-4xl font-black tracking-tight text-white md:text-6xl">
              Parlons de votre entreprise.
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mx-auto mt-5 max-w-xl text-sm text-white/65 md:text-lg">
              Laissez-nous vos coordonnées : un expert vous rappelle sous 24 h ouvrées.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-8 px-6 pb-8 md:grid-cols-[1.2fr_1fr] md:px-10" aria-label="Formulaire et coordonnées">
        <Reveal>
          <ContactForm />
        </Reveal>
        <Reveal delay={0.1}>
          <div className="space-y-4">
            {INFOS.map((info) => (
              <div key={info.label} className="flex items-start gap-4 rounded-2xl border border-white/12 bg-white/[0.03] p-5 backdrop-blur-md">
                <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-[#0052FF]/20 text-blue-200">
                  <info.icon className="size-5" aria-hidden />
                </span>
                <span>
                  <span className="block text-xs font-black uppercase tracking-widest text-white/45">{info.label}</span>
                  <span className="mt-1 block text-sm font-semibold text-white">{info.value}</span>
                </span>
              </div>
            ))}
            <div className="overflow-hidden rounded-2xl border border-white/12">
              <iframe
                title="Carte — Riviera Bonoumin, Cocody, Abidjan"
                src="https://www.google.com/maps?q=Riviera+Bonoumin+Cocody+Abidjan&output=embed"
                className="h-64 w-full"
                loading="lazy"
              />
            </div>
          </div>
        </Reveal>
      </section>

      <section className="px-6 py-14 md:px-10 md:py-20" aria-label="Prendre rendez-vous">
        <Reveal>
          <div className="mx-auto flex max-w-4xl flex-col items-center gap-5 rounded-[32px] bg-gradient-to-r from-[#030B2A] via-[#002288] to-[#0052FF] px-6 py-12 text-center md:py-14">
            <CalendarCheck className="size-10 text-white" aria-hidden />
            <h2 className="text-2xl font-black tracking-tight text-white md:text-3xl">Prendre RDV directement</h2>
            <p className="max-w-md text-sm text-white/70">Choisissez votre créneau d&apos;Audit Flash Gratuit (30 min, visio ou au cabinet).</p>
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-white px-8 py-4 text-sm font-black uppercase tracking-wide text-[#0A1628] transition hover:scale-105"
            >
              Ouvrir le calendrier
            </a>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
