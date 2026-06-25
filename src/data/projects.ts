export interface ProjectData {
  slug: string;
  name: string;
  category: string;
  location: string;
  client: string;
  area: string;
  duration: string;
  materials: string[];
  story: string;
  image: string;
  video?: string;
  gallery: string[];
  timeline: { phase: string; duration: string }[];
}

export const projectsData: Record<string, ProjectData> = {
  'l-ambre-fine-dining': {
    slug: 'l-ambre-fine-dining',
    name: "L'Ambre Fine Dining",
    category: 'Restaurant',
    location: 'Banjara Hills, Hyderabad',
    client: 'Ambre Culinary Group',
    area: '8,200 Sq. Ft.',
    duration: '10 Months',
    materials: [
      'Amber Tinted Glass',
      'Italian Stucco Walls',
      'Plush Silk Velvet Seats',
      'Custom Cast Brass Lighting',
    ],
    story:
      "L'Ambre is an architectural tribute to warmth, velvet textures, and gold accents. Located in Banjara Hills, the design balances deep charcoal backdrops with amber-tinted fixtures to construct a dramatic dining setting. Private booths are partitioned using custom brass panels that block direct views while maintaining structural openness.",
    image: '/assets/photo_6082399343500529731_y.jpg',
    video: '/assets/document_6082399343040535870.mp4',
    gallery: [
      '/assets/photo_6082399343500529737_y.jpg',
      '/assets/photo_6082399343500529738_y.jpg',
      '/assets/photo_6082399343500529739_y.jpg',
    ],
    timeline: [
      { phase: 'Ventilation & Restaurant Extraction Fitting', duration: 'Month 1-2' },
      { phase: 'Sound Treatment & Base Plastering', duration: 'Month 3-4' },
      { phase: 'Applying Stucco Texture Coatings', duration: 'Month 5-6' },
      { phase: 'Custom Amber Lighting Fixtures Install', duration: 'Month 7-8' },
      { phase: 'Silk Velvet Furnishing Layout', duration: 'Month 9-10' },
    ],
  },
  'the-canopy-rooftop': {
    slug: 'the-canopy-rooftop',
    name: 'The Canopy Rooftop',
    category: 'Bar & Lounge',
    location: 'Jubilee Hills, Hyderabad',
    client: 'Canopy Hospitality Group',
    area: '11,500 Sq. Ft.',
    duration: '12 Months',
    materials: [
      'Industrial Steel Framing',
      'Weather-resistant Teak Decking',
      'Custom Circular Lounges',
      'Lush Outdoor Planters',
    ],
    story:
      'Situated on a high-rise rooftop in Jubilee Hills, The Canopy combines outdoor steel frames, customized arched structures, and custom-upholstered circular lounges. We resolved wind load factors and acoustic distribution while crafting a premium outdoor culinary bar experience that blends green nature elements with architectural boundaries.',
    image: '/assets/photo_6082399343500529747_y.jpg',
    gallery: [
      '/assets/photo_6082399343500529740_y.jpg',
      '/assets/photo_6082399343500529741_y.jpg',
      '/assets/photo_6082399343500529742_y.jpg',
      '/assets/photo_6082399343500529743_y.jpg',
      '/assets/photo_6082399343500529744_y.jpg',
      '/assets/photo_6082399343500529745_y.jpg',
    ],
    timeline: [
      { phase: 'Rooftop Structural Assessment', duration: 'Month 1' },
      { phase: 'Steel Arch Frames Fabrication', duration: 'Month 2-4' },
      { phase: 'Outdoor Decking & Wiring Layout', duration: 'Month 5-7' },
      { phase: 'Planters, Palms & Bar Counter Build', duration: 'Month 8-10' },
      { phase: 'Custom Lounges & Lighting Fine Styling', duration: 'Month 11-12' },
    ],
  },
  'verde-bistro-cafe': {
    slug: 'verde-bistro-cafe',
    name: 'Verde Bistro & Cafe',
    category: 'Cafe',
    location: 'Gachibowli, Hyderabad',
    client: 'Verde Brews',
    area: '4,500 Sq. Ft.',
    duration: '8 Months',
    materials: [
      'Triangular Ceiling LED Grids',
      'Sage Green Stucco Pillars',
      'Fluted Walnut Counterboards',
      'Polished Brass Details',
    ],
    story:
      'Verde Bistro features a custom triangular overhead LED ceiling installation that bounces warm hues off custom green pillars and fluted wood counters. Sourcing local materials, we created a high-density cafe environment that feels spacious, visually memorable, and optimized for rapid counter services.',
    image: '/assets/photo_6082399343500529756_y.jpg',
    gallery: [
      '/assets/photo_6082399343500529750_y.jpg',
      '/assets/photo_6082399343500529751_y.jpg',
      '/assets/photo_6082399343500529752_y.jpg',
      '/assets/photo_6082399343500529753_y.jpg',
      '/assets/photo_6082399343500529754_y.jpg',
      '/assets/photo_6082399343500529755_y.jpg',
    ],
    timeline: [
      { phase: 'Demolition & Kitchen Routing Layout', duration: 'Month 1-2' },
      { phase: 'Electrical Framework & Ceiling LED Grid', duration: 'Month 3-4' },
      { phase: 'Sage Green Plastering & Bar Assembly', duration: 'Month 5-6' },
      { phase: 'Bespoke Furniture Fitting & Styling', duration: 'Month 7-8' },
    ],
  },
  'the-prism-hub': {
    slug: 'the-prism-hub',
    name: 'The Prism Hub',
    category: 'Workspace',
    location: 'Hitech City, Hyderabad',
    client: 'Prism Tech Partners',
    area: '22,000 Sq. Ft.',
    duration: '14 Months',
    materials: [
      'Fluted Glass Dividers',
      'Acoustic Felt Wall Panels',
      'Terrazzo Flooring Tiles',
      'Ergonomic Workbenches',
    ],
    story:
      'A multi-level corporate office designed for flexible workflows. We integrated glassmorphic partitions, acoustic felt panel walls, and ergonomic bespoke desks. The project expresses professionalism with minimalist borders and luxury accents, optimizing light penetration into workspace zones.',
    image: '/assets/photo_6082399343500529760_y.jpg',
    video: '/assets/document_6084848904623366022.mp4',
    gallery: [
      '/assets/photo_6082399343500529757_y.jpg',
      '/assets/photo_6082399343500529758_y.jpg',
      '/assets/photo_6082399343500529759_y.jpg',
      '/assets/photo_6082399343500529761_y.jpg',
    ],
    timeline: [
      { phase: 'Spatial Zoning Planning', duration: 'Month 1-2' },
      { phase: 'Glass Frameworks & Raised Floor Cabling', duration: 'Month 3-6' },
      { phase: 'Acoustic Ceilings & Lighting Layout', duration: 'Month 7-9' },
      { phase: 'Ergonomic Desk Assemblies & Pods Build', duration: 'Month 10-12' },
      { phase: 'Corporate Styling & Brand Signs handover', duration: 'Month 13-14' },
    ],
  },
  'boutique-galleria': {
    slug: 'boutique-galleria',
    name: 'Boutique Galleria',
    category: 'Retail',
    location: 'Banjara Hills, Hyderabad',
    client: 'Vogue Retailers',
    area: '6,800 Sq. Ft.',
    duration: '9 Months',
    materials: [
      'Cast Brass Hanging Fixtures',
      'Monolithic Terrazzo Display blocks',
      'Ambient Linear Lighting rails',
      'High-gloss Lacquered wood',
    ],
    story:
      'A premium luxury retail storefront featuring cast brass fixtures, monolithic terrazzo displays, and ambient linear lighting. We engineered the floor plan layout to maximize product exposure and guide foot-traffic seamlessly, ensuring immediate brand positioning through layout design.',
    image: '/assets/photo_6082399343500529768_y.jpg',
    gallery: [
      '/assets/photo_6082399343500529763_y.jpg',
      '/assets/photo_6082399343500529764_y.jpg',
      '/assets/photo_6082399343500529765_y.jpg',
      '/assets/photo_6082399343500529766_y.jpg',
      '/assets/photo_6082399343500529769_y.jpg',
    ],
    timeline: [
      { phase: 'Retail Traffic Study & Planning', duration: 'Month 1' },
      { phase: 'Storefront Facade & Frame Build', duration: 'Month 2-3' },
      { phase: 'Linear Lighting & Electrical Routing', duration: 'Month 4-5' },
      { phase: 'Terrazzo Podiums & Shelving Installs', duration: 'Month 6-7' },
      { phase: 'Visual Merchandising & Fine Detailing', duration: 'Month 8-9' },
    ],
  },
  'epicurean-lab': {
    slug: 'epicurean-lab',
    name: 'Epicurean Lab',
    category: 'Hospitality',
    location: 'Madhapur, Hyderabad',
    client: 'Epicurean Culinary Group',
    area: '5,500 Sq. Ft.',
    duration: '10 Months',
    materials: [
      'Stainless Steel Workstations',
      'Sleek Dark Ceramic Tiles',
      'Custom Glass partitions',
      'Polished Brass details',
    ],
    story:
      'A state-of-the-art show kitchen and high-end restaurant experience. The project balances commercial hygiene standards with fine hospitality dining styling. Custom dark ceramic tiles and glass panels separate the chef workstations from patrons while offering visual culinary performance access.',
    image: '/assets/photo_6084651143314214726_y.jpg',
    gallery: [
      '/assets/photo_6084651143314214731_y.jpg',
      '/assets/photo_6084651143314214732_y.jpg',
      '/assets/photo_6084651143314214736_y.jpg',
    ],
    timeline: [
      { phase: 'Kitchen HVAC & Gas Routing Planning', duration: 'Month 1-3' },
      { phase: 'Steel Counter Fabrication & Plastering', duration: 'Month 4-6' },
      { phase: 'Tile Claddings & Glass Partition Installs', duration: 'Month 7-8' },
      { phase: 'Lighting Accents Sourcing & Final Styling', duration: 'Month 9-10' },
    ],
  },
};
export const allProjects = Object.values(projectsData);
