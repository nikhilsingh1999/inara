'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Content reveal on scroll
      gsap.fromTo(
        '.about-reveal',
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: 'power3.out',
          stagger: 0.2,
          scrollTrigger: {
            trigger: '.about-grid',
            start: 'top 80%',
          },
        }
      );

      // Parallax effect on the about image
      gsap.fromTo(
        '.about-parallax-img',
        { y: -30 },
        {
          y: 30,
          ease: 'none',
          scrollTrigger: {
            trigger: '.about-image-wrapper',
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const pillars = [
    { num: '01', title: 'Commercial Design', desc: 'Brand-focused interior zoning and optimized spatial flow.' },
    { num: '02', title: 'Restaurant & Cafe Interiors', desc: 'Acoustic intimacy, visual focal elements, and custom lighting designs.' },
    { num: '03', title: 'Turnkey Execution', desc: 'Complete concept-to-completion management with zero site friction.' },
    { num: '04', title: 'Bespoke Custom Styling', desc: 'Sourcing premium, commercial-grade furniture, textiles, and decor globally.' },
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="bg-charcoal text-white py-section-gap scroll-mt-20 overflow-hidden select-none"
    >
      <div className="about-grid px-margin-mobile md:px-margin-desktop grid grid-cols-1 md:grid-cols-2 gap-y-16 md:gap-x-section-gap items-center">
        {/* Left narrative */}
        <div className="about-reveal flex flex-col justify-center">
          <span className="font-sans text-luxury-gold text-label-caps mb-6 block">
            OUR PHILOSOPHY
          </span>
          <h2 className="font-display text-[32px] sm:text-headline-md md:text-display-lg-mobile lg:text-display-lg leading-[1.1] mb-8">
            We Tell Stories <br />Through Space
          </h2>
          <p className="font-sans text-body-lg text-white/70 mb-12 leading-relaxed font-light">
            Founded in the heart of Hyderabad, INARA is a commercial interior architecture studio dedicated to spatial precision and brand identity. Under the leadership of Founder &amp; Principal Interior Designer **Rafiya Lokhande**, we craft hospitality and workplace environments that cultivate consumer engagement, optimize operations, and tell your brand&apos;s story.
          </p>

          {/* Pillars List */}
          <ul className="space-y-6">
            {pillars.map((pillar) => (
              <li
                key={pillar.num}
                className="flex gap-6 group cursor-pointer border-b border-white/10 pb-6 hover:border-luxury-gold transition-colors duration-400"
              >
                <span className="font-display text-[20px] text-luxury-gold opacity-40 group-hover:opacity-100 transition-opacity duration-300">
                  {pillar.num}
                </span>
                <div>
                  <h4 className="font-display text-[18px] text-white group-hover:text-luxury-gold transition-colors duration-300 font-medium">
                    {pillar.title}
                  </h4>
                  <p className="font-sans text-[14px] text-white/50 mt-1.5 font-light group-hover:text-white/75 transition-colors duration-300">
                    {pillar.desc}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Right image + badge */}
        <div className="about-reveal relative about-image-wrapper">
          <div className="aspect-[5/6] md:aspect-square bg-neutral-900 overflow-hidden relative">
            <img
              src="/assets/photo_6082399343500529731_y.jpg"
              alt="INARA Commercial interior photography Banjara Hills"
              className="about-parallax-img w-full h-full object-cover scale-110"
              loading="lazy"
            />
            {/* Subtle shadow overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 to-transparent" />
          </div>

          {/* Floating badge */}
          <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-luxury-gold p-8 hidden lg:flex flex-col items-center justify-center text-charcoal shadow-xl border border-luxury-gold hover:bg-charcoal hover:text-luxury-gold hover:border-luxury-gold transition-all duration-500 cursor-default select-none">
            <span className="font-display text-[48px] leading-none font-bold">10+</span>
            <span className="font-sans text-[10px] tracking-[0.2em] font-bold text-center mt-2 uppercase">
              Years of Craft
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
