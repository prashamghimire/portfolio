import { getAchievements } from "@/lib/cms/public";

export interface Achievement {
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

export const lunarAchievements: Achievement[] = getAchievements("lunar");
