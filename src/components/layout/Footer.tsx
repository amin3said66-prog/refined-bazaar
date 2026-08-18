import { ArrowUp, Github, Linkedin, Twitter, Dribbble } from "lucide-react";
import { Link } from "@tanstack/react-router";

const socials = [
  { Icon: Dribbble, label: "Dribbble", href: "#" },
  { Icon: Twitter, label: "Twitter", href: "#" },
  { Icon: Linkedin, label: "LinkedIn", href: "#" },
  { Icon: Github, label: "GitHub", href: "https://github.com/Mostafa-SAID7" },
];

export function Footer() {
  return (
    <footer className="px-5 pb-10">
      <div className="mx-auto max-w-6xl">
        <div className="glass flex flex-col items-center justify-between gap-8 rounded-[2rem] p-10 md:flex-row">
          <h2 className="font-display text-4xl font-black uppercase leading-[0.9] text-foreground">
            You can find
            <br />
            me here:
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-4">
            {socials.map(({ Icon, label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="grid size-14 place-items-center rounded-2xl border border-border bg-secondary/40 text-foreground transition-all duration-300 hover:-translate-y-2 hover:bg-gold hover:text-gold-foreground"
              >
                <Icon className="size-6" />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-5 md:flex-row">
          <Link
            to="/"
            className="flex items-center gap-3 rounded-2xl bg-foreground/95 px-4 py-2.5"
          >
            <span className="font-display text-lg font-black leading-none text-background">
              MS
            </span>
            <span className="text-[10px] font-bold uppercase leading-3 tracking-[0.2em] text-background/80">
              Market
              <br />
              Place
            </span>
          </Link>

          <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-muted-foreground">
            © {new Date().getFullYear()} Mostafa Samir — All rights reserved
          </p>

          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="group grid size-11 place-items-center rounded-full border border-border transition-all hover:-translate-y-1 hover:border-gold"
            aria-label="Back to top"
          >
            <ArrowUp className="size-5 text-foreground transition-colors group-hover:text-gold" />
          </button>
        </div>
      </div>
    </footer>
  );
}
