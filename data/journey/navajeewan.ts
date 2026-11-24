import type { Achievement } from "./lunar";
import { getAchievements } from "@/lib/cms/public";

export const navajeewanAchievements: Achievement[] =
  getAchievements("navajeewan");
