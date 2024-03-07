import { NextResponse } from "next/server";
import axios from "axios";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  console.log("searchParams", searchParams.get("code"));
  const requestToken = searchParams.get("code");

  const id = process.env.GITHUB_CLIENT_ID;
  const secret = process.env.GITHUB_SECRET;
  try {
    const tokenResponse = await axios({
      method: "post",
      url:
        "https://github.com/login/oauth/access_token?" +
        `client_id=${id}&` +
        `client_secret=${secret}&` +
        `code=${requestToken}`,
      headers: {
        accept: "application/json",
      },
    });
    const accessToken = tokenResponse.data.access_token;
    console.log("accessToken", accessToken);

    const result = await axios({
      method: "get",
      url: `https://api.github.com/user`,
      headers: {
        accept: "application/json",
        Authorization: `token ${accessToken}`,
      },
    });
    console.log("result +++++", result);

    // const pageNo = (searchParams.get("pageNo") || 1) as number;
    // return NextResponse.json({ name: result.data.name }, { status: 200 });
    return NextResponse.redirect(
      "http://localhost:3000?name=" + result.data.name
    );
  } catch (error) {
    console.log("err ----", error);
    return NextResponse.json({ name: "test" }, { status: 200 });
  }
}
