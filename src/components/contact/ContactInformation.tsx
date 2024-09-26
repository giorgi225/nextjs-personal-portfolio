"use client";
// Next
import { useMessages } from "next-intl";

// Components
import IconBase from "@components/icon/IconBase";

// Utils
import useClipboard from "@/utils/copy.utils";

// Controllers
import { SocialPlatformMenu } from "@/controllers/menu.controller";
import { Menu } from "@/types/components/navlist.types";
import { ContentCopyOutlined } from "@mui/icons-material";

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
    <div className="w-full flex flex-col mt-6 gap-3">
      <h5 className="font-mainBold text-md text-gray-900 dark:text-gray-200">
        {messages["contact"]}
      </h5>
      <div className="w-full flex flex-col gap-2 md:gap-6">

        <div className="w-full flex flex-col md:flex-row items-start gap-4 md:items-center justify-between pb-3 border-b border-dashed border-grayDark">
          <div className="flex flex-col gap-1">
            <p className="font-mainBold text-sm text-gray-900/80 dark:text-gray-200/80 leading-[20px]">
              {messages["email"]}
            </p>
            <p className="font-mainMedium text-xs text-gray-900/80 dark:text-gray-200/80 leading-[20px]">
              {process.env.NEXT_PUBLIC_EMAIL}
            </p>
          </div>

          <div className="flex items-center">
            <a
              href="mailto:gigi.shalamberidze2022@gmail.com"
              className="flex items-end gap-2 bg-transparent px-4 py-2 rounded-tl rounded-bl hover:bg-grayLight border border-r-0 border-grayLight2 active:scale-[0.98] transition-all"
            >
              <IconBase
                icon="fluent:compose-24-regular"
                className="w-5 h-5 text-gray-900/80 dark:text-gray-200/80"
              />
              <p className="font-mainMedium text-sm text-gray-900/80 dark:text-gray-200/80 leading-[20px]">
                {messages["compose"]}
              </p>
            </a>
            <div className="btn-copy clipboard">
              <button
                onClick={(e) => handleCopy("copyEmail", e)}
                className="btn-notCopy flex items-end gap-2 bg-transparent px-4 py-2 rounded-bt rounded-br hover:bg-grayLight border border-grayLight2 active:scale-[0.98] transition-all"
              >
                <IconBase
                  icon="solar:copy-linear"
                  className="copy-icon w-5 h-5 text-gray-900/80 dark:text-gray-200/80"
                />
                <p className="font-mainMedium text-sm text-gray-900/80 dark:text-gray-200/80 leading-[20px]">
                  {messages["copy"]}
                </p>
              </button>
              <button className="copied-btn flex items-end gap-2 bg-transparent px-4 py-2 rounded-bt rounded-br hover:bg-grayLight border border-grayLight2 active:scale-[0.98] transition-all">
                <IconBase
                  icon="ph:check"
                  className="check-icon w-5 h-5 text-gray-900/80 dark:text-gray-200/80"
                />
                <p className="font-mainMedium text-sm text-success leading-[20px]">
                  {messages["copied"]}
                </p>
              </button>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col md:flex-row items-start gap-4 md:items-center justify-between pb-3 border-b border-dashed border-grayDark">
          <div className="flex flex-col gap-1">
            <p className="font-mainBold text-sm text-gray-900/80 dark:text-gray-200/80 leading-[20px]">
              {messages["phone"]}
            </p>
            <p className="font-mainMedium text-xs text-gray-900/80 dark:text-gray-200/80 leading-[20px]">
            {process.env.NEXT_PUBLIC_PHONE}
            </p>
          </div>
          <div className="flex items-center">
            <a
              href="tel:+995574175188"
              className="flex items-end gap-2 bg-transparent px-4 py-2 rounded-tl rounded-bl hover:bg-grayLight border border-r-0 border-grayLight2 active:scale-[0.98] transition-all"
            >
              <IconBase
                icon="solar:phone-rounded-outline"
                className="w-5 h-5 text-gray-900/80 dark:text-gray-200/80"
              />
              <p className="font-mainMedium text-sm text-gray-900/80 dark:text-gray-200/80 leading-[20px]">
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
                  className="copy-icon w-5 h-5 text-gray-900/80 dark:text-gray-200/80"
                />
                <p className="font-mainMedium text-sm text-gray-900/80 dark:text-gray-200/80 leading-[20px]">
                  {messages["copy"]}
                </p>
              </button>
              <button className="copied-btn flex items-end gap-2 bg-transparent px-4 py-2 rounded-bt rounded-br hover:bg-grayLight border border-grayLight2 active:scale-[0.98] transition-all">
                <IconBase
                  icon="ph:check"
                  className="check-icon w-5 h-5 text-gray-900/80 dark:text-gray-200/80"
                />
                <p className="font-mainMedium text-sm text-success leading-[20px]">
                  {messages["copied"]}
                </p>
              </button>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col md:flex-row items-start gap-4 md:items-center justify-between pb-3 border-b border-dashed border-grayDark">
          <div className="flex flex-col gap-1">
            <p className="font-mainBold text-sm text-gray-900/80 dark:text-gray-200/80 leading-[20px]">
              {messages["get_in_touch"]}
            </p>
            <p className="font-mainMedium text-xs text-gray-900/80 dark:text-gray-200/80 leading-[20px]">
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
                  className="check-icon w-5 h-5 text-md text-gray-900/80 dark:text-gray-200/80"
                />
                <p className="hidden md:flex font-mainMedium text-sm text-gray-900/80 dark:text-gray-200/80 leading-[20px]">
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
