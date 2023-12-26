import { ParagraphTypes } from "@/types/components/paragraph.types";
import React from "react";

const Paragraph = ({ title, paragraph }: ParagraphTypes) => {
  return (
    <div className="w-full flex flex-col gap-3">
      <h5 className="font-mainBold text-md text-black">{title}</h5>
      <p className="font-mainLight text-sm text-black-80 leading-[20px]">
        {paragraph}
      </p>
    </div>
  );
};

export default Paragraph;
