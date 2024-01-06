"use client";
// Next
import { useEffect, useState } from "react";
import { useLocale, useMessages } from "next-intl";

// Types
import { FilterBtnsArr } from "@/types/components/filterBtns.types";
import { ProjectsArr } from "@/types/pages/project.types";

// Components
import PageLayout from "@/components/layout/pageLayout";

// Controllers
import ProjectCard from "@components/card/projectCard";
import { usePathname, useRouter } from "next/navigation";
import { getLocale } from "next-intl/server";

const Projects = () => {
  const messages: any = useMessages();
  const pathname = usePathname()
  const [projectsArr, setProjectsArr] = useState<ProjectsArr[] | undefined>();
  const projectsFilter: FilterBtnsArr[] = [
    {
      text: messages["all"],
      val: "all",
    },
    {
      icon: "solar:code-broken",
      text: messages["coding"],
      val: "coding",
    },
    {
      icon: "fluent:design-ideas-16-regular",
      text: messages["design"],
      val: "design",
    },
  ];
  const handleFilter = (val: FilterBtnsArr["val"]) => {
    setFilterBtnSelected(val);
    return val;
  };
  const [filterBtnSelected, setFilterBtnSelected] = useState<
    FilterBtnsArr["val"]
  >(projectsFilter[0].val || "all");

  useEffect(() => {
    const nextApiUrl = window.location.origin + "/" + pathname.split("/")[1]
    const fetchProductsData = async () => {
      const res = await fetch(`${nextApiUrl}/api/projects`, {
        method: "GET",
      });
      if (!res.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await res.json();
      setProjectsArr(data.data);
    };
    fetchProductsData();
  }, []);
  const projectsDynamicArr: ProjectsArr[] | undefined = projectsArr
    ? projectsArr.filter((item: ProjectsArr) => {
        for (let i = 0; i < item.category.length; i++) {
          if (filterBtnSelected !== "all") {
            if (item.category[i].text.toLowerCase() === filterBtnSelected) {
              return item;
            }
          } else {
            return item;
          }
        }
      })
    : undefined;
  return (
    <PageLayout
      filterBtns={projectsFilter}
      filterBtnsSelected={filterBtnSelected}
      onFilter={handleFilter}
      pageTitle="projects"
    >
      <div className="w-full flex flex-col gap-10">
        {projectsDynamicArr?.map((item: ProjectsArr, index: number) => (
          <ProjectCard item={item} index={index} key={index} />
        ))}
      </div>
    </PageLayout>
  );
};

export default Projects;
