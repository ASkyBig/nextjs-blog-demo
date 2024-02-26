import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const title = searchParams.get("title");
  const description = searchParams.get("description");
  const content = searchParams.get("content");
  // const author = searchParams.get("author");

  try {
    if (!title || !description || !content)
      throw new Error("title,content, description names required");
    await sql`INSERT INTO Blogs (Title, Description, Content) VALUES (${title}, ${description}, ${content});`;
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }

  const pets = await sql`SELECT * FROM Blogs;`;
  return NextResponse.json({ pets }, { status: 200 });
}
