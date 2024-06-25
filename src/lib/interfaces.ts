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

enum SkillIcon {
  CLOUD_ICON = "CLOUD_ICON",
  CHECK_ICON = "CHECK_ICON",
  CLOCK_ICON = "CLOCK_ICON"
}

interface Skill {
  skillName: string;
  skillDescription: string;
  skillIcon: SkillIcon;
}

export interface HeroSectionProps {
  id: number;
  __component: string;
  heading: string;
  subHeading: string;
  heroImage: Image;
  link: Link;
  skills: Skill[]
}

export interface SkillsSectionProps {
  id: number;
  __component: string;
  heading: string;
  subHeading: string;
  skills: Skill[]
}

export interface StrapiImageProps {
  src: string;
  alt: string;
  height: number;
  width: number;
  className?: string;
}