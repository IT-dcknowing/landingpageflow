"use client";

import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";

type Props = {
  icon: LucideIcon;
  title: string;
  text: string;
  delay?: number;
};

/** Carte fonctionnalité glassmorphism avec hover 3D. */
export default function FeatureCard({ icon: Icon, title, text, delay = 0 }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
      whileHover={{ scale: 1.03, y: -5 }}
      className="rounded-3xl border border-white/15 bg-white/5 p-6 backdrop-blur-md"
    >
      <span className="grid size-11 place-items-center rounded-2xl bg-[#0052FF]/20 text-blue-200 ring-1 ring-white/20">
        <Icon className="size-5" aria-hidden />
      </span>
      <h3 className="mt-4 text-base font-bold text-white">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-white/65">{text}</p>
    </motion.div>
  );
}
