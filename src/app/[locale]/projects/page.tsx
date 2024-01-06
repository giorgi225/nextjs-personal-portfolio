"use server";
import { headers } from "next/headers";
import Projects from "@/components/pages/Projects";

async function getProjectsData(nextApiUrl: string) {
  const res = await fetch(`${nextApiUrl}/projects`, {
    method: "GET",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const data = await res.json();
  return data.data;
}

export default async function Page() {
  const headerList = headers();
  const nextApiUrl =
    headerList.get("x-nextApiUrl") || "http://localhost:3000/api";
  const projectsData = await getProjectsData(nextApiUrl);
  return <Projects projectsArr={projectsData} />;
}
