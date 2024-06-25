// Next
import Image from "next/image";
// Types
import { ProjectType } from "@/types/pages/project.types";
// Components
import IconBase from "../icon/IconBase";

type Props = {
  project: ProjectType;
  messages: any;
  index: number;
}

const ProjectCard = ({ project, index, messages }: Props) => {
  return (
    <div className="w-full flex flex-col gap-2">
      <div
        className={`group relative w-full h-[190px] sm:h-[360px] max-h-[360px] overflow-hidden projects-card rounded-[11px]`}
      >
        <HoverContent project={project} index={index} messages={messages} />

        <Image
          className={`rounded-[11px] object-cover group-hover:scale-[1.1] group-hover:blur-sm transition-all duration-500`}
          src={project.image}
          alt={project.title}
          quality={100}
          priority={index > 1 ? false : true}
          sizes="(max-width: 640px) 600px, (max-width: 2048px) 1500px"
          fill
        />
      </div>

      <div className="w-full flex flex-col gap-3 pt-2 pb-4 border-b-2 border-dashed border-grayLight2">
        <div className="w-full flex items-center justify-between gap-4">
          <h2 className="flex font-mainBold text-xl text-black">
            {messages[project.title]}
          </h2>
          <div className="flex items-center gap-2">
            {project.category.map(
              (
                categoryItem: ProjectType["category"][0],
                categoryIndex: number
              ) => (
                <div
                  key={categoryIndex}
                  className={`${
                    categoryItem.text === "coding"
                      ? "bg-orange text-[#000000]"
                      : categoryItem.text === "design"
                      ? "bg-success text-[#000000]"
                      : ""
                  } flex items-center gap-[6px] px-4 py-2 rounded`}
                >
                  <IconBase icon={categoryItem.icon} />
                  <p className="hidden md:flex">
                    {messages[categoryItem.text]}
                  </p>
                </div>
              )
            )}
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-[6px]">
          {project.skills.map(
            (skill: ProjectType["skills"][0], skillIndex: number) => (
              <div
                key={skillIndex}
                className="flex items-center py-[6px] px-2 pr-3 gap-[6px] bg-grayLight rounded-full"
              >
                <IconBase
                  icon={skill.programingLanguageIcon}
                  className="text-black w-5 h-5 rounded-full"
                />
                <p className="font-bold text-[12px] tracking-widest text-black">
                  {skill.programingLanguage}
                </p>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

const HoverContent = ({ project, messages }: Props)=> {
  return (
    <div className="group-hover:opacity-100 opacity-0 rounded-[11px] absolute left-0 top-0 flex justify-center items-center p-6 w-full h-full bg-overlay-50 transition-all z-[9]">
    <a
      href={project.link}
      target="_blank"
      className="bg-white h-max rounded-full px-4 py-2 flex items-center gap-[6px]"
    >
      <IconBase icon="ph:link-bold" className="text-xl text-black" />
      <p className="font-mainMedium text-md text-black">
        {messages["open_project"]}
      </p>
    </a>
  </div>
  )
}

export default ProjectCard;
