'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface GalleryItem {
  id: number;
  title: string;
  category: string;
  image: string;
  aspect: string;
}

export default function ImmersiveGallery() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const galleryItems: GalleryItem[] = [
    {
      id: 1,
      title: "L'Ambre Velvet Dining Booths",
      category: 'Restaurants',
      image: '/assets/photo_6082399343500529731_y.jpg',
      aspect: 'aspect-[3/4]',
    },
    {
      id: 2,
      title: 'L&apos;Ambre Ambient Amber Lighting',
      category: 'Restaurants',
      image: '/assets/photo_6082399343500529737_y.jpg',
      aspect: 'aspect-[16/10]',
    },
    {
      id: 3,
      title: 'The Canopy Rooftop Curved Seating',
      category: 'Cafes & Bars',
      image: '/assets/photo_6082399343500529747_y.jpg',
      aspect: 'aspect-[4/3]',
    },
    {
      id: 4,
      title: 'The Canopy Steel Arch Seating Grid',
      category: 'Cafes & Bars',
      image: '/assets/photo_6082399343500529740_y.jpg',
      aspect: 'aspect-[3/4]',
    },
    {
      id: 5,
      title: 'Verde Cafe Triangular Ceiling LED Installation',
      category: 'Cafes & Bars',
      image: '/assets/photo_6082399343500529756_y.jpg',
      aspect: 'aspect-square',
    },
    {
      id: 6,
      title: 'Verde Bistro Warm Stucco Pillars',
      category: 'Cafes & Bars',
      image: '/assets/photo_6082399343500529750_y.jpg',
      aspect: 'aspect-[9/16]',
    },
    {
      id: 7,
      title: 'The Prism Hub Glassmorphic Workspaces',
      category: 'Workspaces',
      image: '/assets/photo_6082399343500529760_y.jpg',
      aspect: 'aspect-[4/3]',
    },
    {
      id: 8,
      title: 'Boutique Galleria Terrazzo Displays',
      category: 'Retail',
      image: '/assets/photo_6082399343500529768_y.jpg',
      aspect: 'aspect-[16/10]',
    },
    {
      id: 9,
      title: 'Epicurean Lab Custom Brass Rail Details',
      category: 'Details',
      image: '/assets/photo_6084651143314214731_y.jpg',
      aspect: 'aspect-square',
    },
    {
      id: 10,
      title: 'Epicurean Show Kitchen Cladding Work',
      category: 'Details',
      image: '/assets/photo_6084651143314214732_y.jpg',
      aspect: 'aspect-[4/3]',
    },
  ];

  const categories = ['All', 'Restaurants', 'Cafes & Bars', 'Workspaces', 'Retail', 'Details'];

  const filteredItems =
    activeFilter === 'All'
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeFilter);

  const openLightbox = (id: number) => {
    const idx = galleryItems.findIndex((item) => item.id === id);
    if (idx !== -1) setLightboxIndex(idx);
  };

  const closeLightbox = () => setLightboxIndex(null);

  const prevImage = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex - 1 + galleryItems.length) % galleryItems.length);
  };

  const nextImage = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex + 1) % galleryItems.length);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') prevImage();
      if (e.key === 'ArrowRight') nextImage();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex]);

  return (
    <section
      id="gallery"
      ref={containerRef}
      className="py-section-gap px-margin-mobile md:px-margin-desktop bg-background scroll-mt-20 select-none"
    >
      {/* Title */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
        <div>
          <span className="font-sans text-luxury-gold text-label-caps mb-4 block">
            GALLERY
          </span>
          <h2 className="font-display text-[32px] sm:text-headline-md md:text-display-lg-mobile text-charcoal leading-none">
            Immersive Portfolio
          </h2>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap gap-x-8 gap-y-4 border-b border-charcoal/10 pb-6 mb-12 overflow-x-auto no-scrollbar">
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

      {/* Masonry Grid */}
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
        <AnimatePresence mode="popLayout">
          {filteredItems.map((item) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
              key={item.id}
              onClick={() => openLightbox(item.id)}
              className={`break-inside-avoid relative overflow-hidden group cursor-pointer bg-surface-container ${item.aspect} mb-6`}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                loading="lazy"
              />
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-charcoal/40 opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex flex-col justify-between p-8">
                <div className="text-white self-end border border-white/30 rounded-full p-2 bg-charcoal/20 backdrop-blur-sm">
                  <Maximize2 size={16} />
                </div>
                <div>
                  <span className="font-sans text-[10px] tracking-[0.25em] text-luxury-gold uppercase font-bold">
                    {item.category}
                  </span>
                  <h4 className="font-display text-[20px] text-white mt-2">
                    {item.title}
                  </h4>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-charcoal/95 backdrop-blur-md flex items-center justify-center p-4 md:p-12 select-none"
          >
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 text-white hover:text-luxury-gold transition-colors p-2 cursor-pointer z-50"
              aria-label="Close Lightbox"
            >
              <X size={32} />
            </button>

            {/* Left Navigator */}
            <button
              onClick={prevImage}
              className="absolute left-6 text-white hover:text-luxury-gold transition-colors p-2 cursor-pointer hidden md:block"
              aria-label="Previous Image"
            >
              <ChevronLeft size={44} />
            </button>

            {/* Content Frame */}
            <div className="relative max-w-5xl w-full h-[70vh] md:h-[80vh] flex flex-col items-center justify-center">
              <motion.img
                key={lightboxIndex}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                src={galleryItems[lightboxIndex].image}
                alt={galleryItems[lightboxIndex].title}
                className="max-h-full max-w-full object-contain shadow-2xl"
              />
              <div className="text-center mt-6">
                <span className="font-sans text-[10px] tracking-[0.3em] text-luxury-gold uppercase font-bold">
                  {galleryItems[lightboxIndex].category}
                </span>
                <h3 className="font-display text-headline-sm text-white mt-2">
                  {galleryItems[lightboxIndex].title}
                </h3>
              </div>
            </div>

            {/* Right Navigator */}
            <button
              onClick={nextImage}
              className="absolute right-6 text-white hover:text-luxury-gold transition-colors p-2 cursor-pointer hidden md:block"
              aria-label="Next Image"
            >
              <ChevronRight size={44} />
            </button>

            {/* Mobile swipe controls indicator */}
            <div className="absolute bottom-6 flex gap-4 md:hidden">
              <button
                onClick={prevImage}
                className="text-white hover:text-luxury-gold border border-white/20 p-3 bg-white/5 backdrop-blur-sm"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={nextImage}
                className="text-white hover:text-luxury-gold border border-white/20 p-3 bg-white/5 backdrop-blur-sm"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
