"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";

type Props = {
  src: string;
  alt: string;
  className?: string;
  size?: number;
  delay?: number;
};

/**
 * Badge verre bleu sombre + icône PNG 3D nette, relief + glow.
 * Positionné en absolute par le parent (écarté façon Canva).
 */
export default function FloatingBadge({ src, alt, className, size = 56, delay = 0 }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85 }}
      animate={{ opacity: 1, scale: 1, y: [0, -10, 0] }}
      transition={{
        opacity: { duration: 0.5, delay },
        scale: { duration: 0.5, delay },
        y: { duration: 4.2, repeat: Infinity, ease: "easeInOut", delay },
      }}
      whileHover={{ scale: 1.1 }}
      className={cn(
        "pointer-events-auto flex items-center justify-center p-2 bg-[#0A1E5B]/60 backdrop-blur-md border border-white/25 rounded-2xl shadow-[0_12px_32px_rgba(0,20,120,0.55),0_0_24px_rgba(0,82,255,0.35)] z-20",
        className
      )}
    >
      <Image src={src} alt={alt} width={size} height={size} className="rounded-xl" priority />
    </motion.div>
  );
}
