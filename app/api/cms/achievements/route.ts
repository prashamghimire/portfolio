import { NextResponse } from "next/server";

import { requireCmsAuth } from "@/lib/cms/api";
import { readJsonFile, writeJsonFile } from "@/lib/cms/storage";
import {
  ACHIEVEMENTS_PATH,
  type Achievement,
} from "@/lib/cms/types";

export const runtime = "nodejs";

export async function GET() {
  const unauthorized = await requireCmsAuth();
  if (unauthorized) return unauthorized;

  const achievements = await readJsonFile<Achievement[]>(ACHIEVEMENTS_PATH);
  return NextResponse.json(achievements);
}

export async function PUT(request: Request) {
  const unauthorized = await requireCmsAuth();
  if (unauthorized) return unauthorized;

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON." }, { status: 400 });
  }

  if (!Array.isArray(body)) {
    return NextResponse.json(
      { error: "Expected an array of achievements." },
      { status: 400 }
    );
  }

  await writeJsonFile(
    ACHIEVEMENTS_PATH,
    body as Achievement[],
    "CMS: update achievement cards"
  );

  return NextResponse.json({ ok: true, count: body.length });
}
