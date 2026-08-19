import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { AboutPreview } from "@/components/sections/home/AboutPreview";
import { SkillsPreview } from "@/components/sections/home/SkillsPreview";
import { Projects } from "@/components/sections/Projects";
import { ExperiencePreview } from "@/components/sections/home/ExperiencePreview";
import { Testimonials } from "@/components/sections/Testimonials";
import { ContactCta } from "@/components/sections/home/ContactCta";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Marketplace Systems Architect & Full-Stack Engineer" },
      {
        name: "description",
        content:
          "I design and ship multi-vendor platforms, real-time bidding engines, and high-scale commerce systems end to end.",
      },
      {
        property: "og:title",
        content: "Marketplace Systems Architect & Full-Stack Engineer",
      },
      {
        property: "og:description",
        content:
          "Building marketplaces that scale to millions — multi-vendor, B2C, B2B, and custom commerce systems.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          jobTitle: "Marketplace Systems Architect & Full-Stack Engineer",
          knowsAbout: [
            "Multi-vendor marketplaces",
            "Real-time bidding",
            "Full-stack engineering",
            "High-scale commerce",
          ],
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <AboutPreview />
        <SkillsPreview />
        <Projects />
        <ExperiencePreview />
        <Testimonials />
        <ContactCta />
      </main>
      <Footer />
    </div>
  );
}
