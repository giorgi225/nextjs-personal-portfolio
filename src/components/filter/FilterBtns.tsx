import {
  FilterBtnProps,
  FilterBtnsArr,
} from "@/types/components/filterBtns.types";
import React, { MouseEventHandler, useState } from "react";
import IconBase from "../icon/IconBase";
import { useSearchParams } from "next/navigation";
import { usePathname, useRouter } from "@/navigation";

const FilterBtns = ({ filterBtns, filterSelected, searchParamName }: FilterBtnProps) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  // for fast iteraction
  const [active, setActive] = useState(filterSelected)

  const activeBtnClassname = (item: FilterBtnsArr) => {
    return active === item.val.toLowerCase()
      ? "!bg-black text-white"
      : "text-black";
  };

  const handleFilter = (val: FilterBtnsArr["val"]) => {
    setActive(val)
    const newSearchParams = new URLSearchParams(searchParams.toString());
    newSearchParams.set(searchParamName, val.toLowerCase())
    router.push(pathname + '?' + newSearchParams.toString(), {scroll: false})

  };
  return (
    <div className="flex items-center gap-[6px]">
      {filterBtns.map((item: FilterBtnsArr, index: number) => (
        <button
          onClick={(e) => handleFilter(item.val)}
          key={index}
          className={`${activeBtnClassname(
            item
          )} flex items-center justify-center gap-2 px-[10px] sm:px-4 h-[34px] py-2 bg-grayLight hover:bg-grayLight2 rounded-[4px] transition-all`}
        >
          {item.icon && <IconBase icon={item.icon} className="w-4 h-4" />}
          <p
            className={`${
              index === 0 || active === item.val.toLowerCase() ? "" : "hidden md:flex"
            } font-mainMedium text-[13px] sm:text-xs leading-[20px]`}
          >
            {item.text}
  
          </p>
        </button>
      ))}
    </div>
  );
};

export default FilterBtns;
