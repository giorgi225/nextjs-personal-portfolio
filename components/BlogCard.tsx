import { BlogCardType } from "@/types/types";
import {
  ArrowRight01Icon,
  ArrowRight02Icon,
  ArrowRight03Icon,
  ArrowRight04Icon,
} from "hugeicons-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const BlogCard = ({ title, href, description, src, alt }: BlogCardType) => {
  return (
    <Link
      href={href}
      target="_blank"
      className="group flex flex-col bg-background border border-foreground/10 rounded-3xl overflow-hidden"
      aria-label={`vitis blot: ${title}`}
    >
      <div className="relative flex w-full min-h-[220px] sm:min-h-[320px] overflow-hidden">
        <Image className="rounded-t-lg object-cover group-hover:scale-105 duration-500" src={src} alt={alt} fill />
      </div>
      <div className="p-4 pt-2">
        <h4 className="font-primary text-font-main font-bold text-lg">
          {title}
        </h4>
        <p>{description}...</p>
        <Link
          target="_blank"
          className="flex items-center py-2 space-x-2 ml-auto w-max text-foreground group-hover:text-indigo-500 transition-all"
          href={href}
          aria-label={`vitis blot: ${title}`}
        >
          <span className="font-medium">Read more</span>
          <ArrowRight02Icon className="size-5" />
        </Link>
      </div>
    </Link>
  );
};

export default BlogCard;
