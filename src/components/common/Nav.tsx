const Nav = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex h-[78px] md:h-auto md:border-t md:border-b border-grayLight2 md:py-3 w-full">
      <nav className="nav md:h-[calc(100vh-190px)] overflow-auto no-scrollbar px-2 lg:px-0 lg:!pr-2 flex md:flex-col w-full gap-4">
        {children}
      </nav>
    </div>
  );
};

export default Nav;
