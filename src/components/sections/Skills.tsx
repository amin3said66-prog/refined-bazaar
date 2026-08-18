import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { skillGroups } from "@/data";
import { useI18n } from "@/lib/i18n";

export function Skills() {
  const { tr } = useI18n();
  return (
    <section id="skills" className="scroll-mt-24 bg-secondary/20 py-28">
      <div className="mx-auto max-w-5xl px-5">
        <SectionHeading title={tr("skills.title")} />
        <div className="grid gap-6 sm:grid-cols-2">
          {skillGroups.map((group, i) => (
            <Reveal key={group.title} delay={i * 0.08}>
              <div className="glass h-full rounded-2xl p-7 transition-transform hover:-translate-y-1">
                <h3 className="mb-5 flex items-center gap-3 text-xl font-bold">
                  <span className="size-2 rounded-full bg-gold" />
                  {group.title}
                </h3>
                <div className="flex flex-wrap gap-2.5">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-border bg-background/40 px-3.5 py-1.5 text-sm text-muted-foreground transition-colors hover:border-gold/50 hover:text-gold"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
