import { NextResponse } from "next/server";
import { cookies } from "next/headers";

import {
  createSessionToken,
  isAuthConfigured,
  sessionCookieOptions,
  verifyPassword,
} from "@/lib/cms/auth";

export const runtime = "nodejs";

export async function POST(request: Request) {
  if (!isAuthConfigured()) {
    return NextResponse.json(
      { error: "Admin authentication is not configured on this server." },
      { status: 500 }
    );
  }

  let password: unknown;
  try {
    ({ password } = await request.json());
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  if (typeof password !== "string" || !verifyPassword(password)) {
    return NextResponse.json(
      { error: "Incorrect password." },
      { status: 401 }
    );
  }

  const cookieStore = await cookies();
  cookieStore.set({
    ...sessionCookieOptions(),
    value: await createSessionToken(),
  });

  return NextResponse.json({ ok: true });
}

export async function DELETE() {
  const cookieStore = await cookies();
  cookieStore.delete(sessionCookieOptions().name);
  return NextResponse.json({ ok: true });
}
