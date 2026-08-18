import { Reveal } from "@/components/ui/Reveal";

export function SectionHeading({
  kicker,
  title,
}: {
  kicker?: string;
  title: string;
}) {
  return (
    <Reveal className="mb-14 text-center">
      {kicker && (
        <span className="mb-4 inline-block text-[11px] font-bold uppercase tracking-[0.35em] text-gold">
          {kicker}
        </span>
      )}
      <h2 className="font-display text-4xl font-black uppercase tracking-tight text-foreground sm:text-5xl">
        {title}
      </h2>
      <div className="mx-auto mt-5 h-1.5 w-16 rounded-full bg-gold" />
    </Reveal>
  );
}
