"use server"
import Projects from "@/components/pages/Projects";
import { ProjectsArr, PromiseProjectsArr } from "@/types/pages/project.types";
import { headers } from "next/headers";

async function getProjectsData(
  nextApiUrl: string
): Promise<ProjectsArr[] | undefined> {
  try {
    const res = await fetch(`${nextApiUrl}/projects`);
    if (!res.ok) {
      return;
    }
    const data = await res.json();
    return data.data;
  } catch (err) {
    console.log(err);
    return;
  }
}
export default async function Page() {
  const headersList = headers();
  const dynamicNextApiUrl =
    headersList.get("x-nextApiUrl") || "http://localhost:3000/api";
  const data: ProjectsArr[] | undefined = await getProjectsData(
    dynamicNextApiUrl
  );
  return (
    <>
      <Projects projectsArr={data} />
    </>
  );
}
