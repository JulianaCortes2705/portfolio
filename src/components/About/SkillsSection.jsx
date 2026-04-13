import Container from '../Layout/Container';

const skills = [
  'Next.js',
  'Tailwind CSS',
  'Responsive Design',
  'UI Structure',
  'Brand Strategy',
  'Marketing',
  'Business Development',
  'Content Creation',
];

export default function SkillsSection() {
  return (
    <section className="pb-16 sm:pb-20">
      <Container>
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-brand-navy sm:text-4xl">
            Skills
          </h2>
          <p className="mt-3 max-w-xl text-brand-navy/70">
            A blend of technical, creative, and business-focused skills that
            support the work I build.
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          {skills.map((skill, index) => (
            <span
              key={skill}
              className={`rounded-full border px-5 py-3 text-sm font-medium transition duration-300 hover:-translate-y-0.5 hover:shadow-sm ${
                index === 0
                  ? 'border-brand-green bg-brand-green text-white'
                  : 'border-brand-mint bg-white text-brand-navy hover:bg-brand-mint/20'
              }`}
            >
              {skill}
            </span>
          ))}
        </div>
      </Container>
    </section>
  );
}
