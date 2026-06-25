import type { Metadata } from 'next';
import AboutPageClient from '@/components/AboutPageClient';

export const metadata: Metadata = {
  title: 'About Rafiya Lokhande & INARA Studio | Commercial Interior Architecture Hyderabad',
  description:
    'Discover the vision behind INARA. Led by Founder & Principal designer Rafiya Lokhande, we design luxury commercial spaces, restaurants, cafes, and workspaces in Hyderabad.',
  keywords: [
    'Rafiya Lokhande Interior Designer',
    'INARA Interior Studio Hyderabad',
    'Commercial Architect Hyderabad',
    'Luxury Restaurant Designer Hyderabad',
    'Office Interior Architecture Jubilee Hills',
  ],
  openGraph: {
    title: 'About Rafiya Lokhande & INARA Studio | Commercial Interior Architecture Hyderabad',
    description:
      'Discover the vision behind INARA. Led by Founder & Principal designer Rafiya Lokhande, we design luxury commercial spaces, restaurants, cafes, and workspaces in Hyderabad.',
    type: 'website',
    url: 'https://inara.studio/about',
    images: [
      {
        url: 'https://inara.studio/assets/photo_6082399343500529731_y.jpg',
        width: 1200,
        height: 630,
        alt: 'About INARA Studio and Rafiya Lokhande',
      },
    ],
  },
};

export default function AboutPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    'name': 'INARA',
    'alternateName': 'INARA Interior Architecture & Decor',
    'description':
      'A premium commercial interior architecture and decor studio in Hyderabad specializing in restaurant, cafe, bar, retail, and corporate workspace design.',
    'image': 'https://inara.studio/assets/photo_6082399343500529731_y.jpg',
    'url': 'https://inara.studio/about',
    'telephone': '+919000012345',
    'priceRange': '$$$$',
    'address': {
      '@type': 'PostalAddress',
      'streetAddress': 'Plot 42, Jubilee Hills Road No. 36',
      'addressLocality': 'Hyderabad',
      'addressRegion': 'Telangana',
      'postalCode': '500033',
      'addressCountry': 'IN',
    },
    'geo': {
      '@type': 'GeoCoordinates',
      'latitude': '17.4326',
      'longitude': '78.4071',
    },
    'openingHoursSpecification': {
      '@type': 'OpeningHoursSpecification',
      'dayOfWeek': ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      'opens': '09:00',
      'closes': '19:00',
    },
    'founder': {
      '@type': 'Person',
      'name': 'Rafiya Lokhande',
      'jobTitle': 'Founder & Principal Interior Designer',
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <AboutPageClient />
    </>
  );
}
