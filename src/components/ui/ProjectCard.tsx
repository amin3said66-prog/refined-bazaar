import { Link } from "@tanstack/react-router";
import { ArrowRight, ExternalLink, Github } from "lucide-react";
import { motion } from "framer-motion";
import type { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="group glass relative flex h-full flex-col overflow-hidden rounded-2xl transition-all hover:-translate-y-1.5 hover:glow-gold"
    >
      {/* Image Header */}
      <ProjectCardImage project={project} />

      {/* Content */}
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-xl font-bold">{project.title}</h3>
        <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">
          {project.description}
        </p>

        {/* Type Badge */}
        <div className="my-4 flex flex-wrap gap-2">
          <Badge variant="gold">{project.type}</Badge>
          {project.client && <Badge variant="accent">{project.client}</Badge>}
        </div>

        {/* Tech Stack */}
        <TechStackPreview techs={project.tech} />

        {/* Links Section */}
        <div className="mt-auto space-y-3">
          {/* Live/Details Links */}
          <div className="flex flex-wrap gap-2">
            {project.live && project.live !== "#" && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-lg bg-gold/10 px-3 py-2 text-xs font-semibold text-gold border border-gold/20 hover:bg-gold/20 transition-all"
              >
                <ExternalLink className="size-3.5" />
                Live Project
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-lg bg-accent/10 px-3 py-2 text-xs font-semibold text-accent border border-accent/20 hover:bg-accent/20 transition-all"
              >
                <Github className="size-3.5" />
                GitHub
              </a>
            )}
          </div>

          {/* View Details Link */}
          <Link
            to="/projects/$id"
            params={{ id: project.id }}
            className="inline-flex items-center gap-2 text-sm font-semibold text-gold transition-all hover:gap-3"
          >
            View Details
            <ArrowRight className="size-4" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

interface BadgeProps {
  children: React.ReactNode;
  variant?: "gold" | "accent";
}

export function Badge({ children, variant = "gold" }: BadgeProps) {
  const variantClass =
    variant === "gold"
      ? "bg-gold/10 text-gold border-gold/20"
      : "bg-accent/10 text-accent border-accent/20";

  return (
    <span
      className={`inline-block rounded-full px-2.5 py-1 text-xs font-semibold border ${variantClass}`}
    >
      {children}
    </span>
  );
}

interface ProjectCardImageProps {
  project: Project;
}

export function ProjectCardImage({ project }: ProjectCardImageProps) {
  return (
    <div className="relative h-44 overflow-hidden bg-black/20">
      {project.image ? (
        <img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      ) : (
        <div
          className="h-full w-full"
          style={{
            background:
              project.gradient ||
              "linear-gradient(135deg, oklch(0.6 0.18 30), oklch(0.45 0.12 320))",
          }}
        />
      )}
      <div className="absolute inset-0 bg-black/20 transition-opacity group-hover:opacity-0" />
      <span className="absolute left-4 top-4 rounded-full bg-black/40 px-3 py-1 text-xs font-semibold text-white backdrop-blur">
        {project.category}
      </span>
    </div>
  );
}

interface TechStackPreviewProps {
  techs: string[];
  limit?: number;
}

export function TechStackPreview({ techs, limit = 3 }: TechStackPreviewProps) {
  return (
    <div className="mb-4 flex flex-wrap gap-2">
      {techs.slice(0, limit).map((tech) => (
        <span
          key={tech}
          className="rounded-md bg-background/50 px-2 py-1 text-xs text-muted-foreground"
        >
          {tech}
        </span>
      ))}
      {techs.length > limit && (
        <span className="rounded-md bg-background/50 px-2 py-1 text-xs text-gold">
          +{techs.length - limit}
        </span>
      )}
    </div>
  );
}
