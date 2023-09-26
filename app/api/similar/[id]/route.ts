import { NextResponse, NextRequest } from "next/server";
import { options } from "@/lib/utils";

export async function GET(request: NextRequest, { params }: any) {
  const id = params?.id;
  const url = `https://tasty.p.rapidapi.com/recipes/list-similarities?recipe_id=${id}`;

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    return NextResponse.json(result?.results, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Something went wrong." },
      { status: 500 }
    );
  }
}
