'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { ArrowRight, Award, Compass, Layers, ShieldCheck } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function AboutPageClient() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header elements reveal
      gsap.fromTo(
        '.reveal-about-hero',
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1.2, ease: 'power4.out', stagger: 0.15 }
      );

      // Section animations on scroll
      const sections = gsap.utils.toArray<HTMLElement>('.scroll-reveal-section');
      sections.forEach((sec) => {
        gsap.fromTo(
          sec.querySelectorAll('.sec-reveal'),
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            stagger: 0.15,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: sec,
              start: 'top 80%',
            },
          }
        );
      });

      // Parallax portrait reveal
      gsap.fromTo(
        '.about-portrait-img',
        { scale: 1.15, y: -20 },
        {
          scale: 1.0,
          y: 20,
          ease: 'none',
          scrollTrigger: {
            trigger: '.about-portrait-wrapper',
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const values = [
    {
      icon: Compass,
      title: 'Patron-Centric Layouts',
      desc: 'We map operational and human journeys to optimize workspace utility and dining flow.',
    },
    {
      icon: Layers,
      title: 'Material Authenticity',
      desc: 'Sourcing tactile, commercial-grade components that guarantee luxury longevity.',
    },
    {
      icon: Award,
      title: 'Brand Convergence',
      desc: 'Every custom lighting strip, archway, and stucco pillar is built to express client identity.',
    },
    {
      icon: ShieldCheck,
      title: 'Turnkey Stewardship',
      desc: 'Complete project coordination from ventilation details to custom branding handover.',
    },
  ];

  return (
    <div ref={containerRef} className="bg-background min-h-screen pb-20 select-none">
      {/* Intro Hero Section */}
      <section className="pt-32 px-margin-mobile md:px-margin-desktop max-w-7xl mx-auto mb-20">
        <span className="reveal-about-hero font-sans text-luxury-gold text-label-caps tracking-[0.25em] font-bold block mb-4">
          STUDIO CHRONICLE
        </span>
        <h1 className="reveal-about-hero font-display text-[40px] sm:text-headline-md md:text-[68px] leading-[1.05] font-bold text-charcoal mb-6 max-w-4xl">
          Crafting Commercial Identity Through Space
        </h1>
        <p className="reveal-about-hero font-sans text-body-lg text-secondary max-w-2xl font-light leading-relaxed">
          INARA is a Hyderabad-based interior architecture studio specializing in high-concept commercial projects, luxury restaurants, premium cafes, bars, and corporate headquarters.
        </p>
      </section>

      {/* Hero Full-width Project Banner */}
      <section className="px-margin-mobile md:px-margin-desktop max-w-7xl mx-auto mb-24 reveal-about-hero">
        <div className="relative aspect-[16/9] md:aspect-[21/9] overflow-hidden bg-surface-container">
          <img
            src="/assets/photo_6082399343500529760_y.jpg"
            alt="INARA Commercial interior workspace design Hyderabad"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-charcoal/10" />
        </div>
      </section>

      {/* Studio Narrative Section */}
      <section className="scroll-reveal-section px-margin-mobile md:px-margin-desktop max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-y-12 lg:gap-x-section-gap mb-28 items-start">
        <div className="lg:col-span-5">
          <span className="sec-reveal font-sans text-luxury-gold text-label-caps tracking-[0.2em] font-bold block mb-4">
            STUDIO VISION
          </span>
          <h2 className="sec-reveal font-display text-[32px] sm:text-headline-md text-charcoal leading-tight font-semibold">
            Where Brand Strategy Meets Architectural Rigour
          </h2>
        </div>
        <div className="lg:col-span-7 space-y-6 sec-reveal">
          <p className="font-sans text-[17px] text-secondary leading-relaxed font-light">
            Founded in Hyderabad, INARA has transitioned from bespoke residential projects into a high-performance, commercial interior architecture studio. We believe commercial spaces should do more than look beautiful—they must drive brand engagement, optimize operational workflows, and enhance the patron journey.
          </p>
          <p className="font-sans text-[17px] text-secondary leading-relaxed font-light">
            Under the guidance of principal architect Rafiya Lokhande, our designs fuse luxury aesthetics with rigorous spatial engineering. By balancing lighting temperatures, acoustics, ventilation paths, and seating layout density, we build environments that are both functional assets and visual landmarks.
          </p>
        </div>
      </section>

      {/* Founder Spotlight Section */}
      <section className="scroll-reveal-section bg-charcoal text-white py-28 px-margin-mobile md:px-margin-desktop overflow-hidden mb-28">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-y-16 lg:gap-x-section-gap items-center">
          {/* Portrait Image */}
          <div className="lg:col-span-5 about-portrait-wrapper relative">
            <div className="aspect-[4/5] bg-neutral-900 overflow-hidden relative border border-white/5">
              <img
                src="/assets/photo_6082399343500529731_y.jpg"
                alt="Rafiya Lokhande - Founder & Principal Designer of INARA"
                className="about-portrait-img w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 to-transparent" />
            </div>
            {/* Embedded Accent Tag */}
            <div className="absolute -bottom-6 -right-6 bg-luxury-gold text-charcoal p-6 hidden md:block">
              <span className="font-sans text-[10px] tracking-widest font-bold uppercase block">
                PRINCIPAL DESIGNER
              </span>
              <span className="font-display text-[20px] font-medium block mt-1">
                Rafiya Lokhande
              </span>
            </div>
          </div>

          {/* Portrait Description */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-8">
            <div className="sec-reveal">
              <span className="font-sans text-luxury-gold text-label-caps tracking-[0.2em] font-bold block mb-4">
                THE FOUNDER
              </span>
              <h2 className="font-display text-[32px] sm:text-headline-md text-white leading-tight font-semibold">
                Rafiya Lokhande
              </h2>
              <p className="font-sans text-[14px] text-white/50 tracking-wider uppercase font-semibold mt-1">
                Founder & Principal Interior Designer
              </p>
            </div>

            <div className="sec-reveal space-y-6">
              <p className="font-sans text-[16px] text-white/70 leading-relaxed font-light">
                With a decade of experience designing upscale spaces across Hyderabad, Rafiya Lokhande established INARA to elevate the standards of commercial hospitality design. Her design approach is defined by material authenticity, structural honesty, and a sharp focus on patron psychology.
              </p>
              <p className="font-sans text-[16px] text-white/70 leading-relaxed font-light">
                &ldquo;A commercial space is a living touchpoint of a brand. Whether it is a fine dining layout in Banjara Hills or a modern co-working floor in Hitech City, my goal is to compose architectural narratives that stimulate interaction and leave a lasting impression.&rdquo;
              </p>
            </div>

            {/* Quick Consultation Callout */}
            <div className="sec-reveal pt-6 border-t border-white/10 flex flex-col sm:flex-row gap-6 items-start sm:items-center">
              <div>
                <span className="font-sans text-[12px] text-white/40 tracking-wider uppercase block">
                  Design Consultation
                </span>
                <span className="font-sans text-body-md text-white font-medium block mt-1">
                  Schedule an interview with Rafiya
                </span>
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 bg-luxury-gold text-charcoal hover:bg-white hover:text-charcoal px-6 py-4 font-sans font-bold text-[10px] tracking-widest uppercase transition-all duration-300 active:scale-95 ml-auto"
                id="about-cta-founder"
              >
                <span>Book Consultation</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Core Studio Pillars Section */}
      <section className="scroll-reveal-section px-margin-mobile md:px-margin-desktop max-w-7xl mx-auto mb-28">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="sec-reveal font-sans text-luxury-gold text-label-caps tracking-[0.2em] font-bold block mb-4">
            OUR METHODOLOGY
          </span>
          <h2 className="sec-reveal font-display text-[32px] sm:text-headline-md text-charcoal leading-tight font-semibold">
            Built for Spatial Longevity
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-gutter gap-y-12">
          {values.map((val, idx) => {
            const Icon = val.icon;
            return (
              <div
                key={idx}
                className="sec-reveal p-8 bg-surface-container border border-charcoal/5 group hover:border-luxury-gold transition-colors duration-500"
              >
                <div className="w-12 h-12 bg-background flex items-center justify-center text-luxury-gold group-hover:bg-luxury-gold group-hover:text-charcoal transition-all duration-500 border border-charcoal/5 mb-6">
                  <Icon size={22} />
                </div>
                <h3 className="font-display text-[20px] text-charcoal mb-3 font-semibold group-hover:text-luxury-gold transition-colors">
                  {val.title}
                </h3>
                <p className="font-sans text-[14px] text-secondary leading-relaxed font-light">
                  {val.desc}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA Footer Section */}
      <section className="scroll-reveal-section px-margin-mobile md:px-margin-desktop max-w-7xl mx-auto text-center py-10">
        <div className="bg-surface-container-low p-12 md:p-20 border border-charcoal/5 max-w-4xl mx-auto sec-reveal">
          <h2 className="font-display text-[30px] md:text-headline-md text-charcoal mb-6">
            Ready to design your next commercial landmark?
          </h2>
          <p className="font-sans text-[16px] text-secondary max-w-xl mx-auto leading-relaxed font-light mb-10">
            From preliminary zoning and conceptual renders to complete turnkey execution on site, we help brands create extraordinary physical spaces.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 bg-charcoal text-white hover:bg-luxury-gold hover:text-charcoal px-8 py-5 font-sans font-bold text-[11px] tracking-[0.25em] uppercase transition-all duration-500 active:scale-95"
            id="about-cta-footer"
          >
            <span>Collaborate With Us</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}
