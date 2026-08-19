import { Link, createFileRoute } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHeader } from "@/components/ui/PageHeader";
import { Reveal } from "@/components/ui/Reveal";
import { Experience } from "@/components/sections/Experience";
import { experience } from "@/data";

export const Route = createFileRoute("/experience")({
  head: () => ({
    meta: [
      { title: "Experience — Marketplace Platform Engineering" },
      {
        name: "description",
        content:
          "A timeline of roles building .NET 8 microservices, multi-tenant marketplaces, real-time telemetry pipelines and CI/CD automation.",
      },
      {
        property: "og:title",
        content: "Experience — Marketplace Platform Engineering",
      },
      {
        property: "og:description",
        content:
          "Roles, responsibilities and measurable outcomes from shipping marketplace platforms end to end.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/experience" }],
  }),
  component: ExperiencePage,
});

function ExperiencePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <PageHeader
          kicker={`${experience.length} roles · 4+ years`}
          title="Experience"
          subtitle="Every role below shipped production systems — architecture, data layer, real-time pipelines and the delivery process around them."
        />

        <Experience showHeading={false} />

        <section className="px-5 pb-24">
          <Reveal>
            <div className="mx-auto flex max-w-5xl flex-wrap gap-3">
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 font-semibold transition-colors hover:border-gold/50 hover:text-gold"
              >
                Browse the projects
                <ArrowRight className="size-4" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 font-semibold text-gold-foreground transition-transform hover:scale-[1.02]"
              >
                Work with me
                <ArrowRight className="size-4" />
              </Link>
            </div>
          </Reveal>
        </section>
      </main>
      <Footer />
    </div>
  );
}
