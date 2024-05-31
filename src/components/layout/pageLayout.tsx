"use client";
// Next
import { useMessages } from "next-intl";
// Types
import {
  FilterBtnProps,
  FilterBtnsArr,
} from "@/types/components/filterBtns.types";
import FilterBtns from "@components/filter/FilterBtns";

const PageLayout = ({
  pageTitle,
  pageIntroduction,
  filterBtns,
  filterBtnsSelected,
  searchParamName,
  children,
}: {
  pageTitle: string;
  pageIntroduction?: string;
  filterBtns?: FilterBtnsArr[];
  searchParamName?: string;
  filterBtnsSelected?: FilterBtnsArr["val"];
  children: React.ReactNode;
}) => {
  const messages: any = useMessages();

  return (
    <div className="container-main  py-5 lg:py-20 scale-animation">
      <div className="w-full flex flex-col gap-6">
        <div className="w-full flex flex-col md:flex-row items-start md:items-center justify-between gap-10 md:gap-0">
          <h2 className="font-mainMedium text-2xl text-black">
            {messages[pageTitle]}
          </h2>
          {filterBtns && filterBtnsSelected && searchParamName && (
            <FilterBtns
              filterBtns={filterBtns}
              filterSelected={filterBtnsSelected}
              searchParamName={searchParamName}
            />
          )}
        </div>
        {pageIntroduction && (
          <p className="font-mainLight text-sm text-black leading-[20px]">
            {messages[pageIntroduction]}
          </p>
        )}
        {children}
      </div>
    </div>
  );
};

export default PageLayout;
