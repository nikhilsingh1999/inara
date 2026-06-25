'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function DesignProcess() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate progress line heights based on scroll
      gsap.fromTo(
        '.process-progress-line',
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: '.process-steps-container',
            start: 'top 50%',
            end: 'bottom 50%',
            scrub: true,
          },
        }
      );

      // Animate steps as they enter the screen
      gsap.utils.toArray<HTMLElement>('.process-step').forEach((step) => {
        const num = step.querySelector('.process-num');
        const content = step.querySelector('.process-content');

        gsap.fromTo(
          [num, content],
          { opacity: 0.2, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.1,
            scrollTrigger: {
              trigger: step,
              start: 'top 75%',
              end: 'top 40%',
              toggleActions: 'play reverse play reverse',
            },
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const steps = [
    {
      num: '01',
      title: 'Discovery',
      desc: 'An in-depth consultation to understand your functional needs, lifestyle parameters, and design aspirations. We define the project vision and scope.',
    },
    {
      num: '02',
      title: 'Concept Development',
      desc: 'Establishing the visual direction through editorial moodboards, spatial layouts, and initial 3D design studies that set the project tone.',
    },
    {
      num: '03',
      title: 'Design Planning',
      desc: 'Refining the chosen layout into comprehensive architectural drawings, electrical plans, plumbing elevations, and detail drawings.',
    },
    {
      num: '04',
      title: 'Material Selection',
      desc: 'Sourcing premium stones, woods, metal details, and textiles. Clients are accompanied to view global marbles and custom styling catalogs.',
    },
    {
      num: '05',
      title: 'Execution & Quality Check',
      desc: 'Supervising on-site installation, carpenter work, and site finishing with strict adherence to architectural blueprints and timelines.',
    },
    {
      num: '06',
      title: 'Final Styling',
      desc: 'Sourcing, placing, and detailing the final furniture layout, artwork placements, and styling layers, turning the architecture into a home.',
    },
  ];

  return (
    <section
      ref={containerRef}
      className="py-section-gap bg-charcoal text-white scroll-mt-20 overflow-hidden select-none"
    >
      <div className="px-margin-mobile md:px-margin-desktop max-w-6xl mx-auto">
        {/* Title */}
        <div className="mb-24">
          <span className="font-sans text-luxury-gold text-label-caps mb-4 block">
            WORKFLOW
          </span>
          <h2 className="font-display text-[32px] sm:text-headline-md md:text-display-lg-mobile text-white leading-none">
            Our Proven Path
          </h2>
        </div>

        {/* Steps Container */}
        <div className="process-steps-container relative grid grid-cols-1 md:grid-cols-12 gap-y-16">
          {/* Vertical progress line on desktop (positioned at col-span-3) */}
          <div className="hidden md:block absolute left-[25%] top-0 bottom-0 w-[1px] bg-white/10 origin-top">
            <div className="process-progress-line absolute top-0 left-0 w-full h-full bg-luxury-gold origin-top" />
          </div>

          {steps.map((step, index) => (
            <div
              key={step.num}
              className="process-step grid grid-cols-1 md:grid-cols-12 md:col-span-12 items-start relative"
            >
              {/* Step number */}
              <div className="process-num font-display text-[48px] md:text-[84px] text-luxury-gold font-light leading-none md:col-span-3 flex justify-between items-center md:justify-start pr-8 md:pr-16 z-10 bg-charcoal">
                <span>{step.num}</span>
                {/* Horizontal line divider for mobile */}
                <div className="h-px bg-white/10 flex-grow ml-6 md:hidden" />
              </div>

              {/* Node indicator on progress bar */}
              <div className="hidden md:block absolute left-[25%] top-10 -translate-x-[7px] w-3 h-3 bg-charcoal border-2 border-luxury-gold rounded-full z-20" />

              {/* Step content */}
              <div className="process-content md:col-span-9 md:pl-16 pt-4 md:pt-6">
                <h3 className="font-display text-[22px] md:text-headline-sm text-white mb-4">
                  {step.title}
                </h3>
                <p className="font-sans text-body-md text-white/60 leading-relaxed font-light max-w-2xl">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
