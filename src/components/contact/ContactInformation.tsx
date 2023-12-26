"use client";
// Next
import { useMessages } from "next-intl";

// Components
import IconBase from "@components/icon/IconBase";

// Utils
import useClipboard from "@/utils/copy.utils";

// Controllers
import Menu, { SocialPlatformMenu } from "@/controllers/menu.controller";

const ContactInformation = () => {
  const messages: any = useMessages();
  const handleCopy = (
    functionName: string,
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    let target: any = event?.target;
    let targetDiv = target.closest(".clipboard");

    useClipboard(functionName, targetDiv);
  };
  return (
    <div className="w-full flex flex-col gap-3">
      <h5 className="font-mainMedium text-md text-black">
        {messages["contact"]}
      </h5>
      <div className="w-full flex flex-col gap-2 md:gap-6">
        <div className="w-full flex flex-col md:flex-row items-start gap-4 md:items-center justify-between pb-3 border-b border-dashed border-grayDark">
          <div className="flex flex-col gap-1">
            <p className="font-mainMedium text-sm text-black leading-[20px]">
              {messages["email"]}
            </p>
            <p className="font-mainLight text-xs text-black-80 leading-[20px]">
              {process.env.NEXT_PUBLIC_EMAIL}
            </p>
          </div>
          <div className="flex items-center">
            <a
              href="mailto:gigi.shalamberidze2022@gmail.com"
              className="flex items-end gap-2 bg-transparent px-4 py-2 rounded-tl rounded-bl hover:bg-grayLight border border-r-0 border-grayLight2 active:scale-[0.98] transition-all"
            >
              <IconBase
                icon="fluent:compose-28-regular"
                className="text-md text-grayDark2"
              />
              <p className="font-mainLight text-sm text-black leading-[20px]">
                {messages["compose"]}
              </p>
            </a>
            <div className="btn-copy clipboard">
              <button
                onClick={(e) => handleCopy("copyEmail", e)}
                className="btn-notCopy flex items-end gap-2 bg-transparent px-4 py-2 rounded-bt rounded-br hover:bg-grayLight border border-grayLight2 active:scale-[0.98] transition-all"
              >
                <IconBase
                  icon="solar:copy-outline"
                  className="copy-icon text-md text-grayDark2"
                />
                <p className="font-mainLight text-sm text-black leading-[20px]">
                  {messages["copy"]}
                </p>
              </button>
              <button className="copied-btn flex items-end gap-2 bg-transparent px-4 py-2 rounded-bt rounded-br hover:bg-grayLight border border-grayLight2 active:scale-[0.98] transition-all">
                <IconBase
                  icon="ph:check"
                  className="check-icon text-md text-grayDark2"
                />
                <p className="font-mainLight text-sm text-success leading-[20px]">
                  {messages["copied"]}
                </p>
              </button>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col md:flex-row items-start gap-4 md:items-center justify-between pb-3 border-b border-dashed border-grayDark">
          <div className="flex flex-col gap-1">
            <p className="font-mainMedium text-sm text-black leading-[20px]">
              {messages["phone"]}
            </p>
            <p className="font-mainLight text-xs text-black-80 leading-[20px]">
            {process.env.NEXT_PUBLIC_PHONE}
            </p>
          </div>
          <div className="flex items-center">
            <a
              href="tel:+995574175188"
              className="flex items-end gap-2 bg-transparent px-4 py-2 rounded-tl rounded-bl hover:bg-grayLight border border-r-0 border-grayLight2 active:scale-[0.98] transition-all"
            >
              <IconBase
                icon="solar:phone-outline"
                className="text-md text-grayDark2"
              />
              <p className="font-mainLight text-sm text-black leading-[20px]">
                {messages["call"]}
              </p>
            </a>
            <div className="btn-copy clipboard">
              <button
                onClick={(e) => handleCopy("copyPhone", e)}
                className="btn-notCopy flex items-end gap-2 bg-transparent px-4 py-2 rounded-bt rounded-br hover:bg-grayLight border border-grayLight2 active:scale-[0.98] transition-all"
              >
                <IconBase
                  icon="solar:copy-outline"
                  className="copy-icon text-md text-grayDark2"
                />
                <p className="font-mainLight text-sm text-black leading-[20px]">
                  {messages["copy"]}
                </p>
              </button>
              <button className="copied-btn flex items-end gap-2 bg-transparent px-4 py-2 rounded-bt rounded-br hover:bg-grayLight border border-grayLight2 active:scale-[0.98] transition-all">
                <IconBase
                  icon="ph:check"
                  className="check-icon text-md text-grayDark2"
                />
                <p className="font-mainLight text-sm text-success leading-[20px]">
                  {messages["copied"]}
                </p>
              </button>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col md:flex-row items-start gap-4 md:items-center justify-between pb-3 border-b border-dashed border-grayDark">
          <div className="flex flex-col gap-1">
            <p className="font-mainMedium text-sm text-black leading-[20px]">
              {messages["get_in_touch"]}
            </p>
            <p className="font-mainLight text-xs text-black-80 leading-[20px]">
              {messages["social_platforms"]}
            </p>
          </div>
          <div className="flex items-center">
            {SocialPlatformMenu.map((item: Menu, index: number) => (
              <a
                href={item.link}
                key={index}
                className="copied-btn flex items-end gap-2 bg-transparent px-4 py-2 hover:bg-grayLight border border border-grayLight2 active:scale-[0.98] transition-all"
              >
                <IconBase
                  icon={item.icon}
                  className="check-icon text-md text-black"
                />
                <p className="hidden md:flex font-mainLight text-sm text-black leading-[20px]">
                  {item.text}
                </p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInformation;
