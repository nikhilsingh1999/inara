'use client';

import { Heart, MessageCircle } from 'lucide-react';

export default function InstagramShowcase() {
  const posts = [
    {
      id: 1,
      image: '/assets/photo_6084651143314214726_y.jpg',
      likes: '1.2K',
      comments: '88',
      aspect: 'aspect-[3/4]',
    },
    {
      id: 2,
      image: '/assets/photo_6082399343500529747_y.jpg',
      likes: '984',
      comments: '46',
      aspect: 'aspect-square md:translate-y-12',
    },
    {
      id: 3,
      image: '/assets/photo_6082399343500529756_y.jpg',
      likes: '2.4K',
      comments: '124',
      aspect: 'aspect-[3/4]',
    },
    {
      id: 4,
      image: '/assets/photo_6082399343500529760_y.jpg',
      likes: '1.8K',
      comments: '79',
      aspect: 'aspect-square md:translate-y-12',
    },
  ];

  return (
    <section className="py-section-gap px-margin-mobile md:px-margin-desktop bg-surface-container-low overflow-hidden select-none">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        <div className="text-center mb-16">
          <span className="font-sans text-luxury-gold text-label-caps mb-4 block">
            INSTAGRAM FEED
          </span>
          <h2 className="font-display text-[32px] sm:text-headline-md md:text-display-lg-mobile text-charcoal">
            Follow Our Design Journey
          </h2>
        </div>

        {/* Masonry-style grid layout */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full items-start md:pb-16">
          {posts.map((post) => (
            <a
              key={post.id}
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className={`relative block overflow-hidden group bg-surface-container-high ${post.aspect}`}
            >
              <img
                src={post.image}
                alt={`Instagram Post ${post.id}`}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                loading="lazy"
              />
              {/* Glassmorphic hover details */}
              <div className="absolute inset-0 bg-charcoal/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-6 text-white text-[14px]">
                <div className="flex items-center gap-1.5 font-sans font-bold">
                  <Heart size={16} fill="currentColor" className="text-luxury-gold" />
                  <span>{post.likes}</span>
                </div>
                <div className="flex items-center gap-1.5 font-sans font-bold">
                  <MessageCircle size={16} fill="currentColor" />
                  <span>{post.comments}</span>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 md:mt-16 text-center">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-charcoal text-white hover:bg-luxury-gold hover:text-charcoal px-10 py-5 font-sans font-bold text-[11px] tracking-[0.25em] uppercase transition-all duration-500 active:scale-95"
          >
            View More on Instagram
          </a>
        </div>
      </div>
    </section>
  );
}
