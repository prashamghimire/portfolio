import achievementsJson from "@/data/cms/achievements.json";
import writingsJson from "@/data/cms/writings.json";

import AdminPanel from "./AdminPanel";
import { isAuthenticated, isAuthConfigured } from "@/lib/cms/auth";
import type { Achievement, Writing } from "@/lib/cms/types";

export const dynamic = "force-dynamic";

export default async function AdminPage() {
  let authenticated = false;
  try {
    authenticated = await isAuthenticated();
  } catch {
    // Missing env vars are reported by the panel itself.
  }

  return (
    <AdminPanel
      initialAuthenticated={authenticated}
      configured={isAuthConfigured()}
      initialAchievements={
        authenticated ? (achievementsJson as Achievement[]) : []
      }
      initialWritings={authenticated ? (writingsJson as Writing[]) : []}
    />
  );
}
