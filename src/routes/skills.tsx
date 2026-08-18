import { Link, createFileRoute } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHeader } from "@/components/ui/PageHeader";
import { Reveal } from "@/components/ui/Reveal";
import { skillGroups } from "@/data";

export const Route = createFileRoute("/skills")({
  head: () => ({
    meta: [
      { title: "Skills & Stack — Marketplace Engineering" },
      {
        name: "description",
        content:
          "The full toolkit: .NET 8 microservices, React and Next.js frontends, real-time messaging, databases, DevOps, security and testing.",
      },
      { property: "og:title", content: "Skills & Stack — Marketplace Engineering" },
      {
        property: "og:description",
        content:
          "Frontend, backend, data, real-time, DevOps and security capabilities used to ship marketplaces.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/skills" }],
  }),
  component: SkillsPage,
});

function SkillsPage() {
  const total = skillGroups.reduce((n, g) => n + g.skills.length, 0);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <PageHeader
          kicker={`${total} technologies · ${skillGroups.length} disciplines`}
          title="Skills & Stack"
          subtitle="Every layer of a marketplace platform — from the vendor dashboard down to the caching strategy and the deployment pipeline."
        />

        <section className="px-5 py-12">
          <div className="mx-auto grid max-w-5xl gap-5 sm:grid-cols-2">
            {skillGroups.map((group, i) => (
              <Reveal key={group.title} delay={i * 0.06}>
                <div className="glass h-full rounded-2xl p-7 transition-transform hover:-translate-y-1">
                  <div className="mb-5 flex items-baseline justify-between gap-3">
                    <h2 className="flex items-center gap-3 text-xl font-bold">
                      <span className="size-2 rounded-full bg-gold" />
                      {group.title}
                    </h2>
                    <span className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">
                      {group.skills.length}
                    </span>
                  </div>
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

          <Reveal delay={0.2}>
            <div className="mx-auto mt-14 flex max-w-5xl flex-wrap gap-3">
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 font-semibold transition-colors hover:border-gold/50 hover:text-gold"
              >
                See it applied in projects
                <ArrowRight className="size-4" />
              </Link>
              <Link
                to="/experience"
                className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 font-semibold transition-colors hover:border-gold/50 hover:text-gold"
              >
                Experience timeline
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
