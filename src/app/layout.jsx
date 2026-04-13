import './globals.css';
import Navbar from '../components/Layout/Navbar';
import Footer from '../components/Layout/Footer';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
});

export const metadata = {
  title: 'Juli Cortes Portfolio',
  description: 'Conexiones que impulsan.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} min-h-screen bg-white text-brand-navy`}>
        <div className="flex min-h-screen flex-col">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
