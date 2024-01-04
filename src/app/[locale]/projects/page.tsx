// Components
import Projects from "@/components/pages/Projects";
import { projectsArr } from "@/controllers/projects.controller";

const page = () => {
  return <Projects projectsArr={projectsArr}/>;
};

export default page;
