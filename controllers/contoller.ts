import { ProjectCardType, ResumeCardDataType, SkillType } from "@/types/types";

const experienceData: ResumeCardDataType[] = [
  {
    href: "https://freelancer.com/",
    src: "/freelancer.webp",
    alt: "Freelance",
    title: "Full-stack Developer",
    sub_title: "Freelancer.com",
    type: "Freelance",
    start_date: "2020-01",
    end_date: "present",
  },
  {
    href: "https://vitistravel.com/en",
    src: "/vitistravel.jpeg",
    alt: "Vitistravel.com",
    title: "Full-stack Developer",
    sub_title: "Vitistravel",
    type: "Contract",
    start_date: "2024-04",
    end_date: "2024-10",
  },
  {
    href: "https://imperialtours.ge/",
    src: "/imperialtours.png",
    alt: "Imperialtours.ge",
    title: "Full-stack Developer",
    sub_title: "Imperialtours",
    type: "Contract",
    start_date: "2024-01",
    end_date: "2024-04",
  },
  {
    href: "https://metrix.ge/",
    src: "/metrix.png",
    alt: "Metrix.ge",
    title: "Full-stack Developer",
    sub_title: "Metrix",
    type: "Contract",
    start_date: "2023-02",
    end_date: "2024-01",
  },
  {
    href: "https://viptrade.ge/en",
    src: "/viptrade.jpeg",
    alt: "VIPTrade",
    title: "Front-end Developer",
    sub_title: "VIPTrade",
    type: "Full-time",
    start_date: "2021-06",
    end_date: "2022-05",
  },
];
const educationData: ResumeCardDataType[] = [
  {
    href: "https://ibsu.edu.ge",
    src: "/ibsu.jpg",
    alt: "ibsu",
    title: "International Black Sea University",
    sub_title: "Bachelor of Science in Computer Science",
    start_date: "2020-09",
    end_date: "2024-08",
  },
];

const skillsData: SkillType[] = [
  {
    skill: "Frontend",
    skills: [
      "HTML",
      "CSS",
      "TailwindCSS",
      "JavaScript",
      "TypeScript",
      "React.js",
      "Next.js",
    ],
  },
  {
    skill: "Backend",
    skills: ["Node.js", "Express.js", "Next.js", "MySQL", "MongoDB", "Prisma"],
  },
  {
    skill: "General",
    skills: ["REST APIs", "GraphQL", "Responsive Design", "UI/UX Principles"],
  },
];

const projectsData: ProjectCardType[] = [
  {
    title: "Tours Website",
    src: "/projects/vitistravel.webp",
    alt: "vitistravel",
    href: "https://vitistravel.com",
    linkText: "vitistravel.com",
    skills: ["Next.js", "Express.js", "TailwindCss", "MySQL", "Prisma"],
  },
  {
    title: "Tours Website",
    src: "/projects/imperialtours.svg",
    alt: "imperialtours",
    href: "https://imperialtours.ge",
    linkText: "imperialtours.ge",
    skills: ["Next.js", "Express.js", "TailwindCss", "MySQL", "Prisma"],
  },
  {
    title: "Repair Company",
    src: "/projects/metrix.svg",
    alt: "metrix",
    href: "https://metrix.ge",
    linkText: "metrix.ge",
    skills: ["Next.js", "TailwindCss", "RestAPI"],
  },
  {
    title: "Service based Company",
    src: "/projects/serwish.svg",
    alt: "serwish",
    href: "https://serwish.ge",
    linkText: "serwish.ge",
    skills: ["react.js", "Laravel", "TailwindCss", "RestAPI"],
  },
];

const publicURL: string = "https://shalamberidze-giorgi.vercel.app";

const personalInfoController = {
  linkedinURL: "https://www.linkedin.com/in/gigi-shalamberidze-b47a27260/",
  facebookURL: "https://www.facebook.com/profile.php?id=100092546885517",
  githubURL: "https://github.com/giorgi225",
  phoneURL: "tel:+995574175188",
  emailURL: "mailto:gigi.shalamberidze2022@gmail.com"
};

export { experienceData, educationData, skillsData, projectsData, publicURL, personalInfoController };
