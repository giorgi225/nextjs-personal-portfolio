// Types
import type { SidebarProps } from "@/types/components/sidebar.types";

// Controllers
import {
  ContactMenu,
  PagesMenu,
  SocialPlatformMenu,
} from "@/controllers/menu.controller";


// Components
import Logo from "@components/common/Logo";
import Nav from "@components/common/Nav";
import Copyright from "@components/common/Copyright";
import LanguageSelect from "@components/common/LangSelect";
import IconBase from "@components/icon/IconBase";
import { useMessages } from "next-intl";
import ThemeSwitcher from "./ThemeSwitcher";
import NavList from "./NavList";

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
              copyFun={true}
              closeSidebar={handleCloseSidebar}
            />

            <NavList
              title="social_platforms"
              menu={SocialPlatformMenu}
              hasLinks={true}
            />

            <NavList title="settings" customProp={true}>
              <ThemeSwitcher />

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
