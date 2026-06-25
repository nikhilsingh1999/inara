import type { Metadata } from 'next';
import ProjectsPageClient from '@/components/ProjectsPageClient';

export const metadata: Metadata = {
  title: 'Commercial Interior Design Projects | INARA Hyderabad',
  description:
    'Explore the high-end commercial interiors portfolio of INARA. Award-winning restaurant, cafe, bar, and workspace designs in Hyderabad, India by principal designer Rafiya Lokhande.',
  keywords: [
    'Commercial Interior Designer Hyderabad',
    'Restaurant Interior Designer Hyderabad',
    'Cafe Interior Designer Hyderabad',
    'Bar Interior Designer Hyderabad',
    'Hospitality Interior Designer Hyderabad',
    'Commercial Interior Design Company Hyderabad',
  ],
  openGraph: {
    title: 'Commercial Interior Design Projects | INARA Hyderabad',
    description:
      'Explore the high-end commercial interiors portfolio of INARA. Award-winning restaurant, cafe, bar, and workspace designs in Hyderabad, India.',
    type: 'website',
    url: 'https://inara.studio/projects',
    images: [
      {
        url: 'https://inara.studio/assets/photo_6082399343500529747_y.jpg',
        width: 1200,
        height: 630,
        alt: 'INARA Commercial Interior Design Portfolio',
      },
    ],
  },
};

export default function ProjectsPage() {
  return <ProjectsPageClient />;
}
