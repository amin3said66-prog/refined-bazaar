import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { useI18n } from "@/lib/i18n";

const highlights = [
  { value: "$1B+", label: "GMV shipped" },
  { value: "10+", label: "Years building" },
  { value: "5M+", label: "Users served" },
];

export function AboutPreview() {
  const { tr } = useI18n();

  return (
    <section id="about" className="scroll-mt-24 py-24">
      <div className="mx-auto max-w-5xl px-5">
        <SectionHeading kicker={tr("about.kicker")} title={tr("about.title")} />

        <Reveal>
          <p className="mx-auto max-w-2xl text-center text-lg leading-relaxed text-muted-foreground">
            Marketplace systems architect — multi-vendor platforms, real-time
            bidding engines and high-scale commerce, shipped end to end.
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-3 gap-4">
          {highlights.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08}>
              <div className="glass rounded-2xl p-6 text-center transition-transform hover:-translate-y-1">
                <div className="text-3xl font-extrabold text-gradient-gold">
                  {s.value}
                </div>
                <div className="mt-1 text-sm text-muted-foreground">
                  {s.label}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.3}>
          <div className="mt-10 flex justify-center">
            <Link
              to="/about"
              className="group inline-flex items-center gap-2 rounded-full border border-gold/50 px-7 py-3.5 font-semibold text-gold transition-all hover:bg-gold/10 hover:scale-[1.03]"
            >
              Read the full story
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
