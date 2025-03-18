import { ProjectCardType } from "@/types/types";
import { Link01Icon } from "hugeicons-react";
import Image from "next/image";
import Link from "next/link";

const ProjectCard = ({
  title,
  href,
  linkText,
  skills,
  src,
  alt,
}: ProjectCardType) => {
  return (
    <Link href={href} target="_blank" className="group w-full grid sm:grid-cols-[1fr,auto] gap-3 py-8">
      <div className="order-2 sm:order-1 flex flex-col gap-4">
        <h4 className="font-primary text-font-main font-bold text-2xl">
          {title}
        </h4>

        <div  className="flex flex-col">
          <span className="font-primary text-font-secondary text-sm leading-5">
            Visit Website
          </span>
          <div className="flex items-center gap-1 group text-font-main hover:text-blue-500 transition-all">
            <span className="font-primary font-medium group-hover:underline">
              {linkText}
            </span>
            <Link01Icon className="w-4 h-4" />
          </div>
        </div>

        <div className="flex flex-col">
          <span className="font-primary text-font-secondary text-sm leading-5">
            Skills
          </span>
          <div className="flex items-center gap-x-2 gap-y-0 font-medium flex-wrap text-font-main">
            {skills.map((skill: string, index: number) => (
              <span key={index} className="">
                {skill}{index !== skills.length - 1 ? "," : "."}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="order-1 sm:order-2 relative w-full min-w-[320px] sm:h-[188px] rounded-3xl overflow-hidden">
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 624px) 600px, 600px"
          priority={false}
          loading="lazy"
          quality={100}
          className="object-cover sm:absolute !relative sm:object-contain h-auto sm:h-full group-hover:scale-105 transition-all"
        />
      </div>
    </Link>
  );
};

export default ProjectCard;
