import { NextResponse } from "next/server";
import { projectsArr } from "@/controllers/projects.controller";

export async function GET() {
  return NextResponse.json({
    data: projectsArr,
  });
}
