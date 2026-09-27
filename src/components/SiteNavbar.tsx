"use client";

import Link from "next/link";
import { useState } from "react";
import {
  ChevronDown,
  Menu,
  X,
  ShoppingCart,
  Calculator,
  Users,
  Scale,
  LayoutDashboard,
  Network,
} from "lucide-react";
import { cn } from "@/lib/utils";

const LOGICIELS = [
  { href: "/sell-flow", label: "Sell Flow", desc: "Facturation certifiée FNE", icon: ShoppingCart },
  { href: "/compta-flow", label: "Compta Flow", desc: "SYSCOHADA automatisé", icon: Calculator },
  { href: "/rh-flow", label: "RH Flow", desc: "Paie ivoirienne", icon: Users },
  { href: "/legal-flow", label: "Legal Flow", desc: "Zéro pénalité", icon: Scale },
  { href: "/task-flow", label: "Task Flow", desc: "Pilotage & Kanban", icon: LayoutDashboard },
  { href: "/ecosysteme", label: "Écosystème", desc: "Au-delà des logiciels", icon: Network },
];

/** Navbar globale : pilule flottante sombre, dropdown Logiciels. */
export default function SiteNavbar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed inset-x-0 top-4 z-50 flex justify-center px-4">
      <div className="w-full max-w-4xl">
        <nav
          aria-label="Navigation du site"
          className="flex items-center justify-between gap-4 rounded-full border border-white/15 bg-[#0A1628]/85 py-2 pl-5 pr-2 shadow-2xl backdrop-blur-xl"
        >
          <Link href="/" className="flex items-center gap-2" aria-label="Suite Flow - accueil">
            <span className="grid size-8 place-items-center rounded-full bg-[#0052FF] text-sm font-black">F</span>
            <span className="text-sm font-extrabold tracking-tight text-white">Suite Flow</span>
          </Link>

          <div className="hidden items-center gap-6 text-[13px] font-medium text-white/75 md:flex">
            <div className="group relative">
              <button className="flex items-center gap-1 transition hover:text-white" aria-haspopup="true">
                Logiciels <ChevronDown className="size-3.5" aria-hidden />
              </button>
              <div className="invisible absolute left-1/2 top-full -translate-x-1/2 pt-3 opacity-0 transition-all group-hover:visible group-hover:opacity-100">
                <ul className="w-64 rounded-2xl border border-white/10 bg-[#0A1628] p-2 shadow-2xl">
                  {LOGICIELS.map((l) => (
                    <li key={l.href}>
                      <Link
                        href={l.href}
                        className="flex items-center gap-3 rounded-xl px-3 py-2.5 transition hover:bg-white/10"
                      >
                        <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-[#0052FF]/20 text-blue-200">
                          <l.icon className="size-4" aria-hidden />
                        </span>
                        <span>
                          <span className="block text-sm font-bold text-white">{l.label}</span>
                          <span className="block text-xs text-white/55">{l.desc}</span>
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <Link href="/tarifs" className="transition hover:text-white">Tarifs</Link>
            <Link href="/a-propos" className="transition hover:text-white">À propos</Link>
            <Link href="/contact" className="transition hover:text-white">Contact</Link>
          </div>

          <div className="flex items-center gap-2">
            <Link
              href="/contact"
              className="hidden rounded-full bg-white px-4 py-2 text-xs font-bold text-[#0A1628] transition hover:bg-white/90 sm:inline-block"
            >
              Essai gratuit
            </Link>
            <button
              onClick={() => setOpen(!open)}
              aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
              aria-expanded={open}
              className="grid size-9 place-items-center rounded-full bg-white/10 text-white md:hidden"
            >
              {open ? <X className="size-4" /> : <Menu className="size-4" />}
            </button>
          </div>
        </nav>

        {/* Menu mobile */}
        <div className={cn("md:hidden", open ? "block" : "hidden")}>
          <ul className="mt-2 space-y-1 rounded-3xl border border-white/10 bg-[#0A1628]/95 p-3 shadow-2xl backdrop-blur-xl">
            {LOGICIELS.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-3 rounded-xl px-3 py-2 text-sm font-semibold text-white/85 transition hover:bg-white/10 hover:text-white"
                >
                  <l.icon className="size-4 text-blue-300" aria-hidden /> {l.label}
                </Link>
              </li>
            ))}
            <li className="flex gap-4 border-t border-white/10 px-3 pt-3 text-sm font-semibold">
              <Link href="/tarifs" onClick={() => setOpen(false)} className="text-white/85">Tarifs</Link>
              <Link href="/a-propos" onClick={() => setOpen(false)} className="text-white/85">À propos</Link>
              <Link href="/contact" onClick={() => setOpen(false)} className="text-white/85">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
