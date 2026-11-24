import achievementsJson from "@/data/cms/achievements.json";
import writingsJson from "@/data/cms/writings.json";

import type { Achievement, Writing } from "./types";

const cmsAchievements = achievementsJson as Achievement[];
const cmsWritings = writingsJson as Writing[];

export interface PublicAchievement {
  title: string;
  category: string;
  date: string;
  result?: string;
  organizer?: string;
  location?: string;
  summary: string;
  description: string;
  images: string[];
}

function toPublicAchievement(item: Achievement): PublicAchievement {
  return {
    title: item.title,
    category: item.category,
    date: item.date,
    ...(item.result ? { result: item.result } : {}),
    ...(item.organizer ? { organizer: item.organizer } : {}),
    ...(item.location ? { location: item.location } : {}),
    summary: item.summary,
    description: item.description,
    images: item.images || [],
  };
}

export function getAchievements(group: string): PublicAchievement[] {
  return cmsAchievements
    .filter((item) => item.groups.includes(group))
    .map(toPublicAchievement);
}

export interface PublicWriting {
  id: string;
  title: string;
  slug: string;
  category: Writing["category"];
  language: Writing["language"];
  published: string;
  updated?: string;
  featured: boolean;
  cover: string | null;
  summary: string;
  background?: string;
  dedication?: string;
  topics: string[];
  keywords: string[];
  content: string;
}

export const writings: PublicWriting[] = cmsWritings.map((item) => ({
  id: item.id,
  title: item.title,
  slug: item.slug,
  category: item.category as PublicWriting["category"],
  language: item.language as PublicWriting["language"],
  published: item.published,
  ...(item.updated ? { updated: item.updated } : {}),
  featured: item.featured,
  cover: item.cover || null,
  summary: item.summary,
  ...(item.background ? { background: item.background } : {}),
  ...(item.dedication ? { dedication: item.dedication } : {}),
  topics: item.topics || [],
  keywords: item.keywords || [],
  content: item.content || "",
}));
