import { motion } from "framer-motion";
import type { MotionValue } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";

type Props = {
  rotateX: MotionValue<number>;
  rotateY: MotionValue<number>;
  className?: string;
};

/**
 * Hexagone 3D central : brillance + relief prononcés, devant FL et W.
 */
export default function HexagonLogo({ rotateX, rotateY, className }: Props) {
  return (
    <motion.div
      aria-label="Logo Suite Flow"
      role="img"
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className={cn("relative z-20 inline-block", className)}
    >
      {/* Glow + brillance */}
      <div className="absolute inset-0 scale-115 rounded-full bg-[#0052FF]/60 blur-[60px]" aria-hidden />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-10 rounded-full bg-gradient-to-br from-white/35 via-transparent to-transparent"
      />
      <Image
        src="/logos/suite-flow.png"
        alt="Suite Flow - O central 3D"
        width={460}
        height={460}
        priority
        className="relative h-auto w-[1.6em] drop-shadow-[0_28px_70px_rgba(0,40,200,0.75)]"
      />
    </motion.div>
  );
}
