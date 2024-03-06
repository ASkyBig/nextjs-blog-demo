import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  // const pageNo = (searchParams.get("pageNo") || 1) as number;
  return NextResponse.json({}, { status: 200 });

  // try {
  //   const { rows } =
  //     await sql`SELECT * FROM Blogs LIMIT ${pageSize} OFFSET ${offset};`;
  //   return NextResponse.json({ rows }, { status: 200 });
  // } catch (error) {
  //   return NextResponse.json({ error }, { status: 500 });
  // }
}
