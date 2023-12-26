"use client";
// Next
import { useState } from "react";

// Components
import Sidebar from "@components/common/Sidebar";

const Layout = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [sidebarIsActive, setSidebarIsActive] = useState(true);
  const closeSidebar = (): void => {
    // setSidebarIsActive((prevState) => !prevState);
  };
  return (
    <div className="relative w-full md:h-screen lg:p-3">
      <div className="relative w-full h-full flex flex-col-reverse md:flex-col lg:flex-row gap-3 pb-24 md:pb-0">
        <Sidebar isActive={sidebarIsActive} closeSidebar={closeSidebar} />
        <div className="w-full bg-white nav h-auto rounded overflow-auto no-scrollbar px-5 md:px-10 lg:px-20">
          {/* <Header :isActive="sidebarActive" @toggleSidebar="toggleSidebar" /> */}
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
