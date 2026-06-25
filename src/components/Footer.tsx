'use client';

import Link from 'next/link';
import { MessageCircle, Globe, Mail } from 'lucide-react';
import { Instagram, Linkedin } from './Icons';

export default function Footer() {
  const handleScrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full px-margin-mobile md:px-margin-desktop py-20 bg-surface-container-highest border-t border-charcoal/5">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-y-12 md:gap-x-gutter">
        {/* Brand */}
        <div className="md:col-span-4">
          <Link href="/" className="font-display text-headline-md text-primary mb-6 block font-bold select-none">
            INARA
          </Link>
          <p className="font-sans text-body-md text-secondary max-w-xs mb-8 leading-relaxed">
            Elevating the essence of space through architectural precision and emotional design.
          </p>
          <div className="flex gap-4">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 border border-charcoal/10 flex items-center justify-center hover:bg-luxury-gold hover:border-luxury-gold hover:text-white transition-all duration-300"
              aria-label="Instagram"
            >
              <Instagram size={18} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 border border-charcoal/10 flex items-center justify-center hover:bg-luxury-gold hover:border-luxury-gold hover:text-white transition-all duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="https://wa.me/919000012345"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 border border-charcoal/10 flex items-center justify-center hover:bg-luxury-gold hover:border-luxury-gold hover:text-white transition-all duration-300"
              aria-label="WhatsApp"
            >
              <MessageCircle size={18} />
            </a>
          </div>
        </div>

        {/* Studio links */}
        <div className="md:col-span-2">
          <h4 className="font-sans font-bold text-[12px] uppercase tracking-[0.2em] mb-6 text-primary">Studio</h4>
          <ul className="space-y-4">
            <li>
              <Link href="/projects" className="font-sans text-body-md text-secondary hover:text-luxury-gold transition-colors duration-300">
                Residential
              </Link>
            </li>
            <li>
              <Link href="/projects" className="font-sans text-body-md text-secondary hover:text-luxury-gold transition-colors duration-300">
                Commercial
              </Link>
            </li>
            <li>
              <Link href="/projects" className="font-sans text-body-md text-secondary hover:text-luxury-gold transition-colors duration-300">
                Hospitality
              </Link>
            </li>
            <li>
              <Link href="/#services" className="font-sans text-body-md text-secondary hover:text-luxury-gold transition-colors duration-300">
                Our Process
              </Link>
            </li>
          </ul>
        </div>

        {/* Info links */}
        <div className="md:col-span-2">
          <h4 className="font-sans font-bold text-[12px] uppercase tracking-[0.2em] mb-6 text-primary">Info</h4>
          <ul className="space-y-4">
            <li>
              <Link href="/about" className="font-sans text-body-md text-secondary hover:text-luxury-gold transition-colors duration-300">
                Philosophy
              </Link>
            </li>
            <li>
              <Link href="/about" className="font-sans text-body-md text-secondary hover:text-luxury-gold transition-colors duration-300">
                Team
              </Link>
            </li>
            <li>
              <Link href="/contact" className="font-sans text-body-md text-secondary hover:text-luxury-gold transition-colors duration-300">
                Careers
              </Link>
            </li>
            <li>
              <Link href="/about" className="font-sans text-body-md text-secondary hover:text-luxury-gold transition-colors duration-300">
                Press
              </Link>
            </li>
          </ul>
        </div>

        {/* Address info */}
        <div className="md:col-span-4">
          <h4 className="font-sans font-bold text-[12px] uppercase tracking-[0.2em] mb-6 text-primary">Location</h4>
          <p className="font-sans text-body-md text-secondary mb-4 leading-relaxed">
            Plot 42, Jubilee Hills Road No. 36,<br />
            Hyderabad, Telangana 500033
          </p>
          <p className="font-sans text-body-md text-secondary leading-relaxed">
            hello@inara.studio<br />
            +91 90000 12345
          </p>
        </div>
      </div>

      <div className="mt-20 pt-8 border-t border-charcoal/5 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="font-sans text-[13px] text-secondary">
          © {new Date().getFullYear()} INARA Interior Architecture. All Rights Reserved.
        </p>
        <div className="flex gap-8 font-sans text-[13px] text-secondary">
          <Link href="#" className="hover:text-primary transition-colors">
            Privacy Policy
          </Link>
          <Link href="#" className="hover:text-primary transition-colors">
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
}
