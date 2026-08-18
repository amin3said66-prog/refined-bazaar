import type { Project } from "@/data/projects";

interface ProjectHeroProps {
  project: Project;
  children?: React.ReactNode;
}

export function ProjectHero({ project, children }: ProjectHeroProps) {
  return (
    <div className="relative h-96 overflow-hidden bg-black/20 md:h-[500px]">
      {project.image ? (
        <img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover"
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
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-background/70" />
      {children}
    </div>
  );
}
