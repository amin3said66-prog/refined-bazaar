import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { skillGroups } from "@/data";
import { useI18n } from "@/lib/i18n";

export function SkillsPreview() {
  const { tr } = useI18n();
  const featured = skillGroups.slice(0, 4);

  return (
    <section id="skills" className="scroll-mt-24 bg-secondary/20 py-24">
      <div className="mx-auto max-w-5xl px-5">
        <SectionHeading title={tr("skills.title")} />

        <div className="grid gap-4 sm:grid-cols-2">
          {featured.map((group, i) => (
            <Reveal key={group.title} delay={i * 0.08}>
              <div className="glass h-full rounded-2xl p-6 transition-transform hover:-translate-y-1">
                <h3 className="mb-4 flex items-center gap-3 text-lg font-bold">
                  <span className="size-2 rounded-full bg-gold" />
                  {group.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.skills.slice(0, 5).map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-border bg-background/40 px-3 py-1.5 text-sm text-muted-foreground"
                    >
                      {skill}
                    </span>
                  ))}
                  {group.skills.length > 5 && (
                    <span className="rounded-full px-3 py-1.5 text-sm font-semibold text-gold">
                      +{group.skills.length - 5}
                    </span>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.3}>
          <div className="mt-10 flex justify-center">
            <Link
              to="/skills"
              className="group inline-flex items-center gap-2 rounded-full border border-gold/50 px-7 py-3.5 font-semibold text-gold transition-all hover:bg-gold/10 hover:scale-[1.03]"
            >
              Explore the full stack
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
