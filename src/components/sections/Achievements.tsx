'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Achievements() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Counter count-up animations
      const counters = gsap.utils.toArray<HTMLElement>('.counter-val');
      counters.forEach((counter) => {
        const targetValue = parseInt(counter.getAttribute('data-target') || '0', 10);
        const obj = { value: 0 };

        gsap.to(obj, {
          value: targetValue,
          duration: 1.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: counter,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
          onUpdate: () => {
            counter.innerText = Math.floor(obj.value).toString();
          },
        });
      });

      // Staggered grid cards fade-in
      gsap.fromTo(
        '.achievement-card',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 80%',
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const stats = [
    {
      target: 50,
      suffix: '+',
      label: 'Projects Delivered',
      desc: 'Exclusive villas, corporate headquarters, and high-end restaurant projects.',
    },
    {
      target: 250,
      suffix: 'K+',
      label: 'Sq. Ft. Designed',
      desc: 'Meticulously planned interior spaces tailored to luxury specifications.',
    },
    {
      target: 10,
      suffix: '+',
      label: 'Years Experience',
      desc: 'A decade of refining our craft and collaborating with world-class builders.',
    },
    {
      target: 100,
      suffix: '%',
      label: 'Client Satisfaction',
      desc: 'Unwavering commitment to delivery precision and design integrity.',
    },
  ];

  return (
    <section
      ref={containerRef}
      className="py-section-gap px-margin-mobile md:px-margin-desktop bg-background select-none overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-gutter">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="achievement-card p-10 bg-surface-container border border-charcoal/5 flex flex-col justify-between h-[260px] group hover:border-luxury-gold transition-colors duration-500"
            >
              <div>
                <h3 className="font-display text-[48px] md:text-[60px] font-bold text-charcoal flex items-baseline leading-none mb-4 group-hover:text-luxury-gold transition-colors duration-500">
                  <span className="counter-val" data-target={stat.target}>
                    0
                  </span>
                  <span className="text-luxury-gold">{stat.suffix}</span>
                </h3>
                <h4 className="font-sans text-label-caps text-primary font-bold mb-4 tracking-[0.15em]">
                  {stat.label}
                </h4>
              </div>
              <p className="font-sans text-[14px] text-secondary leading-relaxed font-light">
                {stat.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
