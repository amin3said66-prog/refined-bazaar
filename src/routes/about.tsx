import { Link, createFileRoute } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHeader } from "@/components/ui/PageHeader";
import { Reveal } from "@/components/ui/Reveal";
import { useI18n } from "@/lib/i18n";

const stats = [
  { value: "$1B+", label: "GMV shipped" },
  { value: "10+", label: "Years building" },
  { value: "5M+", label: "Users served" },
  { value: "12", label: "Marketplaces launched" },
];

const principles = [
  {
    title: "Architecture first",
    body: "Clean Architecture and DDD boundaries so the platform can grow vendors, catalogs and regions without a rewrite.",
  },
  {
    title: "Real-time by default",
    body: "SignalR, Kafka and gRPC pipelines for bidding, order events and telemetry that must land in milliseconds.",
  },
  {
    title: "Measured performance",
    body: "Query tuning, indexing strategies and distributed caching — measured before and after, never guessed.",
  },
  {
    title: "Ownership end to end",
    body: "From schema design and API contracts to CI/CD pipelines and the frontend your customers actually touch.",
  },
];

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Marketplace Systems Architect" },
      {
        name: "description",
        content:
          "Ten years designing multi-vendor marketplaces, real-time bidding engines and multi-tenant commerce platforms end to end.",
      },
      { property: "og:title", content: "About — Marketplace Systems Architect" },
      {
        property: "og:description",
        content:
          "How I approach marketplace architecture: clean boundaries, real-time pipelines and measured performance.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  const { tr } = useI18n();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <PageHeader
          kicker={tr("about.kicker")}
          title="About Me"
          subtitle={tr("about.body")}
        />

        <section className="px-5 pb-8">
          <div className="mx-auto grid max-w-5xl grid-cols-2 gap-4 sm:grid-cols-4">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 0.07}>
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
        </section>

        <section className="px-5 py-16">
          <div className="mx-auto max-w-5xl">
            <Reveal>
              <h2 className="font-display text-3xl font-black uppercase tracking-tight">
                How I work
              </h2>
            </Reveal>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {principles.map((p, i) => (
                <Reveal key={p.title} delay={i * 0.07}>
                  <div className="glass h-full rounded-2xl p-7">
                    <h3 className="flex items-center gap-3 text-lg font-bold">
                      <span className="size-2 rounded-full bg-gold" />
                      {p.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {p.body}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.2}>
              <div className="mt-12 flex flex-wrap gap-3">
                <Link
                  to="/skills"
                  className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 font-semibold transition-colors hover:border-gold/50 hover:text-gold"
                >
                  Skills & tooling
                  <ArrowRight className="size-4" />
                </Link>
                <Link
                  to="/experience"
                  className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 font-semibold transition-colors hover:border-gold/50 hover:text-gold"
                >
                  Experience timeline
                  <ArrowRight className="size-4" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 font-semibold text-gold-foreground transition-transform hover:scale-[1.02]"
                >
                  {tr("about.cta")}
                  <ArrowRight className="size-4" />
                </Link>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
