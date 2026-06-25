'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { allProjects, ProjectData } from '@/data/projects';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function ProjectsPageClient() {
  const [activeFilter, setActiveFilter] = useState('All');
  const containerRef = useRef<HTMLDivElement>(null);

  const categories = ['All', 'Restaurant', 'Cafe', 'Bar & Lounge', 'Workspace', 'Retail'];

  const filteredProjects =
    activeFilter === 'All'
      ? allProjects
      : allProjects.filter(
          (p) => p.category.toLowerCase().includes(activeFilter.toLowerCase()) || 
                 (activeFilter === 'Cafe' && p.category === 'Cafe') ||
                 (activeFilter === 'Bar & Lounge' && p.category === 'Bar & Lounge')
        );

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Fade-in animations for projects
      gsap.fromTo(
        '.project-card-fade',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.projects-grid-container',
            start: 'top 80%',
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, [activeFilter]);

  return (
    <div ref={containerRef} className="py-20 select-none bg-background min-h-screen">
      {/* Intro Hero */}
      <div className="pt-24 px-margin-mobile md:px-margin-desktop max-w-7xl mx-auto mb-16">
        <span className="font-sans text-luxury-gold text-label-caps tracking-[0.25em] font-bold block mb-4">
          PORTFOLIO ARCHIVE
        </span>
        <h1 className="font-display text-[40px] sm:text-headline-md md:text-[68px] leading-[1.05] font-bold text-charcoal mb-6">
          Commercial Creations
        </h1>
        <p className="font-sans text-body-lg text-secondary max-w-2xl font-light leading-relaxed">
          Explore our completed commercial projects in Hyderabad, ranging from fine-dining restaurants and rooftops to modern spaces designed for high productivity.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="px-margin-mobile md:px-margin-desktop max-w-7xl mx-auto mb-16">
        <div className="flex flex-wrap gap-x-8 gap-y-4 border-b border-charcoal/10 pb-6 overflow-x-auto no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`font-sans text-[12px] uppercase tracking-[0.2em] font-semibold transition-all duration-300 pb-2 border-b-2 whitespace-nowrap cursor-pointer ${
                activeFilter === cat
                  ? 'text-luxury-gold border-luxury-gold'
                  : 'text-secondary border-transparent hover:text-primary'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="projects-grid-container px-margin-mobile md:px-margin-desktop max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-16 gap-x-gutter">
          {filteredProjects.map((project: ProjectData) => (
            <div key={project.slug} className="project-card-fade group cursor-pointer">
              <Link href={`/projects/${project.slug}`}>
                <div className="aspect-[16/10] overflow-hidden bg-surface-container relative">
                  <img
                    src={project.image}
                    alt={`${project.name} Commercial Interior Design Hyderabad`}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-charcoal/15 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="mt-6 flex justify-between items-start">
                  <div>
                    <span className="font-sans text-label-caps text-secondary text-[10px] tracking-widest block font-bold uppercase">
                      {project.category} • {project.location}
                    </span>
                    <h2 className="font-display text-[22px] text-charcoal mt-1 group-hover:text-luxury-gold transition-colors font-medium">
                      {project.name}
                    </h2>
                  </div>
                  <div className="text-charcoal group-hover:text-luxury-gold group-hover:translate-x-2.5 transition-all duration-300 p-2">
                    <ArrowUpRight size={24} />
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="py-20 text-center">
            <p className="font-sans text-body-lg text-secondary font-light">
              No projects found under this category. We are constantly expanding our portfolio.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
