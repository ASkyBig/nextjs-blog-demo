import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const pageNo = (searchParams.get("pageNo") || 1) as number;
  const pageSize = (searchParams.get("pageSize") || 5) as number;
  const offset = (pageNo - 1) * pageSize;

  try {
    const { rows } =
      await sql`SELECT * FROM Blogs LIMIT ${pageSize} OFFSET ${offset};`;
    return NextResponse.json({ rows }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
