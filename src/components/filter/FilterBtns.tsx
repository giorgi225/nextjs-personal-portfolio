import {
  FilterBtnProps,
  FilterBtnsArr,
} from "@/types/components/filterBtns.types";
import React, { MouseEventHandler } from "react";
import IconBase from "../icon/IconBase";

const FilterBtns = ({ filterBtns, filterSelected, onFilter }: FilterBtnProps) => {
  const activeBtnClassname = (item: FilterBtnsArr) => {
    return filterSelected.toLowerCase() === item.val.toLowerCase()
      ? "!bg-black text-white"
      : "text-black";
  };
  const handleFilter = (val: FilterBtnsArr["val"]) => {
    const value: FilterBtnsArr["val"] = val.toLowerCase();
    onFilter(value)
  };
  return (
    <div className="flex items-center gap-[6px]">
      {filterBtns.map((item: FilterBtnsArr, index: number) => (
        <button
          onClick={(e) => handleFilter(item.val)}
          key={index}
          className={`${activeBtnClassname(
            item
          )} flex items-end gap-2 px-4 py-2 bg-grayLight hover:bg-grayLight2 rounded transition-all`}
        >
          {item.icon && <IconBase icon={item.icon} className="text-md" />}
          <p
            className={`${
              item.text === "all" ? "" : "hidden md:flex"
            } font-mainMedium text-xs leading-[20px]`}
          >
            {item.text}
          </p>
        </button>
      ))}
    </div>
  );
};

export default FilterBtns;
