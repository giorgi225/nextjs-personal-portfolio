"use client";
// Next
import { useMessages } from "next-intl";
// Types
import {
  FilterBtnProps,
  FilterBtnsArr,
} from "@/types/components/filterBtns.types";
import FilterBtns from "@components/filter/FilterBtns";
import { useState } from "react";

const PageLayout = ({
  pageTitle,
  pageIntroduction,
  filterBtns,
  filterBtnsSelected,
  onFilter,
  children,
}: {
  pageTitle: string;
  pageIntroduction?: string;
  filterBtns?: FilterBtnsArr[];
  onFilter?: FilterBtnProps["onFilter"];
  filterBtnsSelected?: FilterBtnsArr["val"];
  children: React.ReactNode;
}) => {
  const messages: any = useMessages();

  const handleFilter = (val: FilterBtnsArr["val"]) => {
    if (onFilter && filterBtns) {
      onFilter(val);
    }
    return val;
  };
  return (
    <div className="container-main  py-5 lg:py-20 scale-animation">
      <div className="w-full flex flex-col gap-6">
        <div className="w-full flex flex-col md:flex-row items-start md:items-center justify-between gap-10 md:gap-0">
          <h2 className="font-mainMedium text-2xl text-black">
            {messages[pageTitle]}
          </h2>
          {filterBtns && filterBtnsSelected && (
            <FilterBtns
              filterBtns={filterBtns}
              filterSelected={filterBtnsSelected}
              onFilter={handleFilter}
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
