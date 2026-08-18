import { Link } from "@tanstack/react-router";
import { ChevronLeft } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

export function PageHeader({
  kicker,
  title,
  subtitle,
}: {
  kicker?: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <section className="px-5 pb-6 pt-32">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-gold"
          >
            <ChevronLeft className="size-4" />
            Back home
          </Link>
        </Reveal>
        <Reveal delay={0.05}>
          {kicker && (
            <span className="mt-8 inline-block text-[11px] font-bold uppercase tracking-[0.35em] text-gold">
              {kicker}
            </span>
          )}
          <h1 className="mt-4 font-display text-5xl font-black uppercase leading-[0.92] tracking-tight text-foreground sm:text-6xl">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              {subtitle}
            </p>
          )}
          <div className="mt-8 h-1.5 w-16 rounded-full bg-gold" />
        </Reveal>
      </div>
    </section>
  );
}
