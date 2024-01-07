import { NextResponse } from "next/server";
import projectsData from "@/projectsData.json"

export async function GET() {
  const data = projectsData;
  return NextResponse.json({
    data,
  });
}
