import type { Achievement } from "../journey/lunar";
import { getAchievements } from "@/lib/cms/public";

export const publicSpeakingAchievements: Achievement[] =
  getAchievements("public-speaking");
