"use client";
// Next
import { useState } from "react";
import { useMessages } from "next-intl";

// Types
import { FilterBtnsArr } from "@/types/components/filterBtns.types";
import { ProjectsArr } from "@/types/pages/project.types";

// Components
import PageLayout from "@components/layout/pageLayout";
import ProjectCard from "@components/card/projectCard";

// Controllers
// import ProjectCard from "@components/card/projectCard";
const Projects = ({ projectsArr }: {projectsArr: ProjectsArr[] | undefined}) => {
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
