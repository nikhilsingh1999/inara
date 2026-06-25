'use client';

import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Fade-in cinematic animation using GSAP
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.hero-title-line',
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.5, stagger: 0.2, ease: 'power4.out' }
      );
      gsap.fromTo(
        '.hero-fade-in',
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1.2, delay: 0.8, ease: 'power3.out', stagger: 0.15 }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const handleScrollToProjects = () => {
    const el = document.getElementById('projects');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      ref={containerRef}
      className="relative h-screen w-full flex items-center justify-start overflow-hidden bg-charcoal select-none"
    >
      {/* Video Loop Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="absolute min-w-full min-h-full w-auto h-auto top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 object-cover opacity-50 transition-opacity duration-1000"
          poster="/assets/photo_6082399343500529731_y.jpg"
        >
          <source
            src="/assets/document_6082399343040535870.mp4"
            type="video/mp4"
          />
        </video>
        {/* Editorial gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/40 to-charcoal/60" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 w-full px-margin-mobile md:px-margin-desktop max-w-5xl text-left mt-20">
        <div className="overflow-hidden mb-2">
          <span className="hero-fade-in font-sans text-luxury-gold text-label-caps block">
            LUXURY COMMERCIAL INTERIOR ARCHITECTURE
          </span>
        </div>
        <h1 className="font-display text-[44px] sm:text-[60px] md:text-display-lg text-white leading-[1.05] tracking-tight mb-8">
          <div className="overflow-hidden block py-1">
            <span className="hero-title-line inline-block">Designing Commercial</span>
          </div>
          <div className="overflow-hidden block py-1">
            <span className="hero-title-line inline-block text-luxury-gold">Spaces That Inspire</span>
          </div>
        </h1>
        <p className="hero-fade-in font-sans text-[16px] md:text-body-lg text-white/80 max-w-xl mb-12 leading-relaxed font-light">
          Hyderabad-based Commercial Interior Architecture &amp; Decor Studio crafting high-end restaurant, cafe, bar, and luxury workspace environments.
        </p>
        <div className="hero-fade-in flex flex-col sm:flex-row gap-6">
          <button
            onClick={handleScrollToProjects}
            className="bg-luxury-gold text-charcoal border border-luxury-gold hover:bg-transparent hover:text-luxury-gold px-10 py-5 font-sans font-bold text-[11px] tracking-[0.2em] uppercase transition-all duration-500 active:scale-95 text-center cursor-pointer"
          >
            View Projects
          </button>
          <button
            onClick={handleScrollToContact}
            className="border border-white/30 text-white hover:border-luxury-gold hover:text-luxury-gold px-10 py-5 font-sans font-bold text-[11px] tracking-[0.2em] uppercase transition-all duration-500 active:scale-95 text-center cursor-pointer bg-white/5 backdrop-blur-sm"
          >
            Book Consultation
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-margin-desktop hidden md:block z-10 hero-fade-in">
        <div className="flex items-center gap-4 text-white/40 font-sans text-[11px] tracking-[0.25em] font-semibold">
          <span>SCROLL TO EXPLORE</span>
          <div className="w-[1px] h-12 bg-white/20 relative overflow-hidden">
            <motion.div
              animate={{ y: ['-100%', '100%'] }}
              transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
              className="absolute top-0 left-0 w-full h-1/2 bg-luxury-gold"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
