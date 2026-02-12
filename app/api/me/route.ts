import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET() {
  const cookieStore = await cookies();
  const auth = cookieStore.get("auth");
  const isLoggedIn = auth?.value === "true";

  return NextResponse.json({
    loggedIn: isLoggedIn,
  });
}