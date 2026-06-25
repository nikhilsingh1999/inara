import Hero from '@/components/sections/Hero';
import FeaturedProjects from '@/components/sections/FeaturedProjects';
import About from '@/components/sections/About';
import Services from '@/components/sections/Services';
import ImmersiveGallery from '@/components/sections/ImmersiveGallery';
import BeforeAfter from '@/components/sections/BeforeAfter';
import DesignProcess from '@/components/sections/DesignProcess';
import Achievements from '@/components/sections/Achievements';
import Testimonials from '@/components/sections/Testimonials';
import SocialConnect from '@/components/sections/SocialConnect';
import InstagramShowcase from '@/components/sections/InstagramShowcase';
import Contact from '@/components/sections/Contact';

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedProjects />
      <About />
      <Services />
      <ImmersiveGallery />
      <BeforeAfter />
      <DesignProcess />
      <Achievements />
      <Testimonials />
      <SocialConnect />
      <InstagramShowcase />
      <Contact />
    </>
  );
}
