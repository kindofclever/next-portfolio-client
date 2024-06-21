interface Image {
  id: number;
  url: string;
  alternativeText: string | null;
}

interface Link {
  id: number;
  url: string;
  text: string;
}

export interface HeroSectionProps {
  id: number;
  __component: string;
  heading: string;
  subHeading: string;
  heroImage: Image;
  link: Link;
}