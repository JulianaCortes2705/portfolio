import Container from '../Layout/Container';

const experiences = [
  {
    title: 'Business Strategy',
    description:
      'Supporting growth through planning, communication, and structured execution aligned with business goals.',
  },
  {
    title: 'Digital Marketing',
    description:
      'Creating campaigns, content, and brand positioning strategies focused on visibility and impact.',
  },
  {
    title: 'Creative Projects',
    description:
      'Designing ideas and solutions with a balance of aesthetics, functionality, and purpose.',
  },
];

export default function ExperienceSection() {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <div className="mb-10">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-brand-green">
            What I Do
          </p>

          <h2 className="mt-2 text-3xl font-bold text-brand-navy sm:text-4xl">
            Experience & Services
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {experiences.map((item) => (
            <article
              key={item.title}
              className="group rounded-2xl border border-brand-mint bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-2 hover:bg-brand-mint/20 hover:shadow-brand dark:bg-neutral-900"
            >
              <h3 className="mb-3 text-lg font-semibold text-brand-navy transition duration-300 group-hover:text-brand-green">
                {item.title}
              </h3>

              <p className="text-sm leading-7 text-brand-navy/70">
                {item.description}
              </p>

              <div className="mt-6 h-[2px] w-10 bg-brand-green transition-all duration-300 group-hover:w-16" />
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
