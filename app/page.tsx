import BlogCard from "@/components/BlogCard";
import ProjectCard from "@/components/ProjectCard";
import ResumeCard from "@/components/ResumeCard";
import {
  blogsData,
  educationData,
  experienceData,
  personalInfoController,
  projectsData,
  publicURL,
  skillsData,
} from "@/controllers/contoller";
import {
  BlogCardType,
  ProjectCardType,
  ResumeCardDataType,
  SkillType,
} from "@/types/types";
import {
  Call02Icon,
  CallAdd02Icon,
  CallIcon,
  CallInternalIcon,
  CallRinging01Icon,
  DribbbleIcon,
  Facebook01Icon,
  Github01Icon,
  Linkedin01Icon,
  Mail01Icon,
} from "hugeicons-react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "React.js Developer | Next.js, React.js, Node.js, Express.js.",
  description:
    "I'm a React Developer with four years of frontend and two years of backend expertise, focusing on Html, Css, Javascript, and React.js/Next.js. Over the last two years, I've enhanced my React abilities by creating dynamic and high-performing web applications using technologies like Next.js and Node.js/Express.js.",
  keywords:
    "React Developer, Gigi Shalamberidze, React.js, Next.js, Node.js, Express.js, Web Developer Georgia, Frontend Developer, Backend Developer, Web Application Developer",
  openGraph: {
    url: `${publicURL}`,
    title: "React.js Developer | Next.js, React.js, Node.js, Express.js.",
    description:
      "I'm a React Developer with four years of frontend and two years of backend expertise, focusing on Html, Css, Javascript, and React.js/Next.js. Over the last two years, I've enhanced my React abilities by creating dynamic and high-performing web applications using technologies like Next.js and Node.js/Express.js.",
    images: publicURL + "/profile.jpeg",
  },
};

export default async function Home() {
  const { linkedinURL, facebookURL, githubURL, phoneURL, emailURL } =
    personalInfoController;
  return (
    <div className="container-main">
      <div className="w-full flex items-center justify-between">
        <div className="flex flex-col sm:space-y-1">
          <h1>Gigi Shalamberidze</h1>
          <p className="text-sm md:text-base">
            <strong>React.js Developer</strong> | Next.js, React.js, Node.js,
            Express.js.
          </p>
        </div>
        <Link
          href={linkedinURL}
          aria-label="shalamberidze-gigi's-linkedin-profile"
        >
          <Image
            src={`/profile.jpeg`}
            alt="profile-img"
            width={120}
            height={120}
            quality={100}
            priority
            className="min-w-16 min-h-16 w-16 h-16  rounded-full"
          />
        </Link>
      </div>
      <div className="border-y border-neutral h-12 sm:h-14">
        <div className="w-full h-full flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Link
              href={facebookURL}
              target="_blank"
              className="w-8 h-8 flex items-center justify-center text-foreground/90 duration-300 transition-all"
            >
              <Facebook01Icon strokeWidth={1.5} className="w-5 h-5" />
            </Link>
            <Link
              href={githubURL}
              target="_blank"
              className="w-8 h-8 flex items-center justify-center text-foreground/90 duration-300 transition-all"
            >
              <Github01Icon strokeWidth={1.5} className="w-5 h-5" />
            </Link>
            <Link
              href={linkedinURL}
              target="_blank"
              className="w-8 h-8 flex items-center justify-center text-foreground/90 duration-300 transition-all"
            >
              <Linkedin01Icon strokeWidth={1.5} className="w-5 h-5" />
            </Link>
          </div>
          <div className="flex items-center space-x-6">
            <Link
              href={phoneURL}
              className="flex items-center space-x-2 text-foreground/90 hover:underline transition-all"
            >
              <Call02Icon strokeWidth={1.5} className="w-5 h-5" />
              <p>Call Me</p>
            </Link>
            <Link
              href={emailURL}
              className="flex items-center space-x-2 text-foreground/90 hover:underline transition-all"
            >
              <Mail01Icon strokeWidth={1.5} className="w-5 h-5" />
              <p>Send mail</p>
            </Link>
          </div>
        </div>
      </div>
      <section id="about-me">
        <h2>About</h2>
        <p className=" hyphens-auto">
          I'm a React Developer with four years of frontend and two years of
          backend expertise, focusing on Html, Css, Javascript, and
          React.js/Next.js. Over the last two years, I've enhanced my React
          abilities by creating dynamic and high-performing web applications
          using technologies like Next.js and Node.js/Express.js.
        </p>
      </section>
      <section id="experience">
        <h2>Experience</h2>
        <div className="space-y-3">
          {experienceData.map((data: ResumeCardDataType, index: number) => (
            <ResumeCard key={index} {...data} />
          ))}
        </div>
      </section>
      <section id="education">
        <h2>Education</h2>
        <div className="space-y-2 divide-y divide-neutral">
          {educationData.map((data: ResumeCardDataType, index: number) => (
            <ResumeCard key={index} {...data} />
          ))}
        </div>
      </section>
      <section id="skills">
        <h2>Skills</h2>
        {skillsData.map((data: SkillType, index: number) => (
          <div key={index} className="mt-2 sm:mt-4 flex flex-col space-y-4">
            <div className="flex flex-col space-y-2">
              <h3>{data.skill}</h3>
              <div className="flex items-center gap-2 flex-wrap">
                {data.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="bg-neutral text-xs font-medium px-3 tracking-wide py-2 rounded-lg border border-transparent min-w-max hover:bg-transparent text-foreground hover:border-foreground cursor-default transition-all ease-linear"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </section>
      <section id="Projects" className="mt-12">
        <h2 className="text-4xl font-bold text-center">My Latest Works</h2>
        <p className="w-full max-w-xl text-center mx-auto mt-2 leading-5 text-foreground/80">
          I've worked on a variety of projects, from simple websites to complex
          web applications. Here are a few of my favorites.
        </p>
        {projectsData.map((data: ProjectCardType, index: number) => (
          <ProjectCard key={index} {...data} />
        ))}
      </section>
      <section id="my-blogs" className="mt-12">
        <h2 className="text-4xl font-bold text-center">My Blogs</h2>
        <p className="w-full max-w-xl text-center mx-auto mt-2 leading-5 text-foreground/80">
          I share valuable tips and insights on various topics. Check out my
          latest blog.
        </p>
        <div className="w-full grid co space-y-4 mt-2 sm:mt-8">
          {blogsData.map((data: BlogCardType, index: number) => (
            <BlogCard key={index} {...data} />
          ))}
        </div>
      </section>
    </div>
  );
}
