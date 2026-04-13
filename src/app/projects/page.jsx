import Container from "../../components/Layout/Container";
import Link from "next/link";

export const metadata = {
  title: "Portfolio - Projects",
  description: "Projects page of my portfolio.",
};

const projects = [
  {
    name: "Personal Brand Website",
    category: "Web Design",
    description: "A responsive portfolio experience designed to reflect my identity, values, and visual brand.",
    href: "#",
  },
  {
    name: "Brand Strategy System",
    category: "Branding",
    description:
      "A visual and strategic identity concept focused on positioning, consistency, and emotional connection.",
    href: "#",
  },
  {
    name: "Digital Growth Campaign",
    category: "Marketing",
    description:
      "A campaign structure designed to increase visibility, trust, and audience engagement across digital channels.",
    href: "#",
  },
  {
    name: "Creative Content Direction",
    category: "Content",
    description: "A curated content direction focused on storytelling, design consistency, and brand communication.",
    href: "#",
  },
];

export default function ProjectsPage() {
  return (
    <section className="relative overflow-hidden py-16 sm:py-20">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-white via-brand-mint/10 to-white dark:from-neutral-950 dark:via-brand-navy/10 dark:to-neutral-950" />
      <div className="absolute left-10 top-20 -z-10 h-44 w-44 rounded-full bg-brand-yellow/20 blur-3xl" />
      <div className="absolute right-10 top-24 -z-10 h-56 w-56 rounded-full bg-brand-mint/25 blur-3xl" />

      <Container>
        <div className="mb-12 max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-brand-green">Projects</p>

          <h1 className="mt-2 text-4xl font-bold text-brand-navy sm:text-5xl">Selected Work</h1>

          <p className="mt-4 text-base leading-8 text-brand-navy/70 sm:text-lg">
            A collection of projects that reflect my approach to strategy, creativity, branding, and digital growth.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.name}
              className="group flex h-full flex-col justify-between rounded-2xl border border-brand-mint bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-2 hover:bg-brand-mint/20 hover:shadow-brand dark:border-brand-mint/30 dark:bg-neutral-900 dark:hover:bg-neutral-800"
            >
              <div>
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-brand-green">
                  {project.category}
                </p>

                <h2 className="mb-3 text-xl font-semibold text-brand-navy transition duration-300 group-hover:text-brand-green dark:text-white">
                  {project.name}
                </h2>

                <p className="text-sm leading-7 text-brand-navy/70 dark:text-white/70">{project.description}</p>
              </div>

              <div className="mt-8 flex items-center justify-between">
                <div className="h-[2px] w-10 bg-brand-green transition-all duration-300 group-hover:w-16" />

                <Link
                  href={project.href}
                  className="text-sm font-medium text-brand-navy transition duration-300 group-hover:text-brand-green dark:text-white dark:group-hover:text-brand-mint"
                >
                  View details →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
