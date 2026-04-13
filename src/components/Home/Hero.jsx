import Container from "../Layout/Container";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative overflow-hidden py-16 sm:py-20">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-white via-brand-mint/20 to-white" />
      <div className="absolute left-20 top-20 -z-10 h-56 w-56 rounded-full bg-brand-yellow/25 blur-3xl" />
      <div className="absolute right-20 top-28 -z-10 h-64 w-64 rounded-full bg-brand-mint/35 blur-3xl" />

      <Container>
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.28em] text-brand-green">Welcome</p>

            <h1 className="mb-6 text-4xl font-bold leading-tight text-brand-navy sm:text-5xl lg:text-6xl">
              I’m Juli Cortes.
              <span className="block text-brand-green">Connections that drive growth.</span>
            </h1>

            <p className="mb-8 max-w-xl text-lg leading-8 text-brand-navy/75">
              I help ideas, businesses, and people grow through strategy, creativity, and meaningful connections.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/about"
                className="rounded-full bg-brand-navy px-6 py-3 text-sm font-semibold text-white shadow-brand transition duration-300 hover:-translate-y-1 hover:bg-brand-green"
              >
                About Me
              </Link>

              <Link
                href="/projects"
                className="rounded-full border border-brand-green px-6 py-3 text-sm font-semibold text-brand-green transition duration-300 hover:-translate-y-1 hover:bg-brand-mint/40"
              >
                View Projects
              </Link>
            </div>
          </div>

          <div className="group relative">
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-brand-yellow/40 to-brand-mint/40 blur-2xl opacity-80 transition duration-500 group-hover:opacity-100" />
            <div className="relative overflow-hidden rounded-3xl shadow-brand transition duration-300 group-hover:-translate-y-2">
              <Image
                src="/portfolio/juli.jpg"
                alt="Juli Cortes portrait"
                width={700}
                height={820}
                priority
                className="h-[360px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[440px] lg:h-[500px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/10 via-transparent to-white/10" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
