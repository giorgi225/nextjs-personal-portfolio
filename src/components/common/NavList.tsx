"use client";
// Next
import { useMessages } from "next-intl";
import { Link, usePathname } from "@/navigation";

// Types
import type { Menu, NavListProps } from "@/types/components/navlist.types";

// Components
import IconBase from "@components/icon/IconBase";
import useClipboard from "@/utils/copy.utils";

// !bg-white shadow-sm
const NavList = ({
  children,
  title,
  menu,
  hasRoutes,
  hasLinks,
  customProp,
  closeSidebar,
  copyFun,
}: NavListProps) => {
  const pathname: any = usePathname();
  const messages: any = useMessages();
  // Generate active classname based on current route
  const activeRouteClassname = (currentRoute: string) => {
    return pathname === currentRoute ? "bg-white text-teal-600 hover:opacity-90 shadow-sm" : "hover:bg-white active:opacity-70";
  };
  // Functions
  const openModal = () => {};
  const handleCopy = (
    functionName: string,
    event: React.MouseEvent<HTMLDivElement>
  ) => {
    let target: any = event?.target;
    let targetDiv = target.closest(".clipboard");
    if (copyFun) {
      useClipboard(functionName, targetDiv);
    }
  };

  return (
    <>
      <div className="w-full flex flex-col gap-2 min-w-max md:min-w-auto">
        <h6 className="hidden md:flex font-mainMedium text-xs dark:text-gray-300 tracking-[4%]">
          {messages[title]}
        </h6>
        {!customProp && menu ? (
          <ul className="w-full flex md:flex-col gap-2">
            {menu.map((item: Menu, index: number) => (
              <li className="w-full" key={index}>
                {hasRoutes && item.to && (
                  <Link
                    onClick={closeSidebar}
                    href={item.to}
                    className={`${activeRouteClassname(
                      item.to
                    )} route min-w-max md:min-w-auto flex flex-col md:flex-row items-center gap-2 w-full px-3 py-3 rounded-[12px] transition-all`}
                  >
                    <IconBase
                      icon={item.icon}
                      className="w-5 h-5 text-base"
                    />
                    <p className="font-mainMedium text-xs">
                      {messages[item.text]}
                    </p>
                  </Link>
                )}

                {item.openModal && (
                  <div
                    onClick={openModal}
                    className="min-w-max md:min-w-auto flex flex-col md:flex-row items-center gap-2 w-full px-3 py-3 rounded-[12px] cursor-pointer transition-all"
                  >
                    <IconBase
                      icon={item.icon}
                      className="w-5 h-5 text-base"
                    />
                    <p className="font-mainMedium text-xs">
                      {messages[item.text]}
                    </p>
                  </div>
                )}

                {item.secondIcon && item.copyFun && (
                  <div className="relative clipboard flex items-start md:items-center justify-between w-full px-3 py-3 rounded-[12px] transition-all">
                    <div className="min-w-max md:min-w-auto hidden md:flex flex-col md:flex-row items-center gap-2">
                      <IconBase
                        icon={item.icon}
                        className="w-5 h-5 text-base"
                      />
                      {item.text.replace(/\s+/g, "") ===
                      process.env.NEXT_PUBLIC_PHONE ? (
                        <a
                          className="hover:text-blue-500 group underline"
                          href={`tel:${process.env.NEXT_PUBLIC_PHONE}`}
                        >
                          <p className="font-mainMedium text-xs group-hover:text-blue-500 lowercase">
                            {item.text.length > 18
                              ? item.text.slice(0, 18) + "..."
                              : item.text}
                          </p>
                        </a>
                      ) : item.text.replace(/\s+/g, "") ===
                        process.env.NEXT_PUBLIC_EMAIL ? (
                        <a
                          className="hover:text-blue-500 group underline"
                          href={`mailto:${process.env.NEXT_PUBLIC_EMAIL}`}
                        >
                          <p className="font-mainMedium text-xs group-hover:text-blue-500 lowercase">
                            {item.text.length > 18
                              ? item.text.slice(0, 18) + "..."
                              : item.text}
                          </p>
                        </a>
                      ) : (
                        <></>
                      )}
                    </div>
                    <div className="min-w-max md:min-w-auto md:hidden flex flex-col md:flex-row items-center gap-2">
                      <IconBase
                        icon={item.icon}
                        className="w-5 h-5 text-base"
                      />
                      <p className="font-mainMedium text-xs lowercase">
                        {item.text.length > 9
                          ? item.text.slice(0, 9) + "..."
                          : item.text}
                      </p>
                    </div>
                    <div
                      onClick={(e) =>
                        handleCopy(item.copyFun ? item.copyFun : "", e)
                      }
                      className="absolute md:relative md:right-inherit flex items-center cursor-pointer group"
                    >
                      <IconBase
                        icon={item.secondIcon}
                        className="copy-icon text-grayDark text-base group-hover:transition-all"
                      />
                    </div>
                    <IconBase
                      icon="ph:check"
                      className="absolute md:relative md:right-inherit check-icon text-grayDark text-base group-hover:transition-all"
                    />
                  </div>
                )}

                {hasLinks && item.link && (
                  <a
                    href={item.link}
                    target="_blank"
                    className="min-w-max md:min-w-auto group flex items-start md:items-center justify-between w-full px-3 py-3 rounded-[12px] transition-all"
                  >
                    <div className="flex flex-col md:flex-row items-center gap-2">
                      <IconBase
                        icon={item.icon}
                        className="w-5 h-5 text-base"
                      />
                      <p className="font-mainMedium text-xs lowercase">
                        {item.text}
                      </p>
                    </div>
                    <IconBase
                      icon={item.secondIcon ? item.secondIcon : ""}
                      className="hidden md:flex text-grayDark text-base group-hover:transition-all"
                    />
                  </a>
                )}
              </li>
            ))}
          </ul>
        ) : (
          <div className="w-full flex flex-row md:flex-col min-w-max md:min-w-auto gap-2">
            {children}
          </div>
        )}
      </div>
    </>
  );
};

export default NavList;
