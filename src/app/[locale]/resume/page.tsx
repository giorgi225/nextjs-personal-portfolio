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

const Resume = () => {
  const messages: any = useMessages();
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
                v-for="(item, itemIndex) in items.items"
                key={itemIndex}
                className="flex flex-col gap-4 w-full border border-dashed border-grayDark px-3 py-4 rounded"
              >
                <div className="flex flex-col gap-1">
                  <p className="font-mainBold text-lg text-black-80 leading-[20px]">
                    {messages[item.title]}
                  </p>
                  <div className="flex items-center gap-2">
                    <p className="font-mainLight text-sm text-black leading-[20px]">
                      {messages[item.text]}
                    </p>
                    <p className="font-mainLight italic text-sm text-black-80 leading-[20px]">
                      {item.date}
                      {item.present ? "- " + messages["present"] : ""}
                    </p>
                  </div>
                </div>
                <p className="font-mainLight text-sm text-black-80 leading-[20px] pr-1">
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
          {skillsArr.map((item: any, index: number) => (
            <div className="p-4 flex flex-col items-center gap-1 bg-grayLight shadow-sm border-dashed  rounded-[4px]">
              <IconBase
                icon={item.icon}
                className="text-black text-3xl rounded-[4px] p-2 border border-grayLight"
              />
              <p className="text-black text-sm text-center font-mainMedium">{item.title}</p>
            </div>
          ))}
        </div>
      </div>

      <ContactInformation />
    </PageLayout>
  );
};

export default Resume;
