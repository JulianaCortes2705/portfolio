import Link from 'next/link';
import ThemeToggle from './ThemeToggle';
import Container from './Container';

export default function Navbar() {
  return (
    <header className="border-b border-brand-mint/60 bg-white/90 backdrop-blur">
      <Container className="flex items-center justify-between py-4">
        <div>
          <Link
            href="/"
            className="text-lg font-bold tracking-tight text-brand-navy transition duration-300 hover:text-brand-green"
          >
            Juli Cortes Portfolio
          </Link>
          <p className="text-[10px] uppercase tracking-[0.28em] text-brand-green">
            Conexiones que impulsan
          </p>
        </div>

        <nav className="flex items-center gap-4">
          <Link href="/" className="text-sm text-brand-navy transition hover:text-brand-green">
            Home
          </Link>
          <Link href="/about" className="text-sm text-brand-navy transition hover:text-brand-green">
            About
          </Link>
          <Link href="/projects" className="text-sm text-brand-navy transition hover:text-brand-green">
            Projects
          </Link>
          <Link href="/uses" className="text-sm text-brand-navy transition hover:text-brand-green">
            Uses
          </Link>

          <ThemeToggle />
        </nav>
      </Container>
    </header>
  );
}
