"use client";
// Next
import { useState } from "react";
import { useMessages } from "next-intl";
import dynamic from "next/dynamic";

// Types
import { FilterBtnsArr } from "@/types/components/filterBtns.types";
import { ProjectsArr } from "@/types/pages/project.types";

// Components
import PageLayout from "@/components/layout/pageLayout";

// Controllers
import { projectsArr } from "@/controllers/projects.controller";
const ProjectCard = dynamic(() => import("@components/card/projectCard"));

const Projects = () => {
  const messages: any = useMessages();
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

  const projectsDynamicArr: ProjectsArr[] = projectsArr.filter(
    (item: ProjectsArr) => {
      for (let i = 0; i < item.category.length; i++) {
        if (filterBtnSelected !== "all") {
          if (item.category[i].text.toLowerCase() === filterBtnSelected) {
            return item;
          }
        } else {
          return item;
        }
      }
    }
  );
  return (
    <PageLayout
      filterBtns={projectsFilter}
      filterBtnsSelected={filterBtnSelected}
      onFilter={handleFilter}
      pageTitle="projects"
    >
      <div className="w-full flex flex-col gap-10">
        {projectsDynamicArr.map((item: ProjectsArr, index: number) => (
          <ProjectCard item={item} index={index} key={index} />
        ))}
      </div>
    </PageLayout>
  );
};

export default Projects;
