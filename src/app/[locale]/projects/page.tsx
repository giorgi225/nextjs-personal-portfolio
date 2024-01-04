"use server";

import Projects from "@/components/pages/Projects";

async function getProjectsData() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_APU_URL}/en/api/projects`, {
    method: "GET",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const data = await res.json();
  return data.data;
}

export default async function Page() {
  const projectsData = await getProjectsData();
  return <Projects projectsArr={projectsData} />;
}
