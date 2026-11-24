export const ACHIEVEMENT_GROUPS = [
  { id: "lunar", label: "Lunar English Boarding School" },
  { id: "navajeewan", label: "Navajeewan School & College" },
  { id: "swsss", label: "Southwestern State Secondary School" },
  { id: "unepal", label: "University of Nepal" },
  { id: "leadership", label: "Leadership" },
  { id: "public-speaking", label: "Public Speaking & Events" },
  { id: "innovation", label: "Innovation & Entrepreneurship" },
  { id: "community-service", label: "Community Service" },
] as const;

export type GroupId = (typeof ACHIEVEMENT_GROUPS)[number]["id"];

export interface Achievement {
  id: string;
  groups: string[];
  title: string;
  category: string;
  date: string;
  result: string;
  organizer: string;
  location: string;
  summary: string;
  description: string;
  images: string[];
}

export const WRITING_CATEGORIES = [
  "Article",
  "Essay",
  "Blog",
  "Speech",
  "Poem",
  "Memoir",
  "Muktak",
  "Reflection",
  "Journal",
  "Book Review",
  "Editorial Contributions",
] as const;

export interface Writing {
  id: string;
  title: string;
  slug: string;
  category: string;
  language: string;
  published: string;
  updated: string;
  featured: boolean;
  cover: string;
  summary: string;
  background: string;
  dedication: string;
  topics: string[];
  keywords: string[];
  content: string;
}

export const ACHIEVEMENTS_PATH = "data/cms/achievements.json";
export const WRITINGS_PATH = "data/cms/writings.json";
