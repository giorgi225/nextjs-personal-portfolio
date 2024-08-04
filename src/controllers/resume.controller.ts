import { ResumeArr } from "@/types/controllers/resume.types";

export const resumeArr: ResumeArr[] = [
  {
    mainTitle: "education",
    items: [
      {
        title: "international_black_sea_university",
        text: "computer_science",
        date: "2020",
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
        date: "2022jan",
        present: true,
        description: "freelancer_description",
      },
      {
        title: "imperial_tours_company",
        text: "web_designer",
        date: "2024 jan - 2024 aug",
        description: "imperialtours_description",
      },
      {
        title: "repair_company_metrix",
        text: "nextjs_developer",
        date: "2023 feb - 2023 oct",
        description: "repair_company_description",
      },
      {
        title: "viptrade",
        text: "frontend_developer",
        date: "2022 jan - 2023 jan",
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
    startMonth: "8" // jan
  },
  {
    title: "Css",
    icon: "skill-icons:css",
    startYear: "2020",
    startMonth: "8"
  },
  {
    title: "JavaScript",
    icon: "vscode-icons:file-type-js-official",
    startYear: "2021",
    startMonth: "0"
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
