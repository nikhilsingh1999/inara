'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight } from 'lucide-react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface Project {
  name: string;
  category: string;
  location: string;
  slug: string;
  image: string;
  cols: string;
  offset: string;
}

export default function FeaturedProjects() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const projects: Project[] = [
    {
      name: "L'Ambre Fine Dining",
      category: 'Restaurant',
      location: 'Banjara Hills',
      slug: 'l-ambre-fine-dining',
      image: '/assets/photo_6082399343500529731_y.jpg',
      cols: 'md:col-span-8',
      offset: '',
    },
    {
      name: 'The Canopy Rooftop',
      category: 'Bar & Lounge',
      location: 'Jubilee Hills',
      slug: 'the-canopy-rooftop',
      image: '/assets/photo_6082399343500529747_y.jpg',
      cols: 'md:col-span-5',
      offset: 'md:mt-24',
    },
    {
      name: 'The Prism Hub',
      category: 'Workspace',
      location: 'Hitech City',
      slug: 'the-prism-hub',
      image: '/assets/photo_6082399343500529760_y.jpg',
      cols: 'md:col-span-7',
      offset: '',
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Elegant image reveal on scroll
      gsap.utils.toArray<HTMLElement>('.project-image-container').forEach((container) => {
        const image = container.querySelector('.project-img');
        
        gsap.fromTo(
          container,
          { clipPath: 'inset(100% 0% 0% 0%)' },
          {
            clipPath: 'inset(0% 0% 0% 0%)',
            duration: 1.4,
            ease: 'power4.inOut',
            scrollTrigger: {
              trigger: container,
              start: 'top 85%',
              toggleActions: 'play none none none',
            },
          }
        );

        if (image) {
          gsap.fromTo(
            image,
            { scale: 1.3 },
            {
              scale: 1,
              duration: 1.6,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: container,
                start: 'top 85%',
                toggleActions: 'play none none none',
              },
            }
          );
        }
      });

      // Text and metadata fades
      gsap.fromTo(
        '.project-card-text',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.projects-grid',
            start: 'top 80%',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="py-section-gap px-margin-mobile md:px-margin-desktop bg-background select-none scroll-mt-20"
    >
      {/* Header */}
      <div className="flex justify-between items-end mb-20">
        <div>
          <span className="font-sans text-luxury-gold text-label-caps block mb-4">
            PORTFOLIO
          </span>
          <h2 className="font-display text-[32px] sm:text-headline-md md:text-[54px] text-charcoal leading-none">
            Featured Works
          </h2>
        </div>
        <Link
          href="/projects"
          className="hidden md:block font-sans text-label-caps border-b border-charcoal pb-1 hover:text-luxury-gold hover:border-luxury-gold transition-colors duration-400"
        >
          VIEW ALL PROJECTS
        </Link>
      </div>

      {/* Grid */}
      <div className="projects-grid grid grid-cols-1 md:grid-cols-12 gap-gutter items-start">
        {/* Project 1 */}
        <div className={`${projects[0].cols} ${projects[0].offset} group cursor-pointer`}>
          <Link href={`/projects/${projects[0].slug}`}>
            <div className="project-image-container relative overflow-hidden aspect-[16/10] bg-surface-container">
              <img
                src={projects[0].image}
                alt={projects[0].name}
                className="project-img w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-charcoal/15 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
            <div className="project-card-text mt-8 flex justify-between items-start">
              <div>
                <span className="font-sans text-label-caps text-secondary uppercase font-semibold">
                  {projects[0].category} • {projects[0].location}
                </span>
                <h3 className="font-display text-headline-sm sm:text-headline-md mt-2 text-charcoal group-hover:text-luxury-gold transition-colors duration-300">
                  {projects[0].name}
                </h3>
              </div>
              <div className="text-charcoal group-hover:text-luxury-gold group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform duration-300 p-2">
                <ArrowUpRight size={28} />
              </div>
            </div>
          </Link>
        </div>

        {/* Offset quote block */}
        <div className="hidden md:flex md:col-span-4 self-center px-12 h-full flex-col justify-center italic text-secondary text-[16px] leading-relaxed select-none">
          <p className="border-l-2 border-luxury-gold/50 pl-6 py-2">
            &ldquo;Precision is the soul of luxury. Every project at INARA is a testament to our architectural rigor and brand intuition.&rdquo;
          </p>
        </div>

        {/* Project 2 */}
        <div className={`${projects[1].cols} ${projects[1].offset} group cursor-pointer`}>
          <Link href={`/projects/${projects[1].slug}`}>
            <div className="project-image-container relative overflow-hidden aspect-[3/4] bg-surface-container">
              <img
                src={projects[1].image}
                alt={projects[1].name}
                className="project-img w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-charcoal/15 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
            <div className="project-card-text mt-8 flex justify-between items-start">
              <div>
                <span className="font-sans text-label-caps text-secondary uppercase font-semibold">
                  {projects[1].category} • {projects[1].location}
                </span>
                <h3 className="font-display text-headline-sm sm:text-headline-md mt-2 text-charcoal group-hover:text-luxury-gold transition-colors duration-300">
                  {projects[1].name}
                </h3>
              </div>
              <div className="text-charcoal group-hover:text-luxury-gold group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform duration-300 p-2">
                <ArrowUpRight size={28} />
              </div>
            </div>
          </Link>
        </div>

        {/* Project 3 */}
        <div className={`${projects[2].cols} ${projects[2].offset} group cursor-pointer`}>
          <Link href={`/projects/${projects[2].slug}`}>
            <div className="project-image-container relative overflow-hidden aspect-[16/9] bg-surface-container">
              <img
                src={projects[2].image}
                alt={projects[2].name}
                className="project-img w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-charcoal/15 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
            <div className="project-card-text mt-8 flex justify-between items-start">
              <div>
                <span className="font-sans text-label-caps text-secondary uppercase font-semibold">
                  {projects[2].category} • {projects[2].location}
                </span>
                <h3 className="font-display text-headline-sm sm:text-headline-md mt-2 text-charcoal group-hover:text-luxury-gold transition-colors duration-300">
                  {projects[2].name}
                </h3>
              </div>
              <div className="text-charcoal group-hover:text-luxury-gold group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform duration-300 p-2">
                <ArrowUpRight size={28} />
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
