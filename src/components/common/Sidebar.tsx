// Next
import { useEffect, useState } from "react";

// Types
import type { SidebarProps } from "@/types/components/sidebar.types";

// Controllers
import {
  ContactMenu,
  PagesMenu,
  SocialPlatformMenu,
} from "@/controllers/menu.controller";

// Utils
import useClipboard from "@/utils/copy.utils";

// Components
import Logo from "@components/common/Logo";
import NavList from "@components/common/NavList";
import Nav from "@components/common/Nav";
import Copyright from "@components/common/Copyright";
import LanguageSelect from "@components/common/LangSelect";
import IconBase from "@components/icon/IconBase";
import { useMessages } from "next-intl";

const Sidebar = ({ isActive, closeSidebar }: SidebarProps) => {
  const messages: any = useMessages();
  const sidebarToggleClassname = () => {
    return isActive
      ? "md:fixed md:left-[0px] bg-grayLight shadow-xl"
      : "md:fixed md:left-[-100%]";
  };
  const handleCloseSidebar = () => {
    closeSidebar();
  };
  const openContactModal = () => {};
  const handleCopy = (functionName: string, targetDiv: HTMLDivElement) => {
    useClipboard(functionName, targetDiv);
  };

  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
  const handleThemeMode = () => {
    setIsDarkMode((prevIsDarkMode) => {
      const newIsDarkMode = !prevIsDarkMode;

      if (newIsDarkMode) {
        document.body.classList.add("dark");
        localStorage.setItem("dark", "dark");
      } else {
        document.body.classList.remove("dark");
        localStorage.removeItem("dark");
      }

      return newIsDarkMode;
    });
  };
  const toggleThemeMode = () => {
    if(localStorage.getItem("dark")) {
      setIsDarkMode(true)
      document.body.classList.add("dark");
    }else {
      setIsDarkMode(false)
      localStorage.removeItem("dark");
    }
  };
  useEffect(() => {
    toggleThemeMode();
  });

  return (
    <aside
      className={`${sidebarToggleClassname()} select-none z-[99999999] bottom-0 bg-grayLight overflow-auto w-full fixed pt-2 md:pt-0 h-max md:h-full lg:shadow-none lg:relative lg:left-0 md:min-w-[260px] md:max-w-[260px] px-3 md:p-2 pr-0 transition-all`}
    >
      <div className="w-full h-full flex flex-col items-start justify-between">
        <div className="flex flex-col items-start gap-4 w-full">
          <Logo />
          <Nav>
            <NavList
              title="pages"
              menu={PagesMenu}
              hasRoutes={true}
              closeSidebar={handleCloseSidebar}
            />
            <NavList
              title="get_in_touch"
              menu={ContactMenu}
              openContactModal={openContactModal}
              copyFun={handleCopy}
              closeSidebar={handleCloseSidebar}
            />
            <NavList
              title="social_platforms"
              menu={SocialPlatformMenu}
              hasLinks={true}
            />

            <NavList title="settings" customProp={true}>
              <div className="group flex items-center justify-between w-full px-2 py-2 rounded hover:bg-grayLight2 transition-all">
                <div className="flex flex-col md:flex-row items-center gap-2">
                  <IconBase
                    icon="solar:moon-linear"
                    className="text-black text-base"
                  />
                  <p className="min-w-max md:min-w-auto font-mainMedium text-xs text-black">
                    {messages["dark_mode"]}
                  </p>
                </div>
                <label className="relative flex items-center ml-4 md:ml-0 p-0.5 w-[39px] h-[20px] rounded-full bg-grayLight2 cursor-pointer group-hover:bg-white transition-all">
                  <input
                    type="checkbox"
                    onChange={handleThemeMode}
                    value="themeMode"
                    checked={isDarkMode}
                    className="peer sr-only"
                  />
                  <div className="w-[15px] h-[15px] rounded-full bg-grayDark peer-checked:translate-x-[20px] transition-all"></div>
                </label>
              </div>

              <div className="group flex flex-col md:flex-row items-center justify-between w-full px-2 py-2 rounded hover:bg-grayLight2 transition-all">
                <div className="flex items-center gap-2">
                  <IconBase icon="et:global" className="text-black text-base" />
                  <p className="hidden md:flex font-mainMedium text-xs text-black">
                    {messages["language"]}
                  </p>
                </div>
                <LanguageSelect messages={messages} />
              </div>
            </NavList>
          </Nav>
        </div>
        <Copyright />
      </div>
    </aside>
  );
};

export default Sidebar;
