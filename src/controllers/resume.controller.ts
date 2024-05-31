import { ResumeArr } from "@/types/controllers/resume.types";

export const resumeArr: ResumeArr[] = [
  {
    mainTitle: "education",
    items: [
      {
        title: "international_black_sea_university",
        text: "computer_science",
        date: "2022",
        present: true,
        description: "international_black_sea_university_description",
      },
      {
        title: "gimnazia_oqrosakvani",
        text: "primary_&_secondary_education",
        date: "2008 - 2020",
        description: "gimnazia_oqrosakvani_description",
      },
    ],
  },
  {
    mainTitle: "experience",
    items: [
      {
        title: "freelancer",
        text: "web_developer_&_web_designer",
        date: "2022",
        present: true,
        description: "freelancer_description",
      },
      {
        title: "viptrade",
        text: "frontend_developer",
        date: "2022 - 2023",
        description: "viptrade_description",
      },
    ],
  },
];

export const skillsArr: any = [
  {
    title: "Html",
    icon: "skill-icons:html",
    startYear: "2020",
    startMonth: "0" // jan
  },
  {
    title: "Css",
    icon: "skill-icons:css",
    startYear: "2020",
    startMonth: "0"
  },
  {
    title: "JavaScript",
    icon: "vscode-icons:file-type-js-official",
    startYear: "2020",
    startMonth: "5"
  },
  {
    title: "Tailwind Css",
    icon: "skill-icons:tailwindcss-dark",
    startYear: "2021",
    startMonth: "5"
  },
  {
    title: "Typescript",
    icon: "logos:typescript-icon",
    startYear: "2022",
    startMonth: "5"
  },
  {
    title: "React (Nextjs)",
    icon: "devicon:nextjs",
    startYear: "2022",
    startMonth: "5"
  },
  {
    title: "Figma",
    icon: "skill-icons:figma-dark",
    startYear: "2022",
    startMonth: "5"
  },
  {
    title: "NodeJs + Express",
    icon: "skill-icons:nodejs-dark",
    startYear: "2023",
    startMonth: "5"
  }
];
