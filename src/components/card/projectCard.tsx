// Next
import React, { useCallback, useState } from "react";
import { useMessages } from "next-intl";
import Image from "next/image";
// Types
import { ProjectsArr } from "@/types/pages/project.types";
// Components
import IconBase from "../icon/IconBase";
import Loader from "../loader";
const ProjectCard = React.memo(
  ({ item, index }: { item: any; index: number }) => {
    const messages: any = useMessages();
    const [loading, setLoading] = useState(true);

    const handleLoad = useCallback(() => {
      setLoading(false);
    }, []);
    return (
      <div className="w-full flex flex-col gap-2">
        <div
          className={`relative w-full group overflow-hidden projects-card rounded-[11px]`}
        >
          {loading && <Loader />}

          <div
            className={` ${
              loading ? "hidden" : ""
            } group-hover:opacity-100 opacity-0 rounded-[11px] absolute left-0 top-0 flex justify-center items-center p-6 w-full h-full bg-overlay-50 transition-all z-[9]`}
          >
            <a
              href={item.link}
              target="_blank"
              className="bg-white h-max rounded-full px-4 py-2 flex items-center gap-[6px]"
            >
              <IconBase icon="ph:link-bold" className="text-xl text-black" />
              <p className="font-mainMedium text-md text-black">
                {messages["open_project"]}
              </p>
            </a>
          </div>

          <Image
            onLoad={handleLoad}
            width={200}
            height={200}
            quality={100}
            className={`w-full rounded-[11px] group-hover:scale-[1.1] group-hover:blur-sm transition-all duration-500`}
            src={item.image}
            alt={item.title}
            priority={true}
          />
        </div>
        <div className="w-full flex flex-col gap-3 pt-2 pb-4 border-b-2 border-dashed border-grayLight2">
          <div className="w-full flex items-center justify-between gap-4">
            <p className="flex font-mainBold text-xl md:text-2xl text-black">
              {messages[item.title]}
            </p>
            <div className="flex items-center gap-2">
              {item.category.map(
                (
                  categoryItem: ProjectsArr["category"][0],
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
            {item.skills.map(
              (skill: ProjectsArr["skills"][0], skillIndex: number) => (
                <div
                  key={skillIndex}
                  className="flex items-center py-[6px] px-4 gap-[6px] bg-grayLight rounded-full"
                >
                  <IconBase
                    icon={skill.programingLanguageIcon}
                    className="text-black"
                  />
                  <p className="font-mainLight text-xs md:text-sm text-black">
                    {skill.programingLanguage}
                  </p>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    );
  }
);

export default ProjectCard;
