import type { Metadata } from 'next';
import ContactPageClient from '@/components/ContactPageClient';

export const metadata: Metadata = {
  title: 'Contact INARA | Commercial Interior Design Studio Hyderabad',
  description:
    'Schedule a commercial design consultation with principal architect Rafiya Lokhande. Get in touch for restaurant, cafe, retail, and corporate office interior projects in Hyderabad.',
  keywords: [
    'Contact Interior Architect Hyderabad',
    'Interior Designer Jubilee Hills',
    'Restaurant Interior Consultation Hyderabad',
    'Commercial Office Space Architect Enquiry',
  ],
  openGraph: {
    title: 'Contact INARA | Commercial Interior Design Studio Hyderabad',
    description:
      'Schedule a commercial design consultation with principal architect Rafiya Lokhande. Get in touch for restaurant, cafe, retail, and office interior projects in Hyderabad.',
    type: 'website',
    url: 'https://inara.studio/contact',
    images: [
      {
        url: 'https://inara.studio/assets/photo_6082399343500529756_y.jpg',
        width: 1200,
        height: 630,
        alt: 'Contact INARA Studio Hyderabad',
      },
    ],
  },
};

export default function ContactPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    'name': 'Contact INARA',
    'description':
      'Schedule a commercial design consultation with principal designer Rafiya Lokhande. Get in touch with INARA for restaurant, cafe, bar, and corporate office interiors in Hyderabad.',
    'url': 'https://inara.studio/contact',
    'mainEntity': {
      '@type': 'ProfessionalService',
      'name': 'INARA',
      'telephone': '+919000012345',
      'email': 'hello@inara.studio',
      'address': {
        '@type': 'PostalAddress',
        'streetAddress': 'Plot 42, Jubilee Hills Road No. 36',
        'addressLocality': 'Hyderabad',
        'addressRegion': 'Telangana',
        'postalCode': '500033',
        'addressCountry': 'IN',
      },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ContactPageClient />
    </>
  );
}
