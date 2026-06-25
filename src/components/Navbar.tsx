'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Projects', href: '/projects' },
    { label: 'Services', href: pathname === '/' ? '#services' : '/#services' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ];


  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#') || (pathname === '/' && href.includes('#'))) {
      const targetId = href.substring(href.indexOf('#'));
      const el = document.querySelector(targetId);
      if (el) {
        e.preventDefault();
        setMenuOpen(false);
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 flex justify-between items-center transition-all duration-500 px-margin-mobile md:px-margin-desktop ${
          scrolled
            ? 'py-4 bg-[#fbf9f6]/95 backdrop-blur-xl border-b border-charcoal/5 shadow-sm'
            : 'py-6 bg-transparent'
        }`}
      >
        {/* Logo */}
        <Link href="/" className="font-display text-headline-sm font-bold tracking-tighter text-primary select-none group">
          INARA
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-10 items-center">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={(e) => handleLinkClick(e, item.href)}
              className="font-sans text-[12px] uppercase tracking-[0.2em] font-semibold text-secondary hover:text-primary transition-colors duration-300"
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Link
            href="/contact"
            onClick={(e) => handleLinkClick(e, '/contact')}
            className="inline-block bg-luxury-gold text-charcoal hover:bg-charcoal hover:text-luxury-gold px-8 py-3 font-sans font-semibold text-[10px] tracking-[0.3em] uppercase transition-all duration-500 active:scale-95 border border-transparent hover:border-luxury-gold"
          >
            Book Consultation
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-primary p-2 focus:outline-none z-50"
          aria-label="Toggle Menu"
        >
          {menuOpen ? <X size={28} className="text-white" /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Fullscreen Overlay Menu */}
      <div
        className={`fixed inset-0 w-full h-screen bg-charcoal z-40 flex flex-col justify-center px-margin-mobile transition-all duration-700 ease-[cubic-bezier(0.85,0,0.15,1)] ${
          menuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
        }`}
      >
        <div className="flex flex-col gap-8 text-left max-w-lg mx-auto w-full">
          <span className="font-sans text-luxury-gold text-[11px] tracking-[0.3em] uppercase border-b border-white/10 pb-4">
            Navigation
          </span>
          {navItems.map((item, index) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={(e) => {
                setMenuOpen(false);
                handleLinkClick(e, item.href);
              }}
              style={{ transitionDelay: menuOpen ? `${index * 100}ms` : '0ms' }}
              className={`font-display text-4xl text-white hover:text-luxury-gold transition-colors duration-400 ${
                menuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              } transition-all duration-500`}
            >
              {item.label}
            </Link>
          ))}
          <div className="mt-8">
            <Link
              href="/contact"
              onClick={(e) => {
                setMenuOpen(false);
                handleLinkClick(e, '/contact');
              }}
              className="inline-block bg-luxury-gold text-charcoal hover:bg-white hover:text-charcoal w-full text-center py-5 font-sans font-semibold text-[12px] tracking-[0.2em] uppercase transition-all duration-500"
            >
              Book Consultation
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
