import { createFileRoute } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  LayoutGrid,
  Rows3,
  RotateCcw,
  Search,
  SearchX,
} from "lucide-react";
import { projectFilters } from "@/data";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHeader } from "@/components/ui/PageHeader";
import { Reveal } from "@/components/ui/Reveal";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { ProjectRow } from "@/components/ui/ProjectRow";
import { EmptyState } from "@/components/ui/EmptyState";
import {
  PROJECT_SORTS,
  useProjectsExplorer,
  type SortValue,
} from "@/hooks/useProjectsExplorer";
import { useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/projects/")({
  head: () => ({
    meta: [
      { title: "Projects — Marketplaces, Storefronts & Platforms" },
      {
        name: "description",
        content:
          "Search, filter and sort every project: multi-vendor marketplaces, storefronts, dashboards and backend platforms with their full tech stacks.",
      },
      {
        property: "og:title",
        content: "Projects — Marketplaces, Storefronts & Platforms",
      },
      {
        property: "og:description",
        content:
          "A searchable catalog of shipped marketplace and commerce work, with stack details on every project page.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/projects" }],
  }),
  component: ProjectsPage,
});

export function ProjectsPage() {
  const { tr } = useI18n();
  const {
    filter,
    setFilter,
    searchQuery,
    setSearchQuery,
    sort,
    setSort,
    view,
    setView,
    page,
    setCurrentPage,
    totalPages,
    counts,
    filtered,
    paginated,
    isFiltering,
    hasActiveFilters,
    reset,
  } = useProjectsExplorer();

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <Navbar />
      <main className="flex-1">
        <PageHeader
          kicker={`${counts["All"]} projects · ${projectFilters.length - 1} categories`}
          title="Projects"
          subtitle="Search by name, client or technology, filter by category, then open any project for the full architecture and stack."
        />

        <section className="px-5 pb-24">
          <div className="mx-auto max-w-6xl">
            {/* Toolbar */}
            <Reveal>
              <div className="glass flex flex-col gap-4 rounded-2xl p-4 md:flex-row md:items-center">
                <div className="relative flex-1">
                  <label htmlFor="project-search" className="sr-only">
                    {tr("projects.search")}
                  </label>
                  <Search className="absolute left-4 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
                  <input
                    id="project-search"
                    type="search"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder={tr("projects.search")}
                    className="w-full rounded-xl border border-border bg-secondary/40 py-3 pl-11 pr-4 text-sm outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-gold/60"
                  />
                </div>

                <div className="flex items-center gap-3">
                  <label htmlFor="project-sort" className="sr-only">
                    {tr("projects.sortBy")}
                  </label>
                  <select
                    id="project-sort"
                    value={sort}
                    onChange={(e) => setSort(e.target.value as SortValue)}
                    className="rounded-xl border border-border bg-secondary/40 px-4 py-3 text-sm font-semibold outline-none transition-colors focus:border-gold/60"
                  >
                    {PROJECT_SORTS.map((s) => (
                      <option key={s.value} value={s.value}>
                        {tr(s.key)}
                      </option>
                    ))}
                  </select>

                  <div
                    role="group"
                    aria-label={tr("projects.view")}
                    className="flex items-center gap-1 rounded-xl border border-border bg-secondary/40 p-1"
                  >
                    {(
                      [
                        { value: "grid", Icon: LayoutGrid },
                        { value: "list", Icon: Rows3 },
                      ] as const
                    ).map(({ value, Icon }) => (
                      <button
                        key={value}
                        type="button"
                        onClick={() => setView(value)}
                        aria-pressed={view === value}
                        aria-label={value}
                        className={`grid size-9 place-items-center rounded-lg transition-colors ${
                          view === value
                            ? "bg-gold text-gold-foreground"
                            : "text-muted-foreground hover:text-gold"
                        }`}
                      >
                        <Icon className="size-4" />
                      </button>
                    ))}
                  </div>

                  {hasActiveFilters ? (
                    <button
                      type="button"
                      onClick={reset}
                      className="inline-flex items-center gap-2 rounded-xl border border-border px-4 py-3 text-sm font-semibold transition-colors hover:border-gold/50 hover:text-gold"
                    >
                      <RotateCcw className="size-4" />
                      {tr("projects.reset")}
                    </button>
                  ) : null}
                </div>
              </div>
            </Reveal>

            {/* Category chips */}
            <Reveal delay={0.05}>
              <div className="mt-6 flex flex-wrap gap-2.5">
                {projectFilters.map((f) => (
                  <button
                    key={f}
                    type="button"
                    onClick={() => setFilter(f)}
                    aria-pressed={filter === f}
                    className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                      filter === f
                        ? "bg-gold text-gold-foreground"
                        : "border border-border bg-secondary/40 text-muted-foreground hover:border-gold/50 hover:text-gold"
                    }`}
                  >
                    {f}
                    <span className="text-[11px] font-bold opacity-70">
                      {counts[f] ?? 0}
                    </span>
                  </button>
                ))}
              </div>
            </Reveal>

            <p
              aria-live="polite"
              className="mt-6 text-[11px] font-bold uppercase tracking-[0.2em] text-muted-foreground"
            >
              {filtered.length} {filtered.length === 1 ? "project" : "projects"}
              {totalPages > 1 ? ` · page ${page} / ${totalPages}` : ""}
            </p>

            {/* Results */}
            {paginated.length > 0 ? (
              <div
                className={`mt-8 transition-opacity ${isFiltering ? "opacity-60" : "opacity-100"}`}
              >
                {view === "grid" ? (
                  <motion.div
                    layout
                    className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
                  >
                    <AnimatePresence mode="popLayout">
                      {paginated.map((project, index) => (
                        <ProjectCard
                          key={project.id}
                          project={project}
                          index={index}
                        />
                      ))}
                    </AnimatePresence>
                  </motion.div>
                ) : (
                  <motion.div layout className="flex flex-col gap-4">
                    <AnimatePresence mode="popLayout">
                      {paginated.map((project, index) => (
                        <ProjectRow
                          key={project.id}
                          project={project}
                          index={index}
                        />
                      ))}
                    </AnimatePresence>
                  </motion.div>
                )}

                {totalPages > 1 ? (
                  <div className="mt-12 flex flex-wrap items-center justify-center gap-3">
                    <button
                      type="button"
                      onClick={() => setCurrentPage(Math.max(1, page - 1))}
                      disabled={page === 1}
                      className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-semibold transition-colors disabled:opacity-40 hover:enabled:border-gold/50 hover:enabled:text-gold"
                    >
                      <ChevronLeft className="size-4" />
                      Previous
                    </button>
                    <div className="flex items-center gap-2">
                      {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                        (p) => (
                          <button
                            key={p}
                            type="button"
                            onClick={() => setCurrentPage(p)}
                            aria-current={p === page ? "page" : undefined}
                            className={`size-10 rounded-full text-sm font-bold transition-colors ${
                              p === page
                                ? "bg-gold text-gold-foreground"
                                : "border border-border bg-secondary/40 text-muted-foreground hover:border-gold/50 hover:text-gold"
                            }`}
                          >
                            {p}
                          </button>
                        ),
                      )}
                    </div>
                    <button
                      type="button"
                      onClick={() =>
                        setCurrentPage(Math.min(totalPages, page + 1))
                      }
                      disabled={page === totalPages}
                      className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-semibold transition-colors disabled:opacity-40 hover:enabled:border-gold/50 hover:enabled:text-gold"
                    >
                      Next
                      <ChevronRight className="size-4" />
                    </button>
                  </div>
                ) : null}
              </div>
            ) : (
              <div className="mt-10">
                <EmptyState
                  icon={<SearchX className="size-8 text-gold" />}
                  message={tr("projects.empty")}
                />
                <div className="flex justify-center">
                  <button
                    type="button"
                    onClick={reset}
                    className="inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 font-semibold text-gold-foreground transition-transform hover:scale-[1.02]"
                  >
                    <RotateCcw className="size-4" />
                    {tr("projects.reset")}
                  </button>
                </div>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
