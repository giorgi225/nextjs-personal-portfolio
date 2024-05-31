"use client";

import { useCallback } from "react";
import Logo from "./Logo";
import IconBase from "../icon/IconBase";
import { Link } from "@/navigation";
import { Route } from "@/enums/routes.enum";
import Image from "next/image";

type Props = {
  isActive: boolean;
  onToggleSidebar: () => void;
};

const Header = ({ isActive, onToggleSidebar }: Props) => {
  const handleToggleSidebar = useCallback(() => {
    onToggleSidebar();
  }, [onToggleSidebar]);

  return (
    <div className="hidden md:flex lg:hidden w-full container__main py-4 sticky top-0 bg-white z-50 border-b border-dashed">
      <div className="w-full flex items-center justify-between">
        <Link className="flex w-full max-w-[77px]" href={Route.HOME}>
          <Image
            src="/images/Logo.svg"
            className="w-full toggle-image"
            width={100}
            height={50}
            alt="Logo"
          />
        </Link>
        <div onClick={handleToggleSidebar} className="cursor-pointer">
            <IconBase
              icon={isActive ? "gg:menu-right-alt" : "iconamoon:close-fill"}
              className="text-black-80 hover:text-black w-8 h-8 transition-all active:scale-95"
            />
        </div>
      </div>
    </div>
  );
};

export default Header;
