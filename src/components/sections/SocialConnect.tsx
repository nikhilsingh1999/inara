'use client';

import { useRef } from 'react';
import { MessageCircle, ArrowRight } from 'lucide-react';
import { Instagram, Linkedin } from '../Icons';

interface CardProps {
  platform: string;
  desc: string;
  cta: string;
  href: string;
  icon: React.ComponentType<any>;
  theme: 'gold' | 'charcoal' | 'outline';
}

function TiltCard({ platform, desc, cta, href, icon: Icon, theme }: CardProps) {
  const cardRef = useRef<HTMLAnchorElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    // Constrain tilt to 6 degrees max
    const tiltX = (x / (rect.width / 2)) * 6;
    const tiltY = (y / (rect.height / 2)) * -6;

    card.style.transform = `perspective(1000px) rotateX(${tiltY}deg) rotateY(${tiltX}deg) scale3d(1.02, 1.02, 1.02)`;
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    if (!card) return;
    card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
  };

  const themeClasses = {
    gold: 'bg-luxury-gold text-charcoal border border-luxury-gold hover:bg-charcoal hover:text-white hover:border-charcoal',
    charcoal: 'bg-charcoal text-white border border-charcoal hover:bg-transparent hover:text-charcoal hover:border-charcoal/30',
    outline: 'border border-charcoal/10 text-charcoal hover:border-luxury-gold hover:text-luxury-gold bg-transparent',
  };

  return (
    <a
      ref={cardRef}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`block p-12 transition-all duration-300 ease-out flex flex-col justify-between h-[340px] ${themeClasses[theme]}`}
    >
      <div>
        <div className="flex justify-between items-center mb-8">
          <span className="font-sans text-label-caps text-[10px] tracking-[0.2em] font-bold uppercase opacity-80">
            {platform}
          </span>
          <div className="text-current opacity-60">
            <Icon size={32} strokeWidth={1.5} />
          </div>
        </div>
        <h3 className="font-display text-[26px] mb-4 leading-tight font-medium">
          {platform === 'WHATSAPP' ? 'Direct Consultation' : platform === 'INSTAGRAM' ? '@inara.studios' : 'INARA Hyderabad'}
        </h3>
        <p className="font-sans text-body-md opacity-80 leading-relaxed font-light">
          {desc}
        </p>
      </div>

      <div className="flex items-center gap-2 font-sans text-label-caps text-[11px] font-bold tracking-widest mt-6">
        <span>{cta}</span>
        <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
      </div>
    </a>
  );
}

export default function SocialConnect() {
  const cards: CardProps[] = [
    {
      platform: 'INSTAGRAM',
      desc: 'Explore our latest project handovers, design inspirations, behind-the-scenes site updates, and spatial transformations.',
      cta: 'Follow on Instagram',
      href: 'https://instagram.com/inara.studios.hyderabad',
      icon: Instagram,
      theme: 'outline',
    },
    {
      platform: 'WHATSAPP',
      desc: 'Connect directly with our design team for immediate project consultations, budget scopes, and styling discussions.',
      cta: 'Chat on WhatsApp',
      href: 'https://wa.me/919000012345?text=Hello%20INARA%20Design%20Team%2C%20I%20would%20like%20to%20schedule%20a%20commercial%20interior%20consultation.',
      icon: MessageCircle,
      theme: 'gold',
    },
    {
      platform: 'LINKEDIN',
      desc: 'Discover studio announcements, corporate collaborations, architectural awards, and industry insights.',
      cta: 'Connect on LinkedIn',
      href: 'https://linkedin.com/company/inara-interior-architecture-hyderabad',
      icon: Linkedin,
      theme: 'outline',
    },
  ];

  return (
    <section className="py-section-gap px-margin-mobile md:px-margin-desktop bg-background select-none">
      <div className="max-w-6xl mx-auto">
        {/* Title Header */}
        <div className="text-center mb-20">
          <span className="font-sans text-luxury-gold text-label-caps mb-4 block">
            SOCIAL CONNECT
          </span>
          <h2 className="font-display text-[32px] sm:text-headline-md md:text-display-lg-mobile text-charcoal">
            Follow Our Design Journey
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter items-center">
          {cards.map((card, idx) => (
            <TiltCard key={idx} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
}
