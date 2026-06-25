'use client';

import React, { useEffect, useRef } from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, MoveUpRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

import { projectsData } from '@/data/projects';


export default function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = React.use(params);
  const slug = resolvedParams.slug;
  const project = projectsData[slug];
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!project) {
      notFound();
    }
  }, [project]);

  useEffect(() => {
    if (!project) return;

    const ctx = gsap.context(() => {
      // Reveal project header elements
      gsap.fromTo(
        '.reveal-header',
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1.2, ease: 'power4.out', stagger: 0.15 }
      );

      // Scroll trigger for sticky sidebar fade-out bounds
      ScrollTrigger.create({
        trigger: '.project-narrative-section',
        start: 'top 10%',
        end: 'bottom 80%',
        pin: '.sticky-details-panel',
        pinSpacing: false,
      });

      // Staggered gallery image clip reveals
      gsap.utils.toArray<HTMLElement>('.gallery-reveal').forEach((container) => {
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
            },
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, [project]);

  if (!project) return null;

  // Retrieve the other projects to display as "Related"
  const relatedSlugs = Object.keys(projectsData).filter((s) => s !== slug);
  const relatedProjects = relatedSlugs.slice(0, 2).map((s) => projectsData[s]);


  return (
    <div ref={containerRef} className="bg-background min-h-screen pb-20 select-none">
      {/* Top Navigation Back Action */}
      <div className="pt-32 px-margin-mobile md:px-margin-desktop max-w-7xl mx-auto">
        <Link
          href="/"
          className="inline-flex items-center gap-3 text-secondary hover:text-primary transition-colors font-sans text-label-caps tracking-widest font-bold group pb-8"
        >
          <ArrowLeft size={16} className="transition-transform duration-300 group-hover:-translate-x-1.5" />
          <span>BACK TO PORTFOLIO</span>
        </Link>
      </div>

      {/* Hero Banner Section */}
      <section className="px-margin-mobile md:px-margin-desktop max-w-7xl mx-auto mb-16">
        <div className="relative aspect-[16/10] md:aspect-[21/9] overflow-hidden bg-surface-container">
          <img
            src={project.image}
            alt={project.name}
            className="w-full h-full object-cover reveal-header scale-105"
          />
          <div className="absolute inset-0 bg-charcoal/20" />
        </div>
      </section>

      {/* Main title */}
      <section className="px-margin-mobile md:px-margin-desktop max-w-7xl mx-auto mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-8">
            <span className="reveal-header font-sans text-luxury-gold text-label-caps tracking-[0.25em] font-bold block mb-4">
              {project.category}
            </span>
            <h1 className="reveal-header font-display text-[40px] sm:text-headline-md md:text-[68px] leading-[1.05] font-bold text-charcoal">
              {project.name}
            </h1>
          </div>
        </div>
      </section>

      {/* Editorial Content Grid */}
      <section className="project-narrative-section px-margin-mobile md:px-margin-desktop max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-y-16 lg:gap-x-section-gap mb-24 items-start relative">
        {/* Left Side: Story & Materials */}
        <div className="lg:col-span-8 space-y-16">
          <div>
            <h2 className="font-display text-[22px] md:text-headline-sm text-charcoal mb-6">
              The Spatial Narrative
            </h2>
            <p className="font-sans text-body-lg text-secondary leading-relaxed font-light whitespace-pre-line">
              {project.story}
            </p>
          </div>

          {/* Materials */}
          <div className="border-t border-charcoal/10 pt-12">
            <h3 className="font-display text-[22px] md:text-headline-sm text-charcoal mb-6">
              Material Palette
            </h3>
            <div className="grid grid-cols-2 gap-y-6 gap-x-4">
              {project.materials.map((mat, i) => (
                <div key={i} className="flex gap-4 items-center group">
                  <div className="w-1.5 h-1.5 bg-luxury-gold group-hover:scale-150 transition-transform duration-300" />
                  <span className="font-sans text-[15px] text-charcoal font-light group-hover:text-luxury-gold transition-colors">
                    {mat}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Side: Sticky Meta Panel */}
        <div className="lg:col-span-4 sticky-details-panel">
          <div className="bg-surface-container p-10 border border-charcoal/5">
            <h4 className="font-sans font-bold text-label-caps text-[11px] tracking-wider text-primary border-b border-charcoal/10 pb-4 mb-8">
              Project Coordinates
            </h4>
            <div className="space-y-6">
              <div>
                <span className="font-sans text-[12px] text-secondary tracking-wide uppercase">Location</span>
                <span className="font-sans text-body-md text-charcoal block font-semibold mt-1">
                  {project.location}
                </span>
              </div>
              <div>
                <span className="font-sans text-[12px] text-secondary tracking-wide uppercase">Client</span>
                <span className="font-sans text-body-md text-charcoal block font-semibold mt-1">
                  {project.client}
                </span>
              </div>
              <div>
                <span className="font-sans text-[12px] text-secondary tracking-wide uppercase">Gross Area</span>
                <span className="font-sans text-body-md text-charcoal block font-semibold mt-1">
                  {project.area}
                </span>
              </div>
              <div>
                <span className="font-sans text-[12px] text-secondary tracking-wide uppercase">Timeline</span>
                <span className="font-sans text-body-md text-charcoal block font-semibold mt-1">
                  {project.duration}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Showcase (Images) */}
      <section className="px-margin-mobile md:px-margin-desktop max-w-7xl mx-auto mb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="gallery-reveal aspect-[4/3] bg-surface-container overflow-hidden">
            <img
              src={project.gallery[0]}
              alt="Detail Shot 1"
              className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105"
            />
          </div>
          <div className="gallery-reveal aspect-[4/3] bg-surface-container overflow-hidden md:mt-16">
            <img
              src={project.gallery[1]}
              alt="Detail Shot 2"
              className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105"
            />
          </div>
        </div>
      </section>

      {/* Project Execution Process */}
      <section className="bg-charcoal text-white py-20 px-margin-mobile md:px-margin-desktop select-none">
        <div className="max-w-4xl mx-auto">
          <h3 className="font-display text-[26px] md:text-headline-md text-white mb-12 text-center">
            Execution Timeline
          </h3>
          <div className="space-y-6">
            {project.timeline.map((step, idx) => (
              <div
                key={idx}
                className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-white/10 pb-6 group hover:border-luxury-gold transition-colors duration-300"
              >
                <div className="flex gap-6 items-center">
                  <span className="font-display text-[22px] text-luxury-gold font-light opacity-60 group-hover:opacity-100">
                    0{idx + 1}
                  </span>
                  <span className="font-sans text-body-md text-white group-hover:text-luxury-gold transition-colors">
                    {step.phase}
                  </span>
                </div>
                <span className="font-sans text-[13px] text-white/50 tracking-wider font-semibold uppercase mt-2 sm:mt-0">
                  {step.duration}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Projects Section */}
      <section className="px-margin-mobile md:px-margin-desktop max-w-7xl mx-auto pt-28">
        <div className="border-t border-charcoal/10 pt-16 mb-12">
          <span className="font-sans text-luxury-gold text-label-caps tracking-wider block mb-4 font-bold">
            NEXT STEPS
          </span>
          <h3 className="font-display text-[28px] md:text-[42px] text-charcoal">
            Related Creations
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
          {relatedProjects.map((rel) => (
            <Link key={rel.slug} href={`/projects/${rel.slug}`} className="group cursor-pointer">
              <div className="aspect-[16/10] overflow-hidden bg-surface-container relative">
                <img
                  src={rel.image}
                  alt={rel.name}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-charcoal/15 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="mt-6 flex justify-between items-start">
                <div>
                  <span className="font-sans text-label-caps text-secondary text-[10px] tracking-widest block font-bold uppercase">
                    {rel.category} • {rel.location}
                  </span>
                  <h4 className="font-display text-[22px] text-charcoal mt-1 group-hover:text-luxury-gold transition-colors font-medium">
                    {rel.name}
                  </h4>
                </div>
                <div className="text-charcoal group-hover:text-luxury-gold group-hover:translate-x-2.5 transition-all duration-300 p-2">
                  <MoveUpRight size={22} />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
