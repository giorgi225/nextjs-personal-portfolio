import React from "react";

export type Menu = {
  text: string;
  icon: string;
  to?: string; // for localRouting
  link?: string; // for Outside links
  openModal?: string;
  secondIcon?: string;
  copyFun?: string;
};

export type NavListProps = {
  children?: React.ReactNode;
  title: string;
  menu?: Menu[];
  hasRoutes?: boolean; // for local routing
  hasLinks?: boolean; // redirecting outside
  customProp?: boolean;
  closeSidebar?: () => void;
  openContactModal?: () => void;
  copyFun?: boolean;
};
