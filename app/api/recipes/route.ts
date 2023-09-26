import { NextResponse } from "next/server";
import { url, options } from "@/lib/utils";

export async function GET() {
  try {
    const response = await fetch(url, options);
    const result = await response.json();
    return NextResponse.json(result?.results, { status: 200 });
  } catch (error) {
    return NextResponse.json(error, { status: 500 });
  }
}
