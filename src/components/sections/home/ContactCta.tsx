import { Link } from "@tanstack/react-router";
import { ArrowRight, Mail } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

export function ContactCta() {
  return (
    <section id="contact" className="scroll-mt-24 bg-secondary/20 py-24">
      <div className="mx-auto max-w-4xl px-5">
        <Reveal>
          <div className="glass rounded-[2rem] px-8 py-14 text-center md:px-14">
            <span className="inline-block text-[11px] font-bold uppercase tracking-[0.35em] text-gold">
              Available for new work
            </span>
            <h2 className="mt-5 font-display text-4xl font-black uppercase leading-[0.95] tracking-tight sm:text-5xl">
              Let&apos;s build something
              <br />
              that scales
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-muted-foreground">
              Tell me about your marketplace and I&apos;ll come back with a
              concrete plan.
            </p>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 font-semibold text-gold-foreground transition-transform hover:scale-[1.03] glow-gold"
              >
                Start a conversation
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
              <a
                href="mailto:hello@example.com"
                className="inline-flex items-center gap-2 rounded-full border border-border px-7 py-3.5 font-semibold transition-colors hover:border-gold/50 hover:text-gold"
              >
                <Mail className="size-4" />
                Email directly
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
