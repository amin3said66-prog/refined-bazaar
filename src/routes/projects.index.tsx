import { useState, useMemo } from "react";
import { Link, createFileRoute } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import { projects, projectFilters } from "@/data";
import { Reveal } from "@/components/ui/Reveal";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { EmptyState } from "@/components/ui/EmptyState";
import { Search, ChevronLeft, ChevronRight } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export const Route = createFileRoute("/projects/")({
  head: () => ({
    meta: [
      { title: "All Projects | Marketplace Systems Architect" },
      {
        name: "description",
        content: "View all 15+ projects built for multi-vendor marketplaces, e-commerce platforms, and high-scale systems.",
      },
    ],
    links: [{ rel: "canonical", href: "/projects" }],
  }),
  component: ProjectsPage,
});

const ITEMS_PER_PAGE = 6;

export function ProjectsPage() {
  const [filter, setFilter] = useState<(typeof projectFilters)[number]>("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  // Filter and search projects
  const filtered = useMemo(() => {
    let result = filter === "All" ? projects : projects.filter((p) => p.category === filter);

    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        (p) =>
          p.title.toLowerCase().includes(query) ||
          p.description.toLowerCase().includes(query) ||
          p.category.toLowerCase().includes(query) ||
          p.tech.some((t) => t.toLowerCase().includes(query))
      );
    }

    return result;
  }, [filter, searchQuery]);

  // Pagination
  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);
  const paginatedProjects = filtered.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const handleFilterChange = (newFilter: typeof filter) => {
    setFilter(newFilter);
    setCurrentPage(1); // Reset to first page
    setSearchQuery(""); // Reset search
  };

  const handleSearchChange = (query: string) => {
    setSearchQuery(query);
    setCurrentPage(1); // Reset to first page
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Navbar />
      <main className="flex-1">
        <section className="py-20">
          <div className="mx-auto max-w-6xl px-5">
            {/* Header */}
            <Reveal>
              <div className="mb-16 text-center">
                <h1 className="text-4xl font-bold md:text-5xl">All Projects</h1>
                <p className="mt-4 text-lg text-muted-foreground">
                  {filtered.length} {filtered.length === 1 ? "project" : "projects"} found
                </p>
              </div>
            </Reveal>

            {/* Search Input */}
            <Reveal className="mb-8">
              <div className="relative">
                <label htmlFor="project-search" className="sr-only">
                  Search projects
                </label>
                <Search className="absolute left-4 top-1/2 size-5 -translate-y-1/2 text-muted-foreground" />
                <input
                  id="project-search"
                  type="text"
                  placeholder="Search projects by name, description, or technology..."
                  value={searchQuery}
                  onChange={(e) => handleSearchChange(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 rounded-lg bg-secondary/40 border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/50 transition-all"
                />
              </div>
            </Reveal>

            {/* Filters */}
            <Reveal className="mb-12 flex flex-wrap justify-center gap-2.5">
              {projectFilters.map((f) => (
                <button
                  key={f}
                  onClick={() => handleFilterChange(f)}
                  aria-pressed={filter === f}
                  className={`rounded-full px-5 py-2 text-sm font-semibold transition-colors ${
                    filter === f
                      ? "bg-gold text-gold-foreground"
                      : "border border-border bg-secondary/40 text-muted-foreground hover:border-gold/50 hover:text-gold"
                  }`}
                >
                  {f}
                </button>
              ))}
            </Reveal>

            {/* Projects Grid */}
            {paginatedProjects.length > 0 ? (
              <>
                <motion.div layout className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-12">
                  <AnimatePresence mode="popLayout">
                    {paginatedProjects.map((project, index) => (
                      <ProjectCard key={project.id} project={project} index={index} />
                    ))}
                  </AnimatePresence>
                </motion.div>

                {/* Pagination */}
                {totalPages > 1 && (
                  <div className="flex items-center justify-center gap-4">
                    <button
                      onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
                      disabled={currentPage === 1}
                      className="flex items-center gap-2 rounded-lg border border-border px-4 py-2 font-semibold transition-all disabled:opacity-50 disabled:cursor-not-allowed hover:enabled:border-gold/50 hover:enabled:text-gold"
                    >
                      <ChevronLeft className="size-4" />
                      Previous
                    </button>

                    <div className="flex items-center gap-2">
                      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                        <button
                          key={page}
                          onClick={() => setCurrentPage(page)}
                          className={`size-10 rounded-lg font-semibold transition-all ${
                            currentPage === page
                              ? "bg-gold text-gold-foreground"
                              : "border border-border bg-secondary/40 text-muted-foreground hover:border-gold/50 hover:text-gold"
                          }`}
                        >
                          {page}
                        </button>
                      ))}
                    </div>

                    <button
                      onClick={() => setCurrentPage((prev) => Math.min(totalPages, prev + 1))}
                      disabled={currentPage === totalPages}
                      className="flex items-center gap-2 rounded-lg border border-border px-4 py-2 font-semibold transition-all disabled:opacity-50 disabled:cursor-not-allowed hover:enabled:border-gold/50 hover:enabled:text-gold"
                    >
                      Next
                      <ChevronRight className="size-4" />
                    </button>
                  </div>
                )}
              </>
            ) : (
              <EmptyState message="No projects found matching your search" />
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
