import type { Achievement } from "./lunar";
import { getAchievements } from "@/lib/cms/public";

export const swscAchievements: Achievement[] = getAchievements("unepal");
