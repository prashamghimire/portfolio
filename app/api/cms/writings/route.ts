import { NextResponse } from "next/server";

import { requireCmsAuth } from "@/lib/cms/api";
import { readJsonFile, writeJsonFile } from "@/lib/cms/storage";
import { WRITINGS_PATH, type Writing } from "@/lib/cms/types";

export const runtime = "nodejs";

export async function GET() {
  const unauthorized = await requireCmsAuth();
  if (unauthorized) return unauthorized;

  const writings = await readJsonFile<Writing[]>(WRITINGS_PATH);
  return NextResponse.json(writings);
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
      { error: "Expected an array of writings." },
      { status: 400 }
    );
  }

  await writeJsonFile(
    WRITINGS_PATH,
    body as Writing[],
    "CMS: update writings"
  );

  return NextResponse.json({ ok: true, count: body.length });
}
