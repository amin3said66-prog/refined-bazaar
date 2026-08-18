import { Link } from "@tanstack/react-router";
import { ArrowRight, Calendar, ChevronRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { experience } from "@/data";
import { useI18n } from "@/lib/i18n";

export function ExperiencePreview() {
  const { tr } = useI18n();
  const current = experience[0];

  return (
    <section id="experience" className="scroll-mt-24 py-24">
      <div className="mx-auto max-w-5xl px-5">
        <SectionHeading title={tr("experience.title")} />

        <Reveal>
          <div className="glass rounded-2xl p-7 md:p-9">
            <div className="inline-flex items-center gap-2 rounded-full border border-gold/20 bg-gold/10 px-3 py-1.5">
              <Calendar className="size-3.5 text-gold" />
              <span className="text-xs font-semibold uppercase tracking-wider text-gold">
                {current.period}
              </span>
            </div>
            <h3 className="mt-4 text-2xl font-bold leading-tight">
              {current.role}
            </h3>
            <p className="mt-2 text-sm font-semibold text-gold">
              {current.company}
            </p>
            <ul className="mt-6 space-y-3">
              {current.points.slice(0, 2).map((point) => (
                <li
                  key={point}
                  className="flex gap-3 text-sm leading-relaxed text-muted-foreground"
                >
                  <ChevronRight className="mt-0.5 size-4 shrink-0 text-gold/60" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mt-10 flex justify-center">
            <Link
              to="/experience"
              className="group inline-flex items-center gap-2 rounded-full border border-gold/50 px-7 py-3.5 font-semibold text-gold transition-all hover:bg-gold/10 hover:scale-[1.03]"
            >
              See the full timeline
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
