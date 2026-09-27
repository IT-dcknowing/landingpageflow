import { Star } from "lucide-react";
import Reveal from "./Reveal";

type Props = {
  quote: string;
  name: string;
  role: string;
  initials: string;
  delay?: number;
};

/** Témoignage client en glassmorphism. */
export default function TestimonialCard({ quote, name, role, initials, delay = 0 }: Props) {
  return (
    <Reveal delay={delay} className="h-full">
      <figure className="flex h-full flex-col rounded-3xl border border-white/15 bg-white/5 p-6 backdrop-blur-md">
        <div className="flex gap-1 text-amber-300" aria-label="5 étoiles sur 5">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className="size-4 fill-current" aria-hidden />
          ))}
        </div>
        <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-white/80">« {quote} »</blockquote>
        <figcaption className="mt-5 flex items-center gap-3">
          <span className="grid size-10 place-items-center rounded-full bg-[#0052FF]/30 text-sm font-black text-white ring-1 ring-white/25" aria-hidden>
            {initials}
          </span>
          <span>
            <span className="block text-sm font-bold text-white">{name}</span>
            <span className="block text-xs text-white/55">{role}</span>
          </span>
        </figcaption>
      </figure>
    </Reveal>
  );
}
