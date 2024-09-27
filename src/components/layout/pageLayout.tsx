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
    <div className="container-main pt-5 pb-10 lg:py-20 scale-animation">
      <div className="w-full flex flex-col gap-2">
        <div className="w-full flex flex-row items-start md:items-center justify-between gap-2 md:gap-0">
          <h2 className="font-mainBold text-[24px] sm:text-2xl text-gray-900 dark:text-gray-200">
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
          <p className="font-mainMedium text-[13px] sm:text-sm text-gray-900/80 dark:text-gray-200/80 leading-5 sm:leading-7">
            {messages[pageIntroduction]}
          </p>
        )}
        {children}
      </div>
    </div>
  );
};

export default PageLayout;
