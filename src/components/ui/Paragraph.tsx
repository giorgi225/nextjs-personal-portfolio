import { ParagraphTypes } from "@/types/components/paragraph.types";
import React from "react";

const Paragraph = ({ title, paragraph }: ParagraphTypes) => {
  return (
    <div className="w-full flex flex-col sm:gap-2 mt-2 sm:mt-4">
      <h5 className="font-mainBold text-sm sm:text-md text-gray-900/80 dark:text-gray-200/80">{title}</h5>
      <p className="font-mainMedium text-[13px] sm:text-sm text-gray-900/80 dark:text-gray-200/80 leading-5 sm:leading-7">
        {paragraph}
      </p>
    </div>
  );
};

export default Paragraph;
