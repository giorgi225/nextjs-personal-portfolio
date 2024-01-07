"use client";
import { Icon as Iconify } from "@iconify/react";
// Types
import { IconProps } from "@/types/components/icon.types";

const IconBase = ({ icon="clarity:home-line", className="text-black" }: IconProps) => {
  return <Iconify icon={icon} className={className} width={16} height={16}/>;
};

export default IconBase;
