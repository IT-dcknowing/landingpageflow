import Link from "next/link";

const PRODUITS = [
  { href: "/sell-flow", label: "Sell Flow" },
  { href: "/compta-flow", label: "Compta Flow" },
  { href: "/rh-flow", label: "RH Flow" },
  { href: "/legal-flow", label: "Legal Flow" },
  { href: "/task-flow", label: "Task Flow" },
];

const SITE = [
  { href: "/ecosysteme", label: "Écosystème" },
  { href: "/tarifs", label: "Tarifs" },
  { href: "/a-propos", label: "À propos" },
  { href: "/contact", label: "Contact" },
  { href: "/ecosysteme", label: "Réseau ONECCA Côte d'Ivoire" },
  { href: "/ecosysteme", label: "Centres de Gestion Agréés (CGA)" },
  { href: "#confidentialite", label: "Politique de Confidentialité" },
  { href: "#securite", label: "Sécurité des Données Cloud" },
];

/** Pied de page global sombre. */
export default function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-[#030B2A] text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 md:grid-cols-4 md:px-10">
        <div>
          <p className="flex items-center gap-2 text-sm font-extrabold tracking-tight">
            <span className="grid size-8 place-items-center rounded-full bg-[#0052FF]">F</span>
            Suite Flow
          </p>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-white/60">
            Toute l&apos;expertise d&apos;un cabinet réunie dans une seule suite. Conçue pour les réalités des PME ivoiriennes.
          </p>
          <p className="mt-3 text-xs font-semibold uppercase tracking-widest text-white/40">The bespoke partner</p>
        </div>
        <nav aria-label="Logiciels">
          <p className="text-xs font-black uppercase tracking-widest text-white/40">Logiciels</p>
          <ul className="mt-4 space-y-2.5 text-sm font-medium text-white/75">
            {PRODUITS.map((l) => (
              <li key={l.label}><Link href={l.href} className="transition hover:text-white">{l.label}</Link></li>
            ))}
          </ul>
        </nav>
        <nav aria-label="Site et conformité">
          <p className="text-xs font-black uppercase tracking-widest text-white/40">Site & Conformité</p>
          <ul className="mt-4 space-y-2.5 text-sm font-medium text-white/75">
            {SITE.map((l) => (
              <li key={l.label}><Link href={l.href} className="transition hover:text-white">{l.label}</Link></li>
            ))}
          </ul>
        </nav>
        <div>
          <p className="text-xs font-black uppercase tracking-widest text-white/40">Contact</p>
          <ul className="mt-4 space-y-2.5 text-sm text-white/75">
            <li>Riviera Bonoumin, Cocody — Abidjan</li>
            <li>27 22 42 14 43 / 07 67 13 19 93</li>
            <li>dcknowing@gmail.com</li>
            <li>Lun – Ven · 8h – 18h</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <p className="mx-auto max-w-6xl px-6 py-5 text-xs text-white/40 md:px-10">
          © 2026 DC-KNOWING · Cabinet d&apos;expertise comptable — Abidjan, Côte d&apos;Ivoire.
        </p>
      </div>
    </footer>
  );
}
