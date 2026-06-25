import type { Metadata, Viewport } from 'next';
import { Bodoni_Moda, Hanken_Grotesk } from 'next/font/google';
import './globals.css';
import SmoothScroll from '@/components/SmoothScroll';
import CustomCursor from '@/components/CustomCursor';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const bodoni = Bodoni_Moda({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-bodoni',
  weight: ['400', '500', '600', '700', '800', '900'],
});

const hanken = Hanken_Grotesk({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-hanken',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  title: 'INARA | Interior Architecture & Decor Studio Hyderabad',
  description:
    'A luxury Interior Architecture & Decor studio specializing in residential, commercial, hospitality, and bespoke interior experiences in Hyderabad, India.',
  keywords: [
    'Interior Design',
    'Interior Architecture',
    'Luxury Decor',
    'Jubilee Hills Interior Studio',
    'Hyderabad Decorators',
    'Bespoke Styling',
    'Modern Architecture Portfolio',
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${bodoni.variable} ${hanken.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-background text-charcoal font-sans selection:bg-luxury-gold selection:text-charcoal">
        <CustomCursor />
        <Navbar />
        <SmoothScroll>
          <main className="flex-grow pt-0">{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
