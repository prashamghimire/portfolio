import type { Achievement } from "../journey/lunar";
import { getAchievements } from "@/lib/cms/public";

export const innovationAchievements: Achievement[] =
  getAchievements("innovation");
