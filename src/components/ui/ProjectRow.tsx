import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, ExternalLink } from "lucide-react";
import type { Project } from "@/data/projects";

export function ProjectRow({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const hasLive = project.live && project.live !== "#";

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.35, delay: index * 0.04 }}
      className="group glass flex flex-col gap-5 rounded-2xl p-5 transition-all hover:-translate-y-1 hover:glow-gold sm:flex-row sm:items-center sm:p-6"
    >
      <div
        className="relative hidden h-24 w-36 shrink-0 overflow-hidden rounded-xl sm:block"
        style={{ background: project.gradient ?? "var(--secondary)" }}
      >
        {project.image ? (
          <img
            src={project.image}
            alt={`${project.title} preview`}
            loading="lazy"
            className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : null}
      </div>

      <div className="min-w-0 flex-1">
        <div className="flex flex-wrap items-center gap-2.5">
          <span className="rounded-full border border-border bg-secondary/40 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.16em] text-muted-foreground">
            {project.category}
          </span>
          <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-gold">
            {project.type}
          </span>
        </div>
        <h3 className="mt-2.5 truncate text-lg font-bold transition-colors group-hover:text-gold">
          {project.title}
        </h3>
        <p className="mt-1.5 line-clamp-2 text-sm leading-relaxed text-muted-foreground">
          {project.description}
        </p>
        <p className="mt-3 truncate text-xs text-muted-foreground/80">
          {project.tech.join(" · ")}
        </p>
      </div>

      <div className="flex shrink-0 items-center gap-2">
        {hasLive ? (
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Open ${project.title} live site`}
            className="grid size-10 place-items-center rounded-full border border-border transition-colors hover:border-gold/50 hover:text-gold"
          >
            <ExternalLink className="size-4" />
          </a>
        ) : null}
        <Link
          to="/projects/$id"
          params={{ id: project.id }}
          className="inline-flex items-center gap-2 rounded-full bg-gold px-5 py-2.5 text-sm font-semibold text-gold-foreground transition-transform hover:scale-[1.03]"
        >
          Details
          <ArrowRight className="size-4" />
        </Link>
      </div>
    </motion.article>
  );
}
