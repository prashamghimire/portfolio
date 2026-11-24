import { NextResponse } from "next/server";

import { isAuthenticated } from "./auth";

export async function requireCmsAuth() {
  if (!(await isAuthenticated())) {
    return NextResponse.json(
      { error: "You must sign in to use the CMS." },
      { status: 401 }
    );
  }
  return null;
}
