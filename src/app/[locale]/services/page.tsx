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
            className="flex flex-col gap-3 w-full px-3 py-4 border border-dashed border-grayDark rounded hover:bg-grayLight hover:cursor-help transition-all"
          >
            <div className="flex items-center gap-[6px]">
              <IconBase icon={item.icon} className="text-xl text-black" />
              <p className="font-mainLight text-sm text-black leading-[20px]">
                {messages[item.title]}
              </p>
            </div>
            <p className="font-mainLight text-sm text-black-80 leading-[20px]">
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
