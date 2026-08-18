import { Github, Linkedin, Twitter, Dribbble, Instagram, Play } from "lucide-react";
import { Link } from "@tanstack/react-router";

const socials = [
  { Icon: Dribbble, label: "Dribbble", href: "#", tone: "bg-social-dribbble" },
  {
    Icon: Twitter,
    label: "Twitter",
    href: "#",
    tone: "bg-social-twitter",
    featured: true,
  },
  { Icon: Linkedin, label: "LinkedIn", href: "#", tone: "bg-social-linkedin" },
  {
    Icon: Github,
    label: "GitHub",
    href: "https://github.com/Mostafa-SAID7",
    tone: "bg-social-github",
  },
  { Icon: Instagram, label: "Instagram", href: "#", tone: "bg-social-instagram" },
];

const footerLinks = [
  { label: "Projects", to: "/projects" },
  { label: "About", href: "/#about" },
  { label: "Skills", href: "/#skills" },
  { label: "Contacts", href: "/#contact" },
];

export function Footer() {
  return (
    <footer className="px-5 pb-8 pt-4">
      <div className="mx-auto max-w-6xl">
        {/* Find me here panel */}
        <div className="rounded-t-[2.5rem] bg-secondary/45 px-8 py-12 md:px-14">
          <div className="flex flex-col items-center justify-between gap-10 md:flex-row md:gap-6">
            <h2 className="font-display text-4xl font-black uppercase leading-[0.9] tracking-tight text-foreground md:text-5xl">
              You can find
              <br />
              me here:
            </h2>

            <div className="flex flex-wrap items-center justify-center gap-4 md:gap-5">
              {socials.map(({ Icon, label, href, tone, featured }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className={`group relative grid place-items-center rounded-[1.4rem] ring-4 ring-foreground transition-all duration-300 hover:-translate-y-2 ${tone} ${
                    featured ? "size-20 scale-105 rounded-[1.7rem]" : "size-16"
                  }`}
                >
                  <Icon
                    className={`text-social-foreground ${featured ? "size-9" : "size-7"}`}
                    strokeWidth={2.2}
                  />
                  {featured ? (
                    <span className="absolute -bottom-3 grid size-7 place-items-center rounded-full bg-foreground">
                      <Play className="size-3 fill-social-twitter text-social-twitter" />
                    </span>
                  ) : null}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-center gap-6 px-2 py-8 md:flex-row md:justify-between md:px-6">
          <Link to="/" className="flex items-center gap-3" aria-label="Home">
            <span className="grid size-11 place-items-center rounded-[0.35rem] bg-foreground">
              <span className="font-display text-lg font-black leading-none text-background">
                MS
              </span>
            </span>
            <span className="text-[10px] font-bold uppercase leading-[1.35] tracking-[0.3em] text-foreground">
              Market
              <br />
              Place
            </span>
          </Link>

          <nav className="flex flex-wrap items-center justify-center gap-7">
            {footerLinks.map((item) =>
              item.to ? (
                <Link
                  key={item.label}
                  to={item.to}
                  className="text-xs font-bold uppercase tracking-[0.18em] text-foreground transition-colors hover:text-gold"
                >
                  {item.label}
                </Link>
              ) : (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-xs font-bold uppercase tracking-[0.18em] text-foreground transition-colors hover:text-gold"
                >
                  {item.label}
                </a>
              ),
            )}
          </nav>

          <p className="text-right text-[10px] font-bold uppercase leading-[1.6] tracking-[0.22em] text-gold">
            {new Date().getFullYear()} | Copyright
            <br />
            All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
