'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight, Quote } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  project: string;
  quote: string;
  avatar: string;
}

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const autoplayTimer = useRef<NodeJS.Timeout | null>(null);

  const list: Testimonial[] = [
    {
      id: 1,
      name: 'Aditya Reddy',
      project: 'The Celestial Villa • Jubilee Hills',
      quote:
        'INARA completely redefined how we interact with our home. Their spatial architecture brought in natural light we did not think was possible, and the custom furniture curated from Italian textures is simply breathtaking. The attention to detail is of agency standard.',
      avatar: 'AR',
    },
    {
      id: 2,
      name: 'Suhasini Rao',
      project: 'L&apos;Ambre Fine Dining • Banjara Hills',
      quote:
        'Working with INARA on our restaurant design was a masterclass in collaboration. They understood how lighting dictates hospitality mood and created an intimate, editorial-level atmosphere that our patrons praise daily.',
      avatar: 'SR',
    },
    {
      id: 3,
      name: 'Vikram Malhotra',
      project: 'Prism Corporate HQ • Hitech City',
      quote:
        'Our corporate headquarters needed to express sophistication and work precision. INARA designed structural partitions using glassmorphic layers and charcoal walls that instantly command trust from our global clients.',
      avatar: 'VM',
    },
  ];

  const stopAutoplay = () => {
    if (autoplayTimer.current) {
      clearInterval(autoplayTimer.current);
      autoplayTimer.current = null;
    }
  };

  const startAutoplay = () => {
    stopAutoplay();
    autoplayTimer.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % list.length);
    }, 6000);
  };

  useEffect(() => {
    startAutoplay();
    return () => stopAutoplay();
  }, []);

  const handlePrev = () => {
    stopAutoplay();
    setActiveIndex((prev) => (prev - 1 + list.length) % list.length);
    startAutoplay();
  };

  const handleNext = () => {
    stopAutoplay();
    setActiveIndex((prev) => (prev + 1) % list.length);
    startAutoplay();
  };

  return (
    <section className="py-section-gap px-margin-mobile md:px-margin-desktop bg-surface-container-low select-none overflow-hidden">
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
        <span className="font-sans text-luxury-gold text-label-caps mb-8 block">
          TESTIMONIALS
        </span>

        {/* Quote Icon */}
        <div className="text-luxury-gold/20 mb-6">
          <Quote size={56} strokeWidth={1} fill="currentColor" />
        </div>

        {/* Carousel Content */}
        <div className="w-full relative min-h-[300px] sm:min-h-[220px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
              className="w-full"
            >
              <blockquote className="font-display text-[20px] sm:text-[24px] md:text-[28px] leading-relaxed text-charcoal mb-8 italic max-w-3xl mx-auto font-light">
                &ldquo;{list[activeIndex].quote}&rdquo;
              </blockquote>
              <div className="flex flex-col items-center gap-2">
                <div className="w-12 h-12 bg-luxury-gold text-charcoal font-display font-semibold rounded-full flex items-center justify-center text-[16px] shadow-sm select-none">
                  {list[activeIndex].avatar}
                </div>
                <cite className="not-italic font-sans text-label-caps text-primary font-bold mt-2 tracking-widest block">
                  {list[activeIndex].name}
                </cite>
                <span className="font-sans text-[13px] text-secondary">
                  {list[activeIndex].project}
                </span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Controls */}
        <div className="flex items-center gap-12 mt-12">
          <button
            onClick={handlePrev}
            className="w-12 h-12 border border-charcoal/10 hover:border-luxury-gold flex items-center justify-center hover:bg-luxury-gold hover:text-white transition-all duration-300 rounded-full cursor-pointer"
            aria-label="Previous Review"
          >
            <ArrowLeft size={18} />
          </button>

          {/* Dots Indicator */}
          <div className="flex gap-2">
            {list.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  stopAutoplay();
                  setActiveIndex(index);
                  startAutoplay();
                }}
                className={`h-1.5 transition-all duration-300 cursor-pointer ${
                  activeIndex === index ? 'w-8 bg-luxury-gold' : 'w-2 bg-charcoal/20'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            className="w-12 h-12 border border-charcoal/10 hover:border-luxury-gold flex items-center justify-center hover:bg-luxury-gold hover:text-white transition-all duration-300 rounded-full cursor-pointer"
            aria-label="Next Review"
          >
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
