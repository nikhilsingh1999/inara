'use client';

import { useState, useRef, useEffect } from 'react';

export default function BeforeAfter() {
  const [sliderPosition, setSliderPosition] = useState(50); // percentage (0 - 100)
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const handleMove = (clientX: number) => {
    const container = containerRef.current;
    if (!container) return;

    const rect = container.getBoundingClientRect();
    const x = clientX - rect.left;
    let position = (x / rect.width) * 100;

    if (position < 0) position = 0;
    if (position > 100) position = 100;

    setSliderPosition(position);
  };

  const handleMouseDown = () => {
    isDragging.current = true;
    document.body.classList.add('select-none');
  };

  const handleTouchStart = () => {
    isDragging.current = true;
  };

  useEffect(() => {
    const handleMouseUp = () => {
      isDragging.current = false;
      document.body.classList.remove('select-none');
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging.current) return;
      handleMove(e.clientX);
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!isDragging.current) return;
      if (e.touches.length > 0) {
        handleMove(e.touches[0].clientX);
      }
    };

    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchend', handleMouseUp);
    window.addEventListener('touchmove', handleTouchMove);

    return () => {
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchend', handleMouseUp);
      window.removeEventListener('touchmove', handleTouchMove);
    };
  }, []);

  return (
    <section className="py-section-gap px-margin-mobile md:px-margin-desktop overflow-hidden bg-background select-none">
      <div className="flex flex-col lg:flex-row gap-16 items-center">
        {/* Info panel */}
        <div className="w-full lg:w-1/3 flex flex-col justify-center">
          <span className="font-sans text-luxury-gold text-label-caps mb-4 block">
            TRANSFORMATION
          </span>
          <h2 className="font-display text-[32px] sm:text-headline-md md:text-display-lg-mobile leading-tight text-charcoal mb-8">
            The Alchemy <br />of Architecture
          </h2>
          <p className="font-sans text-body-lg text-secondary mb-12 leading-relaxed font-light">
            Witness the metamorphosis from a skeletal structure to a living sanctuary. Our process is transparent, detailed, and transformative.
          </p>

          <div className="flex gap-12 items-center">
            <div>
              <div className="font-display text-luxury-gold text-[36px] font-bold leading-none">50+</div>
              <div className="font-sans text-label-caps text-secondary text-[10px] mt-2 font-bold uppercase">
                Projects Delivered
              </div>
            </div>
            <div className="w-px h-10 bg-charcoal/10" />
            <div>
              <div className="font-display text-luxury-gold text-[36px] font-bold leading-none">10Y+</div>
              <div className="font-sans text-label-caps text-secondary text-[10px] mt-2 font-bold uppercase">
                Industry Experience
              </div>
            </div>
          </div>
        </div>

        {/* Drag Container */}
        <div className="w-full lg:w-2/3">
          <div
            ref={containerRef}
            className="before-after-container aspect-[16/10] md:aspect-video shadow-2xl border border-charcoal/5 relative cursor-ew-resize overflow-hidden"
            onMouseMove={(e) => {
              if (isDragging.current) return;
              // Enable drag-less hover to slide for a premium feel
            }}
          >
            {/* After Image (Full color base) */}
            <img
              src="/assets/photo_6082399343500529756_y.jpg"
              alt="After Transformation Verde Bistro"
              className="w-full h-full object-cover select-none pointer-events-none"
              loading="lazy"
            />

            {/* Before Image (Grayscale clipped overlay) */}
            <div
              className="before-image absolute top-0 left-0 w-full h-full pointer-events-none"
              style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
            >
              <img
                src="/assets/photo_6082399343500529756_y.jpg"
                alt="Before Transformation Verde Bistro"
                className="w-full h-full object-cover grayscale brightness-[0.35] contrast-[1.1] select-none pointer-events-none"
                loading="lazy"
              />
            </div>

            {/* Slider Handle */}
            <div
              className="slider-handle"
              style={{ left: `${sliderPosition}%` }}
              onMouseDown={handleMouseDown}
              onTouchStart={handleTouchStart}
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none flex items-center justify-center">
                <span className="text-[10px] text-luxury-gold tracking-[0.1em] font-sans font-bold flex gap-1 uppercase select-none">
                  <span>◀</span>
                  <span>▶</span>
                </span>
              </div>
            </div>

            {/* Badges */}
            <div className="absolute bottom-6 left-6 font-sans text-label-caps text-white bg-charcoal/60 px-4 py-2 backdrop-blur-sm pointer-events-none select-none font-bold">
              BEFORE
            </div>
            <div className="absolute bottom-6 right-6 font-sans text-label-caps text-charcoal bg-luxury-gold/90 px-4 py-2 backdrop-blur-sm pointer-events-none select-none font-bold">
              AFTER
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
