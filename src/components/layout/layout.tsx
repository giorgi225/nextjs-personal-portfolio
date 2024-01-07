// Next
import { useState } from "react";

// Components
import Sidebar from "@components/common/Sidebar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [sidebarIsActive, setSidebarIsActive] = useState(true);
  const closeSidebar = (): void => {
    setSidebarIsActive((prevState) => !prevState);
  };
  return (
    <>
      <Sidebar isActive={sidebarIsActive} closeSidebar={closeSidebar} />
      <div className="w-full bg-white nav h-auto rounded overflow-auto no-scrollbar px-5 md:px-10 lg:px-20">
        {/* <Header :isActive="sidebarActive" @toggleSidebar="toggleSidebar" /> */}
        {children}
      </div>
    </>
  );
};

export default Layout;
