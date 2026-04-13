import Container from '../../components/Layout/Container';

export const metadata = {
  title: 'Portfolio - Uses',
  description: 'Uses page of my portfolio.',
};

const tools = [
  {
    name: 'Next.js & React',
    category: 'Development',
    description:
      'I use Next.js and React to build responsive, structured, and modern web experiences.',
  },
  {
    name: 'Tailwind CSS',
    category: 'Styling',
    description:
      'Tailwind helps me create clean interfaces quickly while keeping consistency across layouts and components.',
  },
  {
    name: 'Figma',
    category: 'Design',
    description:
      'I use Figma to organize visual ideas, explore layouts, and translate brand direction into interface design.',
  },
  {
    name: 'GitHub',
    category: 'Collaboration',
    description:
      'GitHub allows me to manage versions, collaborate on projects, and keep development workflows organized.',
  },
  {
    name: 'Visual Studio Code',
    category: 'Workspace',
    description:
      'VS Code is my main development environment for writing, editing, and testing code efficiently.',
  },
  {
    name: 'Notion & Productivity Tools',
    category: 'Planning',
    description:
      'I use productivity systems to manage ideas, structure projects, and keep creative and strategic work aligned.',
  },
];

export default function UsesPage() {
  return (
    <section className="relative overflow-hidden py-16 sm:py-20">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-white via-brand-mint/10 to-white dark:from-neutral-950 dark:via-brand-navy/10 dark:to-neutral-950" />
      <div className="absolute left-10 top-20 -z-10 h-44 w-44 rounded-full bg-brand-yellow/20 blur-3xl" />
      <div className="absolute right-10 top-24 -z-10 h-56 w-56 rounded-full bg-brand-mint/25 blur-3xl" />

      <Container>
        <div className="mb-12 max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-brand-green">
            Uses
          </p>

          <h1 className="mt-2 text-4xl font-bold text-brand-navy sm:text-5xl">
            Tools & Workflow
          </h1>

          <p className="mt-4 text-base leading-8 text-brand-navy/70 sm:text-lg dark:text-white/70">
            These are the tools and systems I use to design, build, organize,
            and manage digital projects with clarity and intention.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {tools.map((tool) => (
            <article
              key={tool.name}
              className="group flex h-full flex-col justify-between rounded-2xl border border-brand-mint bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-2 hover:bg-brand-mint/20 hover:shadow-brand dark:border-brand-mint/30 dark:bg-neutral-900 dark:hover:bg-neutral-800"
            >
              <div>
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-brand-green">
                  {tool.category}
                </p>

                <h2 className="mb-3 text-xl font-semibold text-brand-navy transition duration-300 group-hover:text-brand-green dark:text-white">
                  {tool.name}
                </h2>

                <p className="text-sm leading-7 text-brand-navy/70 dark:text-white/70">
                  {tool.description}
                </p>
              </div>

              <div className="mt-8 h-[2px] w-10 bg-brand-green transition-all duration-300 group-hover:w-16" />
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
