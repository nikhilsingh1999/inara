'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  Maximize2,
  Paintbrush,
  Sparkles,
  LayoutTemplate,
  Building,
  Key,
  Armchair,
  ArrowRight,
  Store,
} from 'lucide-react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Services() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Staggered service cards reveal
      gsap.fromTo(
        '.service-card',
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.services-grid',
            start: 'top 80%',
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const services = [
    {
      icon: LayoutTemplate,
      title: 'Commercial Interior Design',
      desc: 'High-end structural space planning, design blueprints, and visual layout optimizations for retail and corporate ventures.',
    },
    {
      icon: Paintbrush,
      title: 'Restaurant Interiors',
      desc: 'Cinematic dining room concepts, acoustics, and customer circulation layouts optimized for luxury culinary brands.',
    },
    {
      icon: Sparkles,
      title: 'Cafe & Bar Interiors',
      desc: 'Amber lighting installations, custom bar counters, and cozy, high-impact environments that maximize dwell time.',
    },
    {
      icon: Building,
      title: 'Hospitality Interiors',
      desc: 'Exclusive boutique hotels, premium lobbies, lounge configurations, and high-end hospitality styling.',
    },
    {
      icon: Store,
      title: 'Retail Interiors',
      desc: 'Visual merchandising layouts, custom storefront facade engineering, and floor plans designed to guide customer paths.',
    },
    {
      icon: Maximize2,
      title: 'Workspace Interiors',
      desc: 'Ergonomic layouts, acoustic felt walls, and glassmorphic partitions tailored for productivity and brand positioning.',
    },
    {
      icon: Key,
      title: 'Turnkey Commercial Projects',
      desc: 'End-to-end design, supervised construction, materials sourcing, and final styling, delivered on time and within scope.',
    },
    {
      icon: Armchair,
      title: 'Custom Furniture & Styling',
      desc: 'Bespoke design for commercial-grade seating, custom tables, lighting configurations, and art installations.',
    },
  ];

  return (
    <section
      id="services"
      ref={containerRef}
      className="py-section-gap px-margin-mobile md:px-margin-desktop bg-surface-container-low scroll-mt-20 select-none"
    >
      {/* Title */}
      <div className="text-center mb-20">
        <span className="font-sans text-luxury-gold text-label-caps mb-4 block">
          EXPERTISE
        </span>
        <h2 className="font-display text-[32px] sm:text-headline-md md:text-display-lg-mobile text-charcoal">
          Our Commercial Services
        </h2>
      </div>

      {/* Grid */}
      <div className="services-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-gutter">
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <div
              key={index}
              className="service-card bg-surface-container-lowest p-10 hover:bg-charcoal hover:text-white transition-all duration-500 group flex flex-col justify-between h-[360px] border border-charcoal/5 relative overflow-hidden"
            >
              <div>
                <div className="text-luxury-gold mb-8 group-hover:scale-110 transition-transform duration-500 origin-left">
                  <Icon size={40} strokeWidth={1.5} />
                </div>
                <h3 className="font-display text-headline-sm mb-4 text-charcoal group-hover:text-white transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="font-sans text-body-md text-secondary group-hover:text-white/60 transition-colors duration-300 leading-relaxed font-light">
                  {service.desc}
                </p>
              </div>

              {/* Hover action indicator */}
              <div className="flex items-center gap-2 text-luxury-gold opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500 font-sans text-label-caps mt-4">
                <span>Learn More</span>
                <ArrowRight size={14} />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
