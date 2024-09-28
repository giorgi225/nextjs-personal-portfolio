// Components
import ContactInformation from "@/components/contact/ContactInformation";
import IconBase from "@/components/icon/IconBase";
import PageLayout from "@/components/layout/pageLayout";
import { servicesArr } from "@/controllers/services.controller";
import { ServicesArr } from "@/types/controllers/services.types";
import { useMessages } from "next-intl";

const Services = () => {
  const messages: any = useMessages();
  return (
    <PageLayout pageTitle="services" pageIntroduction="services_introduction">
      <div className="w-full flex flex-col gap-4">
        {servicesArr.map((item: ServicesArr, index: number) => (
          <div
            key={index}
            className="flex flex-col gap-1 sm:gap-3 w-full px-3 py-4 border border-dashed border-grayDark rounded hover:bg-grayLight hover:cursor-help transition-all"
          >
            <div className="flex items-center gap-[4px] sm:gap-[6px]">
              <IconBase icon={item.icon} className="w-7 h-7 text-gray-900 dark:text-gray-200" />
              <p className="font-mainBold text-sm sm:text-md text-gray-900/80 dark:text-gray-200/80 leading-7">
                {messages[item.title]}
              </p>
            </div>
            <p className="font-mainMedium text-[13px] sm:text-sm text-gray-900/80 dark:text-gray-200/80 leading-5 sm:eading-7">
              {messages[item.description]}
            </p>
          </div>
        ))}
      </div>
      <ContactInformation />
    </PageLayout>
  );
};

export default Services;
