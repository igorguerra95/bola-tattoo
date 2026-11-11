export interface TattooStyle {
  id: string;
  title: string;
  priceFrom: number;
  durationEstimate: string;
  image: string;
  tag?: string;
  description: string;
  includes: string[];
}

export interface TattooArtist {
  id: string;
  name: string;
  nickname: string;
  role: string;
  experience: string;
  avatar: string;
  specialty: string;
  bio: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'blackwork' | 'realismo' | 'fineline' | 'oriental' | 'piercing' | 'estudio';
  categoryLabel: string;
  image: string;
  artistName: string;
  technique: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  rating: number;
  comment: string;
  tattooProject: string;
  verified: boolean;
}

export interface StatItem {
  value: string;
  numeric: number;
  suffix?: string;
  label: string;
  description: string;
}

export interface BudgetRequestData {
  styleId: string;
  artistId: string;
  bodyPlacement: string;
  sizeCm: string;
  preferredDate?: string;
  clientName: string;
  clientPhone: string;
  clientEmail?: string;
  projectDescription: string;
}
