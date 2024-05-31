"use client";
// Next
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

// Components
import Sidebar from "@components/common/Sidebar";
import Loader from "@components/loader";
import Header from "@components/common/Header";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const [sidebarIsActive, setSidebarIsActive] = useState(true);
  const [loading, setLoading] = useState(true);
  const closeSidebar = (): void => {
    setSidebarIsActive((prevState) => !prevState);
  };
  useEffect(() => {
    setLoading(true);
    const delay = setTimeout(() => {
      setLoading(false);
    }, 300);
    return () => clearTimeout(delay);
  }, [pathname]);
  return (
    <>
      <Sidebar isActive={sidebarIsActive} closeSidebar={closeSidebar} />
      <div className="relative w-full bg-white nav h-auto rounded overflow-auto no-scrollbar px-5 md:px-10 lg:px-20">
        <Header isActive={sidebarIsActive} onToggleSidebar={closeSidebar} />
        {children}
        {loading && (
          <Loader className="!h-screen absolute bg-white top-0 left-0 w-full z-[9999] rounded-none backdrop-blur-lg" />
        )}
      </div>
    </>
  );
};

export default Layout;
