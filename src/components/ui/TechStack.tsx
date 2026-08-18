interface TechStackProps {
  techs: string[];
  variant?: "inline" | "grid";
  className?: string;
}

export function TechStack({
  techs,
  variant = "grid",
  className = "",
}: TechStackProps) {
  if (variant === "inline") {
    return (
      <div className={`flex flex-wrap gap-3 ${className}`}>
        {techs.map((tech) => (
          <span
            key={tech}
            className="rounded-lg bg-background px-4 py-2 text-sm font-semibold text-gold border border-gold/20"
          >
            {tech}
          </span>
        ))}
      </div>
    );
  }

  return (
    <div className={`glass rounded-2xl border border-border p-8 ${className}`}>
      <h2 className="mb-6 text-2xl font-bold">Tech Stack</h2>
      <div className="flex flex-wrap gap-3">
        {techs.map((tech) => (
          <span
            key={tech}
            className="rounded-lg bg-background px-4 py-2 text-sm font-semibold text-gold border border-gold/20"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}
