import './globals.css';
import type { Metadata } from 'next';
import { Manrope } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const manrope = Manrope({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Car Info Pro',
  description: 'Find car quick and super easy!',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={manrope.className + ' relative'}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
