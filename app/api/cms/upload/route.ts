import { NextResponse } from "next/server";

import { requireCmsAuth } from "@/lib/cms/api";
import { writeBinaryFile } from "@/lib/cms/storage";

export const runtime = "nodejs";

const MAX_SIZE = 8 * 1024 * 1024; // 8 MB, same as GitHub's single-file limit

export async function POST(request: Request) {
  const unauthorized = await requireCmsAuth();
  if (unauthorized) return unauthorized;

  const formData = await request.formData();
  const file = formData.get("file");

  if (!(file instanceof File)) {
    return NextResponse.json({ error: "No file provided." }, { status: 400 });
  }

  if (file.size > MAX_SIZE) {
    return NextResponse.json(
      { error: "Images must be smaller than 8 MB." },
      { status: 400 }
    );
  }

  const safeName = file.name
    .replace(/[^a-zA-Z0-9._-]/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "")
    .toLowerCase();
  const name = `${Date.now()}-${safeName || "image"}`;
  const filePath = `public/uploads/${name}`;

  await writeBinaryFile(
    filePath,
    Buffer.from(await file.arrayBuffer()),
    `CMS: upload ${name}`
  );

  return NextResponse.json({ url: `/uploads/${name}` });
}
