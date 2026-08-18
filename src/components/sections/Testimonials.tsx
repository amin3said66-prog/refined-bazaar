import { Quote } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { testimonials } from "@/data";
import { useI18n } from "@/lib/i18n";

function initials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2);
}

export function Testimonials() {
  const { tr } = useI18n();
  return (
    <section className="py-28">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading title={tr("testimonials.title")} />
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((item, i) => (
            <Reveal key={item.name} delay={i * 0.1}>
              <figure className="glass flex h-full flex-col rounded-2xl p-7">
                <Quote className="size-8 text-gold/50" />
                <blockquote className="mt-4 flex-1 text-muted-foreground">
                  "{item.quote}"
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3">
                  <span className="grid size-11 place-items-center rounded-full bg-gold/15 font-bold text-gold">
                    {initials(item.name)}
                  </span>
                  <div>
                    <div className="font-semibold">{item.name}</div>
                    <div className="text-sm text-muted-foreground">
                      {item.title}
                    </div>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
