import { ResumeCardDataType } from "@/types/types";
import { formatYearMonth } from "@/utils/utils";
import { Link01Icon } from "hugeicons-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ResumeCard = ({
  href,
  src,
  alt,
  title,
  type,
  sub_title,
  start_date,
  end_date,
}: ResumeCardDataType) => {
  const getTypeColor = () => {
    if (!type) {
      return null;
    }

    switch (type) {
      case "Freelance":
        return "text-blue-500";
      case "Contract":
        return "text-green-500";
      case "Full-time":
        return "text-purple-500";
      default:
        return null;
    }
  };
  return (
    <Link target="_blank" href={href} className="group flex mt-2 sm:first:mt-4">
      <div className="w-full flex items-center space-x-4">
        <Image
          src={src}
          alt={alt}
          width={120}
          height={120}
          className="w-14 h-14  rounded-full object-contain border border-neutral"
          priority
        />
        <div className="flex-1 flex items-start justify-between mt-1">
          <div className="flex flex-col">
            <h3 className="leading-5 mb-[2px] font-normal text-black">{title}</h3>
            <div className="flex items-center space-x-1">
              <p
                className="group-hover:underline text-xs text-foreground/80 leading-none transition-all"
                style={{ lineHeight: "18px" }}
              >
                {sub_title}
              </p>
              <span className="opacity-30 flex h-1 items-center">-</span>
              {type && <p className={`lowercase text-xs leading-none ${getTypeColor()}`}>{type}</p>}
            </div>
          </div>
          <div className="text-[10px] sm:text-xs min-w-max leading-5">
            <time dateTime={start_date}>{formatYearMonth(start_date)}</time> -{" "}
            <time dateTime={end_date}>
              {end_date === "present" ? "Present" : formatYearMonth(end_date)}
            </time>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ResumeCard;
