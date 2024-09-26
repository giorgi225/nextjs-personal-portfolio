"use client"
// Next
import { useMessages } from "next-intl";
// Typese
import { ResumeArr, ResumeItems } from "@/types/controllers/resume.types";
// Components
import PageLayout from "@/components/layout/pageLayout";
// Controllers
import { resumeArr, skillsArr } from "@/controllers/resume.controller";
import IconBase from "@/components/icon/IconBase";
import ContactInformation from "@/components/contact/ContactInformation";
import { useEffect, useState } from "react";

const Resume = () => {
  const [dynamicSkillsArr, setDynamicSkillsArr] = useState([]);
  const messages: any = useMessages();

  useEffect(() => {
    const calculateExperience = (startYear: string, startMonth: string) => {
      const startDate = new Date(parseInt(startYear), parseInt(startMonth) - 1);
      const currentDate = new Date();
      const diffInMonths = (currentDate.getMonth() - startDate.getMonth()) + 12 * (currentDate.getFullYear() - startDate.getFullYear());
    
      const experienceInYears = diffInMonths / 12;
      const formattedExperience = experienceInYears % 1 === 0 ? experienceInYears.toString() : experienceInYears.toFixed(1);
    
      return formattedExperience;
    };

    const updatedSkillsArr = skillsArr.map((item: any) => ({
      ...item,
      experienceYear: calculateExperience(item.startYear, item.startMonth),
    }));
    setDynamicSkillsArr(updatedSkillsArr);
  }, [skillsArr]);
  return (
    <PageLayout pageTitle="resume" pageIntroduction="resume_introduction">
      <div className="w-full flex flex-col gap-6">
        {resumeArr.map((items: ResumeArr, index: number) => (
          <div key={index} className="flex flex-col gap-3">
            <h5 className="font-mainMedium text-md text-black">
              {messages[items.mainTitle]}
            </h5>
            {items.items.map((item: ResumeItems, itemIndex: number) => (
              <div
                key={itemIndex}
                className="flex flex-col gap-4 w-full border border-dashed border-grayDark px-3 py-4 rounded"
              >
                <div className="flex flex-col gap-0">
                  <p className="font-mainBold text-lg text-gray-900/80 dark:text-gray-200/80 leading-7">
                    {messages[item.title]}
                  </p>
                  <div className="flex items-center gap-2">
                    <p className="font-mainMedium text-sm text-black leading-7">
                      {messages[item.text]}
                    </p>
                    <p className="font-mainMedium italic text-sm text-gray-900/80 dark:text-gray-200/80 leading-7">
                      {item.date}
                      {item.present ? "- " + messages["present"] : ""}
                    </p>
                  </div>
                </div>
                <p className="font-mainMedium text-sm text-gray-900/80 dark:text-gray-200/80 leading-7 pr-1">
                  {messages[item.description]}
                </p>
              </div>
            ))}
          </div>
        ))}

        <h5 className="font-mainMedium text-md text-black">
          {messages["skills"]}
        </h5>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {dynamicSkillsArr.map((item: any, index: number) => (
            <div key={index} className="p-4 flex flex-col items-center gap-1 bg-grayLight shadow-sm border-dashed  rounded-[4px]">
              <IconBase
                icon={item.icon}
                className="w-8 h-8"
              />
              <p className="text-black text-sm text-center font-mainBold">
                {item.title}
              </p>
              <p className="text-sm font-mainMedium text-gray-900 dark:text-gray-200 italic">{item.experienceYear} year</p>
            </div>
          ))}
        </div>
      </div>

      <ContactInformation />
    </PageLayout>
  );
};

export default Resume;
