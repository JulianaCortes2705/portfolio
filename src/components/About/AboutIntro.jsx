import Container from '../Layout/Container';
import Image from 'next/image';

export default function AboutIntro() {
  return (
    <section className="relative overflow-hidden py-16 sm:py-20">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-white via-brand-mint/10 to-white dark:from-neutral-950 dark:via-brand-navy/10 dark:to-neutral-950" />
      <div className="absolute left-10 top-16 -z-10 h-44 w-44 rounded-full bg-brand-yellow/20 blur-3xl" />
      <div className="absolute right-10 top-24 -z-10 h-52 w-52 rounded-full bg-brand-mint/25 blur-3xl" />

      <Container>
        <div className="grid gap-10 md:grid-cols-2 md:items-center lg:gap-14">
          <div className="group relative order-1">
            <div className="absolute -inset-3 rounded-3xl bg-gradient-to-br from-brand-yellow/20 to-brand-mint/30 blur-2xl opacity-80 transition duration-500 group-hover:opacity-100" />

            <div className="relative overflow-hidden rounded-[2rem] border border-brand-mint/60 bg-white shadow-brand transition duration-300 group-hover:-translate-y-1 dark:bg-neutral-900">
              <Image
                src="/portfolio/juli-about.jpg"
                alt="Juli Cortes portrait"
                width={800}
                height={960}
                priority
                className="h-[360px] w-full object-cover transition duration-500 group-hover:scale-[1.02] sm:h-[420px] lg:h-[520px]"
              />
            </div>
          </div>

          <div className="order-2">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.28em] text-brand-green">
              About
            </p>

            <h1 className="max-w-xl text-4xl font-bold leading-[1.02] text-brand-navy sm:text-5xl lg:text-6xl">
              I’m Juli Cortes.
              <span className="mt-2 block text-brand-green">
                I build meaningful work through strategy and connection.
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-8 text-brand-navy/75 sm:text-lg">
              I’m passionate about business, innovation, digital strategy, and
              helping brands grow with intention.
            </p>

            <p className="mt-5 max-w-xl text-base leading-8 text-brand-navy/75 sm:text-lg">
              My journey combines creativity, entrepreneurship, and technology.
              I love working on projects that create impact, build trust, and
              open new opportunities.
            </p>

            <div className="mt-8 inline-flex items-center rounded-full border border-brand-green/30 bg-brand-mint/20 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-brand-green">
              Conexiones que impulsan
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
