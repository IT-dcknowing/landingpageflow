"use client";

import { useState } from "react";
import { CheckCircle2 } from "lucide-react";

const inputCls =
  "w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/35 outline-none transition focus:border-[#0052FF] focus:bg-white/10";

/** Formulaire de contact glassmorphism + état de confirmation. */
export default function ContactForm() {
  const [sent, setSent] = useState(false);

  if (sent) {
    return (
      <div className="grid place-items-center rounded-3xl border border-white/15 bg-white/5 p-10 text-center backdrop-blur-md">
        <CheckCircle2 className="size-12 text-emerald-400" aria-hidden />
        <p className="mt-4 text-xl font-extrabold text-white">Demande bien reçue !</p>
        <p className="mt-2 max-w-sm text-sm text-white/65">
          Un expert DC-KNOWING vous rappelle sous 24 h ouvrées pour planifier votre Audit Flash Gratuit.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
      className="rounded-3xl border border-white/15 bg-white/5 p-6 backdrop-blur-md md:p-8"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block text-xs font-bold uppercase tracking-wider text-white/50">
          Nom & Prénom
          <input required placeholder="Awa Koné" className={`${inputCls} mt-2`} />
        </label>
        <label className="block text-xs font-bold uppercase tracking-wider text-white/50">
          Entreprise
          <input required placeholder="ETS Koné" className={`${inputCls} mt-2`} />
        </label>
        <label className="block text-xs font-bold uppercase tracking-wider text-white/50">
          Téléphone
          <input required type="tel" placeholder="07 00 00 00 00" className={`${inputCls} mt-2`} />
        </label>
        <label className="block text-xs font-bold uppercase tracking-wider text-white/50">
          Email
          <input required type="email" placeholder="vous@entreprise.ci" className={`${inputCls} mt-2`} />
        </label>
        <label className="block text-xs font-bold uppercase tracking-wider text-white/50">
          Nombre de salariés
          <select required defaultValue="" className={`${inputCls} mt-2`}>
            <option value="" disabled>Choisir…</option>
            <option>1 – 10</option>
            <option>11 – 50</option>
            <option>51 – 200</option>
            <option>200+</option>
          </select>
        </label>
        <label className="block text-xs font-bold uppercase tracking-wider text-white/50">
          Secteur d&apos;activité
          <select required defaultValue="" className={`${inputCls} mt-2`}>
            <option value="" disabled>Choisir…</option>
            <option>Commerce & Distribution</option>
            <option>BTP & Immobilier</option>
            <option>Services</option>
            <option>Agro & Négoce</option>
            <option>Autre</option>
          </select>
        </label>
        <label className="block text-xs font-bold uppercase tracking-wider text-white/50 sm:col-span-2">
          Message
          <textarea required rows={4} placeholder="Décrivez votre besoin en une phrase…" className={`${inputCls} mt-2 resize-none`} />
        </label>
      </div>
      <button
        type="submit"
        className="mt-6 w-full rounded-full bg-white px-8 py-4 text-sm font-black uppercase tracking-wide text-[#0A1628] transition hover:scale-[1.02] hover:bg-white/90"
      >
        Réserver mon Audit Flash Gratuit
      </button>
    </form>
  );
}
