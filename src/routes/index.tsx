import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { Experience } from "@/components/sections/Experience";
import { Testimonials } from "@/components/sections/Testimonials";
import { Contact } from "@/components/sections/Contact";

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
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
