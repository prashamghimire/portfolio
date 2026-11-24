import type { Achievement } from "../journey/lunar";
import { getAchievements } from "@/lib/cms/public";

export const communityServiceAchievements: Achievement[] =
  getAchievements("community-service");
