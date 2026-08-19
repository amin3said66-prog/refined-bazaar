import { createFileRoute } from "@tanstack/react-router";
import { Github, Linkedin, Mail, MapPin } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHeader } from "@/components/ui/PageHeader";
import { Reveal } from "@/components/ui/Reveal";
import { Contact } from "@/components/sections/Contact";
import { useI18n } from "@/lib/i18n";

const channels = [
  { Icon: Mail, label: "Email", value: "hello@example.com", href: "mailto:hello@example.com" },
  {
    Icon: Github,
    label: "GitHub",
    value: "Mostafa-SAID7",
    href: "https://github.com/Mostafa-SAID7",
  },
  { Icon: Linkedin, label: "LinkedIn", value: "Let's connect", href: "#" },
  { Icon: MapPin, label: "Based in", value: "Remote · CET / EET" },
];

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Start a Marketplace Project" },
      {
        name: "description",
        content:
          "Tell me about your marketplace, platform migration or real-time system and I'll come back with a concrete plan.",
      },
      { property: "og:title", content: "Contact — Start a Marketplace Project" },
      {
        property: "og:description",
        content:
          "Reach out about marketplace architecture, platform migrations and real-time commerce systems.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  const { tr } = useI18n();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <PageHeader
          kicker="Available for new work"
          title="Contact"
          subtitle={tr("contact.subtitle")}
        />

        <section className="px-5 pb-4">
          <div className="mx-auto grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {channels.map((c, i) => {
              const inner = (
                <>
                  <c.Icon className="size-5 text-gold" />
                  <div className="mt-4 text-[11px] font-bold uppercase tracking-[0.2em] text-muted-foreground">
                    {c.label}
                  </div>
                  <div className="mt-1.5 font-semibold">{c.value}</div>
                </>
              );
              return (
                <Reveal key={c.label} delay={i * 0.06}>
                  {c.href ? (
                    <a
                      href={c.href}
                      target={c.href.startsWith("http") ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      className="glass block h-full rounded-2xl p-6 transition-transform hover:-translate-y-1"
                    >
                      {inner}
                    </a>
                  ) : (
                    <div className="glass h-full rounded-2xl p-6">{inner}</div>
                  )}
                </Reveal>
              );
            })}
          </div>
        </section>

        <Contact showHeading={false} />
      </main>
      <Footer />
    </div>
  );
}
