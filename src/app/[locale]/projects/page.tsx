import { getMessages } from "next-intl/server";

// Types
import { FilterBtnsArr } from "@/types/components/filterBtns.types";
import { ProjectType } from "@/types/pages/project.types";

// Components
import PageLayout from "@components/layout/pageLayout";
import ProjectCard from "@components/card/projectCard";

// Projects JSON
import ProjectsJson from '@/projectsData.json';

type Props = {
  searchParams: {
    filterBy: 'all' | 'coding' | 'design' | undefined
  }
}

export default async function Page({searchParams}: Props) {
  const { filterBy } = searchParams;

  const messages: any = await getMessages();
  const projects: ProjectType[] = ProjectsJson;

  
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
  
  const filterByIsCorrect = filterBy && ['all', 'coding', 'design'].includes(filterBy.toLowerCase());
  const selectedFilter: FilterBtnsArr['val'] = filterByIsCorrect ? filterBy : projectsFilter[1].val;

  const filteredProjects: ProjectType[] = selectedFilter === "all" 
  ? projects 
  : projects.filter((project) => 
      project.category.some((category) => category.text === selectedFilter)
    );
  

  return (
    <PageLayout
      pageTitle="projects"
      // for filter
      filterBtns={projectsFilter}
      filterBtnsSelected={selectedFilter}
      searchParamName="filterBy"
    >
      <div className="w-full flex flex-col gap-10">
        {filteredProjects.map((project: ProjectType, index: number) => (
          <ProjectCard key={index} project={project} messages={messages} index={index} />
        ))}
      </div>
    </PageLayout>
  )
}

