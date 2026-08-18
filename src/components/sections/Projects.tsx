import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { projects, projectFilters, type Project } from "@/data";
import { useI18n } from "@/lib/i18n";

function ProjectCard({ project, index = 0 }: { project: Project; index?: number }) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.4 }}
      className="group card-lift flex flex-col overflow-hidden rounded-[1.75rem] border border-border bg-secondary/50 p-3"
    >
      {/* Image Header or Gradient Fallback */}
      <div className="mb-4 flex items-center justify-between px-3 pt-2">
        <span className="font-display text-sm font-black text-gold">
          {String(index + 1).padStart(2, "0")}
        </span>
        <span className="text-[10px] font-bold uppercase tracking-[0.24em] text-muted-foreground">
          {project.category}
        </span>
      </div>
      <div className="relative h-44 overflow-hidden rounded-2xl bg-black/20">
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        ) : (
          <div
            className="h-full w-full"
            style={{ background: project.gradient || "linear-gradient(135deg, oklch(0.6 0.18 30), oklch(0.45 0.12 320))" }}
          />
        )}
        <div className="absolute inset-0 bg-black/20 transition-opacity group-hover:opacity-0" />
        <span className="absolute left-4 top-4 rounded-full bg-black/40 px-3 py-1 text-xs font-semibold text-white backdrop-blur">
          {project.category}
        </span>
        <h3 className="absolute bottom-4 left-4 right-4 text-xl font-bold text-white drop-shadow">
          {project.title}
        </h3>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <p className="text-sm leading-relaxed text-muted-foreground">
          {project.description}
        </p>

        {/* Project Type & Client Info */}
        <div className="my-4 flex flex-wrap gap-2">
          <span className="inline-block rounded-full bg-gold/10 px-2.5 py-1 text-xs font-semibold text-gold border border-gold/20">
            {project.type}
          </span>
          {project.client && (
            <span className="inline-block rounded-full bg-accent/10 px-2.5 py-1 text-xs font-semibold text-accent border border-accent/20">
              {project.client}
            </span>
          )}
          {project.database && (
            <span className="inline-block rounded-full bg-secondary/40 px-2.5 py-1 text-xs font-semibold text-muted-foreground border border-border">
              {project.database}
            </span>
          )}
          {project.status && (
            <span className="inline-block rounded-full bg-green-500/10 px-2.5 py-1 text-xs font-semibold text-green-500 border border-green-500/20">
              {project.status}
            </span>
          )}
        </div>

        {/* Metrics - Only if available */}
        {project.metrics && project.metrics.length > 0 && (
          <div className="my-5 grid grid-cols-3 gap-2 border-y border-border py-4">
            {project.metrics.map((m) => (
              <div key={m.label} className="text-center">
                <div className="text-lg font-extrabold text-gradient-gold">
                  {m.value}
                </div>
                <div className="text-[11px] uppercase tracking-wide text-muted-foreground">
                  {m.label}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tech Stack */}
        <div className="mb-5 flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="rounded-md bg-background/50 px-2 py-1 text-xs text-muted-foreground"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Badges */}
        {project.badges && project.badges.length > 0 && (
          <div className="mb-4 flex flex-wrap gap-2">
            {project.badges.map((badge) => (
              <span
                key={badge}
                className="rounded-md bg-gold/10 px-2 py-1 text-xs font-semibold text-gold border border-gold/30"
              >
                {badge}
              </span>
            ))}
          </div>
        )}

        {/* Links */}
        <div className="mt-auto flex gap-3">
          {project.live !== "#" && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-gold hover:underline"
            >
              <ExternalLink className="size-4" /> Live
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-muted-foreground hover:text-foreground"
            >
              <Github className="size-4" /> Code
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}

export function Projects() {
  const { tr } = useI18n();

  // Show only last 3 projects on home page
  const latestProjects = projects.slice(-3).reverse();

  return (
    <section id="projects" className="scroll-mt-24 py-28">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading title={tr("projects.title")} />

        <motion.div layout className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-12">
          <AnimatePresence mode="popLayout">
            {latestProjects.map((p, idx) => (
              <ProjectCard key={p.title} project={p} index={idx} />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View All Button */}
        <Reveal className="flex justify-center">
          <Link
            to="/projects"
            className="group flex items-center gap-2.5 rounded-full bg-gold px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] text-gold-foreground transition-transform duration-300 hover:scale-105"
          >
            View All Projects
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
