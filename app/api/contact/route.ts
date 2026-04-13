import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const data = await req.json().catch(() => null);
  if (!data || !data.name || !data.email || !data.message) {
    return NextResponse.json({ ok: false, error: "Missing fields" }, { status: 400 });
  }

  console.log("[contact form submission]", {
    name: data.name,
    email: data.email,
    phone: data.phone,
    property: data.property,
    message: data.message,
    at: new Date().toISOString(),
  });

  return NextResponse.json({ ok: true });
}
